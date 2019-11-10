import Axios from 'axios';

const API = 'https://localhost:44373/api/Search';

export async function GetSearchResults(searchParameters) {
  return Axios.get(API + "?sourceUrl=" + searchParameters.searchUrl + '&searchWord=' + searchParameters.searchWord)
}

export default function() {}
