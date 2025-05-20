import Papa from "papaparse";
import type { ChangeEvent } from "react";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import * as XLSX from "xlsx";
import { useScheduling } from "../../contexts/SchedulingContext";
import "../../styles/restriction.css";
import { colMapping } from "../../utils/const";

const FileUploader: React.FC = () => {
    const {
        groupRestrictions,
        updateGroupRestriction,
        addRestriction,
        removeRestriction,
        // updateAllRestrictions,
        onIntervieweesLoaded,
        onInterviewersLoaded,
        // setInterviewees,
        // setInterviewers,
        interviewers,
        interviewees,
    } = useScheduling();
    const [interviewersFileName, setInterviewersFileName] = useState<string>("");
    const [intervieweesFileName, setIntervieweesFileName] = useState<string>("");
    const [positions, setPositions] = useState<{ [groupId: string]: string[] }>({
        interviewers: ["所有"],
        interviewees: ["所有"],
    });

    const formatData = (data: any[]) => {
        return data.map((item: any) => {
            const formattedItem: any = {};
            for (const key in item) {
                const mappedKey = colMapping.get(key.toLowerCase());

                // 處理不同格式的時間輸入
                if (mappedKey === "availability" && typeof item[key] === "string") {
                    // 處理類似 "7/31 20:00 - 21:00" 的格式
                    formattedItem[mappedKey] = formatTimeSlots(item[key]);
                } else if (mappedKey) {
                    formattedItem[mappedKey] = item[key];
                }

                formattedItem[key] = item[key];
            }
            return formattedItem;
        });
    };

    // 處理不同格式的時間輸入，統一轉換為系統格式
    const formatTimeSlots = (timeString: string): string[] => {
        if (!timeString) return [];

        // 按逗號分割多個時間段
        const slots = timeString.split(",").map((slot) => slot.trim());

        return slots
            .map((slot) => {
                // 檢查是否已經是標準格式 "yyyy-mm-ddThh:mm:ss/yyyy-mm-ddThh:mm:ss"
                if (slot.includes("/") && slot.includes("T")) {
                    return slot;
                }

                // 處理 "7/31 20:00 - 21:00" 或 "7/31 20:00 ~ 21:00" 等類似格式
                // 支援多種分隔符號: "-", "~", "～", "－"
                const separators = ["-", "~", "～", "－"];
                let dateTime = "";
                let endTime = "";

                // 尋找使用的分隔符號
                for (const separator of separators) {
                    if (slot.includes(separator)) {
                        [dateTime, endTime] = slot.split(separator).map((part) => part.trim());
                        break;
                    }
                }

                // 如果找到分隔符號且成功分割
                if (dateTime && endTime) {
                    // 進一步解析日期和時間
                    const dateTimeParts = dateTime.split(" ");
                    const date = dateTimeParts[0]; // 例如: "7/31"
                    const startTime = dateTimeParts[1] || "00:00"; // 例如: "20:00"

                    // 構建完整的日期時間
                    const currentYear = new Date().getFullYear();
                    const [month, day] = date.split("/");

                    // 創建開始和結束時間，使用本地時區
                    const startDateTime = new Date(currentYear, parseInt(month) - 1, parseInt(day));
                    const [startHour, startMinute] = startTime.split(":");
                    startDateTime.setHours(parseInt(startHour), parseInt(startMinute), 0, 0);

                    // 創建結束時間
                    const endDateTime = new Date(startDateTime);
                    const [endHour, endMinute] = endTime.split(":");
                    endDateTime.setHours(parseInt(endHour), parseInt(endMinute), 0, 0);

                    // 保留使用者的本地時區，轉換為標準格式 "yyyy-mm-ddThh:mm:ss/yyyy-mm-ddThh:mm:ss"
                    // 使用 toLocaleString 並指定 "sv-SE" 語言來獲得接近 ISO 格式的字符串但保留本地時區
                    const formatDate = (date: Date) => {
                        const isoLike = date.toLocaleString("sv-SE").replace(" ", "T");
                        return isoLike.substring(0, 19); // 去掉可能的毫秒部分
                    };

                    return `${formatDate(startDateTime)}/${formatDate(endDateTime)}`;
                }

                return slot;
            })
            .filter(Boolean);
    };

    const parseExcelFile = (file: File): Promise<any[]> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const buffer = e.target?.result as ArrayBuffer;
                    const data = new Uint8Array(buffer);
                    const workbook = XLSX.read(data, { type: "array" });
                    const firstSheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const jsonData = XLSX.utils.sheet_to_json(worksheet);
                    resolve(jsonData);
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = (error) => reject(error);
            reader.readAsArrayBuffer(file);
        });
    };

    const handleFileUpload = async (file: File, setFileName: (name: string) => void, onDataLoaded: (data: any[]) => void, fileType: string) => {
        if (!file) return;

        setFileName(file.name);

        try {
            if (file.name.endsWith(".csv")) {
                Papa.parse(file, {
                    header: true,
                    complete: (results) => {
                        onDataLoaded(formatData(results.data));
                    },
                    error: (error) => {
                        console.error("Error parsing file:", error);
                        alert(`Error parsing ${fileType} file`);
                    },
                });
            } else {
                // Handle Excel files
                const data = await parseExcelFile(file);

                // 將資料轉換為符合需求的格式
                onDataLoaded(formatData(data));
            }
        } catch (error) {
            console.error("Error parsing file:", error);
            alert(`Error parsing ${fileType} file`);
        }
    };

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

    // 下載範例檔案
    const downloadSample = (type: string) => {
        const samplePath = `/scheduling_app/samples/sample_${type}.csv`;
        const link = document.createElement("a");
        link.href = samplePath;
        link.download = `sample_${type}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // 載入範例資料
    const loadSampleData = async (type: string) => {
        const mapping: Map<string, string> = new Map([
            ["interviewers", "/scheduling_app/samples/real/interview_schedule_interviewers.csv"],
            ["interviewees", "/scheduling_app/samples/real/interview_schedule_interviewees.csv"],
        ]);
        try {
            // console.log(`/scheduling_app/samples/csv/${mapping.get(type)}/100.csv`);
            const response = await fetch(`${mapping.get(type)}`);
            // const response = await fetch(`/scheduling_app/samples/sample_${type}.csv`);
            const blob = await response.blob();
            const file = new File([blob], `sample_${type}.csv`, { type: "text/csv" });

            switch (type) {
                case "interviewers":
                    handleFileUpload(file, setInterviewersFileName, onInterviewersLoaded, "interviewers");
                    break;
                case "interviewees":
                    handleFileUpload(file, setIntervieweesFileName, onIntervieweesLoaded, "interviewees");
                    break;
            }
        } catch (error) {
            console.error("Error loading sample:", error);
            alert(`Error loading sample ${type} file`);
        }
    };

    // 獲取可用的職位列表
    useEffect(() => {
        if (interviewers.length > 0) {
            const positions = new Set(["所有"]);
            interviewers.forEach((interviewer) => {
                if (interviewer.position) {
                    positions.add(interviewer.position);
                }
            });
            setPositions((prev) => ({
                ...prev,
                interviewers: Array.from(positions).sort((a, b) => {
                    if (a === "所有") return -1;
                    if (b === "所有") return 1;
                    return a.localeCompare(b);
                }),
            }));
        }

        if (interviewees.length > 0) {
            const positions = new Set(["所有"]);
            interviewees.forEach((interviewee) => {
                if (interviewee.position) {
                    positions.add(interviewee.position);
                }
            });
            setPositions((prev) => ({
                ...prev,
                interviewees: Array.from(positions).sort((a, b) => {
                    if (a === "所有") return -1;
                    if (b === "所有") return 1;
                    return a.localeCompare(b);
                }),
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
                            // disabled={groupRestrictions[groupId].length <= 1}
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
                                            <Button variant="outline-info" size="sm" onClick={() => loadSampleData(type)} className="try-btn">
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
