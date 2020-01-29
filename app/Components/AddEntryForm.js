import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native'
import { URL_LINK } from '../Constants/connections'
import { HEADER_COLOR } from '../Constants/colors'
import DateTimePicker from '@react-native-community/datetimepicker'
import ImagePicker from 'react-native-image-crop-picker'
import CategorySelection from '../Components/CategorySelection'

let defaultState = {
    show: false,
    date: "Pick a date",
    privacy: "Shared"
}

const AddEntryForm = props => {
    const [entryState, setEntryState] = useState(defaultState)
    const [imagePath, setImagePath] = useState(URL_LINK);
    const [isLoading, setIsLoading] = useState(false)
    const showDate = () => {
        setEntryState({
            ...entryState,
            show: true
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
            console.log(image.data);
            setImagePath(image.path)
          }).catch(error =>
            console.log("Rejected: ", error)
          );
    }

    const changePrivacyHandler = () => {
        if (entryState.privacy === "Shared"){
            setEntryState({
                ...entryState,
                privacy: "Private"
            })
        } else {
            setEntryState({
                ...entryState,
                privacy: "Shared"
            })
        }
    }

    const getImageFromSplash = async () => {
        setIsLoading(true)
        let imagePathFromSplash = await fetch(URL_LINK).then(response => response.url)
        setImagePath(imagePathFromSplash)
        setIsLoading(false)
    }

    console.log("path: ", imagePath)
    return (
        <Modal visible={props.showModal} animationType="fade" style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={props.onCancel}>
                    <Text>BACK</Text>
                </TouchableOpacity>
                {isLoading ? <ActivityIndicator style={{width: "100%", height: "100%"}}/> :
                    <Image
                        source={{uri: imagePath}}Shared
                        style={{width: "100%", height: "100%"}}
                    />
                }
            </View>

            <View style={styles.body}>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="white"
                    underlineColorAndroid='white'
                />
                <TextInput
                    placeholder="Description"
                    placeholderTextColor="white"
                    underlineColorAndroid='white'
                />
                <View style={[styles.body_wrapper_1, {flexDirection: 'column'}]}>
                    <Text>Categories:</Text>
                    <CategorySelection />
                </View>
                <View style={styles.body_wrapper_1}>
                    <Text>Expected to Achieve:</Text>
                    <TouchableOpacity onPress={showDate}>
                        <Text>{entryState.date}</Text>
                    </TouchableOpacity>
                    {entryState.show && 
                        <DateTimePicker 
                        ValueContext    value={new Date()}
                            mode={"date"}
                            display={"calendar"}
                            onChange={setDateHandler}
                        />
                    }
                </View>
                <View style={styles.body_wrapper_1}>
                    <Text>Image:</Text>
                    <TouchableOpacity onPress={getImageFromSplash}>
                        <Text>Refresh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pickImageFromGallery}>
                        <Text>Gallery</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body_wrapper_1}>
                    <Text>Shared/Private:</Text>
                    <TouchableOpacity onPress={changePrivacyHandler}>
                        <Text>{entryState.privacy}</Text>
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
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    body: {
        flex: 1,
        backgroundColor: HEADER_COLOR
    },
    body_wrapper_1: {
        flexDirection: 'row',
        borderWidth: 0,
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 3,
        marginRight: 3
    },
    backButton: {
        position:'absolute', 
        zIndex: 1, 
        start: 10, 
        top: 10
    }
})

export default AddEntryForm