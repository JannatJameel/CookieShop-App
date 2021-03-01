import React from "react";
import { ListItem, Text, Left, Right, Icon } from 'native-base';

const ShopItem = ({shop}) => {
    return (
        <ListItem selected>
            <Left>
                <Text>{shop.name}</Text>
            </Left>
            <Right>
                <Icon name="arrow-forward" />
            </Right>
        </ListItem>
    );
};

export default ShopItem;