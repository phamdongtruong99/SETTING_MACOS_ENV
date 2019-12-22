import { useState, useEffect } from 'react';

const useDetectExtension = id => {
  const [isDetected, setDetected] = useState(false);
  useEffect(() => {
    try {
      const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
      if (!isChrome) {
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
