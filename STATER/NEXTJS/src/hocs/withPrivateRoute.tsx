import { getMe, getConfigMe } from '@/redux/auth';
import { getBusinessMe } from '@/redux/business';
import { useAppDispatch } from '@/redux/store';
import { getToken } from '@/utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withPrivateRoute = (Component: React.FC) => (
  props: unknown,
): React.ReactNode => {
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const isAuth = getToken();
    if (!isAuth) {
      push('/');
    } else {
      dispatch(getConfigMe());
      dispatch(getBusinessMe());
      dispatch(getMe());
    }
  }, []);

  return <Component {...props} />;
};

export default withPrivateRoute;
