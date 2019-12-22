import { useEFfect, useState } from 'react';

const useMobileDetect = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const isAndroid = Boolean(navigator.userAgent.match(/Android/i));
    const isIos = Boolean(navigator.userAgent.match(/iPhone|iPad|iPod/i));
    const isOpera = Boolean(navigator.userAgent.match(/Opera Mini/i));
    const isIEMobile = Boolean(navigator.userAgent.match(/IEMobile/i));
    setMobile(Boolean(isAndroid || isIos || isOpera || isIEMobile));
  }, []);

  return {
    isMobile,
  };
};

export default useMobileDetect;
