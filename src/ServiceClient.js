import Axios from 'axios';

const API = 'http://localhost:5000/api';

export async function GetSearchResults(searchParameters, callback) {
  Axios.get(API + searchParameters).then(response => {
    callback(response);
  });
}

export default function() {}
