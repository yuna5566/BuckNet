import React from 'react'
import {Text, StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native'



const AuthLoading = props => {
    const continueForNow = () => {
        setTimeout(() => {
            props.navigation.navigate("Home")
        }, 2000)
    }

    continueForNow()
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>BUCKNET</Text>
            <ActivityIndicator size="large" color="violet"/>
            <Text>Some Description</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export { AuthLoading }
// export default AuthLoading