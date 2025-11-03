import APIClient from "./apiClient";

export interface Customer {
    _id?: string;
    name: string;
    phone: string;
    isGold: boolean
}

export default new APIClient<Customer>("/customers")