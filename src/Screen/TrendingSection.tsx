import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const trendingItems: { title: string; icon?: string; imageSrc?: any }[] = [
  { title: 'KOL v/s MUMB', imageSrc: require('../Assests/ipl.jpg') }, // Include IPL logo here
  { title: 'PSG v/s Dortmund', icon: 'football-outline' },
  { title: 'Bitcoin', icon: 'cash-outline' },
  { title: 'Growth', icon: 'trending-up-outline' },
  { title: 'Bitcon', icon: 'cash-outline' },
  { title: 'Growth', icon: 'trending-up-outline' },
  { title: 'PSG v/s Dortmund', icon: 'football-outline' },
  { title: 'Technology', icon: 'laptop-outline' },
];

const TrendingSection: React.FC = () => {
  // Split the items into two rows
  const firstRowItems = trendingItems.slice(0, Math.ceil(trendingItems.length / 2));
  const secondRowItems = trendingItems.slice(Math.ceil(trendingItems.length / 2));

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      <View>
        {/* First Row */}
        <View style={styles.row}>
          {firstRowItems.map((item, index) => (
            <View key={index} style={styles.trendingItem}>
              {item.imageSrc ? ( // If there is an imageSrc, display the image
                <Image source={item.imageSrc} style={styles.iplIcon} />
              ) : (
                <Icon name={item.icon} size={20} color="#333" style={styles.icon} />
              )}
              <Text style={styles.trendingText}>{item.title}</Text>
            </View>
          ))}
        </View>

        {/* Second Row */}
        <View style={styles.row}>
          {secondRowItems.map((item, index) => (
            <View key={index} style={styles.trendingItem}>
              <Icon name={item.icon} size={20} color="#333" style={styles.icon} />
              <Text style={styles.trendingText}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10, // Space between rows
  },
  trendingItem: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
    flexDirection: 'row', // Align icon and text horizontally
    alignItems: 'center', // Center align the icon and text
  },
  iplIcon: {
    width: 20, // Set width for the IPL logo
    height: 20, // Set height for the IPL logo
    marginRight: 5, // Space between icon and text
    resizeMode: 'contain', // Keep the aspect ratio of the image
  },
  icon: {
    marginRight: 5, // Space between icon and text
  },
  trendingText: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default TrendingSection;
