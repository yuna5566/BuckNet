import React, { useState } from 'react'
import {
    View, 
    Text,
    SafeAreaView,
    StatusBar,
    Dimensions,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { HEADER_COLOR } from '../Constants/colors'

import EntryHolder from '../Components/EntryHolder'
import AddEntryForm from '../Components/AddEntryForm'

const testState = [
    {
        id: '0',
        entry: 'name 0',
        desc: 'desc 0'
    },
    {
        id: '1',
        entry: 'name 1',
        desc: 'desc 1'
    },
    {
        id: '2',
        entry: 'name 2',
        desc: 'desc 2'
    },
    {
        id: '3',
        entry: 'name 3',
        desc: 'desc 3'
    },
    {
        id: '4',
        entry: 'name 4',
        desc: 'desc 4'
    },
]

const Home = props => {
    const [showModal, setShowModal] = useState(false)

    const showModalHandler = () => {
        setShowModal(true)
    }

    const closeModalHandler = () => {
        setShowModal(false)
    }
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <View style={styles.header}>
                <Text style={styles.header_title}>BuckNet</Text>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={testState}
                    renderItem={({item}) => (
                        <EntryHolder 
                            id={item.id}
                            entry={item.entry}
                            desc={item.desc}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            
            <View style={styles.btn_add_container}>
                <TouchableOpacity onPress={showModalHandler}>
                    <View style={styles.btn_add_wrapper}>
                        <Text style={styles.btn_add_text}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <AddEntryForm
                showModal={showModal}
                onCancel={closeModalHandler}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: HEADER_COLOR,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    header_title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10
    },
    body: {
        flex: 5
    },
    btn_add_container: {
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        elevation: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    btn_add_wrapper: {
        borderWidth: 0,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: HEADER_COLOR,
    },
    btn_add_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 35,
    }
})

export { Home }
// export default Home