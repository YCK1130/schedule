import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AvailabilityCalendar from "../components/Calendar/AvailabilityCalendar";
import { ResultsDisplay } from "../components/ResultsDisplay";

const DisplayContainer: React.FC = () => {
    return (
        <Container className="py-2">
            <Row className="fix-width-container">
                <Col>
                    <AvailabilityCalendar />
                </Col>
            </Row>
            <Row className="fix-width-container">
                <Col>
                    <ResultsDisplay />
                </Col>
            </Row>
        </Container>
    );
};

export default DisplayContainer;
