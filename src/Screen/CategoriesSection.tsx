import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Category {
  name: string;
  icon: string;
  color: string;
}

const categories: Category[] = [
  { name: 'Cricket', icon: 'circle', color: '#FF4D4D' },
  { name: 'Crypto', icon: 'bitcoin', color: '#F7931A' },
  { name: 'Football', icon: 'soccer', color: '#1C7EF5' },
  { name: 'Stocks', icon: 'chart-line', color: '#28C76F' },
  { name: 'Economy', icon: 'currency-usd', color: '#FFD700' },
  { name: 'Cricket', icon: 'circle', color: '#FF4D4D' },
  { name: 'Crypto', icon: 'bitcoin', color: '#F7931A' },
  { name: 'Football', icon: 'soccer', color: '#1C7EF5' },
  { name: 'Stocks', icon: 'chart-line', color: '#28C76F' },
  { name: 'Economy', icon: 'currency-usd', color: '#FFD700' },
];

const CategoriesSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.categoryContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <View style={styles.iconContainer}>
              <Icon name={category.icon} size={30} color={category.color} />
            </View>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#F7F7F7',
    paddingLeft:35
  },
  categoryContainer: {
    paddingVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 40,
  },
  iconContainer: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default CategoriesSection;
