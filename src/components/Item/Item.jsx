import React, { useState, useEffect } from 'react';
import Resizer from 'react-image-file-resizer';
import './Item.css'
import { Link } from 'react-router-dom';


const resizeImage = (file) => {
    return new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            800, // max width
            600, // max height
            'JPEG', // output format
            90, // quality
            0, // rotation
            (uri) => {
                resolve(uri);
            },
            'base64' // output type
        );
    });
};

export const Item = (props) => {

    const [resizedImage, setResizedImage] = useState('');

    useEffect(() => {
        // Convert the image URL to a file object (if needed)
        const fetchImage = async () => {
            const response = await fetch(props.image);
            const blob = await response.blob();
            const file = new File([blob], 'image.jpg', { type: blob.type });
            const resized = await resizeImage(file);
            setResizedImage(resized);
        };

        fetchImage();
    }, [props.image]);

    return (


        <div className='item'>
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={resizedImage} alt="" loading="lazy" /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}
