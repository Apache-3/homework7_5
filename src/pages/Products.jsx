import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../components/Product'
import { fetchProducts } from '../store/productsSlice'

export const Products = () => {
    const products = useSelector((state) => state.products.items)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return (
        <div>
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    )
}
