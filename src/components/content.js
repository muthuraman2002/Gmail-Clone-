import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";

const GmailRichTextEditor = () => {
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");

  const handleSend = () => {
    console.log("Subject:", subject);
    console.log("Message:", content);
    alert("Message Sent!");
  };

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your message here..."
          />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GmailRichTextEditor;
