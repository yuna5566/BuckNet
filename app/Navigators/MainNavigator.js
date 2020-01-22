import AuthLoading from '../Containers/AuthLoading'
import Home from '../Containers/Home'
import Profile from '../Containers/Profile'
import Login from '../Containers/Login'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createSwitchNavigator } from 'react-navigation'

const AppTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    }
})

const MainNavigator = createSwitchNavigator({
    Auth: AuthLoading,
    Login: Login,
    App: AppTabNavigator
}, {
    initialRouteName: 'Auth',
    backBehavior: 'App'
})

export default MainNavigator
