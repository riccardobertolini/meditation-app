import { useState } from 'react';
import VideoContainer from './components/VideoBG';
import Timer from './components/Timer'

function App() {
  const [selectedTime, setSelectedTime] = useState(600);

  return (
    <div className="App">
      <VideoContainer/>
      <Timer time={selectedTime} />
    </div>
  );
}

export default App;
