import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://3636-203-153-42-103.in.ngrok.io",
});
instance.interceptors.request.use(
  //first funcc will call automatically anytime when we are about to make any req
  // second func will run when we get err when we do any req
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default instance;
