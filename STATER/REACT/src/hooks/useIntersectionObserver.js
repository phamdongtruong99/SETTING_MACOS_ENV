import React, { useEffect } from 'react';

function useIntersectionObserver(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(function() {
    const observer = new IntersectionObserver(function([entry]) {
      console.log('Run once for every time its on screen');
      console.log(entry);
    });
    // Observe the element we want to observve
    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  });
}

export default useIntersectionObserver;
