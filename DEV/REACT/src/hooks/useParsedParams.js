import { useParams } from 'react-router-dom';

const useParsedParams = types => {
  const params = useParams();
  for (const key in types) {
    if (params[key] !== null) {
      params[key] = types[key](params[key]);
    }
  }
  return params;
};

export default useParsedParams;

//git: https://codesandbox.io/s/react-challenge-2-useparsedparams-7fnyc
