import styled, {css} from "styled-components";

export const VideoContainer = styled.video`
    width: 100%;
    height: 100%;
    min-height: 100%;

`;

export const ExtraOptions = styled.div`
    display: block;
    bottom: 10%;
    position: absolute;
    height: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    max-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const activeButton = css`
    font-size: 20px;
    transition: .05s;
`;

export const TimeButton = styled.button`
    width: 200px;
    margin-bottom: 5px;
    background-color: transparent;
    border: none;
    color: #fff;
    font-weight: 700;
    height: 40px;
    cursor: pointer;

    ${props => props.active && activeButton}

    &:last-of-type {
        margin-bottom: 20px;
    }
`;