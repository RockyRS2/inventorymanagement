import axios from "axios";



export const addUser = async (data) => {
    return await axios.post("http://localhost:9090/dashboard/addUser",data);
}

export const getAllOutlets = async () => {
    return await axios.get("http://localhost:9090/api/v1/outlet");
}


export const getAllStocksInfoAPI = async () => {
    return await axios.get("http://localhost:9090/api/v1/stock");
}