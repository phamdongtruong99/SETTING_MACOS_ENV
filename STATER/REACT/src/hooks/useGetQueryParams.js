import { useLocation } from 'react-router';

const useGetQueryParams = () => {
  const location = useLocation();
  const getQueryParams = params => {
    const reg = new RegExp(`[?&]${params}=([^&#]*)`, 'i');
    const queryString = reg.exec(location.search);
    return queryString ? queryString[1] : null;
  };
  return { getQueryParams };
};

export default useGetQueryParams;
