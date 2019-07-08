import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyStuff = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/myStuff.json`)
    .then((res) => {
      const myStuff = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        myStuff.push(res.data[fbKey]);
      });
      resolve(myStuff);
    })
    .catch(err => reject(err));
});

const addNewStuff = newItem => axios.post(`${baseUrl}/myStuff.json`, newItem);

export default { getMyStuff, addNewStuff };
