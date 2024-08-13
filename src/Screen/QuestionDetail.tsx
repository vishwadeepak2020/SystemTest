import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Header from '../Component/Header';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const QuestionDetail: React.FC = ({navigation}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // State to keep track of selected options
  const [activeTab, setActiveTab] = useState<string>('Activity'); // State to track active tab
  const route = useRoute();
  const screenWidth = Dimensions.get('window').width;

  const options = ['1h', '3h', '12h', 'All time'];

  // Chart data
  const data = {
    labels: ['01:00 AM', '01:10 AM', '01:20 AM', '01:30 AM'],
    datasets: [
      {
        data: [62, 60, 55, 60, 65, 70, 68],
        color: (opacity = 1) => `rgba(54, 162, 235, ${opacity})`, // Blue color for the line
        strokeWidth: 2, // Line thickness
      },
    ],
  };

  // Chart configuration
  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Black color for labels
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4', // Size of the dots
      strokeWidth: '2',
      stroke: '#36A2EB', // Blue outline for dots
    },
    propsForBackgroundLines: {
      strokeDasharray: '', // Solid lines for background
      stroke: '#e3e3e3', // Light gray color for background lines
    },
    propsForVerticalLabels: {
      fontSize: 12, // Smaller font size for time labels
    },
    propsForHorizontalLabels: {
      fontSize: 12, // Smaller font size for value labels
    },
  };

  // Toggle the selection of options
  const toggleOption = (option: string) => {
    setSelectedOptions(prevSelectedOptions => {
      if (prevSelectedOptions.includes(option)) {
        // If option is already selected, remove it
        return prevSelectedOptions.filter(
          selectedOption => selectedOption !== option,
        );
      } else {
        // If option is not selected, add it
        return [...prevSelectedOptions, option];
      }
    });
  };

  // Data for Activity tab
  const activityData = [
    {
      id: '1',
      userLeft: 'Hella',
      userRight: 'Robin',
      leftValue: '₹9',
      rightValue: '',
      color: 'blue',
    },
    {
      id: '2',
      userLeft: 'Hella',
      userRight: 'Robin+',
      leftValue: '₹5',
      rightValue: '₹5',
      color: '#d3d3d3',
    },
    {
      id: '3',
      userLeft: 'Hella',
      userRight: 'Robin+',
      leftValue: '₹5',
      rightValue: '₹5',
      color: '#d3d3d3',
    },
    {
      id: '4',
      userLeft: 'Hella',
      userRight: 'Robin+',
      leftValue: '₹5',
      rightValue: '₹5',
      color: '#d3d3d3',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.profileContainer}>
          <Icon name="person-outline" size={24} color="white" />
        </View>
        <Text style={styles.username}>{item.userLeft}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarLeft, {backgroundColor: item.color}]}>
            <Text style={styles.valueText}>{item.leftValue}</Text>
          </View>
          <View
            style={[styles.progressBarRight, {flex: item.rightValue ? 1 : 0.3}]}>
            <Text style={styles.valueText}>{item.rightValue}</Text>
          </View>
        </View>
        <Text style={styles.timeText}>a few seconds ago</Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.profileContainer}>
          <Icon name="person-outline" size={24} color="white" />
        </View>
        <Text style={styles.username}>{item.userRight}</Text>
      </View>

      {/* <Text style={styles.timeText}>a few seconds ago</Text> */}
    </View>
  );
  return (
    <View style={styles.container}>
      <Header data={'Events'} navigation={navigation} />
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../Assests/ipl.jpg')}
            style={{height: 100, width: 100, resizeMode: 'contain'}}
          />
          <Text style={{padding: 10, fontSize: 15, fontWeight: 'bold'}}>
            {route?.params?.prediction?.match}
          </Text>
          <Text style={{padding: 10, fontSize: 12, fontWeight: 'bold'}}>
            {'IPL    T20    Cricket'}
          </Text>
          <Text style={{padding: 10, fontSize: 12, fontWeight: 'bold'}}>
            {route?.params?.prediction?.details}
          </Text>
        </View>

        <View style={{marginLeft: 20, marginTop: 25}}>
          <Text
            style={{
              color: '#000000',
              fontSize: 12,
              fontWeight: 'bold',
              paddingBottom: 10,
            }}>
            THE MARKET TRENDS / CHARTS
          </Text>
          <LineChart
            data={data}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>

        <View style={styles.container1}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => toggleOption(option)}
              style={[
                styles.button1,
                selectedOptions.includes(option)
                  ? styles.selectedButton1
                  : styles.unselectedButton1,
              ]}>
              <Text
                style={[
                  styles.buttonText1,
                  selectedOptions.includes(option)
                    ? styles.selectedText1
                    : styles.unselectedText1,
                ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Tab buttons moved below container1 */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Activity' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('Activity')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Activity' && styles.activeTabButtonText,
              ]}>
              Activity
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'Order Book' && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab('Order Book')}>
            <Text
              style={[
                styles.tabButtonText,
                activeTab === 'Order Book' && styles.activeTabButtonText,
              ]}>
              Order Book
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'Activity' ? (
          <View style={styles.activityContainer}>
            <FlatList
              data={activityData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListFooterComponent={
                <View
                  style={{
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderRadius: 10,
                    width: '90%',
                    margin: 10,
                  }}>
                  <Text style={styles.showAll}>Show all →</Text>
                </View>
              }
            />
          </View>
        ) : (
          <View style={styles.orderBookContainer}>
            <Text>Order Book content goes here</Text>
          </View>
        )}

        <View style={styles.container2}>
          {/* Event Details Section */}
          <View style={styles.eventDetailsContainer2}>
            <Text style={styles.sectionTitle2}>About the event</Text>

            <View style={styles.row2}>
              <View style={styles.column2}>
                <Text style={styles.label2}>Traders</Text>
                <Text style={styles.value2}>₹ 47.12K</Text>
              </View>
              <View style={styles.column2}>
                <Text style={styles.label2}>Volume</Text>
                <Text style={styles.value2}>₹ 9.9L</Text>
              </View>
            </View>

            <View style={styles.row2}>
              <View style={styles.column2}>
                <Text style={styles.label2}>Started at</Text>
                <Text style={styles.value2}>Jun 19, 2024 3:40 PM</Text>
              </View>
              <View style={styles.column2}>
                <Text style={styles.label2}>Ending at</Text>
                <Text style={styles.value2}>Jun 19, 2024 9:00 PM</Text>
              </View>
            </View>

            <View style={styles.divider2} />

            <Text style={styles.subSectionTitle2}>Overview</Text>
            <Text style={styles.subSectionText2}>Information about event</Text>

            <View style={styles.divider2} />

            <Text style={styles.subSectionTitle2}>Source of Truth</Text>
            <Text style={styles.subSectionText2}>
              Information about source of truth
            </Text>

            <View style={styles.divider2} />

            <Text style={styles.subSectionTitle2}>Rules</Text>
            <Text style={styles.subSectionText2}>Terms and conditions</Text>

            <View style={styles.divider2} />
          </View>

          <View style={styles.graphicContainer2}>
            <Text style={styles.graphicText2}>Keep Trading!</Text>
          </View>

          <View style={styles.buttonContainer2}>
            <TouchableOpacity style={[styles.button2, styles.yesButton2]}>
              <Text style={styles.buttonText2}>Yes ₹ 5.3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button2, styles.noButton2]}>
              <Text style={styles.buttonText2}>No ₹ 4.7</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  selectedButton1: {
    backgroundColor: '#000',
  },
  unselectedButton1: {
    backgroundColor: '#fff',
  },
  buttonText1: {
    fontSize: 16,
  },
  selectedText1: {
    color: '#fff',
  },
  unselectedText1: {
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    // justifyContent: '',
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    marginLeft: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  activeTabButton: {
    backgroundColor: '#000',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabButtonText: {
    color: '#fff',
  },
  activityContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  activityItem: {
    marginBottom: 15,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activityTime: {
    fontSize: 12,
    color: '#666',
  },
  orderBookContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  profileContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 40,
    justifyContent: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'#d3d3d3'
  },
  progressBarLeft: {
    flex: 1,
    height: 20,
    justifyContent: 'center',
    // borderRadius: 10,
  },
  progressBarRight: {
    flex: 1,
    height: 20,
    justifyContent: 'center',
    backgroundColor: '#f5a623',
    // borderRadius:,
    // marginLeft: 5,
  },
  valueText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  timeText: {
    marginLeft: 10,
    fontSize: 12,
    color: '#777',
  },
  showAll: {
    textAlign: 'center',
    // padding: 15,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  container2: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  eventDetailsContainer2: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  sectionTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  column2: {
    flex: 1,
  },
  label2: {
    fontSize: 14,
    color: '#666',
  },
  value2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  divider2: {
    borderWidth: 0.5,
    backgroundColor: '#ddd',
    marginVertical: 16,
    borderStyle: 'dashed',
  },
  subSectionTitle2: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subSectionText2: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  graphicContainer2: {
    alignItems: 'center',
    marginBottom: 20,
  },
  graphicText2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button2: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  yesButton2: {
    backgroundColor: '#1e90ff',
  },
  noButton2: {
    backgroundColor: '#32cd32',
  },
  buttonText2: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default QuestionDetail;
