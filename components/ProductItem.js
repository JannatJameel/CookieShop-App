import React from "react";
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const ProductItem = ({product}) => {
    return (
        <ListItem thumbnail>
            <Left>
                <Thumbnail square source={{ uri: "https://media.istockphoto.com/vectors/cartoon-cute-cookie-icon-isolated-on-white-background-vector-id1142855490?k=6&m=1142855490&s=170667a&w=0&h=wkkwL7LH56KneFN0frVZA0ZXKTQQK0CqLjOXQbbDiKM=" }} />
            </Left>
            <Body>
                <Text>{product.name}</Text>
                {/* <Text note numberOfLines={1}>Its time to build a difference . .</Text> */}
            </Body>
            <Right>
                <Button transparent>
                <Text>View</Text>
                </Button>
            </Right>
        </ListItem>
    );
};

export default ProductItem;