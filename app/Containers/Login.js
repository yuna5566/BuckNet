import React from 'react'
import {View, Text} from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const Login = props => {
    return(
        <View>
            <Text> Login </Text>
            <View>
                <LoginButton
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            console.log("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            console.log("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    console.log(data.accessToken.toString())
                                }
                            )
                        }
                    }
                }
                onLogoutFinished={() => console.log("logout.")}/>
            </View>
        </View>
    )
}
export { Login }
// export default Login