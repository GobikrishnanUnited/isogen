import axios from 'axios'

const api = axios.create({
baseURL: 'https://isodemo.unitdtechnologies.com:2018',
//baseURL: 'http://localhost:3001',
});


// const loginApi = axios.create({
//   baseURL: 'https://art-cause.com:3003'
// });


export default api