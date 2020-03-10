import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const useRowFinder = () => {
  const ref = useRef(null);
  const [row, setRows] = useState({});

  const callback = ([entry]) => {
    if (!entry.target!!!entry.target.children) return;

    const items = Array.from(entry.target.children);

    let row = 0;

    const rowData = {};

    items.forEach((item, i) => {
      if (!item.previousElementSibling || item.offsetLeft < item.previousElementSibling.offsetLeft) {
        row += 1;
      }
      rowData[i] = row;
    });
    setRows(rowData)
  }

  useEffect(() => {
    const observer = new ResizeObserver(callback);
    const el = ref.current;
    observer.observer(el);
    return () => {
      observer.unobserver(el);
    }
  }, [])
  return <div></div>;
};

export default useRowFinder;


// https://www.youtube.com/watch?v=BjefKzoFYVc