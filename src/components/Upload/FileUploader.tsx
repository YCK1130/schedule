import type { ChangeEvent, JSX } from "react";
import React, { useMemo, useState } from "react";
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { useDataSave } from "../../contexts/DataContext";
import { useScheduling } from "../../contexts/SchedulingContext";
import "../../styles/restriction.css";
import type { GroupType } from "../../types";
import { downloadSample, handleFileUpload, loadSampleData } from "../../utils/fileUtils";
import ConstraintRow from "./ConstraintRow";
const FileUploader: React.FC = () => {
    const { groupRestrictions, updateGroupRestriction, addRestriction, removeRestriction } = useScheduling();
    const { onIntervieweesLoaded, onInterviewersLoaded, positions } = useDataSave();

    const [interviewersFileName, setInterviewersFileName] = useState<string>("");
    const [intervieweesFileName, setIntervieweesFileName] = useState<string>("");

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

    // 使用 useMemo 緩存限制條件渲染邏輯
    const renderedGroupRestrictions = useMemo(() => {
        const result: Record<GroupType, JSX.Element> = {
            interviewers: renderGroupRestriction("interviewers"),
            interviewees: renderGroupRestriction("interviewees"),
        };
        return result;
    }, [groupRestrictions, positions]);

    // 限制條件渲染函數
    function renderGroupRestriction(groupId: GroupType) {
        return (
            <div className="restrictions-container">
                <span className="restriction-label">{groupId === "interviewers" ? "面試官" : "應試者"} 數量條件限制</span>
                {groupId === "interviewees" ? (
                    <div key="interviewees-same-position-constrain" className="restriction-box">
                        <div className="restriction-row" style={{color: "gray", fontWeight: 500}}>
                            職位相同
                        </div>
                    </div>
                ) : null}
                {groupRestrictions[groupId].map((restriction, index) => (
                    <ConstraintRow
                        key={`${index}-ConstraintRow`}
                        index={index}
                        groupId={groupId}
                        restriction={restriction}
                        positionsList={positions[groupId]}
                        onPositionChange={(e) => updateGroupRestriction(groupId, index, { targetPosition: e.target.value })}
                        onMinChange={(e) => {
                            const value = parseInt(e.target.value) || 1;
                            updateGroupRestriction(groupId, index, { minCount: value });
                        }}
                        onMaxChange={(e) => {
                            const value = parseInt(e.target.value) || 1;
                            updateGroupRestriction(groupId, index, { maxCount: value });
                        }}
                        removeRow={() => removeRestriction(groupId, index)}
                    />
                ))}
                <div className="restriction-actions">
                    <Button variant="outline-primary" size="sm" onClick={() => addRestriction(groupId)}>
                        + 新增條件
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <Card className="mb-4 upload-card">
            <Card.Header as="h5" className="d-flex justify-content-between align-items-center">
                上傳資料檔案
                <OverlayTrigger
                    placement="left"
                    overlay={
                        <Tooltip>
                            <div style={{ textAlign: "left" }}>
                                <div>您可以：</div>
                                <ul className="mb-0 ps-3">
                                    <li>下載範例檔案格式</li>
                                    <li>直接載入範例資料試用</li>
                                </ul>
                            </div>
                        </Tooltip>
                    }
                >
                    <span className="ms-2 text-muted">ℹ️</span>
                </OverlayTrigger>
            </Card.Header>
            <Card.Body>
                <Form className="w-100">
                    <Row className="file-upload-row">
                        {(["interviewers", "interviewees"] as const).map((type) => (
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
                                    {renderedGroupRestrictions[type]}
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
