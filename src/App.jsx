import { useState, useEffect } from "react";
import Station from "./Station";

function App() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=10")
      .then((response) => response.json())
      .then((data) => {
        setChannels(data.channels);
      });
  }, []);

  return (
    <div>
      {channels.map((channel) => {
        return <Station channel={channel} />;
      })}
    </div>
  );
}

export default App;
