import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import firestore from "@react-native-firebase/firestore";

import React, { useState, useEffect } from "react";
import { Topbar } from "../components";
import { PLACE_SCREEN } from "./Constants";

const HomeScreen = ({ navigation, route }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    firestore()
      .collection("places")
      .where("isVerified", "==", true)
      .get()

      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          setPlaces((prev) => [
            ...prev,
            { place: documentSnapshot.data(), key: documentSnapshot.id },
          ]);
        });
      });
  }, []);

  return (
    <View>
      <Topbar title="EScortee App" />
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={cardStyles.container}
            keyExtractor={(item) => {
              return item.key;
            }}
            onPress={() => {
              navigation.navigate(PLACE_SCREEN, {
                screen: PLACE_SCREEN,
                place: JSON.stringify(item.place),
              });
            }}
          >
            <Text style={cardStyles.heading}>{item.place.name}</Text>
            <Text style={cardStyles.subTitle}>{item.place.address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({});

const cardStyles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,

    flex: 1,
    justifyContent: "center",
    backgroundColor: "#374151",
  },

  heading: {
    fontSize: 18,
    color: "#fff",
  },
  subTitle: {
    fontSize: 10,
    color: "#D0D0D0",
  },
});
