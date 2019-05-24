import React from 'react'
import CartItem from './CartItem'

export default function CakrtList({value}) {
    
    const {cart} = value;
    console.log(value, cart);
    // container-fluid gedeg n take up full space hiij bga
    return (
        
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value}></CartItem>;
            })}

        </div>
    )
}
