import React, { useEffect, useState } from 'react';
import { Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { useScheduling } from '../contexts/SchedulingContext';
import type { Interviewee, Interviewer } from '../types';

interface StatusDisplayProps {
  interviewers: Interviewer[];
  interviewees: Interviewee[];
  dataLoaded: {
    interviewers: boolean;
    interviewees: boolean;
  };
}

export const StatusDisplay: React.FC<StatusDisplayProps> = ({
  interviewers,
  interviewees,
  dataLoaded,
}) => {
  const { groupRestrictions, updateGroupRestriction, maxCounts, updateMaxCount } = useScheduling();

  const [interviewerRange, setInterviewerRange] = useState({
    min: 2,
    max: 2,
  });

  const [intervieweeRange, setIntervieweeRange] = useState({
    min: 1,
    max: 1,
  });

  // 初始化本地狀態從 context 中
  useEffect(() => {
    const interviewerRestriction = groupRestrictions.interviewers;
    const intervieweeRestriction = groupRestrictions.interviewees;

    setInterviewerRange({
      min: interviewerRestriction.count,
      max: maxCounts.interviewers || interviewerRestriction.count,
    });

    setIntervieweeRange({
      min: intervieweeRestriction.count,
      max: maxCounts.interviewees || intervieweeRestriction.count,
    });
  }, [groupRestrictions, maxCounts]);

  // 當面試官範圍變更時
  const handleInterviewerRangeChange = (field: 'min' | 'max', value: number) => {
    const newRange = { ...interviewerRange, [field]: value };
    setInterviewerRange(newRange);
    
    // 確保最小值不大於最大值，最大值不小於最小值
    if (field === 'min' && newRange.min > newRange.max) {
      newRange.max = newRange.min;
      setInterviewerRange(newRange);
    } else if (field === 'max' && newRange.max < newRange.min) {
      newRange.min = newRange.max;
      setInterviewerRange(newRange);
    }
    
    // 更新 Context 中的設定
    if (field === 'min') {
      updateGroupRestriction('interviewers', {
        operator: '>=',
        count: newRange.min,
      });
    } else {
      updateMaxCount('interviewers', newRange.max);
    }
  };

  // 當應試者範圍變更時
  const handleIntervieweeRangeChange = (field: 'min' | 'max', value: number) => {
    const newRange = { ...intervieweeRange, [field]: value };
    setIntervieweeRange(newRange);
    
    // 確保最小值不大於最大值，最大值不小於最小值
    if (field === 'min' && newRange.min > newRange.max) {
      newRange.max = newRange.min;
      setIntervieweeRange(newRange);
    } else if (field === 'max' && newRange.max < newRange.min) {
      newRange.min = newRange.max;
      setIntervieweeRange(newRange);
    }
    
    // 更新 Context 中的設定
    if (field === 'min') {
      updateGroupRestriction('interviewees', {
        operator: '>=',
        count: newRange.min,
      });
    } else {
      updateMaxCount('interviewees', newRange.max);
    }
  };

  return (
    <Card className="mt-4">
      <Card.Header as="h5">資料狀態</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <strong>面試官:</strong>{' '}
          {dataLoaded.interviewers ? (
            <span className="text-success">已載入 {interviewers.length} 位</span>
          ) : (
            <span className="text-secondary">尚未載入</span>
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>應試者:</strong>{' '}
          {dataLoaded.interviewees ? (
            <span className="text-success">已載入 {interviewees.length} 位</span>
          ) : (
            <span className="text-secondary">尚未載入</span>
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="scheduling-requirements">
            <h6 className="mb-3">排程要求設定：</h6>

            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  面試官人數範圍:
                </Form.Label>
                <Col sm={8}>
                  <Row>
                    <Col>
                      <Form.Control
                        type="number"
                        min={1}
                        max={10}
                        value={interviewerRange.min}
                        onChange={(e) => handleInterviewerRangeChange('min', parseInt(e.target.value) || 1)}
                      />
                    </Col>
                    <Col xs="auto" className="d-flex align-items-center">
                      <span>至</span>
                    </Col>
                    <Col>
                      <Form.Control
                        type="number"
                        min={1}
                        max={10}
                        value={interviewerRange.max}
                        onChange={(e) => handleInterviewerRangeChange('max', parseInt(e.target.value) || 1)}
                      />
                    </Col>
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm={4}>
                  應試者人數範圍:
                </Form.Label>
                <Col sm={8}>
                  <Row>
                    <Col>
                      <Form.Control
                        type="number"
                        min={1}
                        max={10}
                        value={intervieweeRange.min}
                        onChange={(e) => handleIntervieweeRangeChange('min', parseInt(e.target.value) || 1)}
                      />
                    </Col>
                    <Col xs="auto" className="d-flex align-items-center">
                      <span>至</span>
                    </Col>
                    <Col>
                      <Form.Control
                        type="number"
                        min={1}
                        max={10}
                        value={intervieweeRange.max}
                        onChange={(e) => handleIntervieweeRangeChange('max', parseInt(e.target.value) || 1)}
                      />
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
            </Form>

            <p className="mt-3 text-muted small">
              說明：設定每場面試所需的面試官和應試者人數範圍 (包含最小值和最大值)
            </p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default StatusDisplay;