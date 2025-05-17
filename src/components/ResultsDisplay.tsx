import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import React from 'react';
import { Alert, Button, Card, Table } from 'react-bootstrap';
import { useScheduling } from '../contexts/SchedulingContext';

export const ResultsDisplay: React.FC = () => {
  const { scheduledInterviews, unmatchedResults } = useScheduling();

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const exportToCsv = () => {
    if (scheduledInterviews.length === 0) return;
    
    const csvContent = Papa.unparse(scheduledInterviews);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'interview_schedule.csv');
  };

  return (
    <>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">已安排面試 ({scheduledInterviews.length})</h5>
          {scheduledInterviews.length > 0 && (
            <Button variant="primary" size="sm" onClick={exportToCsv}>
              匯出 CSV
            </Button>
          )}
        </Card.Header>
        <Card.Body>
          {scheduledInterviews.length === 0 ? (
            <p className="text-center text-muted">
              尚未安排任何面試。
            </p>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>面試者</th>
                  <th>面試官</th>
                  <th>開始時間</th>
                  <th>結束時間</th>
                  <th>應徵職位</th>
                </tr>
              </thead>
              <tbody>
                {scheduledInterviews.map((interview) => (
                  <tr key={`${interview.intervieweeIds[0]}-${interview.startTime}`}>
                    <td>{interview.intervieweeNames.join(', ')}</td>
                    <td>{interview.interviewerNames.join(', ')}</td>
                    <td>{formatDate(interview.startTime)}</td>
                    <td>{formatDate(interview.endTime)}</td>
                    <td>{interview.position}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {unmatchedResults && (unmatchedResults.interviewees.length > 0 || unmatchedResults.interviewers.length > 0) && (
        <Alert variant="warning" className="mt-3">
          <Alert.Heading>未能完全配對</Alert.Heading>
          <div className="mt-3">
            {unmatchedResults.reasons.map((reason, index) => (
              <p key={index} className="mb-1 text-danger">
                ⚠️ {reason}
              </p>
            ))}
          </div>
          {unmatchedResults.interviewees.length > 0 && (
            <div className="mt-3">
              <h6>未配對面試者：</h6>
              <ul className="text-danger">
                {unmatchedResults.interviewees.map(interviewee => (
                  <li key={interviewee.id}>{interviewee.name} ({interviewee.positionApplied})</li>
                ))}
              </ul>
            </div>
          )}
          {unmatchedResults.interviewers.length > 0 && (
            <div className="mt-3">
              <h6>未配對面試官：</h6>
              <ul className="text-danger">
                {unmatchedResults.interviewers.map(interviewer => (
                  <li key={interviewer.id}>{interviewer.name} ({interviewer.specialization})</li>
                ))}
              </ul>
            </div>
          )}
        </Alert>
      )}
    </>
  );
};