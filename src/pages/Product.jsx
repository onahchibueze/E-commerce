import React, { useContext } from 'react'
import { ShopCategory } from './ShopCategory'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import { BreadCrum } from '../components/Breadcrum/BreadCrum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';

export const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    return (
        <div>
            <BreadCrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
        </div>
    )
}
