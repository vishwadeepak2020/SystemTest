import React from "react";
import {View ,Text,Button} from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from "../Navigation/RootNavigation";

interface BookingScreenprops{
  navigation:StackNavigationProp<RootStackParamsList,'Home'>
}


const HomeScreen = ({navigation}:BookingScreenprops) =>{
  return(
    <View style={{flex:1}}>
        <Text>Booking screen data</Text>
    </View>
  )
}

export default HomeScreen;