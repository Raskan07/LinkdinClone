import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import CradTopHeader from './CradTopHeader'
import CradVerticalLine from './CradVerticalLine'
import CardHeader from './CardHeader'
import CardDescription from './CardDescription'
import CradBody from './CradBody'

const Card = () => {
  return (
    <View style={[styles.container , { backgroundColor:Colors.default.bg_primary}]}>
      <CradTopHeader />
      <CradVerticalLine />
      <CardHeader />
      <CardDescription />
      <CradBody />
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container:{
    marginTop:10,
    marginBottom:10,
    width:"100%",
    alignItems:"center"
  }
})