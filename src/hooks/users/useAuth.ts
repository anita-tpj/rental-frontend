import { jwtDecode } from "jwt-decode";

interface DecodedUser {
  _id: string;
  name?: string;
  isAdmin?: boolean;
}

const useAuth = () => {
  const token = localStorage.getItem("token");

  if (!token) return { user: null };

  try {
    const user = jwtDecode<DecodedUser>(token);
    return { user };
  } catch {
    return { user: null };
  }
};

export default useAuth;
