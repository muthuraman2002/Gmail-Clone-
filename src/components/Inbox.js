import { Button } from "bootstrap";
import React, { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { Drawer, Placeholder } from "rsuite";
import GmailRichTextEditor from "./test";
const Inbox = () => {
  const APPROVED = "APPROVED";
  const PENDING = "PENDING";
  const [isNotificationOpen, setisNotificationOpen] = useState(false);

  const emails = [
    {
      id: 1,
      from: "John Doe",
      subject: "Meeting at 10AM tomorrow",
      date: "9:45 AM",
      status: "PENDING",
    },
    {
      id: 2,
      from: "Jane Smith",
      subject: "Project Update",
      date: "Yesterday",
      status: "APPROVED",
    },
    {
      id: 3,
      from: "Alex Brown",
      subject: "New Job Opportunity",
      date: "2 days ago",
      status: "PENDING",
    },
    {
      id: 4,
      from: "Anna Green",
      subject: "Lunch plans",
      date: "3 days ago",
      status: "APPROVED",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // Align content to the right

          zIndex: 1,
        }}
      >
        <span style={{ fontSize: "18px", marginBottom: "20px" }}>Inbox</span>
        <span>
          <MdNotificationsActive
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => setisNotificationOpen(true)}
          />
        </span>
      </div>
      {emails.map((email) => (
        <div
          key={email.id}
          style={{
            padding: "15px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
        >
          <div>
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>
              {email.from}
            </div>
            <div style={{ color: "#5f6368", fontSize: "14px" }}>
              {email.subject}
            </div>
          </div>
          <div style={{ fontSize: "12px", color: "#9e9e9e" }}>
            <span style={{ padding: "10px" }}>{email.date}</span>
            <span
              style={{
                fontSize: "12px",
                color: email.status === APPROVED ? "green" : "red",
              }}
            >
              {email.status}
            </span>
          </div>
        </div>
      ))}
      <div style={{padding:0,margin:0}}>

      <Drawer
        open={isNotificationOpen}
        onClose={() => setisNotificationOpen(false)}
        placement="right"
      >
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Actions></Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          <Placeholder.Paragraph rows={8} />
        </Drawer.Body>
      </Drawer>
      <GmailRichTextEditor/>
      </div>
    </div>
  );
};

export default Inbox;
