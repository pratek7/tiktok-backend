import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";
function Video({ url }) {
  const [playing, setPlaying] = useState(false);
  const videoref = useRef(null);
  const handelVideoPress = () => {
    if (playing) {
      videoref.current.pause();
      setPlaying(false);
    } else {
      videoref.current.play();
      setPlaying(true);
    }

    // play it
  };
  return (
    <div className="video">
      <video
        onClick={handelVideoPress}
        className="video__player"
        loop
        ref={videoref}
        src={url}
      ></video>

      <VideoFooter
        channel="Pretiee7"
        des="This is description "
        song="99 problem but REACT ain't One Hahaha"
      />
      <VideoSidebar likes={111} shares={222} messages={333} />
    </div>
  );
}

export default Video;
