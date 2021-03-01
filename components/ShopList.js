import React from "react";
import { useSelector } from "react-redux";
import { Spinner, List } from "native-base";
import ShopItem from "./ShopItem";

const ShopList = () => {
    const shops = useSelector(state => state.shop.shops);
    const loading = useSelector(state => state.shop.loading);

    if(loading) return <Spinner color="red"/>;

    return (
        <List>
            {shops.map(shop => <ShopItem shop={shop}/>)}
        </List>
    );
};

export default ShopList;