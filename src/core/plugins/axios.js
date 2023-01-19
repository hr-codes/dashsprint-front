import axios from 'axios';
// import router from '@/core/config/router';

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URI,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
  },
});

// let refreshTokenRunning = null;

// function refreshToken() {
//   if (refreshTokenRunning !== null) {
//     return refreshTokenRunning;
//   }

//   refreshTokenRunning = new Promise((resolve, reject) => {
//     Axios
//       .post(`${import.meta.env.VITE_BACKEND_URI}token/refresh/`, {
//         refresh: localStorage.getItem('refresh_token'),
//       })
//       .then((request) => {
//         localStorage.setItem('access_token', request.data.access);
//         localStorage.setItem('refresh_token', request.data.refresh);

//         resolve(localStorage.getItem('access_token'));
//       })
//       .catch((err) => reject(err))
//       .finally(() => {
//         refreshTokenRunning = null;
//       });
//   });

//   return refreshTokenRunning;
// }

async function error() {
  // const originRequest = config.config;
  // if (!config.response) {
  //   return Promise.reject(config);
  // }
  // const urlParams = config.response.config.url.split('/');
  // if (urlParams.indexOf('token') !== -1 && urlParams.indexOf('refresh') !== -1) {
  //   if (config.response.status >= 400) {
  //     localStorage.removeItem('access_token');
  //     localStorage.removeItem('refresh_token');
  //     return router.go({
  //       name: 'auth.sign-in',
  //     });
  //   }
  // }
  // let requestResponse = '';
  // if (config.response.status === 401) {
  //   if (!localStorage.getItem('refresh_token')) {
  //     return Promise.reject(config);
  //   }
  //   await refreshToken()
  //     .then(async (refreshTokenResponse) => {
  //       originRequest.headers.Authorization = `Bearer ${refreshTokenResponse}`;
  //       await Axios(originRequest)
  //         .then((originRequestResponse) => {
  //           requestResponse = originRequestResponse;
  //         })
  //         .catch((err) => console.log(err));
  //     })
  //     .catch(() =>
  //       router.go({
  //         name: 'auth.sign-in',
  //       })
  //     );
  // }
  // if (config.response.status >= 400 && config.response.status !== 401) {
  //   return Promise.reject(config);
  // }
  // return Promise.resolve(requestResponse);
}

Axios.interceptors.request.use((config) => {
  if (config.requestConfig && !config.requestConfig.authorization) {
    return config;
  }

  const token = localStorage.getItem('access_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (!config.headers['Accept-Language']) {
    const language = localStorage.getItem('language');

    config.headers['Accept-Language'] = language || 'pt-BR';
  }

  return config;
});

Axios.interceptors.response.use(
  (response) => response,
  (config) => error(config)
);

export default Axios;
