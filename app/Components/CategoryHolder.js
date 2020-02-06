import React, { useState } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Categories } from '../Constants/categories'
import { Icon } from 'react-native-elements'

const CategoryHolder = props => {
    const {getCategory, getSelectedCategory} = props.category;
    const getCategoryHandler = () => { 
        getCategory(props.name)
        getSelectedCategory(props.id)
    }

    const getCategoryIcon = (category) => {
        switch(category){
            case Categories[0].name:
                return <Icon name="directions-run" type="material" color="white"/>
            case Categories[1].name:
                return <Icon name="flight" type="material" color="white"/>
            case Categories[2].name:
                return <Icon name="work" type="material" color="white"/>
            case Categories[3].name:
                return <Icon name="attach-money" type="material" color="white"/>
            case Categories[4].name:
                return <Icon name="supervisor-account" type="material" color="white"/>
            case Categories[5].name:
                return <Icon name="near-me" type="material" color="white"/>
        }
    }

    return(
        <TouchableOpacity onPress={getCategoryHandler}>
            <View style={styles.container}>
                {getCategoryIcon(props.name)}
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