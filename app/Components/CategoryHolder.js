import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const CategoryHolder = props => {
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        borderRadius: 10,
        width: 100,
        height: 50,
        backgroundColor: 'orange',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryHolder