import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header=()=>(
    <View style={styles.container}>
        <Icon name={'menu'} size={32}/>
        <Image source={require('../../../assets/logos/Logo-triko-facebook.png')} style={styles.logo}/>
        <Icon name={'person-outline'} size={32}/>
    </View>
)

const styles = StyleSheet.create({
    container : {
        width           : '100%',
        display         : 'flex',
        alignItems      : 'center',
        justifyContent  : 'space-between',
        flexDirection   : 'row',
        padding         : 12,
        // backgroundColor : '#ececec'
    },
    logo : {
        width  : '35%',
        height : 50,
    }
})

export default Header;