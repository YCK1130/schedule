import { saveAs } from "file-saver";
import Papa from "papaparse";
import React from "react";
import { Alert, Card, Col, Dropdown, Row, Table } from "react-bootstrap";
import { useScheduling } from "../contexts/SchedulingContext";
import type { Interviewee } from "../types";

export const ResultsDisplay: React.FC = () => {
    const { scheduledInterviews, unmatchedResults, interviewers, interviewees } = useScheduling();

    // 格式化時間為 month/day start hr:min ~ end hr:min
    const formatDate = (dateStr: string) => {
        if (!dateStr) return { date: "", time: "" };
        const date = new Date(dateStr);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");

        return { date: `${month}/${day}`, time: `${hours}:${minutes}` };
    };

    // 將開始和結束時間合併為一個字符串
    const formatTimeRange = (startTime: string, endTime: string) => {
        if (!startTime || !endTime) return { date: "", time: "" };
        const { date: startDate, time: startTimeStr } = formatDate(startTime);
        const { date: endDate, time: endTimeStr } = formatDate(endTime);
        return { date: startDate === endDate ? startDate : `${startDate} - ${endDate}`, time: `${startTimeStr} ~ ${endTimeStr}` };
    };

    // 將面試官或應試者的時間格式化為 CSV 內容
    const prepareParticipantData = (isInterviewer: boolean) => {
        const participants = isInterviewer ? interviewers : interviewees;
        const filteredInterviews = scheduledInterviews.filter((interview) => interview[isInterviewer ? "interviewers" : "interviewees"].length > 0);

        return participants.map((participant) => {
            // 查找此人參與的所有面試
            const participantInterviews = filteredInterviews.filter((interview) =>
                interview[isInterviewer ? "interviewers" : "interviewees"].some((p) => p.id === participant.id)
            );

            // 收集所有時間段
            const timeSlots = participantInterviews.map((interview) => ({
                ...formatTimeRange(interview.startTime, interview.endTime),
                id: interview.id || -1,
            }));
            const timeMap = new Map<string, string | number>();
            if (timeSlots.length == 1) {
                timeMap.set("date", timeSlots[0].date);
                timeMap.set("time", timeSlots[0].time);
                timeMap.set("id", timeSlots[0].id);
            } else {
                timeSlots.forEach((s, idx) => {
                    const date = s.date;
                    const time = s.time;
                    const id = s.id;
                    timeMap.set(`date_${idx + 1}`, date);
                    timeMap.set(`time_${idx + 1}`, time);
                    timeMap.set(`id_${idx + 1}`, id);
                });
            }
            // 將參與者的基本信息與參與的面試時間合併
            return {
                name: participant.name,
                position: participant.position || "",
                email: participant.email || "",
                timeMap: timeMap,
                origin_availability: participant.origin_availability,
                // interviewTimes: timeSlots.join(", "),
            };
        });
    };

    const exportToCsv = (exportType: string) => {
        if (scheduledInterviews.length === 0) return;

        let csvContent = "";
        let fileName = "";

        switch (exportType) {
            case "interviews":
                // 匯出面試數據
                const interviewsData = scheduledInterviews.map((interview) => ({
                    interviewers: interview.interviewers.map((int) => int.name).join(", "),
                    interviewees: interview.interviewees.map((int) => int.name).join(", "),
                    id: interview.id,
                    position: interview.interviewees[0].position,
                    ...formatTimeRange(interview.startTime, interview.endTime),
                    // startTime: formatDate(interview.startTime),
                    // endTime: formatDate(interview.endTime),
                }));
                csvContent = Papa.unparse(
                    interviewsData
                        .map((r) => ({
                            日期: r.date,
                            場次時間: r.time,
                            面試編號: r.id || -1,
                            申請者身份: r.position,
                            幹部: r.interviewers,
                            面試者: r.interviewees,
                        }))
                        .sort((a, b) => a.日期.localeCompare(b.日期) || a.場次時間.localeCompare(b.場次時間) || a.面試編號 - b.面試編號)
                );
                fileName = "interview_schedule.csv";
                break;

            case "interviewers":
                // 匯出面試官數據
                const interviewersData = prepareParticipantData(true);
                const flatData = interviewersData.reduce((acc, curr) => {
                    const { name, position, timeMap } = curr;
                    timeMap.forEach((value, key) => {
                        const [type, index] = key.split("_");
                        if (type === "time" || type === "id") return;
                        const date = value;
                        const time = timeMap.get(`time_${index}`);
                        const id = timeMap.get(`id_${index}`);
                        if (typeof time === "string" && typeof date === "string" && typeof id === "number") {
                            acc.push({ name, position, date, time, id });
                        } else {
                            console.error("Invalid data type for time, date, or id", { time, date, id });
                        }
                    });
                    return acc;
                }, [] as { name: string; position: string; date: string; time: string; id: number }[]);
                csvContent = Papa.unparse(
                    flatData
                        .map((r) => ({
                            姓名: r.name,
                            職位: r.position,
                            日期: r.date,
                            面試時間: r.time,
                            面試編號: r.id,
                        }))
                        .sort((a, b) => a.姓名.localeCompare(b.姓名))
                );
                fileName = "interviewers_schedule.csv";
                break;

            case "interviewees":
                // 匯出應試者數據
                const intervieweesData = prepareParticipantData(false);
                csvContent = Papa.unparse(
                    intervieweesData
                        .map((r) => ({
                            姓名: r.name,
                            職位: r.position,
                            日期: r.timeMap.get("date"),
                            面試時間: r.timeMap.get("time"),
                            面試場次編號: r.timeMap.get("id"),
                            可面試時間: r.origin_availability,
                        }))
                        .sort((a, b) => a.姓名.localeCompare(b.姓名))
                );
                fileName = "interviewees_schedule.csv";
                break;
            case "interviewers_stats":
                const interviewersStatsData = prepareParticipantData(true);
                const flatStatsData = interviewersStatsData.map((curr) => {
                    const { name, position, timeMap } = curr;
                    return { name, position, num: timeMap.size };
                });
                csvContent = Papa.unparse(
                    flatStatsData
                        .map((r) => ({
                            姓名: r.name,
                            職位: r.position,
                            安排場次數: r.num,
                        }))
                        .sort((a, b) => a.姓名.localeCompare(b.姓名))
                );
                fileName = "interviewers_stats.csv";
                break;
        }

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
        saveAs(blob, fileName);
    };
    const getAvalTime = (interviewee: Interviewee) => {
        if (interviewee.origin_availability) {
            if (Array.isArray(interviewee.origin_availability)) {
                return interviewee.origin_availability
                    .map((slot) => {
                        const { date, time } = formatTimeRange(slot.split("/")[0], slot.split("/")[1]);
                        return `${date} ${time}`;
                    })
                    .join(", ");
            } else {
                return interviewee.origin_availability;
            }
        } else if (Array.isArray(interviewee.availability)) {
            return interviewee.availability
                .map((slot) => {
                    const { date, time } = formatTimeRange(slot.split("/")[0], slot.split("/")[1]);
                    return `${date} ${time}`;
                })
                .join(", ");
        } else return interviewee.availability;
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
                                        exportToCsv("interviews");
                                    }}
                                >
                                    匯出面試數據
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        exportToCsv("interviewers");
                                    }}
                                >
                                    匯出面試官各場次
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        exportToCsv("interviewers_stats");
                                    }}
                                >
                                    匯出面試官數據
                                </Dropdown.Item>
                                <Dropdown.Item
                                    onClick={() => {
                                        exportToCsv("interviewees");
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
                                                        <td>{getAvalTime(interviewee)}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                )}
                            </Col>
                            {/* <Col md={6}>
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
                                                {unmatchedResults.interviewers.map((interviewer) => (
                                                    <tr key={interviewer.id} className="text-danger">
                                                        <td>{interviewer.name}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                )}
                            </Col> */}
                        </Row>
                    </Card.Body>
                </Card>
            )}
        </>
    );
};
