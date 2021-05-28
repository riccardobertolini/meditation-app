import styled from "styled-components";

export const VideoContainer = styled.video`
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 1;
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
    z-index: -1;
`;