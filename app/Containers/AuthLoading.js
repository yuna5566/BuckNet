import React from 'react'
import {Text, StyleSheet, SafeAreaView, ActivityIndicator, StatusBar} from 'react-native'
import { HEADER_COLOR } from '../Constants/colors'
import AsyncStorage from '@react-native-community/async-storage'


const AuthLoading = props => {
    const continueForNow = async() => {
        const withAccess = await AsyncStorage.getItem('@access');
        console.log(withAccess);
        setTimeout(() => {
            props.navigation.navigate( Boolean(withAccess) ? "Home" : "LoginScreen");
        }, 2000)
    }

    continueForNow();
    
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
        backgroundColor: HEADER_COLOR
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export { AuthLoading }
// export default AuthLoading