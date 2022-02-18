import React from "react";
import "./ErrorCard.css";
import dino from "./assets/404-dino.png";

function ErrorCard(props) {
  return (
    <div className="errorCard">
      <div>
        <h3> {props.errorMsg} </h3>
      </div>
      <div>
        <img
          src={dino}
          alt="error"
          style={{ width: "40px", marginTop: "0.6rem" }}
        ></img>
        <img
          src={dino}
          alt="error"
          style={{ width: "40px", marginTop: "0.6rem" }}
        ></img>
      </div>
    </div>
  );
}

export default ErrorCard;
