import { useLocation } from 'react-router';

const useSearchParams = () => new URLSearchParams(useLocation().search); // C1

return useSearchParams;

// git: https://codesandbox.io/s/lingering-currying-u0m52
