import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, TextInput, View,Text, TouchableOpacity } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import AntDesign from '@expo/vector-icons/AntDesign';
import ProfileAvatar from '@/components/ui/ProfileAvatar';
import Ionicons from '@expo/vector-icons/Ionicons';



const SearchBar = () => {
  return (
    <TouchableOpacity style={{backgroundColor:Colors.default.bg_territary,flexDirection:"row",padding:2,paddingTop:2,paddingBottom:2,borderRadius:7,alignItems:"center",width:"105%"}}>
      <Ionicons name="search" size={24} color={Colors.default.icon_territary} style={{paddingLeft:5,marginRight:0}} />
      <View style={{padding:3,width:"90%"}}>
        <Text style={{color:Colors.default.icon_territary,fontSize:16}}>Search</Text>
      </View>
    </TouchableOpacity>
  )
}





function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.default.icon_primary,
        tabBarInactiveTintColor:Colors.default.icon_secondary,
        headerShadowVisible:false,
        headerShown: useClientOnlyValue(false, true),
        headerLeft:() => (
          <ProfileAvatar />
        ),
        headerRight : () => (
          <AntDesign name="message1" size={22} color="black"  style={{marginRight:18,}}/>
        ),

        headerTitle: () => (
          <SearchBar />
        ),

        


      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color,size }) => <FontAwesome name="home" size={33} color={color} />,
        }}
      />
      <Tabs.Screen
        name="network"
        options={{
          title: 'Network',
          tabBarIcon: ({ color,size }) => <FontAwesome name="circle-o-notch" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: 'Post',
          tabBarIcon: ({ color,size }) => <FontAwesome name="plus-square-o" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color,size }) => <FontAwesome name="bell" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: 'Jobs',
          tabBarIcon: ({ color,size }) => <FontAwesome name="shopping-bag" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}


