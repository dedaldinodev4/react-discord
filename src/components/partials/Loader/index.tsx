import React from 'react';
import Lottie from 'react-lottie'
import animationData from './lottie.json'

const options = {
  name: 'animation',
  animationData: animationData,
  autoplay: true,
  loop: true,
  renderSettongs: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

export const Loader: React.FC = () => {
  return (
    <>
      <Lottie 
        options= {options}
        height = {500}
        width = {500}
      />
    </>
  );
}
