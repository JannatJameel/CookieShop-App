import React from "react";
import { useSelector } from "react-redux";
import { List } from 'native-base';
import ProductItem from "./ProductItem";

const ProductList = ({products}) => {
    // const products = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.loading);

    if(loading) return <Spinner color="red"/>;

    return (
        <List>
            {products.map(product =>  <ProductItem product={product}/>)}
        </List>
    );
};

export default ProductList;