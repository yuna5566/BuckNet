import React, {useState} from 'react'
import { View, FlatList } from 'react-native'
import CategoryHolder from '../Components/CategoryHolder'
import { Categories } from '../Constants/categories'

const CategorySelection = props => {
    const selectedCategory = (id) => {
        Categories.forEach(category => {
            if (category.id === id){
                category.selected = true
            } else {
                category.selected = false;
            }
        })
        // console.log("CAT ", Categories)
    }

    const getCategoryFunction = {
        getCategory: props.category,
        getSelectedCategory: selectedCategory
    }

    return (
        <View>
            <FlatList
                data={Categories}
                renderItem={({item}) => (
                    <CategoryHolder
                        id={item.id}
                        name={item.name}
                        selected={item.selected}
                        category={getCategoryFunction}
                    />
                )}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    )
}

export default CategorySelection