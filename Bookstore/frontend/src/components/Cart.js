import React, { useEffect, useState } from 'react';
import API from '../api';

const Cart = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        API.get('carts/1/').then(res => {
            setCart(res.data);
        });
    }, []);

    if (!cart) return <div>Loading...</div>;

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cart.books.map(book => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
