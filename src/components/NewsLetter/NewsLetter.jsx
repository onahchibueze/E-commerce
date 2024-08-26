import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
    return (
        <div className='newletter'>
            <h1>Get Exclusive offer on Your Email </h1>
            <p>Subscribe to Our newletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email id' />

                <button>
                    Subscribe
                </button>
            </div>
        </div>
    )
}
