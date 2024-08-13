import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Screen/Home';
import Details from '../Screen/Details';
import Sports from '../Screen/Sport';
import BookingList from '../Screen/BookingList';
import Search from '../Screen/Search';
import Portzfolio from '../Screen/Portzfolio';
import Wallet from '../Screen/Wallet';
import QuestionDetail from '../Screen/QuestionDetail';
import PredictionCard from '../Screen/PredictionCard';

export type RootStackParamsList = {
  Home: undefined;
  Details: {
    data: string;
    age: number;
  };
  Setting: undefined;
  BookingList: undefined;
  Sports: undefined;
  Portfolio:undefined;
  Wallet:undefined;
  QuestionDetail:undefined;
  PredictionCard:undefined
};

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Search':
              iconName = 'search-outline';
              break;
            case 'Sports':
              iconName = 'football-outline';
              break;
            case 'Portfolio':
              iconName = 'briefcase-outline';
              break;
            case 'Wallet':
              iconName = 'wallet-outline';
              break;
            default:
              iconName = 'ellipse-outline'; // Default icon
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Sports" component={Sports} />
      <Tab.Screen name="Portfolio" component={Portzfolio} />
      <Tab.Screen name="Wallet" component={Wallet} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Sports" component={Sports} />
        <Stack.Screen name="Portfolio" component={Portzfolio} />
        <Stack.Screen name="Wallet" component={Wallet}/>
        <Stack.Screen name="QuestionDetail" component={QuestionDetail}/>
        <Stack.Screen name="PredictionCard" component={PredictionCard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
