import video from './../assets/video.mp4';
import { VideoContainer } from './VideoBG.styles';

const VideoBG = () => <VideoContainer autoPlay="autoplay" loop="loop" muted>
        <source src={video} />
    </VideoContainer>;


export default VideoBG