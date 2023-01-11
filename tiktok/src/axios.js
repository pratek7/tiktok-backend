import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-backend-production.up.railway.app",
});
export default instance;
