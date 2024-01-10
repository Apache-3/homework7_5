import React from 'react'
import { useSelector } from 'react-redux'

export const Basket = () => {
    const products = useSelector((state) => state.basket.items)

    return (
        <div>
            {products.map((product, index) => (
                <div className="basket__product" key={index}> 
                    <h2>{product.title}</h2>
                    <span>{product.price}</span>
                </div>
            ))}
        </div>
    )
}
