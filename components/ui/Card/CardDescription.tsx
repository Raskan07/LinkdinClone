import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

const CardDescription = () => {
    const text =  {
        description : "Discover the key principles that make interfaces intuitive and user-friendly, helping you to excel in today’s fast-paced tech world!Register for Pagero's upcoming webinar, hosted by Isurika Perera,Software Engineer based in Colombo, who will guide you through the Golden Rules of UI Design Don’t miss this chance to boost your UI design skills. Register now!"
    }
  const [toggle, setToggle] = useState(false);
  const [totalCount,setTotalcount] = useState(text.description.length)


  return (
    <View style={{width:"95%",alignItems:"flex-start",padding:5,flexDirection:"row",paddingTop:-3}} >
      <Text style={{width:"100%",color:Colors.default.text_bold}}>
        {
            totalCount >=  90 ? text.description.slice(0,110) : text.description
        }

        {
            totalCount >=  90 ? 
                <Text
                 onPress={() => setTotalcount(0)}
                 style={{color:Colors.default.icon_secondary}}>   ... see more</Text>
            : ""
        }
      </Text>
    </View>
  );
};

export default CardDescription;

const styles = StyleSheet.create({});
