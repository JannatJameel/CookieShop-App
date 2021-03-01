import React from "react";
import { Button, Text } from "native-base";

const Home = () => {
    return (
        <Button warning onPress={() => alert("Hello dear light!")}>
            <Text>Click Me</Text>
        </Button>
    );
};

export default Home;