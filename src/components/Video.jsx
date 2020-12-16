import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Video.css";

const Video = () => {
  const [handleChange, setHandleChange] = useState("");
  return (
    <div className="Video-container">
      {/* <input
        onChange={(e) => {}}
        className="Form-video"
        type="text"
        placeholder="input the video url"
      /> */}
      <ReactPlayer url="https://youtu.be/8L7JyXGG7ro" controls={true} />
    </div>
  );
};

export default Video;
