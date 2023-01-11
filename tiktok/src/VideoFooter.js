import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
// import Ticker from "react-ticker";
import "./VideoFooter.css";
function VideoFooter({ channel, desc}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{desc}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          {/* <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>Song goes here</p>
              </>
            )}
          </Ticker> */}
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://www.svgrepo.com/show/434790/disc.svg"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
