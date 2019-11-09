import Axios from 'axios';

const API = 'http://localhost:5000/api'

export function GetSearchResults(searchParameters, callback) {
    Axios.post(API + '/data/' + searchParameters).then(response => {
        callback(response)
    })
}

export default function() {}