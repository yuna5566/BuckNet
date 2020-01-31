import { AuthLoading, Home, Login, Profile, EntryUpdate, Achieve, EntryArchieve } from '../Containers/index'
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
        screen: HomeStack
    },
    Achieve: {
        screen: AchieveStack
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