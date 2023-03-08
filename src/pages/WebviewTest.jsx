import React, { Component } from 'react'
import WebView from 'react-native-webview'
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'




const WebviewTest = () => {
    return (
         
        <WebView
          source={{
            uri: 'https://www.wired.com/story/crypto-bitcoin-grayscale-coup/'
          }}
          style={{ flex: 1 }}
        />
       
    )
}

export default WebviewTest
