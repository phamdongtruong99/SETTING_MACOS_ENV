import { useState } from 'react';

function useScrollTop() {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = event => setScrollTop(event.target.scrollTop);
  return [scrollTop, { onScroll }];
}

export default useScrollTop;

//git: https://codesandbox.io/s/dawn-sunset-uhbtu?fontsize=14
