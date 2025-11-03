import APIClient from "./apiClient";

export interface Auth {
    email: string;
    password: string
}

export default new APIClient<string, Auth>("/auth")