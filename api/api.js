import axios from "axios";

const api = axios.create({
  // baseURL:
  // "https://35eb-2402-4000-2200-4c8a-d524-18cf-f3d9-ad73.ngrok-free.app/scope-backend-93b9d/us-central1/app",
  baseURL: "https://us-central1-scope-backend-93b9d.cloudfunctions.net/app",
  // headers: {
  //   "ngrok-skip-browser-warning": "69420",
  // },
});

export default api;
