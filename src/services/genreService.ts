import APIClient from "./apiClient";

export interface Genre {
  _id?: string;
  name: string;
}

export default new APIClient<Genre>("/genres");
