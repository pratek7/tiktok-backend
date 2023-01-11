import React, {useState, useEffect} from "react";
import axios from "./axios.js";
import Video from "./Video";
import "./App.css";

function App() {
  const [Videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  });
  console.log(Videos);
  return (
    <div className="app">
      <div className="app__videos">
        {Videos.map(({ url, channel, desc, songs, likes, message, shares }) => (
          <Video
            url={url}
            channel={channel}
            songs={songs}
            likes={likes}
            message={message}
            desc={desc}
            shares={shares}
          />
        ))}
        {/* <Video
          url="https://v16m.tiktokcdn.com/1f124d19ce38eadd2032908cc63ce6fa/63beec0f/video/tos/alisg/tos-alisg-pve-0037/oov7AfAKozxu1gBGhwJ7A3BPINnVBgAhd6UC8Q/?a=1180&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=4810&bt=2405&cs=0&ds=3&ft=pfusdMkF8Zmo0y~wW64jV9.-PpWrKsdm&mime_type=video_mp4&qs=0&rc=Z2ZmNWY0Zzo4NWVkOzY1ZkBpajozeDM6ZmRyaDMzODgzNEA1MWI2NDA0X2ExYzMuNi41YSNxc3AtcjRnM2tgLS1kLy1zcw%3D%3D&l=202301111103438F18D9A6E7719020E710&btag=80000&cc=3"
          channel="this is test"
          desc="yooo guys"
          songs="this is"
          likes={150}
          messages={100}
          shares={10}
        /> */}
      </div>
    </div>
  );
}

export default App;
