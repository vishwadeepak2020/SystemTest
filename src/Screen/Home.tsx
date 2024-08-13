import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, View, Text } from 'react-native';
import CategoriesSection from '../Screen/CategoriesSection';
import TrendingSection from '../Screen/TrendingSection';
import PredictionCard from '../Screen/PredictionCard';
import Header from '../Component/Header';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../Navigation/RootNavigation';

interface HomeProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>; // Adjust according to your stack
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  console.log("Navigation prop:", navigation); // Log the navigation prop for debugging

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../Assests/swing.jpg')} style={{ height: 120, width: "90%" }} />
        </View>
        <CategoriesSection />
        <Text style={{ paddingLeft: 20, color: 'black', fontSize: 18, fontWeight: 'bold' }}>Trending Now</Text>
        <View style={{ paddingLeft: 15 }}>
          <TrendingSection />
        </View>
        <PredictionCard navigation={navigation} /> 
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
});

export default Home;
