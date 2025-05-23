import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FileUploader from "../components/Upload/FileUploader";
import { useDataSave } from "../contexts/DataContext";
import { useScheduling } from "../contexts/SchedulingContext";

const SchedulingContainer: React.FC = () => {
    const { generateSchedule } = useScheduling();
    const { scheduledInterviews, dataLoaded, loading } = useDataSave();

    const allDataLoaded = dataLoaded.interviewers && dataLoaded.interviewees;

    return (
        <Container className="py-2">
            <Row className="fix-width-container">
                <Col style={{ display: "flex", justifyContent: "center" }}>
                    <FileUploader />
                </Col>
            </Row>
            {allDataLoaded && (
                <Row className="fix-width-container">
                    <Col className="text-end">
                        <button className="continue-btn" onClick={generateSchedule}>
                            {loading ? (
                                <div className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                            ) : scheduledInterviews.length > 0 ? (
                                "重新配對 🔄"
                            ) : (
                                "開始配對 ▶"
                            )}
                        </button>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default SchedulingContainer;
