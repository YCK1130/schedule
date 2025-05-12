import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import CalendarView from './components/CalendarView';
import FileUploader from './components/FileUploader';
import ResultsDisplay from './components/ResultsDisplay';
import StatusDisplay from './components/StatusDisplay';
import type { Interviewee, Interviewer, Room, ScheduledInterview } from './types';
import { parseInterviewees, parseInterviewers, parseRooms, scheduleInterviews } from './utils/schedulerUtils';

function App() {
  const [interviewers, setInterviewers] = useState<Interviewer[]>([]);
  const [interviewees, setInterviewees] = useState<Interviewee[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [scheduledInterviews, setScheduledInterviews] = useState<ScheduledInterview[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [dataLoaded, setDataLoaded] = useState({
    interviewers: false,
    interviewees: false,
    rooms: false
  });
  const [currentTab, setCurrentTab] = useState('upload');

  useEffect(() => {
    // If all three data sets are loaded, run the scheduling algorithm
    if (dataLoaded.interviewers && dataLoaded.interviewees && dataLoaded.rooms) {
      setIsProcessing(true);
      
      // Use setTimeout to allow UI to update first
      setTimeout(() => {
        const result = scheduleInterviews(interviewers, interviewees, rooms);
        setScheduledInterviews(result);
        setIsProcessing(false);
      }, 10);
    }
  }, [dataLoaded, interviewers, interviewees, rooms]);

  const handleInterviewersLoaded = (data: any[]) => {
    const parsedData = parseInterviewers(data);
    setInterviewers(parsedData);
    setDataLoaded(prev => ({ ...prev, interviewers: true }));
  };

  const handleIntervieweesLoaded = (data: any[]) => {
    const parsedData = parseInterviewees(data);
    setInterviewees(parsedData);
    setDataLoaded(prev => ({ ...prev, interviewees: true }));
  };

  const handleRoomsLoaded = (data: any[]) => {
    const parsedData = parseRooms(data);
    setRooms(parsedData);
    setDataLoaded(prev => ({ ...prev, rooms: true }));
  };

  return (
    <Container className="py-5">
      {currentTab === 'upload' ? (
        <>
          <Row className="mb-4">
            {/* ...existing header code... */}
          </Row>

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
            <Col className="d-flex justify-content-end mt-4">
              <Button 
                variant="primary"
                size="lg"
                disabled={!dataLoaded.interviewers || !dataLoaded.interviewees || !dataLoaded.rooms}
                onClick={() => setCurrentTab('results')}
                className="continue-btn"
              >
                Continue to Results
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row className="mb-4">
            <Col>
              <Button 
                variant="outline-primary" 
                onClick={() => setCurrentTab('upload')}
                className="mb-4"
              >
                ← Back to Upload
              </Button>
              {isProcessing ? (
                <Alert variant="info">處理中...</Alert>
              ) : (
                <ResultsDisplay scheduledInterviews={scheduledInterviews} />
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <CalendarView scheduledInterviews={scheduledInterviews} />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mx-auto">
              <StatusDisplay
                interviewers={interviewers}
                interviewees={interviewees}
                rooms={rooms}
                dataLoaded={dataLoaded}
              />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default App;