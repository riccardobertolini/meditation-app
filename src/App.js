import VideoContainer from './components/VideoBG';
import Timer from './components/Timer'
import ReactAudioPlayer from 'react-audio-player';
import {ExtraOptions, TimeButton} from './App.styles';
import { useState } from 'react';

function App() { 
  const [timer, setTimer] = useState(600);
  const [timerText, setTimerText] = useState('1 Minute');

  const updateValues = (time, value) => {
    setTimer(time);
    setTimerText(`${value} Minutes`)
  }

  return (
    <div className="App">
      <VideoContainer/>
      <ExtraOptions>
        Medidate time selected: {timerText}
        <TimeButton onClick={() => updateValues(600, 1)}>1 Min.</TimeButton>
        <TimeButton onClick={() => updateValues(1200, 2)}>2 Min.</TimeButton>
        <TimeButton onClick={() => updateValues(3000, 5)}>5 Min.</TimeButton>
        <TimeButton onClick={() => updateValues(6000, 10)}>10 Min.</TimeButton>
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
