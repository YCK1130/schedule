import type { Interviewee, Interviewer, Room, ScheduledInterview } from '../types';

/**
 * Schedules interviews based on availability of interviewers, interviewees, and rooms
 */
export function scheduleInterviews(
  interviewers: Interviewer[],
  interviewees: Interviewee[],
  rooms: Room[]
): ScheduledInterview[] {
  const scheduledInterviews: ScheduledInterview[] = [];
  
  // Make deep copies to avoid modifying originals
  const availableInterviewers = JSON.parse(JSON.stringify(interviewers));
  const availableInterviewees = JSON.parse(JSON.stringify(interviewees));
  const availableRooms = JSON.parse(JSON.stringify(rooms));
  
  // For each interviewee
  for (const interviewee of availableInterviewees) {
    // Find matching time slots
    for (const intervieweeSlot of interviewee.availability) {
      // Find an available interviewer
      const availableInterviewer: Interviewer | undefined = availableInterviewers.find((interviewer: Interviewer): boolean => 
        interviewer.availability?.split(',').some((slot: string): boolean => slot === intervieweeSlot)
      );
      
      if (!availableInterviewer) continue;
      
      // Find an available room
      const availableRoom: Room | undefined = availableRooms.find((room: Room): boolean => 
        room.availability?.split(',').some((slot: string): boolean => slot === intervieweeSlot)
      );
      
      if (!availableRoom) continue;
      
      // Schedule the interview
      const [startTime, endTime] = intervieweeSlot.split('/');
      scheduledInterviews.push({
        interviewerId: availableInterviewer.id,
        interviewerName: availableInterviewer.name,
        intervieweeId: interviewee.id,
        intervieweeName: interviewee.name,
        roomId: availableRoom.id,
        roomName: availableRoom.name,
        startTime,
        endTime
      });
      
      // Remove the booked slot from availability
      availableInterviewer.availability = availableInterviewer.availability?.split(',').filter(
        slot => slot !== intervieweeSlot
      ).join(',');
      availableRoom.availability = availableRoom.availability?.split(',').filter(
        slot => slot !== intervieweeSlot
      ).join(',');
      
      // Move to next interviewee once scheduled
      break;
    }
  }
  
  return scheduledInterviews;
}

/**
 * Parse raw CSV data into typed objects
 */
export function parseInterviewers(data: any[]): Interviewer[] {
  return data.map(row => ({
    id: row.id?.toString() || String(Math.random()).slice(2, 10),
    name: row.name,
    email: row.email,
    availability: parseAvailability(row.availability).join(','),
    specialization: row.specialization
  }));
}

export function parseInterviewees(data: any[]): Interviewee[] {
  return data.map(row => ({
    id: row.id?.toString() || String(Math.random()).slice(2, 10),
    name: row.name,
    email: row.email,
    positionApplied: row.positionApplied || row.position,
    availability: parseAvailability(row.availability).join(',')
  }));
}

export function parseRooms(data: any[]): Room[] {
  return data.map(row => ({
    id: row.id?.toString() || String(Math.random()).slice(2, 10),
    name: row.name,
    capacity: parseInt(row.capacity) || 2,
    availability: parseAvailability(row.availability).join(',')
  }));
}

/**
 * Helper to parse availability from CSV format to array
 * Expects format like "2025-05-10T09:00/2025-05-10T10:00,2025-05-10T14:00/2025-05-10T15:00"
 */
function parseAvailability(availabilityStr: string | string[]): string[] {
  if (!availabilityStr) return [];
  
  // 處理 CSV 中的多個時間區段
  if (typeof availabilityStr === 'string') {
    return availabilityStr.split(',')
      .map(slot => slot.trim())
      .filter(slot => slot.includes('/')); // 確保時間格式正確
  }
  
  // 如果已經是陣列格式，確保每個元素都是字串
  if (Array.isArray(availabilityStr)) {
    return availabilityStr
      .filter((slot): slot is string => typeof slot === 'string')
      .map(slot => slot.trim())
      .filter(slot => slot.includes('/'));
  }

  return [];
}