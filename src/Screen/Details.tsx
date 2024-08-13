import React from "react";
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from "../Navigation/RootNavigation";

// Define types for navigation and route
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface DetailsScreenProps {
  navigation: DetailsScreenNavigationProp;
}

const Details: React.FC<DetailsScreenProps> = ({ navigation }) => {
  const route = useRoute<DetailsScreenRouteProp>();
  return (
    <View style={{ flex: 1 }}>
      <Text>home screen data {route.params?.data} {route.params?.age}</Text>
    </View>
  );
}

export default Details;
