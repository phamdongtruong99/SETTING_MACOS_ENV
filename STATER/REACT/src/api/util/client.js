const localStorageKey = '__bookshelf_token__';

function client(endpoint, {body, ...customConfig} = {}) {
  const token = window.localStorage.getItem(localStorageKey)
  const headers = {'content-type': 'application/json'}
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }
  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(async response => {
      if (response.status === 401) {
        logout()
        window.location.assign(window.location)
        return
      }
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}
