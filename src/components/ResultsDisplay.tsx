import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import React, { useState } from 'react';
import { Alert, Card, Col, Dropdown, Row, Table } from 'react-bootstrap';
import { useScheduling } from '../contexts/SchedulingContext';

export const ResultsDisplay: React.FC = () => {
  const { scheduledInterviews, unmatchedResults, interviewers, interviewees } = useScheduling();
  const [exportType, setExportType] = useState<'interviews' | 'interviewers' | 'interviewees'>('interviews');

  // 格式化時間為 month/day start hr:min ~ end hr:min
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${month}/${day} ${hours}:${minutes}`;
  };

  // 將開始和結束時間合併為一個字符串
  const formatTimeRange = (startTime: string, endTime: string) => {
    if (!startTime || !endTime) return '';
    return `${formatDate(startTime)} ~ ${formatDate(endTime)}`;
  };

  // 將面試官或應試者的時間格式化為 CSV 內容
  const prepareParticipantData = (isInterviewer: boolean) => {
    const participants = isInterviewer ? interviewers : interviewees;
    const filteredInterviews = scheduledInterviews.filter(interview => interview[isInterviewer ? 'interviewers' : 'interviewees'].length > 0);
    
    return participants.map(participant => {
      // 查找此人參與的所有面試
      const participantInterviews = filteredInterviews.filter(interview => 
        interview[isInterviewer ? 'interviewers' : 'interviewees'].some(p => p.id === participant.id)
      );
      
      // 收集所有時間段
      const timeSlots = participantInterviews.map(interview => 
        formatTimeRange(interview.startTime, interview.endTime)
      );
      
      // 將參與者的基本信息與參與的面試時間合併
      return {
        id: participant.id,
        name: participant.name,
        position: participant.position || '',
        email: participant.email || '',
        interviewTimes: timeSlots.join(', '),
        // 添加可能的其他相關資訊
        ...(participant as any)
      };
    });
  };

  const exportToCsv = () => {
    if (scheduledInterviews.length === 0) return;
    
    let csvContent = '';
    let fileName = '';

    switch (exportType) {
      case 'interviews':
        // 匯出面試數據
        const interviewsData = scheduledInterviews.map(interview => ({
          interviewers: interview.interviewers.map(int => int.name).join(', '),
          interviewees: interview.interviewees.map(int => int.name).join(', '),
          timeRange: formatTimeRange(interview.startTime, interview.endTime),
          startTime: formatDate(interview.startTime),
          endTime: formatDate(interview.endTime)
        }));
        csvContent = Papa.unparse(interviewsData);
        fileName = 'interview_schedule.csv';
        break;
        
      case 'interviewers':
        // 匯出面試官數據
        const interviewersData = prepareParticipantData(true);
        csvContent = Papa.unparse(interviewersData);
        fileName = 'interviewers_schedule.csv';
        break;
        
      case 'interviewees':
        // 匯出應試者數據
        const intervieweesData = prepareParticipantData(false);
        csvContent = Papa.unparse(intervieweesData);
        fileName = 'interviewees_schedule.csv';
        break;
    }
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, fileName);
  };

  return (
    <>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">已安排面試 ({scheduledInterviews.length})</h5>
          {scheduledInterviews.length > 0 && (
            <Dropdown>
              <Dropdown.Toggle variant="primary" size="sm" id="dropdown-export">
                匯出數據
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => { setExportType('interviews'); exportToCsv(); }}>
                  匯出面試數據
                </Dropdown.Item>
                <Dropdown.Item onClick={() => { setExportType('interviewers'); exportToCsv(); }}>
                  匯出面試官數據
                </Dropdown.Item>
                <Dropdown.Item onClick={() => { setExportType('interviewees'); exportToCsv(); }}>
                  匯出應試者數據
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
                  <th>時間</th>
                </tr>
              </thead>
              <tbody>
                {scheduledInterviews.map((interview) => (
                  <tr key={`${interview.interviewees[0].id}-${interview.startTime}`}>
                    <td>{interview.interviewees.map(int=>int.name).join(', ')}</td>
                    <td>{interview.interviewers.map(int=>int.name).join(', ')}</td>
                    <td>{formatTimeRange(interview.startTime, interview.endTime)}</td>
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