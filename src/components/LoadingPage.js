// src/components/LoadingPage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Light from './Light';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingPage = () => {
  const [activeLight, setActiveLight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight((prev) => (prev + 1) % 4); // Cambié el número a 4
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const lights = Array.from({ length: 4 }, (_, index) => (
    <Light key={index} active={index === activeLight} current={activeLight} />
  ));

  return <LoadingContainer>{lights}</LoadingContainer>;
};

export default LoadingPage;
