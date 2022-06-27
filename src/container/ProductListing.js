import React , {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import Productcompnents from './Productcompnents';
import {setProducts} from "../redux/action/ProductActions"
import axios from "axios"

const ProductListing = () => {
    const products = useSelector((state) => state )
    const dispatch =useDispatch()


    const fetchProducts = async () =>{
        const response = await axios.get("https://fakestoreapi.com/products").catch((error) => {
            console.log("404 " , error);
        })
        dispatch(setProducts(response.data));
    }
        useEffect(()=>{
            fetchProducts()
        },[])
    console.log("Products " ,products  );

  return (
    <div className='ui grid container'>
                    <Productcompnents />
    </div>
  )
}

export default ProductListing