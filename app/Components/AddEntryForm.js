import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Button,
    StatusBar,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'
import { URL_LINK } from '../Constants/connections'
import DateTimePicker from '@react-native-community/datetimepicker'
import ImagePicker from 'react-native-image-crop-picker'
import CategorySelection from '../Components/CategorySelection'

const AddEntryForm = props => {
    const [dateState, setDateState] = useState({
        show: false,
        date: "Pick a date",
    })

    const [imagePath, setImagePath] = useState(URL_LINK);
    
    const showDate = () => {
        setDateState({
            ...dateState,
            show: true
        })
    }

    const setDateHandler = (event, date) => {
        let newDate = typeof date === "undefined" ? dateState.date : date.getMonth()+1 + "-" + date.getDate() + "-" + date.getFullYear()
        setDateState({
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
          });
    }
    console.log("image path ", imagePath)
    return (
        <Modal visible={props.showModal} animationType="fade" style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={props.onCancel}>
                    <Text>BACK</Text>
                </TouchableOpacity>
                <Image
                    source={{uri: imagePath}}
                    style={{width: "100%", height: "100%"}}
                />
            </View>
            <View style={styles.body}>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor="green"
                    underlineColorAndroid='green'
                />
                <TextInput
                    placeholder="Description"
                    placeholderTextColor="green"
                    underlineColorAndroid='green'
                />
                <View>
                    <Text>Categories:</Text>
                    <CategorySelection />
                </View>
                <View style={styles.body_wrapper_1}>
                    <Text>Expected to Achieve:</Text>
                    <TouchableOpacity onPress={showDate}>
                        <Text>{dateState.date}</Text>
                    </TouchableOpacity>
                    {dateState.show && 
                        <DateTimePicker 
                            value={new Date()}
                            mode={"date"}
                            display={"calendar"}
                            onChange={setDateHandler}
                        />
                    }
                </View>
                <View style={styles.body_wrapper_1}>
                    <Text>Image:</Text>
                    <TouchableOpacity>
                        <Text>Refresh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={pickImageFromGallery}>
                        <Text>Gallery</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body_wrapper_1}>
                    <Text>Shared/Private</Text>
                    <Text>Shared</Text>
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
        // height: Dimensions.get('window').height * .3,
        // backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    body: {
        flex: 1
    },
    body_wrapper_1: {
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-between'
    },
    backButton: {
        position:'absolute', 
        zIndex: 1, 
        start: 10, 
        top: 10
    }
})

export default AddEntryForm