import { get, post, put, del, getQueryString } from './utils';

export async function getAllDataApi(resource, data) {
  return get(`/${resource}`, data);
}

export async function getDataByIdApi(resource, id, data) {
  return get(`/${resource}/${id}`, data);
}

export async function deleteDataApi(resource, id) {
  if (!id) {
    throw new TypeError('Id not be undefined');
  }
  return del(`/${resource}/${id}`);
}

export async function postDataApi(resource, data) {
  return post(`/${resource}`, data);
}

export async function putDataApi(resource, id, data) {
  return put(`/${resource}/${id}`, data);
}

export async function exportExcelApi(resource, data) {
  return get(`/${resource}/exportExcel`, data);
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
