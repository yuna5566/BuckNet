import { AuthLoading, Home, Login, Profile, EntryUpdate } from '../Containers/index'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

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

// HomeStack.navigationOptions = ({navigation}) => {
//     let tabBarVisible = true
//     if (navigation.state.index === 1){
//         tabBarVisible = false
//     }

//     return {
//         tabBarVisible
//     };
// }


const AppTabNavigator = createBottomTabNavigator({
    // Home: {
    //     screen: Home
    // },
    Home: {
        screen: HomeStack
    },
    Profile: {
        screen: Profile
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