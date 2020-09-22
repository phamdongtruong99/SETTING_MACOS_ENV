export const createMySocketMiddleware = (url) => {
    return storeAPI => {
        let socket = createMyWebsocket(url);

        socket.on("message", (message) => {
            storeAPI.dispatch({
                type : "SOCKET_MESSAGE_RECEIVED",
                payload : message
            });
        });

        return next => action => {
            if(action.type == "SEND_WEBSOCKET_MESSAGE") {
                socket.send(action.payload);
                return;
            }

            return next(action);
        }
    }
}

export const onAuthSuccess = () => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    const { token } = action.payload
    console.debug('Setting default auth header', token)
    axios.defaults.headers.common.Authorization = `${token.tokenType} ${
      token.accessToken
    }`
    socket.emit('authenticate', { token: token.accessToken })
  } else if (action.type === LOGIN_FAILURE) {
    delete axios.defaults.headers.Authorization
  }
  return next(action)
}

