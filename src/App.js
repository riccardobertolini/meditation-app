import VideoContainer from './components/VideoBG';
import Timer from './components/Timer'

function App() { 

  return (
    <div className="App">
      <VideoContainer/>
      <Timer time={600} />
    </div>
  );
}

export default App;
