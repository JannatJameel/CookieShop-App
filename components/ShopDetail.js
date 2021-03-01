import React from "react";
import { useSelector } from "react-redux";
import { Image } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import ProductList from "./ProductList";

const ShopDetail = () => {
    const shops = useSelector(state => state.shop.shops);
    const allProducts = useSelector(state => state.product.products);

    const shop = shops[0];
    const products = shop.products.map((product) =>
        allProducts.find((_product) => _product.id === product.id)
    );

    return (
        <Card style={{flex: 0}}>
            <CardItem>
                  <Text>{shop.name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: `${shop.image}`}} style={{height: 200, width: 380}}/>
              </Body>
            </CardItem>
            <CardItem>
                <Text>Products</Text>
            </CardItem>
            <ProductList products={products}/>
        </Card>
    );
};

export default ShopDetail;