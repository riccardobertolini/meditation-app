import VideoContainer from './components/VideoBG';
import Timer from './components/Timer'
import ReactAudioPlayer from 'react-audio-player';
import {ExtraOptions, TimeButton} from './App.styles';
import { useState } from 'react';

function App() { 
  const [timer, setTimer] = useState(600);
  const [timerActive, setTimerActive] = useState(1);

  const updateValues = (time, value) => {
    setTimer(time);
    setTimerActive(value)
  }

  return (
    <div className="App">
      <VideoContainer/>
      <ExtraOptions>
        <TimeButton active={timerActive === 1} onClick={() => updateValues(600, 1)}>1 Min.</TimeButton>
        <TimeButton active={timerActive === 2} onClick={() => updateValues(1200, 2)}>2 Min.</TimeButton>
        <TimeButton active={timerActive === 5} onClick={() => updateValues(3000, 5)}>5 Min.</TimeButton>
        <TimeButton active={timerActive === 10} onClick={() => updateValues(6000, 10)}>10 Min.</TimeButton>
        <ReactAudioPlayer
          src="music.mp3"
          controls
          loop
        />
       </ExtraOptions>
      <Timer time={timer} />
    </div>
  );
}

export default App;
