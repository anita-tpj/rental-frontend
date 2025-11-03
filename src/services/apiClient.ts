import axios, { type AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({ 
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
 });

//const axiosInstance = axios.create({ baseURL: "/api" });

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers ?? {};
    config.headers["x-auth-token"] = token;
  }
  return config;
});

class APIClient<TResponse, TRequest = TResponse> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<TResponse[]>(this.endpoint, config)
      .then((res) => res.data);
  };

  // get = (id: string) => {
  //   return axiosInstance.get(this.endpoint + "/" + id).then((res) => res.data);
  // };

  post = (data: TRequest) => {
    return axiosInstance.post<TResponse>(this.endpoint, data).then((res) => res.data);
  };

  // put = (id: string, data: T) => {
  //   return axiosInstance
  //     .put<T>(this.endpoint + "/" + id, data)
  //     .then((res) => res.data);
  // };

  delete = (id: string) => {
    return axiosInstance.delete<TResponse>(this.endpoint + "/" + id).then((res) => res.data);
  };
}

export default APIClient;
