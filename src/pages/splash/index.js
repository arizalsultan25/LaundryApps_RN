import React, { useEffect} from 'react'
import { ImageBackground, StyleSheet, Image, Text, View } from 'react-native'
import { Logo, SplashBg } from '../../assets'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp')
        }, 5000)
    }, [navigation])

    return (
        <ImageBackground source= {SplashBg} style= {styles.background}>
            <Image source={Logo} style={styles.logo} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center"
    },

    logo : {
        width : 222,
        height : 105
    }
})

export default Splash

