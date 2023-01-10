import React from "react";

import Video from "./Video";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v16-webapp.tiktok.com/c8f003f80a946d460ca8314d67aa24e9/63bd4003/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/oQajvQnhIDBDDmQKbCAQUIIebB8iETeQoDQVPF/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2744&bt=1372&cs=0&ds=3&ft=4b~OyMkF8Zmo0yZ2W64jVep6PpWrKsdm&mime_type=video_mp4&qs=0&rc=MzY0ZmczZzo8NTtlOWY6NkBpanhxNjs6Zjs0aDMzZjgzM0A0Li5gLS9eNV8xMmFeMmIxYSM2LjYxcjRnNXJgLS1kL2Nzcw%3D%3D&l=20230110043734C32F9561A2945604492A&btag=80000"
          channel="Preetie7"
          des="This is a description field......"
          songs="99 problem but REACT ain't one haha"
          like={4444}
          messages={450}
          shares={1000}
        />
        <Video />
      </div>
    </div>
  );
}

export default App;
