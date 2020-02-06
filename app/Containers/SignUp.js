import React from 'react'
import {
    View, 
    Text, 
    SafeAreaView, 
    ImageBackground, 
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
const backgroundCover = require('../Assets/img/login_bg.jpg')

const SignUp = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundCover} style={styles.backgroundImage}>
                <View style={styles.body_container}>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="white"
                        selectionColor="white"
                        underlineColorAndroid='white'
                    />
                    <TextInput 
                        placeholder="Password"
                        placeholderTextColor="white"
                        selectionColor="white"
                        underlineColorAndroid='white'
                        secureTextEntry={true}
                    />
                    <TextInput 
                        placeholder="Firstname"
                        placeholderTextColor="white"
                        selectionColor="white"
                        underlineColorAndroid='white'
                        secureTextEntry={true}
                    />
                    <TextInput 
                        placeholder="Lastname"
                        placeholderTextColor="white"
                        selectionColor="white"
                        underlineColorAndroid='white'
                    />
                    <TextInput 
                        placeholder="Gender"
                        placeholderTextColor="white"
                        selectionColor="white"
                        underlineColorAndroid='white'
                    />
                    <TouchableOpacity>
                        <View style={styles.signup_btn_container}>
                            <Text style={styles.btn_text}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%',
        borderWidth: 1,
    }, 
    body_container: {
        justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
        height: '100%',
        borderWidth: 1,
        paddingHorizontal: 35
    },
    backgroundImage: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover'
    },
    signup_btn_container: {
        borderWidth: 0,
        borderRadius: 30,
        backgroundColor: '#6200EA',
        height: 50,
        justifyContent: 'center',
        marginTop: 50
    },
    btn_text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
})

export { SignUp }