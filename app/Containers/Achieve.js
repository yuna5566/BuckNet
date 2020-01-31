import React, {useState, useContext, useCallback, useEffect} from 'react'
import {
    SafeAreaView, 
    View,
    Text,
    StyleSheet,
    StatusBar,
    FlatList
} from 'react-native'
import {HEADER_COLOR} from '../Constants/colors'
import EntryHolder from '../Components/EntryHolder'
import StateContext from '../Hooks/Context'

const Achieve = props => {
    const stateContext = useContext(StateContext)
    const { navigate } = props.navigation
    const [, updateState] = useState();

    useEffect(() => {
        props.navigation.addListener('didFocus', refreshPageHandler)
    }, [])

    const refreshPageHandler = useCallback(() => {
        updateState({})
    }, [])
    console.log("Achieve rendering...")
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <View style={styles.header}>
                <Text style={styles.header_title}>Achieved</Text>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={stateContext.entryState.doneList}
                    renderItem={({item, index}) => (
                        <EntryHolder 
                            entry={item}
                            index={index}
                            navigate={navigate}
                            refresh={refreshPageHandler}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: HEADER_COLOR,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header_title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10
    },
    body: {
        flex: 5
    },
})
export { Achieve }