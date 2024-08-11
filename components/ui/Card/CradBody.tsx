import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const CradBody = () => {
  const [isImage,setIsImage] = useState()
  const [video,setVideo] = useState()
  const [imageCollage,setImageCollage] = useState()
  
  return (
    <View>
      <Text>CradBody</Text>
    </View>
  )
}

export default CradBody

const styles = StyleSheet.create({})


// there are image , video , image Colloge as well , depending on the space it will manage .. 

// one space =  3 object 