import React, {useContext} from 'react'
import {
    SafeAreaView, 
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native'
import {HEADER_COLOR} from '../Constants/colors'
import StateContext from '../Hooks/Context'

const Profile = props => {
    const stateContext = useContext(StateContext)
    console.log(stateContext.entryState.doneList)
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <View style={styles.header}>
                <Text style={styles.header_title}>Profile</Text>
            </View>
            <View style={styles.body}>

            </View>
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
})

export { Profile }
// export default Profile