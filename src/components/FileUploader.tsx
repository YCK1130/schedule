import Papa from 'papaparse';
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';

interface FileUploaderProps {
  onInterviewersLoaded: (data: any[]) => void;
  onIntervieweesLoaded: (data: any[]) => void;
  onRoomsLoaded: (data: any[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ 
  onInterviewersLoaded, 
  onIntervieweesLoaded, 
  onRoomsLoaded 
}) => {
  const [interviewersFileName, setInterviewersFileName] = useState<string>('');
  const [intervieweesFileName, setIntervieweesFileName] = useState<string>('');
  const [roomsFileName, setRoomsFileName] = useState<string>('');

  const handleInterviewersUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setInterviewersFileName(file.name);
    
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        onInterviewersLoaded(results.data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        alert('Error parsing interviewers CSV file');
      }
    });
  };

  const handleIntervieweesUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setIntervieweesFileName(file.name);
    
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        onIntervieweesLoaded(results.data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        alert('Error parsing interviewees CSV file');
      }
    });
  };

  const handleRoomsUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setRoomsFileName(file.name);
    
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        onRoomsLoaded(results.data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        alert('Error parsing rooms CSV file');
      }
    });
  };

  return (
    <Card className="mb-4 upload-card">
      <Card.Header as="h5">Upload Data Files</Card.Header>
      <Card.Body>
        <Form>
          <Row className="mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label>Interviewers CSV</Form.Label>
                <Form.Control 
                  type="file" 
                  accept=".csv" 
                  onChange={handleInterviewersUpload} 
                  className="upload-input"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Interviewees CSV</Form.Label>
                <Form.Control 
                  type="file" 
                  accept=".csv" 
                  onChange={handleIntervieweesUpload}
                  className="upload-input"
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group>
                <Form.Label>Rooms CSV</Form.Label>
                <Form.Control 
                  type="file" 
                  accept=".csv" 
                  onChange={handleRoomsUpload}
                  className="upload-input"
                />
              </Form.Group>
            </Col>
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
            {roomsFileName && (
              <div className="preview-item">
                <span className="text-success">✓ Rooms: {roomsFileName}</span>
              </div>
            )}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FileUploader;