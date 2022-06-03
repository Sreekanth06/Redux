import ProductApi from "../API/ProductApi";
import { toast } from 'react-toastify'




const ProductReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD_PRODUCT" :
            console.log('create =', action.payload);
            ProductApi.create(action.payload)
            .then(res => {
            toast.success("Product successfully added");
                window.location.href = "/";
            }).catch(err => toast.error(err.message));
            
            break;

        case "UPDATE_PRODUCT" :
            break;

        case "DELETE_PRODUCT" :
            break;
            
        default : return state
    }
};

export default ProductReducer;