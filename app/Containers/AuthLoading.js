import React from 'react'
import {Text, StyleSheet, SafeAreaView, ActivityIndicator, StatusBar} from 'react-native'



const AuthLoading = props => {
    const continueForNow = () => {
        setTimeout(() => {
            props.navigation.navigate("Login")
        }, 2000)
    }

    continueForNow()
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#B19CD9"/>
            <Text style={styles.title}>BUCKNET</Text>
            <ActivityIndicator size="large" color="#FDFD96"/>
            <Text>Let them help yours, by sharing it to them!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B19CD9'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export { AuthLoading }
// export default AuthLoading