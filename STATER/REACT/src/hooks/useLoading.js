import { useEffect } from 'react';

const useLoading = () => {
  useEffect(() => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      setTimeout(() => {
        ele.classList.add('available');
      }, 500);
      setTimeout(() => {
        ele.outerHTML = '';
      }, 1500);
    }
  }, []);
};

export default useLoading;
