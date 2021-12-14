import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.jungledevs.com/api/v1/",
})

const POST = async (endpoint, body) => {
  try {
    const response = await api.post(endpoint, body);
    return response;
  } catch(err) {
    return err.response;
  }
}

export default POST
