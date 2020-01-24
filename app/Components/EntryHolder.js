import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const EntryHolder = props => {
    // console.log(props)
    return(
        <TouchableOpacity>
            <View style={styles.cardContainer}>
                <Text> {props.id} </Text>
                <Text> {props.entry} </Text>
                <Text> {props.desc} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'violet',
        height: 150,
        borderWidth: 1,
        borderColor: 'yellow'
    }
})

export default EntryHolder