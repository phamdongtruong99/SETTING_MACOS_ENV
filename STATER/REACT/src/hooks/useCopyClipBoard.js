import { useState } from 'react';
import { copyStringToClipboard } from '../utils/tools';

const useCopyClipBoard = () => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = async str => {
    const result = await copyStringToClipboard(str);
    result && setCopied(true);
  };
  setTimeout(() => {
    setCopied(false);
  }, 1000);
  return [isCopied, handleCopy];
};

export default useCopyClipBoard;
