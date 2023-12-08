// src/components/Light.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const colors = ["#0099FF", "#FF0000", "#F3A200", "#00B30C"];

const blink = keyframes`
  0%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  20%, 80% {
    opacity: 1;
    transform: translateY(-5px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const colorChange = (currentColor) => keyframes`
  0%, 100% {
    background-color: #909090;
  }
  50% {
    background-color: ${currentColor};
  }
`;

const LightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  animation: ${blink} 1s infinite;
  animation-play-state: ${(props) => (props.active ? 'running' : 'paused')};
`;

const LightEgg = styled.div`
  width: 20px;
  height: 30px;
  background-color: #909090;
  border-radius: 50% 50% 40% 40%;
  margin-bottom: -0.5px;
  position: relative;
  z-index: 1;
  animation: ${(props) => (props.active ? colorChange(colors[props.current]) : 'none')} 0.5s infinite;
`;

const BulbBase = styled.div`
  width: 18px;
  height: 17px;
  background-color: #282828;
  border-radius: 3px;
  margin-top: -5px;
  z-index: 2;
`;

const Light = ({ active, current }) => {
  return (
    <LightContainer active={active}>
      <LightEgg active={active} current={current} />
      <BulbBase />
    </LightContainer>
  );
};

export default Light;