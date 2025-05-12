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
        interviewer.availability.some((slot: string): boolean => slot === intervieweeSlot)
      );
      
      if (!availableInterviewer) continue;
      
      // Find an available room
      const availableRoom: Room | undefined = availableRooms.find((room: Room): boolean => 
        room.availability.some((slot: string): boolean => slot === intervieweeSlot)
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
      availableInterviewer.availability = availableInterviewer.availability.filter(
        slot => slot !== intervieweeSlot
      );
      availableRoom.availability = availableRoom.availability.filter(
        slot => slot !== intervieweeSlot
      );
      
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
    id: row.id || String(Math.random()).slice(2, 10),
    name: row.name,
    email: row.email,
    availability: parseAvailability(row.availability),
    specialization: row.specialization
  }));
}

export function parseInterviewees(data: any[]): Interviewee[] {
  return data.map(row => ({
    id: row.id || String(Math.random()).slice(2, 10),
    name: row.name,
    email: row.email,
    positionApplied: row.positionApplied || row.position,
    availability: parseAvailability(row.availability)
  }));
}

export function parseRooms(data: any[]): Room[] {
  return data.map(row => ({
    id: row.id || String(Math.random()).slice(2, 10),
    name: row.name,
    capacity: parseInt(row.capacity) || 2,
    availability: parseAvailability(row.availability)
  }));
}

/**
 * Helper to parse availability from CSV format to array
 * Expects format like "2025-05-10T09:00/2025-05-10T10:00,2025-05-10T14:00/2025-05-10T15:00"
 */
function parseAvailability(availabilityStr: string): string[] {
  if (!availabilityStr) return [];
  return availabilityStr.split(',').map(slot => slot.trim());
}