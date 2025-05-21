import React, { useState } from "react";
import { Alert, Button, Card, Col, Dropdown, Form, Modal, Row, Table } from "react-bootstrap";
import { useDataSave } from "../contexts/DataContext";
import { exportToCsv, exportToXlsx, getAvailableTime } from "../utils/exportUtils";
import { formatTimeRange } from "../utils/timeUtils";

export const ResultsDisplay: React.FC = () => {
    const { interviewers, interviewees, scheduledInterviews, unmatchedResults } = useDataSave();
    const [showExportModal, setShowExportModal] = useState(false);
    const [showCsvModal, setShowCsvModal] = useState(false);
    const [exportOptions, setExportOptions] = useState({
        interviews: true,
        interviewers: true, 
        interviewers_stats: true,
        interviewees: true
    });

    const handleExportToCsv = (exportType: string) => {
        exportToCsv(exportType, scheduledInterviews, interviewers, interviewees);
        setShowCsvModal(false);
    };

    const handleExportOptionsChange = (option: string) => {
        setExportOptions({
            ...exportOptions,
            [option]: !exportOptions[option as keyof typeof exportOptions]
        });
    };

    const handleExportToExcel = () => {
        // 過濾選中的匯出選項
        const selectedOptions = Object.entries(exportOptions)
            .filter(([_, isSelected]) => isSelected)
            .map(([option]) => option);
        
        if (selectedOptions.length === 0) return;
        
        exportToXlsx(selectedOptions, scheduledInterviews, interviewers, interviewees);
        setShowExportModal(false);
    };

    return (
        <>
            <Card className="mb-4">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">已安排面試 ({scheduledInterviews.length})</h5>
                    {scheduledInterviews.length > 0 && (
                        <>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" size="sm" id="dropdown-export">
                                    匯出數據
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setShowCsvModal(true)}>
                                        匯出 CSV 檔案
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => setShowExportModal(true)}>
                                        匯出 Excel 檔案
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            {/* Excel 匯出模態框 */}
                            <Modal show={showExportModal} onHide={() => setShowExportModal(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>選擇匯出 Excel 選項</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Check
                                            type="checkbox"
                                            id="interviews"
                                            label="面試場次安排表"
                                            checked={exportOptions.interviews}
                                            onChange={() => handleExportOptionsChange("interviews")}
                                            className="mb-2"
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            id="interviewers"
                                            label="面試官各場次安排"
                                            checked={exportOptions.interviewers}
                                            onChange={() => handleExportOptionsChange("interviewers")}
                                            className="mb-2"
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            id="interviewers_stats"
                                            label="面試官場次統計"
                                            checked={exportOptions.interviewers_stats}
                                            onChange={() => handleExportOptionsChange("interviewers_stats")}
                                            className="mb-2"
                                        />
                                        <Form.Check
                                            type="checkbox"
                                            id="interviewees"
                                            label="應試者面試安排"
                                            checked={exportOptions.interviewees}
                                            onChange={() => handleExportOptionsChange("interviewees")}
                                            className="mb-2"
                                        />
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowExportModal(false)}>
                                        取消
                                    </Button>
                                    <Button variant="primary" onClick={handleExportToExcel}>
                                        匯出
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            {/* CSV 匯出模態框 */}
                            <Modal show={showCsvModal} onHide={() => setShowCsvModal(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>選擇匯出 CSV 選項</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="d-grid gap-2">
                                        <Button 
                                            variant="outline-primary" 
                                            className="text-start" 
                                            onClick={() => handleExportToCsv("interviews")}
                                        >
                                            面試場次安排表
                                        </Button>
                                        <Button 
                                            variant="outline-primary" 
                                            className="text-start" 
                                            onClick={() => handleExportToCsv("interviewers")}
                                        >
                                            面試官各場次安排
                                        </Button>
                                        <Button 
                                            variant="outline-primary" 
                                            className="text-start" 
                                            onClick={() => handleExportToCsv("interviewers_stats")}
                                        >
                                            面試官場次統計
                                        </Button>
                                        <Button 
                                            variant="outline-primary" 
                                            className="text-start" 
                                            onClick={() => handleExportToCsv("interviewees")}
                                        >
                                            應試者面試安排
                                        </Button>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowCsvModal(false)}>
                                        取消
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    )}
                </Card.Header>
                <Card.Body>
                    {scheduledInterviews.length === 0 ? (
                        <Alert variant="info">尚未安排任何面試。</Alert>
                    ) : (
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center", width: "3.5em", textWrap: "balance" }}>編號</th>
                                    <th style={{ textAlign: "center", width: "3em" }}>日期</th>
                                    <th style={{ textAlign: "center", width: "8em" }}>時間</th>
                                    <th style={{ textAlign: "center" }}>面試者</th>
                                    <th style={{ textAlign: "center" }}>面試官</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scheduledInterviews.map((interview) => (
                                    <tr key={`${interview.interviewees[0].id}-${interview.startTime}`}>
                                        <td style={{ textAlign: "center", width: "3.5em" }}>{interview.id}</td>
                                        <td style={{ textAlign: "center", width: "3em" }}>
                                            {formatTimeRange(interview.startTime, interview.endTime).date}
                                        </td>
                                        <td style={{ textAlign: "center", width: "8em" }}>
                                            {formatTimeRange(interview.startTime, interview.endTime).time}
                                        </td>
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
                                                    <th style={{width:"10%", textAlign:"center"}}>姓名</th>
                                                    <th>可面試時間</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {unmatchedResults.interviewees.map((interviewee) => (
                                                    <tr key={interviewee.id} className="text-danger">
                                                        <td style={{width:"10%",textAlign:"center"}}>{interviewee.name}</td>
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
