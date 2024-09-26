import { useReducer, useState } from "react";
import ProductReducer from './ProductReducer';
import ProductContext from "./ProductContext";
import axiosClient from '../../config/axios'


const ProductState =(props) => {
    const initialState = {
        products: [], 
        loading: false,
    };
    const [globalState, dispatch ] = useReducer(ProductReducer, initialState );

    const createProduct= async (dataForm) => {
        const form = {
            nombre: dataForm.nombre,
            precio: dataForm.precio,
            descripcion: dataForm.descripcion,
        }
        try {
            await axiosClient.post('/product/create', form);
            getProducts();

        } catch (error) {
            console.log(error);
            
        }
    }

    const getProducts = async () => {
      
        try {
            const res = await axiosClient.get('/product/readall');
            console.log('fetched Products', res.data );
            
            dispatch({
                type: "OBTENER-PRODUCTOS",
                payload: res.data.products
            });
        } catch (error) {
	        console.log(error);
        }
    };
    
    const updateProduct = async (id, dataForm) => {
        const form = {
            id,
            nombre: dataForm.nombre,
            precio: dataForm.precio,
            descripcion: dataForm.descripcion
        };
        try {
            await axiosClient.put('/product/update/:id', form);
            getProducts();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = async (id) => {
        const data = { id };
        try {
            await axiosClient.delete('/product/delete/:id', { data });
            getProducts();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ProductContext.Provider value={{
            products: globalState.products,
            createProduct,
            getProducts,
            updateProduct,
            deleteProduct
            }}>
            { props.children }
        </ProductContext.Provider>
    )

};

export default ProductState;
