import React from "react";
import { Alert, Card, Col, Dropdown, Row, Table } from "react-bootstrap";
import { useScheduling } from "../contexts/SchedulingContext";
import { exportToCsv, getAvailableTime } from "../utils/exportUtils";
import { formatTimeRange } from "../utils/timeUtils";

export const ResultsDisplay: React.FC = () => {
    const { scheduledInterviews, unmatchedResults, interviewers, interviewees } = useScheduling();

    const handleExportToCsv = (exportType: string) => {
        exportToCsv(exportType, scheduledInterviews, interviewers, interviewees);
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
                                <Dropdown.Item
                                    onClick={() => {
                                        handleExportToCsv("interviews");
                                    }}
                                >
                                    匯出面試數據
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        handleExportToCsv("interviewers");
                                    }}
                                >
                                    匯出面試官各場次
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        handleExportToCsv("interviewers_stats");
                                    }}
                                >
                                    匯出面試官數據
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        handleExportToCsv("interviewees");
                                    }}
                                >
                                    匯出應試者數據
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </Card.Header>
                <Card.Body>
                    {scheduledInterviews.length === 0 ? (
                        <Alert variant="info">尚未安排任何面試。</Alert>
                    ) : (
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th style={{textAlign:"center",width:"3.5em", textWrap:"balance"}}>編號</th>
                                    <th style={{textAlign:"center",width:"3em"}}>日期</th>
                                    <th style={{textAlign:"center",width:"8em"}}>時間</th>
                                    <th style={{textAlign:"center"}}>面試者</th>
                                    <th style={{textAlign:"center"}}>面試官</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduledInterviews.map((interview) => (
                                    <tr key={`${interview.interviewees[0].id}-${interview.startTime}`}>
                                        <td style={{textAlign:"center",width:"3.5em"}}>{interview.id}</td>
                                        <td style={{textAlign:"center",width:"3em"}}>{formatTimeRange(interview.startTime, interview.endTime).date}</td>
                                        <td style={{textAlign:"center",width:"8em"}}>{formatTimeRange(interview.startTime, interview.endTime).time}</td>
                                        <td>{interview.interviewees.map((int) => int.name).join(", ")}</td>
                                        <td>{interview.interviewers.map((int) => int.name).join(", ")}</td>
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
                            <Col>
                                {unmatchedResults.interviewees.length > 0 && (
                                    <div>
                                        <h6 className="text-danger">未配對面試者：</h6>
                                        <Table striped bordered hover size="sm" className="border-danger">
                                            <thead>
                                                <tr>
                                                    <th>姓名</th>
                                                    <th>可面試時間</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {unmatchedResults.interviewees.map((interviewee) => (
                                                    <tr key={interviewee.id} className="text-danger">
                                                        <td>{interviewee.name}</td>
                                                        <td>{getAvailableTime(interviewee)}</td>
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
