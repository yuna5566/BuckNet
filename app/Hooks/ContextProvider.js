import React, {useReducer} from 'react'
import StateContext from '../Hooks/Context'
import {initialState, reducer} from '../Hooks/Reducers'

const ContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <StateContext.Provider value = {{
            entryState: state,
            entryDispatch: dispatch
        }}>
            {props.children}
        </StateContext.Provider>
    )
}

export default ContextProvider