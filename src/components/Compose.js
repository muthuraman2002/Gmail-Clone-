import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLinkSharp } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
const  Compose =()=> {
  const [bc, setBc] = useState("");
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    // Here you would handle sending the email logic
    alert("Email sent!");
    navigate("/");
  };
 const emailVerify=(email)=>{
  let isNotError=false
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if (emailRegex.test(email)) {
  isNotError=true
}
return isNotError
 }
  return (
    <div style={{ padding: "20px", margin: "auto", backgroundColor: "white", borderRadius: "6px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>  
    <div style={{ fontSize: "24px", marginBottom: "20px" }}>Compose Email</div>
      <div > 
      <span style={{padding:"10px",borderRadius:"3px"}}>
      <IoLinkSharp/>
      </span> 
      <span style={{padding:"10px"}}>
    <IoMdSend onClick={(e)=>handleSubmit(e)} />
      </span> 
      <span>
        <BsThreeDotsVertical/>
      </span>   
</div>
</div>
      <div>

      
        <input
          type="email"
          placeholder="To"
          value={to}
          onChange={(e) => {
            // if(emailVerify(e.target.value)){
            setTo(e.target.value)
          // }
          }}
          style={styles.input}
        />
      <input
          type="email"
          placeholder="Bc"
          value={bc}
          onChange={(e) =>setBc(e.target.value)}
          style={styles.input}
          />
        <textarea
          type="email"
          placeholder="Cc"
          value={cc}
          onChange={(e) => setCc(e.target.value)}
          style={styles.cC}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={styles.textarea}
        />
  
      </div>
    </div>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    height: "200px",
    boxSizing: "border-box",
  },
cC: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    height: "70px",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#0f9d58",
    color: "white",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    border: "none",
  },
};

export default Compose;
