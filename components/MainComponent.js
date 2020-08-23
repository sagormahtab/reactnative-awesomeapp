import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Constants from 'expo-constants';
import Home from './HomeComponent';

const MenuNavigator = createStackNavigator({
    Menu: {screen: Menu},
    DishDetail: {screen: DishDetail}
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DAB'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const HomeNavigator = createStackNavigator({
    Home: {screen: Home}
}, {
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: '#512DAB'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    })
});

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
}, {
    drawerBackgroundColor: '#D1C4E9'
})

class MainComponent extends Component {

    render() {
        return(
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0: Constants.statusBarHeight}}>
                <MainNavigator />
            </View>
        );
    }
}

export default MainComponent;