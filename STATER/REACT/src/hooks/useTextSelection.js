import { useState, useEffect, useRef } from 'react';
import { getTargetElement, BasicTarget } from '../utils/dom';


const initRect: IRect = {
  top: NaN,
  left: NaN,
  bottom: NaN,
  right: NaN,
  height: NaN,
  width: NaN,
};

const initState = {
  text: '',
  ...initRect,
};

function getRectFromSelection(selection: Selection | null): IRect {
  if (!selection) {
    return initRect;
  }

  if (selection.rangeCount < 1) {
    return initRect;
  }
  const range = selection.getRangeAt(0);
  const { height, width, top, left, right, bottom } = range.getBoundingClientRect();
  return {
    height,
    width,
    top,
    left,
    right,
    bottom,
  };
}

const useTextSelection = (target) {
  const [state, setState] = useState(initState);

  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const el = getTargetElement(target, document);

    if (!el) {
      return () => {};
    }

    const mouseupHandler = () => {
      let selObj = null;
      let text = '';
      let rect = initRect;
      if (!window.getSelection) return;
      selObj = window.getSelection();
      text = selObj ? selObj.toString() : '';
      if (text) {
        rect = getRectFromSelection(selObj);
        setState({ ...state, text, ...rect });
      }
    };

    const mousedownHandler = () => {
      if (!window.getSelection) return;
      if (stateRef.current.text) {
        setState({ ...initState });
      }
      const selObj = window.getSelection();
      if (!selObj) return;
      selObj.removeAllRanges();
    };

    el.addEventListener('mouseup', mouseupHandler);

    document.addEventListener('mousedown', mousedownHandler);

    return () => {
      el.removeEventListener('mouseup', mouseupHandler);
      document.removeEventListener('mousedown', mousedownHandler);
    };
  }, [typeof target === 'function' ? undefined : target]);

  return state;
}

export default useTextSelection;
