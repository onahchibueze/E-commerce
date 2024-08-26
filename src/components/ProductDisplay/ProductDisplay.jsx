import React, { useContext } from 'react'
import './ProductDisplay.css'
import start_icon from '../assets/star_icon.png'
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">

                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>

                </div>
                <div className="productdisplay-right-discription">
                    A lightWeight, usally knited, pullover shirt, close-fitting and a
                    round neckline and short sleeves, worn as an undershirt or outter
                    garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}> ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span> Women , T-shirt-croptop</p>
                <p className='productdisplay-right-category'><span>Tags :</span> Modern, latest</p>

            </div>

        </div>
    )
}
