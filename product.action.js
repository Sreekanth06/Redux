const ADD_PRODUCT = "ADD_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";




export function addProduct(product) {
    return {
        type : ADD_PRODUCT,
        payload: product


        // 1)A payload in API is the actual data pack that is sent with the GET method in HTTP.
        //  2)It is the crucial information that you submit to the server when you are making an API request.
    }
}


export function updateProduct(product,id) {
    return{
        type: UPDATE_PRODUCT,
        payload: {
            id: id,
            data: product
        }
    }
    
}


export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}