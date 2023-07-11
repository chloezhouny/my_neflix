import React, { useCallback, useEffect } from 'react';

export const useResponsive = () => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const [screenType, setScreenType] = React.useState('INITIAL');

  const updateWindowDimensions = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    if (window.innerWidth >= 1536) {
      setScreenType('Xl');
    } else if (window.innerWidth < 1536 && window.innerWidth >= 1200) {
      setScreenType('Lg');
    } else if (window.innerWidth < 1200 && window.innerWidth >= 900) {
      setScreenType('Md');
    } else if (window.innerWidth < 900 && window.innerWidth >= 600) {
      setScreenType('Sm');
    } else {
      setScreenType('Xs');
    }
  }, [windowWidth]);

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [updateWindowDimensions]);

  return {
    windowWidth,
    windowHeight,
    screenType,
  };
};
