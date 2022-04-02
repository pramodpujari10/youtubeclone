// import axios from 'axios'

// const request = axios.create({
//   baseUrl: 'https://youtube.googleapis.com/youtube/v3',
//   params: {
//     key: 'AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U',
//     // key: 'AIzaSyBMSTkFgf5W0LI4ZAUs7Jiq0g0GGeQTsYY',
//   },
// });
// export default request;

import axios from 'axios';
// console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3/',
  params: {
    key: 'AIzaSyBMSTkFgf5W0LI4ZAUs7Jiq0g0GGeQTsYY',
    // 'AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U',
  },
});

export default request;

// AIzaSyBMSTkFgf5W0LI4ZAUs7Jiq0g0GGeQTsYY;
