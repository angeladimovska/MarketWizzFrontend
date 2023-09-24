import axiosInstance from "../axsiosConfig";

export const AuthService = () => {
    const login = async (username, password) => {
        return await axiosInstance.post('/login', { username, password });
    }

    const register = async (data) => {
        return await axiosInstance.post('/register', data);
    }

    return {
        login,
        register
    }
}