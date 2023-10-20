import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import Order from './Order';


const showOrders = (props) => {
    let suma = 0
    props.orders.forEach(el => suma += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='suma'>Загальна сума: {new Intl.NumberFormat().format(suma)} €</p>
        </div>
    )
}

const showNothing = () => {
    return (<div className='empty'>
        <h2>Товари відсутні</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <BsHouseFill className='logo-ico' />
                <span className='logo'>House Staff</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Кабінет</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                    className={`shop-cart-button ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}
