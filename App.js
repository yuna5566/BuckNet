import React from 'react'
import MainNavigator from './app/Navigators/MainNavigator'
import {createAppContainer} from 'react-navigation'
import ContextProvider from './app/Hooks/ContextProvider'

const AppContainer = createAppContainer(MainNavigator)

const App = () => {
    return(
        <ContextProvider>
            <AppContainer />
        </ContextProvider>
    )
}

export default App