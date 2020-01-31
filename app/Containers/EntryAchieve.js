import React, { useState, useContext } from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import StateContext from '../Hooks/Context'

const EntryArchieve = props => {
    const stateContext = useContext(StateContext)
    const { entry, index, refresh } = props.navigation.state.params
    const [stateEntry, setStateEntry] = useState(entry)

    const deleteState = () => {
        stateContext.entryDispatch({type: 'delete_entry', id: stateEntry.id})
        refresh()
        props.navigation.goBack()
    }

    const undoState = () => {
        stateContext.entryDispatch({type: 'undo_entry', id: stateEntry.id, index: index})
        refresh()
        props.navigation.goBack()
    }

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={{uri: stateEntry.imageURL}} style={styles.imageContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.content_wrapper_1}>
                        <Text style={styles.textHeader_1}>{stateEntry.name}</Text>
                        <Text style={styles.textHeader_2}>{stateEntry.description}</Text>
                    </View>
                    <View style={styles.content_wrapper_2}>
                        <Text style={styles.textHeader_3}>{stateEntry.category}</Text>
                        <Text style={styles.textHeader_3}>{stateEntry.date}</Text>
                        <Text style={styles.textHeader_3}>{stateEntry.privacy}</Text>
                    </View>
                </View>

                <View style={[styles.del_btn_container, {bottom: 70}]}>
                    <TouchableOpacity onPress={deleteState}>
                        <View style={styles.del_btn_wrapper}>
                            <Text>Del</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.undo_btn_container}>
                    <TouchableOpacity onPress={undoState}>
                        <View style={styles.undo_btn_wrapper}>
                            <Text>Undo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    imageContainer: {
        width: '100%',
        height: '100%'
    },
    contentContainer: {
        flex: 1,
        margin: 5
    },
    content_wrapper_1: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    content_wrapper_2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHeader_1:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 90,
    },
    textHeader_2:{
        color: 'white',
        fontWeight: '100',
        fontSize: 15
    },
    textHeader_3:{
        color: 'white',
        fontSize: 20
    },
    edit_btn_container: {
        position:'absolute',
        bottom: 70,
        right: 20,
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    done_btn_container: {
        position:'absolute',
        bottom: 10,
        right: 20,
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    done_btn_wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    edit_btn_wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    del_btn_container: {
        position:'absolute',
        bottom: 130,
        right: 20,
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    del_btn_wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    undo_btn_container: {
        position:'absolute',
        bottom: 10,
        right: 20,
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    undo_btn_wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})


export { EntryArchieve }