import React from 'react';
import { Card, Text } from 'react-native-elements';

const RenderDish = (props) => {
    const dish = props.dish;
    if(dish !== undefined) {
        return (
            <Card
            featuredTitle={dish.name}
            image={require('./images/uthappizza.png')}>
                <Text style={{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        )
    } else {
        return(
        <Text></Text>
        )
    }
}

const DishDetail = (props) => {
    return (<RenderDish dish={props.dish} />);
};

export default DishDetail;