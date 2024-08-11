import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const ProfileAvatar = () => {
  return (
    <TouchableOpacity onPress={() => console.log("ProfileAvatar Button")} style={{marginLeft:10}}>
        <Image 
        style={{width:36,height:36,borderRadius:18,backgroundColor:Colors.default.icon_territary}}
        source={{uri:"https://media.licdn.com/dms/image/D5635AQEhTZU4ExRE8g/profile-framedphoto-shrink_100_100/0/1719447592356?e=1723878000&v=beta&t=FQzDpwEqOc6sYMYYBK17Fy0qjBkQgXi9ykHGRJiu5q0"}}/>
     </TouchableOpacity>
  )
}

export default ProfileAvatar

const styles = StyleSheet.create({})