import styled, {css, keyframes} from "styled-components";

export const CircledTimer = styled.div`
    width: 100%;
    max-width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: linear-gradient(to bottom, transparent ${props => props.percentuage}%, white ${props => props.percentuage}%);
`;

const buttonStyle = css`
    position: absolute;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    background: transparent;
    border: none;
    color: #333;
    background-color: rgba(250,250,250,.6);
    border-radius: 10px;
    width: 120px;
    font-size: 16px;
    height: 40px;
    font-weight: 600;
    font-family: Arial, sans-serif;
`;

export const StartButton = styled.button`
    ${buttonStyle}
    top: calc(50% - 30px);
`;

export const ResetButton = styled.button`
    ${buttonStyle}
    top: calc(50% + 30px);
    font-size: 12px;
    height: 30px;
`;