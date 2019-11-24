import { useEffect } from 'react';

const useFocusOnMount = () => {
  const ref = React.createRef();
  useEffect(() => {
    if (ref) {
      ref.current.focus();
    }
  }, [ref]);
  return ref;
};

export default useFocusOnMount;

// example: https://stackblitz.com/edit/react-mxzya1
