import type { ChangeEvent } from "react";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useScheduling } from "../../contexts/SchedulingContext";
import "../../styles/restriction.css";
import { downloadSample, handleFileUpload, loadSampleData } from "../../utils/fileUtils";
import { getPositionsFromParticipants } from "../../utils/positionUtils";

const FileUploader: React.FC = () => {
    const {
        groupRestrictions,
        updateGroupRestriction,
        addRestriction,
        removeRestriction,
        onIntervieweesLoaded,
        onInterviewersLoaded,
        interviewers,
        interviewees,
    } = useScheduling();
    const [interviewersFileName, setInterviewersFileName] = useState<string>("");
    const [intervieweesFileName, setIntervieweesFileName] = useState<string>("");
    const [positions, setPositions] = useState<{ [groupId: string]: string[] }>({
        interviewers: ["所有"],
        interviewees: ["所有"],
    });

    const handleInterviewersUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileUpload(file, setInterviewersFileName, onInterviewersLoaded, "interviewers");
        }
    };

    const handleIntervieweesUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFileUpload(file, setIntervieweesFileName, onIntervieweesLoaded, "interviewees");
        }
    };

    // 載入範例資料的處理函數
    const handleLoadSampleData = async (type: string) => {
        if (type === "interviewers") {
            await loadSampleData(type, setInterviewersFileName, onInterviewersLoaded);
        } else if (type === "interviewees") {
            await loadSampleData(type, setIntervieweesFileName, onIntervieweesLoaded);
        }
    };

    // 獲取可用的職位列表
    useEffect(() => {
        if (interviewers.length > 0) {
            const interviewerPositions = getPositionsFromParticipants(interviewers);
            setPositions((prev) => ({
                ...prev,
                interviewers: interviewerPositions,
            }));
        }

        if (interviewees.length > 0) {
            const intervieweePositions = getPositionsFromParticipants(interviewees);
            setPositions((prev) => ({
                ...prev,
                interviewees: intervieweePositions,
            }));
        }
    }, [interviewers, interviewees]);

    const renderGroupRestriction = (groupId: string) => (
        <div className="restrictions-container">
            <span className="restriction-label">{groupId === "interviewers" ? "面試官" : "應試者"} 數量條件限制</span>
            {groupId === "interviewees" ? (
                <div key="interviewees-same-position-constrain" className="restriction-box">
                    <div className="restriction-row" style={{justifyContent: "center", color: "gray", fontWeight:500}}>職位相等</div>
                </div>
            ) : null}
            {groupRestrictions[groupId].map((restriction, index) => (
                <div key={index} className="restriction-box">
                    <div className="restriction-row">
                        <Form.Select
                            value={restriction.targetPosition || "所有"}
                            className="restriction-column"
                            onChange={(e) =>
                                updateGroupRestriction(groupId, index, {
                                    targetPosition: e.target.value,
                                })
                            }
                        >
                            {positions[groupId].map((position) => (
                                <option key={position} value={position}>
                                    {position}
                                </option>
                            ))}
                        </Form.Select>

                        <Form.Control
                            type="number"
                            className="restriction-column"
                            min="1"
                            value={restriction.minCount}
                            onChange={(e) =>
                                updateGroupRestriction(groupId, index, {
                                    minCount: parseInt(e.target.value) || 1,
                                })
                            }
                            placeholder="最小數量"
                        />
                        <>~</>
                        <Form.Control
                            type="number"
                            className="restriction-column"
                            min="1"
                            value={restriction.maxCount}
                            onChange={(e) =>
                                updateGroupRestriction(groupId, index, {
                                    maxCount: parseInt(e.target.value) || 1,
                                })
                            }
                            placeholder="最大數量"
                        />

                        <Button
                            variant="outline-danger"
                            size="sm"
                            className="remove-btn"
                            onClick={() => removeRestriction(groupId, index)}
                        >
                            ✕
                        </Button>
                    </div>
                </div>
            ))}

            <div className="restriction-actions">
                <Button variant="outline-primary" size="sm" onClick={() => addRestriction(groupId)}>
                    + 新增條件
                </Button>
            </div>
        </div>
    );

    return (
        <Card className="mb-4 upload-card">
            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
                上傳資料檔案
                <OverlayTrigger
                    placement="left"
                    overlay={
                        <Tooltip>
                            <div>您可以：</div>
                            <ul className="mb-0 ps-3">
                                <li>下載範例檔案格式</li>
                                <li>直接載入範例資料試用</li>
                            </ul>
                        </Tooltip>
                    }
                >
                    <span className="ms-2 text-muted">ℹ️</span>
                </OverlayTrigger>
            </Card.Header>
            <Card.Body>
                <Form className="w-100">
                    <Row className="file-upload-row">
                        {["interviewers", "interviewees"].map((type) => (
                            <Col key={type} className="file-upload-col">
                                <Form.Group>
                                    <div className="file-upload-header">
                                        <Form.Label>{type === "interviewers" ? "面試官檔案" : "應試者檔案"}</Form.Label>
                                        <div className="file-actions">
                                            <Button variant="outline-secondary" size="sm" onClick={() => downloadSample(type)} className="sample-btn">
                                                📥 範例
                                            </Button>
                                            <Button variant="outline-info" size="sm" onClick={() => handleLoadSampleData(type)} className="try-btn">
                                                ⚡️ 試用
                                            </Button>
                                        </div>
                                    </div>
                                    <Form.Control
                                        type="file"
                                        accept=".csv,.xlsx,.xls"
                                        onChange={type === "interviewers" ? handleInterviewersUpload : handleIntervieweesUpload}
                                        className="upload-input"
                                    />
                                    {renderGroupRestriction(type)}
                                </Form.Group>
                            </Col>
                        ))}
                    </Row>

                    <div className="file-preview">
                        {interviewersFileName && (
                            <div className="preview-item">
                                <span className="text-success">✓ Interviewers: {interviewersFileName}</span>
                            </div>
                        )}
                        {intervieweesFileName && (
                            <div className="preview-item">
                                <span className="text-success">✓ Interviewees: {intervieweesFileName}</span>
                            </div>
                        )}
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default FileUploader;
