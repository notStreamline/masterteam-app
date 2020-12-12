import axios from 'axios';

// Domains url
const baseDomain = 'https://masterteam-api.herokuapp.com/'as string;
const baseURL = `${baseDomain}/api/v1` as string;

export default axios.create({
  baseURL,
  // Her also add tokens or headers
  // headers: {"Authorization": "token"}
});
