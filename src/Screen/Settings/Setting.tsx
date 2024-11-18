import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function SettingScreen (){
  return (
    <View style={styles.item}>
      <Text>settingscreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
      flex:1,
        justifyContent:"center",
        alignItems:"center",
        
    }
})
