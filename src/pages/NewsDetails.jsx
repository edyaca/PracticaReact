import React, { Component } from 'react'
import WebView from 'react-native-webview'
import { useNavigation } from "@react-navigation/native"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import {View, TouchableOpacity, StyleSheet} from 'react-native'

const NewsDetails = ({ route }) => {
    const navigation = useNavigation()
    const handleBack = () => {
        navigation.goBack()
    }
    console.log('de nuevo lalo')    
    console.log(route.params.url)    
    const ruta = 'uri: '+ route.params
    console.log(ruta)  
    return (
        <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={handleBack} style={styles.backButtom}>
            <FontAwesome name="chevron-left" size={24} color='black'></FontAwesome>
        </TouchableOpacity>
        <WebView
          source={{
            uri: route.params.url
          }} 
        />
      </View>
    )
}

const styles = StyleSheet.create({
    backButtom: {
        padding: 10,
        position: 'absolute',
        marginTop: 35,
        zIndex: 2,
        top: 0
    }
})
export default NewsDetails
