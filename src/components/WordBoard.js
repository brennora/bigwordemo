import React from "react";

function WordBoard({ correctWords }) {


  return (
    <div className="WordBoard">
      <b style = {{color: "white", fontSize: "16px"}}>Correct words:</b>
      <br/>
      {correctWords.map((v) => <p style = {{color: "white",fontSize: "12px"}}>{v}</p>)}
    </div>
  );
}

export default WordBoard;
