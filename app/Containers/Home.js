import React from 'react'
import {
    View, 
    Text,
    SafeAreaView,
    StatusBar,
    Dimensions,
    StyleSheet
} from 'react-native'
import { HEADER_COLOR } from '../Constants/colors'

const Home = props => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent"/>
            <View style={styles.header}>
                <Text style={styles.header_title}>BuckNet</Text>
            </View>
            <View>
                <Text>
                    Home
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: Dimensions.get('window').height * .15,
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
})

export { Home }
// export default Home