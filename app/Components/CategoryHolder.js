import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import { Categories } from '../Constants/categories'

const CategoryHolder = props => {
    const {getCategory, getSelectedCategory} = props.category;
    const getCategoryHandler = () => { 
        getCategory(props.name)
        getSelectedCategory(props.id)
    }

    return(
        <TouchableOpacity onPress={getCategoryHandler}>
            <View style={styles.container}>
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        borderWidth: 0,
        borderRadius: 10,
        width: 100,
        height: 50,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryHolder