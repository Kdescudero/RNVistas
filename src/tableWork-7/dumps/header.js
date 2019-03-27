import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header=()=>(
    <View style={styles.container}>
        <Icon name={'menu'} size={32}/>
        <Text>Logo</Text>
        <Icon name={'person-outline'} size={32}/>
    </View>
)

const styles = StyleSheet.create({
    container : {
        borderWidth : 1,
        borderColor : 'red',

        width           : '100%',
        display         : 'flex',
        alignItems      : 'center',
        justifyContent  : 'space-between',
        flexDirection   : 'row',
        padding         : 12,
        // backgroundColor : '#ececec'
    }    
})

export default Header;