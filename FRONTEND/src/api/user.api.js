import axiosInstance from "../utils/axiosInstance";

export const loginUser = async(email, password) =>{
    const {data} = await axiosInstance.post("/api/auth/login", {email, password})
    return data
}

export const registerUser = async(name, email, password) =>{
    const {data} = await axiosInstance.post("/api/auth/register", {name, email, password})
    return data
}

export const logOutUser = async () => {
    const { data } = await axiosInstance.post("/api/auth/logout")
    return data
}

export const getUserLinks = async () => {
  const { data } = await axiosInstance.get("/api/links")
  return data
}

export const getStats = async () => {
    const { data } = await axiosInstance.get("/api/links/stats")
    return data
}