import { useState } from 'react';

const useHover = () => {
  const [hovered, set] = useState(false);
  return {
    hovered,
    bind: {
      onMouseEnter: () => set(true),
      onMouseLeave: () => set(false),
    },
  };
};

export default useHover;

// git: https://zakariaharti.github.io/react-hookedup/?selectedKind=Welcome&selectedStory=to%20React%20hookedUp&full=0&addons=1&stories=1&panelRight=0
