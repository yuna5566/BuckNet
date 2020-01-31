import React, { useState, useContext } from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    ImageBackground, 
    Button,
    TextInput,
    TouchableOpacity
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import StateContext from '../Hooks/Context'

const EntryUpdate = props => {
    const stateContext = useContext(StateContext)
    const { entry, index, refresh } = props.navigation.state.params
    const [stateEntry, setStateEntry] = useState(entry)

    const inputEntryNameHandler = (newName) => {
        setStateEntry({
            ...stateEntry,
            name: newName
        })
    }

    const inputDescriptionHandler = (newDesc) => {
        setStateEntry({
            ...stateEntry,
            description: newDesc
        })
    }

    const setDateHandler = (event, date) => {
        let newDate = typeof date === "undefined" ? stateEntry.date : date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear()
        setStateEntry({
            ...stateEntry,
            date: newDate,
            show: false
        })
    }

    const showDate = () => {
        setStateEntry({
            ...stateEntry,
            show: true
        })
    }

    const setPrivacy = () => {
        if (stateEntry.privacy !== "Shared"){
            setStateEntry({
                ...stateEntry,
                privacy: "Shared"
            })
        } else {
            setStateEntry({
                ...stateEntry,
                privacy: "Private"
            })
        }
    }

    const updateState = () => {
        stateContext.entryDispatch({type: 'update_entry', index: index, payload: stateEntry})
        refresh()
        props.navigation.goBack()
    }

    const deleteState = () => {
        stateContext.entryDispatch({type: 'delete_entry', id: stateEntry.id})
        refresh()
        props.navigation.goBack()
    }

    const doneState = () => {
        stateContext.entryDispatch({type: 'entry_done', id: stateEntry.id, index: index})
        refresh()
        props.navigation.goBack()
    }

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={{uri: stateEntry.imageURL}} style={styles.imageContainer}>
                <View style={styles.contentContainer}>
                    <View style={styles.content_wrapper_1}>
                        <TextInput
                            value={stateEntry.name}
                            style={styles.textHeader_1}
                            maxLength={20}
                            multiline={true}
                            numberOfLines={3}
                            onChangeText={inputEntryNameHandler}
                        />
                        <TextInput
                            value={stateEntry.description}
                            style={styles.textHeader_2}
                            maxLength={80}
                            numberOfLines={3}
                            onChangeText={inputDescriptionHandler}
                        />
                    </View>
                    <View style={styles.content_wrapper_2}>
                        <Text style={styles.textHeader_3}>{stateEntry.category}</Text>
                        <TouchableOpacity onPress={showDate}>
                            <Text style={styles.textHeader_3}>{stateEntry.date}</Text>
                        </TouchableOpacity>
                        {
                            stateEntry.show && 
                            <DateTimePicker 
                                value={new Date()}
                                mode={"date"}
                                display={"calendar"}
                                onChange={setDateHandler}
                            />
                        }
                        <TouchableOpacity onPress={setPrivacy}>
                            <Text style={styles.textHeader_3}>{stateEntry.privacy}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.edit_btn_container}>
                    <TouchableOpacity onPress={updateState}>
                        <View style={styles.edit_btn_wrapper}>
                            <Text>Edit</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.done_btn_container}>
                    <TouchableOpacity onPress={doneState}>
                        <View style={styles.done_btn_wrapper}>
                            <Text>Done</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.del_btn_container}>
                    <TouchableOpacity onPress={deleteState}>
                        <View style={styles.del_btn_wrapper}>
                            <Text>Del</Text>
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


export { EntryUpdate }
// export default EntryUpdate