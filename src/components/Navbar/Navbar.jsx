import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import bars_solid from '../assets/bars_solid.png'
export const NavBar = () => {



    const [menu, setMenu] = useState("shop");
    const [isSidebarVisisble, setIsSidebarVisible] = useState(false);
    const handleImgeClick = () => {
        setIsSidebarVisible(true);

    }
    const handleSidebarDoubleClick = () => {
        setIsSidebarVisible(false);
        console.log("Button double-clicked, hiding sidebar.");
    }
    const { getTotalCartItems } = useContext(ShopContext);
    return (


        <div className="navbar ">

            {
                !isSidebarVisisble ? (
                    <>
                        <div className="nav-toggle show">
                            <img onClick={handleImgeClick} src={bars_solid} alt="" />
                        </div>
                    </>

                ) : (
                    <div className='absolute'>
                        <ul onClick={handleSidebarDoubleClick} className='menubar-list'>
                            <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Shop</Link>  {menu === "shop" ? <hr /> : <></>} </li>
                            <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none', color: 'white' }} to="/mens" >Men</Link>  {menu === "mens" ? <hr /> : <></>}</li>
                            <li onClick={() => { setMenu("womens") }}> <Link style={{ textDecoration: 'none', color: 'white' }} to="/womens">Women</Link>  {menu === "womens" ? <hr /> : <></>}</li>
                            <li onClick={() => { setMenu("kids") }}> <Link style={{ textDecoration: 'none', color: 'white' }} to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
                        </ul>

                    </div>


                )
            }

            <div className="nav-logo ">
                <Link to="/sidemenu">
                    <img src={logo} alt="" />
                </Link>
                <p className='hide'>SHOPPER</p>

            </div>

            <ul className="nav-menu hide" >
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>  {menu === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to="/mens" >Men</Link>  {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}> <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>  {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}> <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"> <button className='hide'>Login</button></Link>
                <Link to="/cart"> <img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    )
}
