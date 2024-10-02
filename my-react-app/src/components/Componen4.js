import React from "react";

export default function Componen4(props) {
  const { type, text } = props;
  const Tag = type;
  return (
    <div>
      {/* type is h1 passed from parent conatiner and text is some contenet but type is not set to <h1></h1> why resolve */}
      <Tag>{text}</Tag>
    </div>
  );
}
