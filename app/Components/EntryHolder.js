import React, { useState } from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import { URL_LINK } from '../Constants/connections'

const EntryHolder = props => {
    const [imageAPI, setImage] = useState(URL_LINK);

    return(
        <TouchableOpacity>
            <View style={styles.cardContainer}>
                <ImageBackground blurRadius={1} source={{uri: imageAPI}} style={styles.imageBG}>
                    <Text> {props.id} </Text>
                    <Text> {props.entry} </Text>
                    <Text> {props.desc} </Text>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'violet',
        height: 150,
        borderWidth: 1,
        borderColor: 'white'
    },
    imageBG: {
        height: '100%',
        width: '100%',
    }
})

export default EntryHolder