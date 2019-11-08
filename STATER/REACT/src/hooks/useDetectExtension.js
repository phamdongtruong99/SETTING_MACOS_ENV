import { useState, useEffect } from 'react';

const useDetectExtension = id => {
  const [isDetected, setDetected] = useState(false);
  useEffect(() => {
    try {
      const iChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
      if (!iChrome) {
        return;
      }
      const s = document.createElement('img');
      s.style.display = 'none';
      s.src = `chrome-extension://${id}/assets/icon-check.png`;
      document.body.appendChild(s);
      s.onload = function() {
        setDetected(true);
      };
      s.onerror = function() {
        setDetected(false);
      };
    } catch (error) {
      setDetected(false);
    }
  }, []);

  return isDetected;
};

export default useDetectExtension;

// Use for detect extension. If it installed return true, otherwise return false
