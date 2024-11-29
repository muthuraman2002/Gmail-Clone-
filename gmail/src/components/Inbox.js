
import React from "react";

const  Inbox =() =>{
  const emails = [
    { id: 1, from: "John Doe", subject: "Meeting at 10AM tomorrow", date: "9:45 AM" },
    { id: 2, from: "Jane Smith", subject: "Project Update", date: "Yesterday" },
    { id: 3, from: "Alex Brown", subject: "New Job Opportunity", date: "2 days ago" },
    { id: 4, from: "Anna Green", subject: "Lunch plans", date: "3 days ago" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ fontSize: "18px", marginBottom: "20px" }}>Inbox</div>
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
            <div style={{ fontWeight: "bold", fontSize: "16px" }}>{email.from}</div>
            <div style={{ color: "#5f6368", fontSize: "14px" }}>{email.subject}</div>
          </div>
          <div style={{ fontSize: "12px", color: "#9e9e9e" }}>{email.date}</div>
        </div>
      ))}
    </div>
  );
}

export default Inbox;
