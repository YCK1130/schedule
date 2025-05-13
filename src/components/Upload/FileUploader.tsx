import Papa from 'papaparse';
import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import * as XLSX from 'xlsx';

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

  const parseExcelFile = (file: File): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const buffer = e.target?.result as ArrayBuffer;
          const data = new Uint8Array(buffer);
          const workbook = XLSX.read(data, { type: 'array' });
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

  const handleFileUpload = async (
    file: File, 
    setFileName: (name: string) => void,
    onDataLoaded: (data: any[]) => void,
    fileType: string
  ) => {
    if (!file) return;
    
    setFileName(file.name);
    
    try {
      if (file.name.endsWith('.csv')) {
        Papa.parse(file, {
          header: true,
          complete: (results) => {
            onDataLoaded(results.data);
          },
          error: (error) => {
            console.error('Error parsing file:', error);
            alert(`Error parsing ${fileType} file`);
          }
        });
      } else {
        // Handle Excel files
        const data = await parseExcelFile(file);
        onDataLoaded(data);
      }
    } catch (error) {
      console.error('Error parsing file:', error);
      alert(`Error parsing ${fileType} file`);
    }
  };

  const handleInterviewersUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file, setInterviewersFileName, onInterviewersLoaded, 'interviewers');
    }
  };

  const handleIntervieweesUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file, setIntervieweesFileName, onIntervieweesLoaded, 'interviewees');
    }
  };

  const handleRoomsUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file, setRoomsFileName, onRoomsLoaded, 'rooms');
    }
  };

  // 下載範例檔案
  const downloadSample = (type: string) => {
    const samplePath = `/scheduling_app/samples/sample_${type}.csv`;
    const link = document.createElement('a');
    link.href = samplePath;
    link.download = `sample_${type}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 載入範例資料
  const loadSampleData = async (type: string) => {
    try {
      const response = await fetch(`/scheduling_app/samples/sample_${type}.csv`);
      const blob = await response.blob();
      const file = new File([blob], `sample_${type}.csv`, { type: 'text/csv' });

      switch(type) {
        case 'interviewers':
          handleFileUpload(file, setInterviewersFileName, onInterviewersLoaded, 'interviewers');
          break;
        case 'interviewees':
          handleFileUpload(file, setIntervieweesFileName, onIntervieweesLoaded, 'interviewees');
          break;
        case 'rooms':
          handleFileUpload(file, setRoomsFileName, onRoomsLoaded, 'rooms');
          break;
      }
    } catch (error) {
      console.error('Error loading sample:', error);
      alert(`Error loading sample ${type} file`);
    }
  };

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
            {['interviewers', 'interviewees', 'rooms'].map((type) => (
              <Col key={type} className="file-upload-col">
                <Form.Group>
                  <div className="file-upload-header">
                    <Form.Label>
                      {type === 'interviewers' ? '面試官檔案' : 
                       type === 'interviewees' ? '應試者檔案' : 
                       '會議室檔案'}
                    </Form.Label>
                    <div className="file-actions">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => downloadSample(type)}
                        className="sample-btn"
                      >
                        📥 範例
                      </Button>
                      <Button
                        variant="outline-info"
                        size="sm"
                        onClick={() => loadSampleData(type)}
                        className="try-btn"
                      >
                        ⚡️ 試用
                      </Button>
                    </div>
                  </div>
                  <Form.Control 
                    type="file" 
                    accept=".csv,.xlsx,.xls" 
                    onChange={type === 'interviewers' ? handleInterviewersUpload : 
                             type === 'interviewees' ? handleIntervieweesUpload : 
                             handleRoomsUpload} 
                    className="upload-input"
                  />
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