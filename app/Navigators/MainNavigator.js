import { AuthLoading, Home, Login, Profile } from '../Containers/index'
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
