import React, {useContext, useState, useEffect} from 'react'
import {
    SafeAreaView, 
    View,
    Text,
    StyleSheet,
    StatusBar, 
    Button,
    Image,
    ActivityIndicator,
    ScrollView
} from 'react-native'
import {HEADER_COLOR} from '../Constants/colors'
import StateContext from '../Hooks/Context'
import AsyncStorage from '@react-native-community/async-storage'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Profile = props => {
    const stateContext = useContext(StateContext)
    const [profile, setProfile] = useState();
    const [isLoading, setLoading] = useState(true);
    const [, refreshState] = useState();
    
    const logOutHandler = async () => {
        await AsyncStorage.clear();
        props.navigation.navigate("Login");
    }

    const getProfile = async() => {
        const AsyncStoreParams = ['@profile_pic', '@email', '@gender', '@name'];
        let ASObject = await AsyncStorage.multiGet(AsyncStoreParams);
        const profileObj = {};
        ASObject.map(data => {
            profileObj[data[0]] = data[1];
        })
        setProfile(profileObj);
        setLoading(false);
    }

    const refresh = () => {
        refreshState({});
    }

    useEffect(() => {
        getProfile();
    }, []);
 
    console.log("PROFILE ", profile);
    // console.log(stateContext.entryState.doneList) 
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <View style={styles.header}>
                <Text style={styles.header_title}>Profile</Text>
            </View>
            {
                isLoading ?
                <ActivityIndicator /> : 
                <View style={styles.body}>
                    <ScrollView>
                        <View style={styles.body_picture}>
                            <View style={styles.profilePicContainer}>
                            <Image
                                    source={{uri: profile['@profile_pic']}}
                                    style={styles.profilePicWrapper}
                                />
                            </View>
                        </View>
                        <View style={styles.body_info}>
                            <Text style={styles.info_label}>Name:</Text>
                            <CardContainer>
                                <Text style={styles.text_container_font}>{profile['@name']}</Text>
                            </CardContainer>

                            <Text style={styles.info_label}>Gender:</Text>
                            <CardContainer>
                                <Text style={styles.text_container_font}>{profile['@gender']}</Text>
                            </CardContainer>

                            <Text style={styles.info_label}>Email:</Text>
                            <CardContainer>
                                <Text style={styles.text_container_font}>{profile['@email']}</Text>
                            </CardContainer>

                            <Text style={styles.info_label}>???:</Text>
                            <CardContainer>
                                <Text style={styles.text_container_font}>???</Text>
                            </CardContainer>

                            <Text style={styles.info_label}>???:</Text>
                            <CardContainer>
                                <Text style={styles.text_container_font}>???</Text>
                            </CardContainer>

                            <Text style={styles.info_label}>???:</Text>
                            <CardContainer>
                                <Text style={styles.text_container_font}>???</Text>
                            </CardContainer>

                            <CardContainer>
                                <TouchableOpacity onPress={logOutHandler}>
                                    <Text style={[
                                        styles.text_container_font, 
                                        {textAlign: 'center', fontWeight: 'bold', fontSize: 50}
                                    ]}>LOG OUT</Text>
                                </TouchableOpacity>
                            </CardContainer>
                        </View>
                    </ScrollView>
                </View>
            }
            
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
    body_picture: {
        backgroundColor: HEADER_COLOR,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    body_info: {
        flex: 3,
        borderWidth: 0,
        backgroundColor: HEADER_COLOR,
        paddingTop: 15,
        paddingHorizontal: 5
    },  
    profilePicContainer: {
        borderWidth: 0,
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
    },
    profilePicWrapper: {
        width: 200,
        height: 200,
    },
    text_container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: '#ddd3ee',
        marginHorizontal: 10,
        marginTop: 2,
        marginBottom: 2
    },
    text_container_font: {
        fontSize: 25,
    },
    info_label: {
        fontSize: 20
    }
})

const CardContainer = props => {
    return(
        <View style={styles.text_container}>
            {props.children}
        </View>
    )
}

export { Profile }
// export default Profile