import React, { useState, useContext, useCallback, useEffect } from 'react'
import {
    View, 
    Text,
    SafeAreaView,
    StatusBar,
    Dimensions,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Button,
    AsyncStorage
} from 'react-native'
import { HEADER_COLOR } from '../Constants/colors'
import { API_CALL } from '../Constants/connections'
import { Entry } from '../Models/Entry'
 
import EntryHolder from '../Components/EntryHolder'
import AddEntryForm from '../Components/AddEntryForm'
import StateContext from '../Hooks/Context'

const Home = props => {
    const stateContext = useContext(StateContext)
    const [showModal, setShowModal] = useState(false)
    const { navigate, state } = props.navigation
    const [, updateState] = useState();
    const route = state.routeName

    const showModalHandler = () => { setShowModal(true) }

    const closeModalHandler = () => { setShowModal(false) }

    const refreshPageHandler = useCallback(() => {
        updateState({})
    }, [])

    useEffect(() => {
        getEntries();
        props.navigation.addListener('didFocus', refreshPageHandler);
    }, [])


    const getEntries = async () => {
        const uid = await AsyncStorage.getItem('@id');
        const access_token = await AsyncStorage.getItem('@access');
        const payload = await Entry.getEntries(API_CALL, uid, access_token);
        stateContext.entryDispatch({type: 'initialize_state', payload});
    }

    console.log("Home rendering...");
    // console.log("STATE: ", stateContext.entryState.bucketList)
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <View style={styles.header}>
                <Text style={styles.header_title}>BuckNet</Text>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={stateContext.entryState.bucketList}
                    renderItem={({item, index}) => (
                        <EntryHolder 
                            entry={item}
                            navigate={navigate}
                            index={index}
                            refresh={refreshPageHandler}
                            route={route}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            
            <View style={styles.btn_add_container}>
                <TouchableOpacity onPress={showModalHandler}>
                    <View style={styles.btn_add_wrapper}>
                        <Text style={styles.btn_add_text}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            <AddEntryForm
                showModal={showModal}
                onCancel={closeModalHandler}
            />
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
    btn_add_container: {
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        elevation: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    btn_add_wrapper: {
        borderWidth: 0,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: HEADER_COLOR,
    },
    btn_add_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 35,
    }
})

export { Home }
// export default Home