import React from 'react'
import stylle from './NavBar.module.scss'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    const count = useSelector((state) => state.products.count)

    return (
        <header className={stylle.header}>
            <div className="container">
                <div className={stylle.header__inner}>
                    <div className="logo">Logo</div>
                    <nav>
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='products'>Products</NavLink></li>
                            <li><NavLink>Contact</NavLink></li>
                            <li><NavLink>About us</NavLink></li>
                        </ul>
                    </nav>
                    <Link to='/basket' className="basket">
                        Basket {count}
                    </Link>
                </div>
            </div>
        </header>
    )
}
