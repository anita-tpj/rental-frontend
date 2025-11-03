import APIClient from "./apiClient";

export interface Movie {
  _id?: string;
  title: string;
  genreId?: string;
  genre?:{name:string}
  dailyRentalRate: number;
  numberInStock?: number;
}

export default new APIClient<Movie>("/movies");
