import axios from "axios";

const api = axios.create({
  // baseURL:
  // "https://5f92-2402-d000-a500-606a-499d-7d46-f0a-c474.ngrok-free.app/scope-backend-93b9d/us-central1/app",
  baseURL: "https://us-central1-scope-backend-93b9d.cloudfunctions.net/app",
  // headers: {
  //   "ngrok-skip-browser-warning": "69420",
  // },
});

export default api;
