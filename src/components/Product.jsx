import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseCounter } from '../store/productsSlice'
import { addProduct } from '../store/basketSlice'

export const Product = ({product}) => {
    const dispatch = useDispatch()

    const hundlerBayProduct = () => {
        dispatch(addProduct(product))
        dispatch(increaseCounter())
    }

    return (
        <div className='product'>
            <h2>{product.title}</h2>
            <span>{product.price}</span>
            <button onClick={hundlerBayProduct}>BAY</button>
        </div>
    )
}
