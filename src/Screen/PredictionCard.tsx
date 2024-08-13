import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';

interface Prediction {
  id: number;
  match: string;
  details: string;
  yesPrice: string;
  noPrice: string;
}

const predictions: Prediction[] = [
  {
    id: 1,
    match: 'Kolkata to win the match vs Mumbai?',
    details: 'H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0',
    yesPrice: '₹5.3',
    noPrice: '₹4.7',
  },
  {
    id: 2,
    match: 'Kolkata to win the match vs Mumbai?',
    details: 'H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0',
    yesPrice: '₹5.3',
    noPrice: '₹4.7',
  },
  {
    id: 3,
    match: 'Kolkata to win the match vs Mumbai?',
    details: 'H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0',
    yesPrice: '₹5.3',
    noPrice: '₹4.7',
  },
];

const PredictionCard: React.FC = ({navigation}) => {
  console.log("navigation data will be",navigation)
  return (
    <View style={{padding:10}}>
      {predictions.map((prediction) => (
        <View key={prediction.id} style={styles.card}>
           <View style={styles.matchContainer}>
            <Text style={styles.match}>{prediction.match}</Text>
            <Image source={require("../Assests/ipl.jpg")} style={{height:30,width:30,resizeMode:'contain',position:'absolute',right:"10%"}}/>
          </View>
          <Text style={styles.details}>{prediction.details}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.yesButton]} onPress={()=>navigation.navigate('QuestionDetail',{prediction:prediction})}>
              <Text style={[styles.buttonText,{color:"#444ce7"}]}>YES {prediction.yesPrice}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.noButton]}>
              <Text style={[styles.buttonText,{color:"#d92d20"}]}>NO {prediction.noPrice}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  match: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  matchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5, // Space between icon and text
  },
  details: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: '#D6E9FE',
  },
  noButton: {
    backgroundColor: '#FDE2E2',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PredictionCard;
