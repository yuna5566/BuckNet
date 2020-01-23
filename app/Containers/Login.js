import React from 'react'
import {
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet, 
    Dimensions, 
    StatusBar, 
    ImageBackground, 
    TextInput,
    TouchableOpacity
} from 'react-native'
import { AccessToken, LoginManager } from 'react-native-fbsdk';

const backgroundCover = require('../Assets/img/login_bg.jpg')

const Login = props => {

    const signInWithFacebook = () => {
        LoginManager.logInWithPermissions(["public_profile"]).then(
            (result, error) => {
                if (error){
                    console.log("Login fail with error: " + error)
                } else if (result.isCancelled) {
                    console.log("Login cancelled")
                } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                        console.log(data.accessToken.toString())
                    })
                    console.log("Login success with permissions: " + result.grantedPermissions.toString())
                }
            }
        );
    }

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <ImageBackground source={backgroundCover} style={styles.backgroundImage}>
            <View style={styles.body_container}>
                <View style={styles.body_container_wrapper_1}>
                    <Text style={styles.title}>BUCKNET</Text>
                </View>
                <View style={styles.body_container_wrapper_2}>
                    <View style={styles.form_container}>
                        <TextInput 
                            placeholder="Username"
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
                        <View style={styles.signin_btn_container}>
                            <TouchableOpacity>
                                <Text style={styles.btn_text}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.facebook_btn_container}>
                            <TouchableOpacity onPress={signInWithFacebook}>
                                <Text style={styles.btn_text}>Sign in using Facebook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: Dimensions.get('window').height * .05,
        backgroundColor: '#B19CD9'
    },
    backgroundImage: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover'
    },
    body_container: {
        flex: 1,
    },
    body_container_wrapper_1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body_container_wrapper_2: {
        flex: 1,
        borderWidth: 0,
        alignItems: 'center'
    },
    title : {
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
    },
    form_container: {
        width: 300,
    },
    signin_btn_container: {
        borderWidth: 0,
        borderRadius: 30,
        backgroundColor: '#6200EA',
        height: 50,
        justifyContent: 'center',
        marginTop: 50
    },
    btn_text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    facebook_btn_container: {
        borderWidth: 0,
        borderRadius: 30,
        backgroundColor: '#3b5998',
        height: 50,
        justifyContent: 'center',
        marginTop: 10
    }
})

export { Login }
// export default Login