import React, { useEffect } from "react";
import { View, Text, Button, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamsList } from "../Navigation/RootNavigation";
import { fetchData, selectData, selectLoading, selectError } from "../Redux/dataSlice";
import { AppDispatch } from "../Redux/store";

interface PortzfolioScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "Portfolio">;
}

const Portzfolio = ({ navigation }: PortzfolioScreenProps) => {

  return (
    <View style={styles.container}>
        <Text>PortFolio screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
});

export default Portzfolio;
