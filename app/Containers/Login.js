import React, {useState} from 'react'
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
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import { HEADER_COLOR } from '../Constants/colors'
import AsyncStorage from '@react-native-community/async-storage';
import { API_CALL, ACCESS_TOKEN } from '../Constants/connections';
import { User } from '../Models/User';
const backgroundCover = require('../Assets/img/login_bg.jpg')

const Login = props => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const inputUserHandler = userData => { setUser(userData); }
    const inputPassHandler = passData => { setPass(passData); }

    const signInWithFacebook = async() => {
        try{
            const successLogin = await LoginManager.logInWithPermissions(["public_profile", "user_gender", "email"]);
            if (successLogin.isCancelled){
                throw 'Cancelled';
            }
            const getToken = await AccessToken.getCurrentAccessToken();
            console.log("ACCESS TOKEN", getToken);
            const getInfo = new GraphRequest(
                'me?fields=id,name,email,gender,birthday,picture.type(large)',
                { accessToken: getToken.accessToken },
                (error, result) => {
                    if (error) {
                        console.log('login info has error: ' + error);
                    } else {
                        console.log('result:', result);
                        const email = ['@email', result.email];
                        const gender = ['@gender', result.gender];
                        const name = ['@name', result.name];
                        const access = ['@access', getToken.accessToken];
                        const profilePic = ['@profile_pic', result.picture.data.url];
                        storeUserInfo([email, gender, name, access, profilePic]);
                    }
                }
            );
            new GraphRequestManager().addRequest(getInfo).start();
        }catch (error) {
            console.log(error)
        }
    }
    
    const storeUserInfo = async (userInfo) => {
        await AsyncStorage.multiSet(userInfo);
        goToHome();
    }

    const goToHome = async () => { props.navigation.navigate("Home"); }

    const goToSignUp = () => { props.navigation.navigate('SignUpScreen'); }

    const userLogIn = async () => {
        const client = new User(user, pass);
        const success = await client.login(API_CALL);
        if (success.token){
            const access = ['@access', success.token];
            console.log(access);
            storeUserInfo([access]);
            // goToHome();
        } else {
            console.log(success.message);
        }
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
                            placeholder="Email"
                            placeholderTextColor="white"
                            selectionColor="white"
                            underlineColorAndroid='white'
                            onChangeText={inputUserHandler}
                            value={user}
                        />
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor="white"
                            selectionColor="white"
                            underlineColorAndroid='white'
                            secureTextEntry={true}
                            onChangeText={inputPassHandler}
                            value={pass}
                        />
                        <View style={styles.signin_btn_container}>
                            <TouchableOpacity onPress={userLogIn}>
                                <Text style={styles.btn_text}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.facebook_btn_container}>
                            <TouchableOpacity onPress={() => {}}>
                                <Text style={styles.btn_text}>Sign in using Facebook</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={goToSignUp}>
                                <Text style={styles.btn_text}>If you don't have an account, sign up!</Text>
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
        backgroundColor: HEADER_COLOR
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

//BEFORE I REFACTORED THE CODE...
 // const signInWithFacebook1 = () => {
    //     LoginManager.logInWithPermissions(["public_profile", "user_age_range", "user_gender", "email"]).then(
    //         (result, error) => {
    //             if (error){
    //                 console.log("Login fail with error: " + error)
    //             } else if (result.isCancelled) {
    //                 console.log("Login cancelled")
    //             } else {
    //                 AccessToken.getCurrentAccessToken().then(data => {
    //                     console.log("DATA - Access Token: ", data.accessToken.toString())
    //                     const info = new GraphRequest(
    //                         'me?fields=id,name,email,age_range,gender',
    //                         null,
    //                         (error, result) => {
    //                             if (error) {
    //                                 console.log('login info has error: ' + error);
    //                             } else {
    //                                 console.log('result:', result);
    //                             }
    //                         }
    //                     );
    //                     new GraphRequestManager().addRequest(info).start();
    //                 }).catch(err => {
    //                     console.log(err)
    //                 })
    //                 console.log("Login success with permissions: " + result.grantedPermissions.toString())
    //             }
    //         }
    //     )
    // }