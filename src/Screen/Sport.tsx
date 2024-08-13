import React, { useEffect } from "react";
import { View, Text, Button, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamsList } from "../Navigation/RootNavigation";
import { fetchData, selectData, selectLoading, selectError } from "../Redux/dataSlice";
import { AppDispatch } from "../Redux/store";

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, "Home">;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Home Screen Data</Text>
      <Button
        title="Click me"
        onPress={() => navigation.navigate("Details", { data: "Vishwa", age: 45 })}
      /> */}
      {loading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : error ? (
        <Text style={styles.errorText}>Error: {error}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    margin: 20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
});

export default HomeScreen;
