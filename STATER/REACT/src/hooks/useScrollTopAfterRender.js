import { useEffect } from 'react';

const useScrollTopAfterRender = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollTopAfterRender;

//git: https://codesandbox.io/s/dawn-sunset-uhbtu?fontsize=14
