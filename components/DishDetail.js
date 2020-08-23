import React from 'react';
import { Card, Text } from 'react-native-elements';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';

const RenderDish = (props) => {
    const dish = props.dish;
    if (dish !== undefined) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('./images/uthappizza.png')}>
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
            </Card>
        )
    } else {
        return (
            <Text></Text>
        )
    }
}

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Dish Details'
    };

    render() {
        const dishId = this.props.navigation.getParam('dishId', '');
        return(<RenderDish dish = { this.state.dishes[+dishId] } />);
    }
};

export default DishDetail;