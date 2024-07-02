import axios from "axios";

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchData = async (endpoint, params) => {
  try {
    const response = await api.get(endpoint, {params});
    return response.data
  } catch (error) {
    console.error('error fetching data', error)
    throw error
  }
}
