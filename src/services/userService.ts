import APIClient from "./apiClient";

export interface User {
    _id?: string
    userName: string;
    email: string;
    password: string;
    isAdmin?:boolean;

}

export default new APIClient<User>("/users")