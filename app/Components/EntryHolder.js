import React, { useState } from 'react'
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    ImageBackground
} from 'react-native'

const EntryHolder = props => {
    const {id, name, description, imageURL} = props.entry
    const [imageAPI, setImage] = useState(imageURL);
    
    console.log("PROPS ", props)
    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <TouchableOpacity>
                    <ImageBackground blurRadius={0} source={{uri: imageAPI}} style={styles.imageBG}>
                        <View style={styles.overlay}>
                            <Text style={styles.textStyle_1}> {name} </Text>
                            <Text style={styles.textStyle_2}> {description} </Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: '2%',
        height: 150
    },
    cardContainer: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'gray',
        borderRadius: 20,
        marginVertical: 5,
        width: '100%',
        overflow: 'hidden'
    },
    imageBG: {
        height: '100%',
        width: '100%',
        overflow: 'hidden'
    },
    overlay: {
        backgroundColor:'rgba(128,128,128,0.4)',
        paddingLeft: 20,
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        paddingVertical: 10
    },
    textStyle_1: {
        borderWidth: 0,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white',
        
    },
    textStyle_2: {
        fontSize: 15,
        color: 'white',
        paddingLeft: 15
    }
})

export default EntryHolder