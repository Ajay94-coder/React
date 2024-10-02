import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success");
  };

  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className={`container text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Enter text below</label>
          <textarea
            className="form-control"
            style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary mt-3 mx-2"
            onClick={handleUpClick}
            disabled={text.length === 0}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary mt-3"
            onClick={handleLoClick}
            disabled={text.length === 0}
          >
            Convert to LowerCase
          </button>
        </div>
      </div>
      <div className={`container my-3 text-${props.mode === 'dark' ? 'white' : 'dark'}`}>
        <h2>Your text summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words,{" "}
          {text.length} characters
        </p>
        <p>{text.trim() === "" ? 0 : (0.008 * text.trim().split(/\s+/).length).toFixed(2)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
