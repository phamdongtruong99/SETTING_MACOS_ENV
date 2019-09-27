import { useMemo } from 'react';
import { useLocation } from 'react-router';
import qs from 'query-string';

const useQueryParams = () => {
  const { search } = useLocation();
  return useMemo(() => (search ? qs.parse(search.substr(1)) : {}), [search]);
};

return useQueryParams;

// git: https://codesandbox.io/s/lingering-currying-u0m52
