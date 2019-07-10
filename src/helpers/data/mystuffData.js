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

const getSingleItem = itemId => axios.get(`${baseUrl}/myStuff/${itemId}.json`);

const addNewStuff = newItem => axios.post(`${baseUrl}/myStuff.json`, newItem);

const deleteStuff = itemId => axios.delete(`${baseUrl}/myStuff/${itemId}.json`);

const putItem = (updatedItem, itemId) => axios.put(`${baseUrl}/myStuff/${itemId}.json`, updatedItem);

export default {
  getMyStuff,
  addNewStuff,
  deleteStuff,
  getSingleItem,
  putItem,
};
