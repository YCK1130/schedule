import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AvailabilityCalendar from '../components/Calendar/AvailabilityCalendar';
import { ResultsDisplay } from '../components/ResultsDisplay';
import FileUploader from '../components/Upload/FileUploader';
import { useScheduling } from '../contexts/SchedulingContext';

const SchedulingContainer: React.FC = () => {
  const { 
    dataLoaded, 
    scheduledInterviews,
    generateSchedule
  } = useScheduling();

  const allDataLoaded = dataLoaded.interviewers && dataLoaded.interviewees;

  return (
    <Container className="py-2">
      <Row>
          <FileUploader />
      </Row>
      <Row>
      {allDataLoaded && (
        <Row>
          <Col className="text-end">
            <button 
              className="continue-btn"
              onClick={generateSchedule}
            >
              {scheduledInterviews.length > 0 ? "重新配對 🔄" : "開始配對 ▶"}
            </button>
          </Col>
        </Row>
      )}
        <Col>
          <AvailabilityCalendar/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ResultsDisplay />
        </Col>
      </Row>
    </Container>
  );
};

export default SchedulingContainer;