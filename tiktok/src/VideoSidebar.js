import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
function VideoSidebar({ likes, shares, message }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon
            style={{ color: "white" }}
            fontSize="large"
            onClick={(e) => setLiked(false)}
          />
        ) : (
          <FavoriteIcon
            style={{ color: "red" }}
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes : likes + 1}</p>
      </div>
      <div className="videoSidebar__button">
        <CommentIcon fontSize="large" />
        <p>{message}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
