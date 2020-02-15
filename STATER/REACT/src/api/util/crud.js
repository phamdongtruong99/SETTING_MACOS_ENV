import { get, post, put, del, getQueryString } from './utils';

const PREFIX = '/api/offline';

export async function getAllDataApi(resource, query, customURL, needToken) {
  return get(`${PREFIX}/${resource}${query}`, null, {}, customURL, needToken);
}

export async function getDataByIdApi(resource, id, customURL, needToken) {
  return get(
    `${PREFIX}/${resource}${id ? `/${id}` : ''}`,
    null,
    {},
    customURL,
    needToken,
  );
}

export async function deleteDataApi(resource, customURL, needToken) {
  return del(`${PREFIX}/${resource}`, null, {}, customURL, needToken);
}

export async function deleteDataByIdApi(resource, id, customURL, needToken) {
  return del(
    `${PREFIX}/${resource}${id ? `/${id}` : ''}`,
    null,
    {},
    customURL,
    needToken,
  );
}

export async function postDataApi(resource, data, customURL, needToken) {
  return post(`${PREFIX}/${resource}`, data, {}, customURL, needToken);
}

export async function putDataApi(resource, id, data, customURL, needToken) {
  return put(
    `${PREFIX}/${resource}${id ? `/${id}` : ''}`,
    data,
    {},
    customURL,
    needToken,
  );
}

export async function exportExcelApi(resource, data, customURL, needToken) {
  return get(
    `${PREFIX}/${resource}/exportExcel`,
    data,
    {},
    customURL,
    needToken,
  );
}

export const exportExcel = (resource, query) => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `${
      process.env.REACT_APP_SERVER_URL
    }api/v1/${resource}/exportExcel?${getQueryString(query)}`,
  );
  request.setRequestHeader(
    'Authorization',
    localStorage.getItem('sessionToken'),
  );
  request.responseType = 'arraybuffer';
  request.onload = () => {
    if (request.status === 200) {
      // Try to find out the filename from the content disposition `filename` value
      const disposition = request.getResponseHeader('Content-Disposition');
      const matches = disposition.substring(
        disposition.indexOf('filename=') + 9,
        disposition.length,
      );
      const filename =
        matches != null && matches !== '' ? matches : `${resource}.xlsx`;
      // The actual download
      const blob = new Blob([request.response], {
        type: request.getResponseHeader('content-type'),
      });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  request.send();
};
