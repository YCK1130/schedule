import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import type { Interviewee, Interviewer, Room } from '../types';

interface StatusDisplayProps {
  interviewers: Interviewer[];
  interviewees: Interviewee[];
  rooms: Room[];
  dataLoaded: {
    interviewers: boolean;
    interviewees: boolean;
    rooms: boolean;
  };
}

const StatusDisplay: React.FC<StatusDisplayProps> = ({
  interviewers,
  interviewees,
  rooms,
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
        <ListGroup.Item>
          <strong>Rooms:</strong>{' '}
          {dataLoaded.rooms ? (
            <span className="text-success">
              {rooms.length} loaded
            </span>
          ) : (
            <span className="text-secondary">Not loaded</span>
          )}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default StatusDisplay;