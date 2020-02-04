import React from 'react'
import { AuthLoading, Home, Login, Profile, EntryUpdate, Achieve, EntryArchieve } from '../Containers/index'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'react-native-elements'

const HomeStack = createStackNavigator({
    HomeScreen: {
        screen: Home,
    },
    UpdateScreen: {
        screen: EntryUpdate
    }
}, 
{
    headerMode: 'none',
    navigationOptions: {
        headerShown: false,
    }
})

const AchieveStack = createStackNavigator({
    AchieveScreen: {
        screen: Achieve
    },
    EntryAchieveScreen: {
        screen: EntryArchieve
    }
},
{
    headerMode: 'none',
    navigationOptions: {
        headerShown: false,
    }
})


const AppTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon: ({tintColor: color}) => (
                <Icon name='home' color={color}/>
            )
        }
    },
    Achieve: {
        screen: AchieveStack,
        navigationOptions: {
            tabBarIcon: ({tintColor: color}) => (
                <Icon name='done' color={color}/>
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({tintColor: color}) => (
                <Icon name='account-circle' color={color}/>
            )
        }
    }
}, {
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
    }
})

const MainNavigator = createSwitchNavigator({
    Auth: AuthLoading,
    Login: Login,
    App: AppTabNavigator,
}, {
    initialRouteName: 'Auth',
    backBehavior: 'App'
})

export default MainNavigator