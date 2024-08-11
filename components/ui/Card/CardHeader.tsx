import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import Colors from "@/constants/Colors";


const CardHeader = () => {
  const isPerson = false;

  return (
    <View
      style={{
        width: "95%",
        flexDirection: "row",
        display: "flex",
        padding: 5,
        alignItems:"flex-start"
      }}
    >
      {/* profile Image */}
      <Image
        style={[
          { width: 40, height: 40,paddingLeft:10 , marginRight:10 },
          isPerson ? { borderRadius: 20 } : { borderRadius: 3 },
        ]}
        source={{
          uri:
            "https://media.licdn.com/dms/image/v2/D560BAQGzHcF9r3B_gg/company-logo_100_100/company-logo_100_100/0/1706102860241/coding_dsa_logo?e=1731542400&v=beta&t=FNzEKwyKYUv6ILJJb2jVzrmy_S-ToztywiVxRaAQHVE",
        }}
      />
      {/* Description */}
      <View style={{width:"70%",marginBottom:10,top:-5}}>
        <Text style={{fontSize:16,fontWeight:"700",color:Colors.default.text_bold}}>Coding DSA</Text>
        <Text style={{fontSize:12,fontWeight:"400",color:Colors.default.icon_secondary}}>5992 followers</Text>
        <View style={{ display: "flex", flexDirection: "row",alignItems:"center",gap:5 }}>
          <Text style={{fontWeight:"400",color:Colors.default.icon_secondary,fontSize:11}}>1h . Edited .</Text>
          <Fontisto name="world-o" size={12} color={Colors.default.icon_secondary} />
        </View>
      </View>

      {/* flow */}
      <TouchableOpacity style={{flex:1,alignItems:"center",justifyContent:"center",padding:3}}>
        <Text style={{color:Colors.default.blue,fontWeight:"700",marginTop:2,fontSize:15}} >Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardHeader;

const styles = StyleSheet.create({});
