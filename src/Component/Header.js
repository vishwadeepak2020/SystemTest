import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

// Define the Header component

interface HeaderProps {
  data: string; // Define the type for the data prop
}
const Header: React.FC<HeaderProps> = ({ data,navigation }) => {
console.log("djdjdjdjdj djdjdjd ",navigation)
  return (
    <View style={styles.container}>
    
      <View style={styles.iconTextContainer}>
        {data!="Events"?<Icon name="person-outline" size={24} color="black" />:<Icon name="arrow-back" size={24} color="black" onPress={()=>navigation.goBack()} />}
        <Text style={styles.text}>{data}</Text>
        
      </View>

   
       
      {data!="Events"?<View style={styles.iconTextContainer}>
        <Icon name="notifications-outline" size={24} color="black" />
        <View style={{position: 'absolute',height:5,width:5,backgroundColor:'red',top:0,right:0,borderRadius:5}}>

        </View>
      
        
      </View>:<View style={styles.iconTextContainer}>
        <Icon name="share" size={24} color="black" />
       
      
        
      </View>}
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
  },
  badgeContainer: {
    position: 'absolute',
    top: -4,
    right: -12,
  },
});

export default Header;
