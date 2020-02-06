import React, { useState, useContext } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ScrollView
} from 'react-native'
import { URL_LINK } from '../Constants/connections'
import { HEADER_COLOR } from '../Constants/colors'
import DateTimePicker from '@react-native-community/datetimepicker'
import ImagePicker from 'react-native-image-crop-picker'
import CategorySelection from '../Components/CategorySelection'
import StateContext from '../Hooks/Context'
import { Icon } from 'react-native-elements'

const defaultState = {
    name: "",
    description: "",
    category: "",
    date: "When?",
    privacy: "Private",
    imageURL: URL_LINK + "water",
    show: false,
    done: false
}

const AddEntryForm = props => {
    const stateContext = useContext(StateContext)
    const [entryState, setEntryState] = useState(defaultState)
    const [isLoading, setIsLoading] = useState(false)

    const showDate = () => {
        setEntryState({
            ...entryState,
            show: true
        })
    }

    const inputNameHandler = (inputName) => {
        setEntryState({
            ...entryState,
            name: inputName
        })
    }

    const inputDescHandler = (inputDesc) => {
        setEntryState({
            ...entryState,
            description: inputDesc
        })
    }

    const setDateHandler = (event, date) => {
        let newDate = typeof date === "undefined" ? entryState.date : date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear()
        setEntryState({
            ...entryState,
            date: newDate,
            show: false
        })
    }

    const pickImageFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setEntryState({
                ...entryState,
                imageURL: image.path
            })
          }).catch(error =>
            console.log("Rejected: ", error)
          );
    }

    const changePrivacyHandler = () => {
        if (entryState.privacy !== "Shared"){
            setEntryState({
                ...entryState,
                privacy: "Shared"
            })
        } else {
            setEntryState({
                ...entryState,
                privacy: "Private"
            })
        }
    }

    const getImageFromSplash = async () => {
        setIsLoading(true)
        let imagePathFromSplash = await fetch(URL_LINK).then(response => response.url)
        setEntryState({
            ...entryState,
            imageURL: imagePathFromSplash
        })
        setIsLoading(false)
    }

    const cancelAddEntry = () => {
        setEntryState(defaultState)
        props.onCancel()
    }

    const getCategoryHandler = (category) => {
        setEntryState({
            ...entryState,
            category: category
        })
    }

    const addEntryHandler = () => {
        let id = getMaxId()
        const payload = {
            ...entryState,
            id: id.toString()
        }
        stateContext.entryDispatch({type: 'add_entry', payload})
        cancelAddEntry()
    }

    const getMaxId = () => {
        const arr1 = stateContext.entryState.bucketList.map(value => parseInt(value.id))
        const arr2 = stateContext.entryState.doneList.map(value => parseInt(value.id))
        const arrId = arr1.concat(arr2).sort()
        return arrId.length > 0 ? arrId[arrId.length - 1] + 1 : 0
    }

    return (
        <Modal visible={props.showModal} animationType="fade" style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={cancelAddEntry}>
                    {/* <Text style={{fontWeight: 'bold', fontSize: 20}}> Back </Text> */}
                    <Icon name="keyboard-backspace" type="material" color='white' size={40}/>
                </TouchableOpacity>
                {isLoading ? <ActivityIndicator style={{width: "100%", height: "100%"}}/> :
                    <Image
                        source={{uri: entryState.imageURL}}
                        style={{width: "100%", height: "100%"}}
                    />
                }
            </View>

            <View style={styles.body}>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="white"
                    underlineColorAndroid='white'
                    value={entryState.name}
                    onChangeText={inputNameHandler}
                    maxLength={20}
                    
                />
                <TextInput
                    placeholder="Description"
                    placeholderTextColor="white"
                    underlineColorAndroid='white'
                    value={entryState.description}
                    onChangeText={inputDescHandler}
                    maxLength={80}
                />
                <View style={[styles.body_wrapper_1, {flexDirection: 'column'}]}>
                    <Text style={styles.text_style}>Categories: {entryState.category}</Text>
                    <CategorySelection 
                        category={getCategoryHandler}
                    />
                </View>
                <View style={styles.body_wrapper_1}>
                    <Text style={styles.text_style}>Expected to Achieve:</Text>
                    <TouchableOpacity onPress={showDate}>
                        <Text style={styles.text_style}>{entryState.date}</Text>
                        <Icon name="date-range" type="material" color='white'/>
                    </TouchableOpacity>
                    {entryState.show && 
                        <DateTimePicker 
                            value={new Date()}
                            mode={"date"}
                            display={"calendar"}
                            onChange={setDateHandler}
                        />
                    }
                </View>
                <View style={styles.body_wrapper_1}>
                    <Text style={styles.text_style}>Image:</Text>
                    <TouchableOpacity onPress={getImageFromSplash}>
                        <Text style={styles.text_style}>Refresh</Text>
                        <Icon name="refresh" type="material" color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pickImageFromGallery}>
                        <Text style={styles.text_style}>Gallery</Text>
                        <Icon name="monochrome-photos" type="material" color='white'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.body_wrapper_1}>
                    <Text style={styles.text_style}>Shared/Private:</Text>
                    <TouchableOpacity onPress={changePrivacyHandler}>
                        <Text style={styles.text_style}>{entryState.privacy}</Text>
                        <Icon name="share" type="material" color='white'/>
                    </TouchableOpacity>
                </View>
                <View style={styles.btn_wrapper}>
                    <TouchableOpacity onPress={addEntryHandler}>
                        <View style={styles.btn_wrapper_container}>
                            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Someday</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    body: {
        flex: 3,
        backgroundColor: HEADER_COLOR,
    },
    body_wrapper_1: {
        flexDirection: 'row',
        borderWidth: 0,
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 3,
        marginRight: 3
    },
    btn_wrapper: {
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 5
    },
    btn_wrapper_container: {
        borderWidth: 0,
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        elevation: 1,
        backgroundColor: '#06a94d'
    },
    backButton: {
        position:'absolute', 
        zIndex: 1, 
        start: 10, 
        top: 10
    },
    text_style: {
        color: 'white'
    }
})

export default AddEntryForm