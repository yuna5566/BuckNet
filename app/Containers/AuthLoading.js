import React from 'react'
import {Text, StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native'

const AuthLoading = () => {
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

export default AuthLoading