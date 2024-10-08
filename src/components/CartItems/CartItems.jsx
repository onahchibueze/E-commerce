import React, { useContext } from 'react';
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png'
export const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className="cartitems-format-main cartitems-format">
                            <img src={e.image} alt="" className='carticon-product-icon' />

                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} alt="" onClick={() => { removeFromCart(e.id) }} className='carticon-remove-icon' />
                        </div>
                        <hr />
                    </div>

                }
                else {
                    return null; /* Ensure map always returns something */
                }
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type=" text" placeholder=' promo code' />
                        <button> submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
