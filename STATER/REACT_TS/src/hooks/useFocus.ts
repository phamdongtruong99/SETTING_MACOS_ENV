import { useState } from 'react';

const useFocus = () => {
  const [focused, set] = useState(false);
  return {
    focused,
    bind: {
      onFocus: () => set(true),
      onBlur: () => set(false),
    },
  };
};

export default useFocus;

//git: https://zakariaharti.github.io/react-hookedup/?selectedKind=Welcome&selectedStory=to%20React%20hookedUp&full=0&addons=1&stories=1&panelRight=0
