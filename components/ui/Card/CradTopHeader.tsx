import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from "@/constants/Colors";

const CradTopHeader = () => {
  return (
    <View
      style={{
        width: "95%",
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
        padding: 5,
      }}
    >
      <Image
        style={{ width: 20, height: 20, borderRadius: 10,marginRight:10 }}
        source={{
          uri:
            "https://media.licdn.com/dms/image/D5603AQHpaoS0LHKHDQ/profile-displayphoto-shrink_200_200/0/1697334912802?e=1728518400&v=beta&t=RYIGtvfVJaasXHHaGMAAUf96ClGMX_K2_zmnFHZXfjQ",
        }}
      />
      <Text style={{fontSize:15,fontWeight:"400",width:"80%",}}>
        sanjana-bandara <Text style={{fontWeight:"300",fontSize:15}}> love this</Text>
      </Text>
      <View style={{display:"flex",flexDirection:"row",gap:7}}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color={Colors.default.icon_primary} />
        <AntDesign name="close" size={24} color={Colors.default.icon_primary} />
      </View>
    </View>
  );
};

export default CradTopHeader;

const styles = StyleSheet.create({});
