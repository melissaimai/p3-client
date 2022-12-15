export const url =
  `${process.env.REACT_APP_SERVER_URL}/api` || 'http://localhost:5005/api';

export const setHeaders = () => {
  const headers = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  };

  return headers;
};
