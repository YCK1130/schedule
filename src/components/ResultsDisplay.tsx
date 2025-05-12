import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import type { ScheduledInterview } from '../types';

interface ResultsDisplayProps {
  scheduledInterviews: ScheduledInterview[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ scheduledInterviews }) => {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleString();
  };

  const exportToCsv = () => {
    if (scheduledInterviews.length === 0) return;
    
    const csvContent = Papa.unparse(scheduledInterviews);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'interview_schedule.csv');
  };

  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Scheduled Interviews ({scheduledInterviews.length})</h5>
        {scheduledInterviews.length > 0 && (
          <Button variant="primary" size="sm" onClick={exportToCsv}>
            Export to CSV
          </Button>
        )}
      </Card.Header>
      <Card.Body>
        {scheduledInterviews.length === 0 ? (
          <p className="text-center text-muted">
            No interviews scheduled yet. Upload all three CSV files to generate a schedule.
          </p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Interviewee</th>
                <th>Interviewer</th>
                <th>Room</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {scheduledInterviews.map((interview) => (
                <tr key={`${interview.intervieweeId}-${interview.interviewerId}-${interview.startTime}`}>
                  <td>{interview.intervieweeName}</td>
                  <td>{interview.interviewerName}</td>
                  <td>{interview.roomName}</td>
                  <td>{formatDate(interview.startTime)}</td>
                  <td>{formatDate(interview.endTime)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default ResultsDisplay;