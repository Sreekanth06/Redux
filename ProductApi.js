import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: "http://localhost:5500"
});

const ProductApi = {
    getAll: () => {
        return axiosInstance.request({
            method: "GET",
            url: `/product`
        })
    },
    getSingle: (id) => {
        return axiosInstance.request({
            method: "GET",
            url: `/product/${id}`
        })
    },
    create: (product) => {
        return axiosInstance.request({
            method: "POST",
            url: `/product`,
            data: product
        
        })
    },
    update: (product,id) => {
        return axiosInstance.request({
            method: "PUT",
            url: `/product/${id}`,
            data: product
        })
    },
    delete: (id) => {
        return axiosInstance.request({
            method: "DELETE",
            url: `/product/${id}`
            
        })
    }
};

export default ProductApi