import { convertObjToQueryParams } from 'utils/tools';
import { useHistory, useRouteMatch, useLocation } from 'react-router';
import { convertParamsToObject } from 'utils/url';

const usePushParams = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const handlePushParams = (param, value) => {
    const params = {
      ...convertParamsToObject(location.search),
      [param]: value,
    };
    history.push({
      pathname: match.url,
      search: convertObjToQueryParams(params),
    });
  };
  return { handlePushParams };
};

export default usePushParams;
