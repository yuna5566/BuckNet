import React from 'react'
import { View, Text, FlatList } from 'react-native'
import CategoryHolder from '../Components/CategoryHolder'
const categories = [
    {
        id: "0",
        name: "Adventure"
    },
    {
        id: "1",
        name: "Travel"
    },
    {
        id: "2",
        name: "Career"
    },
    {
        id: "3",
        name: "Financial"
    },
    {
        id: "4",
        name: "Relationship"
    },
]

const CategorySelection = props => {
    return (
        <View>
            <FlatList
                data={categories}
                renderItem={({item}) => (
                    <CategoryHolder
                        id={item.id}
                        name={item.name}
                    />
                )}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </View>
    )
}

export default CategorySelection