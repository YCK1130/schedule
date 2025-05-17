import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
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
  return (
    <Card className="mt-4">
      <Card.Header as="h5">Data Status</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <strong>Interviewers:</strong>{' '}
          {dataLoaded.interviewers ? (
            <span className="text-success">
              {interviewers.length} loaded
            </span>
          ) : (
            <span className="text-secondary">Not loaded</span>
          )}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Interviewees:</strong>{' '}
          {dataLoaded.interviewees ? (
            <span className="text-success">
              {interviewees.length} loaded
            </span>
          ) : (
            <span className="text-secondary">Not loaded</span>
          )}
        </ListGroup.Item>
        <div className="scheduling-requirements">
            <h6>排程要求：</h6>
            <ul>
              <li>每場面試需要 2 位面試官</li>
              <li>每場面試需要 1 位面試者</li>
            </ul>
          </div>
      </ListGroup>
    </Card>
  );
};

export default StatusDisplay;