import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend-neon-ten-94.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
