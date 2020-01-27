import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Button,
    StatusBar,
    Dimensions
} from 'react-native'

const AddEntryForm = props => {
    return (
        <Modal visible={props.showModal} animationType="fade" style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <Text>Name</Text>
                <Text>Description</Text>
                <Text>Category</Text>
                <Text>Expected to Achieve</Text>
                <Text>Image</Text>
                <Text>Shared/Private</Text>
                <Button
                    title="Cancel"
                    onPress={props.onCancel}
                />
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
        backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    body: {
        flex: 1
    }
})

export default AddEntryForm