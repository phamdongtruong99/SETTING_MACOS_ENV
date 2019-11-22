import useInterval from './useInterval';

const useAutoCounter = (initialCount = 0, delay = 1000) => {
  const [value, setValue] = useState(initialCount);

  useInterval(() => {
    setValue(c => c + 1);
  }, delay);

  return value;
};

export default useAutoCounter;

// ex: https://codesandbox.io/s/share-a-hook-kydpm
