import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const defaultColor = "orange"
const highlightColor = "white"

const CategoryHolder = props => {
    const [highlight, setHighlight] = useState(defaultColor)
    const {getCategory, getSelectedCategory} = props.category;
    const getCategoryHandler = () => { 
        getCategory(props.name)
        getSelectedCategory(props.id)
    }
    
    return(
        <TouchableOpacity onPress={getCategoryHandler}>
            <View style={[styles.container, {backgroundColor: highlight}]}>
                <Text>{props.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColor,
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