import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AvailabilityCalendar from '../components/Calendar/AvailabilityCalendar';
import FileUploader from '../components/Upload/FileUploader';
import { useScheduling } from '../contexts/SchedulingContext';

const SchedulingContainer: React.FC = () => {
  const { 
    dataLoaded, 
    scheduledInterviews,
    setInterviewers,
    setInterviewees,
    generateSchedule
  } = useScheduling();

  const allDataLoaded = dataLoaded.interviewers && dataLoaded.interviewees;

  return (
    <Container className="py-2">
      <Row>
        <Col>
          <FileUploader
            onInterviewersLoaded={setInterviewers}
            onIntervieweesLoaded={setInterviewees}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <AvailabilityCalendar/>
        </Col>
      </Row>
      {allDataLoaded && !scheduledInterviews.length && (
        <Row>
          <Col className="text-end">
            <button 
              className="continue-btn"
              onClick={generateSchedule}
            >
              開始配對 ▶
            </button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default SchedulingContainer;