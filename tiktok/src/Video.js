import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";
function Video({ url, channel, des, song, messages, shares, like }) {
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

      <VideoFooter channel={channel} des={des} song={song} />
      <VideoSidebar like={like} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
