import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AvailabilityCalendar from '../components/Calendar/AvailabilityCalendar';
import FileUploader from '../components/Upload/FileUploader';
import type { Interviewee, Interviewer, Room } from '../types';

const SchedulingContainer: React.FC = () => {
  const [interviewers, setInterviewers] = useState<Interviewer[]>([]);
  const [interviewees, setInterviewees] = useState<Interviewee[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  
  const handleInterviewersLoaded = (data: any[]) => {
    setInterviewers(data);
  };

  const handleIntervieweesLoaded = (data: any[]) => {
    setInterviewees(data);
  };

  const handleRoomsLoaded = (data: any[]) => {
    setRooms(data);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <FileUploader
            onInterviewersLoaded={handleInterviewersLoaded}
            onIntervieweesLoaded={handleIntervieweesLoaded}
            onRoomsLoaded={handleRoomsLoaded}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <AvailabilityCalendar
            interviewers={interviewers}
            interviewees={interviewees}
            rooms={rooms}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulingContainer;