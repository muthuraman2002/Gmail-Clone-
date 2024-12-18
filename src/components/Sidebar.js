import React from "react";
import { Link } from "react-router-dom";

const Sidebar=() =>{
  return (
    <div style={{ width:"25%", backgroundColor: "#202c33", color: "white", paddingTop: "20px" }}>
    <div style={{display :"flex" , flexDirection:"column"}}>
<span>

      <Link to="/inbox" style={styles.link}>
        <div>Inbox</div>
      </Link>
</span>
<span>

      <Link to="/compose" style={styles.link}>
        <div>Compose</div>
      </Link>
</span>
    </div>
    <div style={{display:"flex", position:"absolute",flexDirection:"column"}}>

    </div>
      {/* <Link to="/" style={styles.link}>
        <div>Sent</div>
      </Link>
      <Link to="/" style={styles.link}>
        <div>Drafts</div>
      </Link>
      <Link to="/" style={styles.link}>
        <div>Spam</div>
      </Link>
      <Link to="/" style={styles.link}>
        <div>Trash</div>
      </Link> */}


    </div>
  );
}

const styles = {
  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px 20px",
    display: "block",
    fontSize: "16px",
  },
};

export default Sidebar;
