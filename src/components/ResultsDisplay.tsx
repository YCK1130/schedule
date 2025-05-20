import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import React from 'react';
import { Alert, Button, Card, Col, Row, Table } from 'react-bootstrap';
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
            <Alert variant="info">
              尚未安排任何面試。
            </Alert>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>面試者</th>
                  <th>面試官</th>
                  <th>開始時間</th>
                  <th>結束時間</th>
                </tr>
              </thead>
              <tbody>
                {scheduledInterviews.map((interview) => (
                  <tr key={`${interview.interviewees[0].id}-${interview.startTime}`}>
                    <td>{interview.interviewees.map(int=>int.name).join(', ')}</td>
                    <td>{interview.interviewers.map(int=>int.name).join(', ')}</td>
                    <td>{formatDate(interview.startTime)}</td>
                    <td>{formatDate(interview.endTime)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {unmatchedResults && (unmatchedResults.interviewers.length > 0 || unmatchedResults.interviewees.length > 0) && (
        <Card className="mb-4" border="danger">
          <Card.Header className="bg-danger text-white">
            <h5 className="mb-0">未配對名單</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                {unmatchedResults.interviewees.length > 0 && (
                  <div>
                    <h6 className="text-danger">未配對面試者：</h6>
                    <Table striped bordered hover size="sm" className="border-danger">
                      <thead>
                        <tr>
                          <th>姓名</th>
                        </tr>
                      </thead>
                      <tbody>
                        {unmatchedResults.interviewees.map(interviewee => (
                          <tr key={interviewee.id} className="text-danger">
                            <td>{interviewee.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </Col>
              <Col md={6}>
                {unmatchedResults.interviewers.length > 0 && (
                  <div>
                    <h6 className="text-danger">未配對面試官：</h6>
                    <Table striped bordered hover size="sm" className="border-danger">
                      <thead>
                        <tr>
                          <th>姓名</th>
                        </tr>
                      </thead>
                      <tbody>
                        {unmatchedResults.interviewers.map(interviewer => (
                          <tr key={interviewer.id} className="text-danger">
                            <td>{interviewer.name}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </>
  );
};