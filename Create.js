import React, {useState} from 'react'
import {addProduct } from '../action/product.action'
import {bindActionCreators } from 'redux'
import { connect } from 'react-redux'



function Create(props) {

    const [product,setProduct] = useState({
        title: "",
        image: "",
        price: 0,
        content: ""
    });

    const readValue = (e) => {
        const {name,value} = e.target;
        setProduct({...product, [name]:value })
    };


    const submitHandler = (e) => {
        e.preventDefault();
        console.log('data =', product);
        props.addProduct(product);
    }
  return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-secondary">Create</h3>
                </div>
            </div>
            

            <div  className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={(event) => submitHandler(event)}>
                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="title"> Title</label>
                                    <input type="text" name="title" value={product.title} onChange={(e) => readValue(e)} id="title"  className="form-control" required/>
                                </div>

                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="image"> image</label>
                                    <input type="url" name="image"  value={product.image} onChange={(e) => readValue(e)} id="image"  className="form-control" required/>
                                </div>

                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="price"> Price</label>
                                    <input type="number" name="price" value={product.price} onChange={(e) => readValue(e)} id="price"  className="form-control" required/>
                                </div>

                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="content"> Content</label>
                                    <textarea name="content" value={product.content} onChange={(e) => readValue(e)} id="content" cols="30" rows="2" className="form-control" required></textarea>
                                </div>

                                <div className="form-group mt-2 mb-2">
                                    <input type="submit" value="Create" className="btn btn-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
        </div>
  )
};


// State handler 
const mapStateToProps = (state) => {
    return {}
}

// action dispatcher

const mapDispatchToProps = ( dispatch) => {
    return bindActionCreators({
        addProduct : addProduct
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (Create)
