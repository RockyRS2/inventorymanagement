import axios from "axios";

const BASE_URL = "http://localhost:9090";

export const getProductDetailsAPI = async (productId) => {
    return await axios.get(`${BASE_URL}/dashboard/detail/` + productId)
}


export const updateProductAPI = async (data) => {
    return await axios.post(`${BASE_URL}/dashboard/update`, data)
}

export const deleteProductAPI = async (productId) => {
    return await axios.delete(`${BASE_URL}/dashboard/delete/` + productId)
}