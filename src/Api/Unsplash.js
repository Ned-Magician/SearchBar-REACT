import axios from "axios";

const Api = process.env.REACT_APP_BASE_URL;
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${Api}`,
  },
});
console.log("KEY:", process.env.REACT_APP_UNSPLASH_KEY);
