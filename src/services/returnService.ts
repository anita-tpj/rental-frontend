import APIClient from "./apiClient";
import { Customer } from "./customerService";
import { Movie } from "./movieService";

export interface Rental {
    _id?: string,
    rentalDate: string,
    returnDate: string
    rentalFee: number,
    movie: Movie,
    customer: Customer
}

export interface NewRental {
    customerId: string,
    movieId: string
}

export default new APIClient<Rental, NewRental>("/returns")