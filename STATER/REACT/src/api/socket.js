import openSocket from 'socket.io-client';

let socket = null;
export const initSocket = cbFunc => {
  socket = openSocket(
    `${process.env.REACT_APP_SERVER_URL}/dashboard?token=${localStorage.getItem(
      'sessionToken',
    )}&businessId=${localStorage.getItem(
      'businessId',
    )}&locationId=${localStorage.getItem('locationId')}`,
    {
      transports: ['websocket'],
    },
  );
  socket.on('connected', data => cbFunc({ channel: 'connected', ...data }));
  socket.on('changed', data => {
    cbFunc({ channel: 'changed', ...data });
  });

  socket.on('trackActivity', data => {
    cbFunc({ channel: 'trackActivity', ...data });
  });
  return socket;
};

export const disconnectSocket = () => {
  socket && socket.disconnect();
};
