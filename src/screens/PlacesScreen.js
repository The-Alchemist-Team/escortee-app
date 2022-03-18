import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Topbar } from "../components";

function cardItem({ item }) {
  return (
    <TouchableWithoutFeedback>
      <View style={cardStyles.mainCardView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={cardStyles.subCardView}>
            <Image
              //   source={Images.logo}
              resizeMode="contain"
              style={{
                borderRadius: 25,
                height: 50,
                width: 50,
              }}
            />
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text
              style={{
                fontSize: 14,
                color: "#000",
                fontWeight: "bold",
                // fontFamily: Fonts.nunitoBold,
                textTransform: "capitalize",
              }}
            >
              {item.type}
            </Text>
            <View
              style={{
                marginTop: 4,
                borderWidth: 0,
                width: "85%",
              }}
            >
              <Text
                style={{
                  //   color: Colors.gray,
                  fontSize: 12,
                }}
              >
                {item.coord}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 25,
            // backgroundColor: Colors.pink,
            borderWidth: 0,
            width: 25,
            marginLeft: -26,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          <Text
          //   style={{ color: Colors.white }}
          >
            {item.unread_messages_count}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const PlaceScreen = ({ route, navigation }) => {
  const place = JSON.parse(route.params.place);
  const { features, address } = place;
  console.log(place);
  return (
    <View>
      <Topbar title={place.name} bgColor="#374151" />
      {features && <FlatList data={features} renderItem={cardItem} />}
    </View>
  );
};

export { PlaceScreen };

const styles = StyleSheet.create({});

const cardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainCardView: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#808080",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  subCardView: {
    height: 75,
    width: 75,
    borderRadius: 50,
    // backgroundColor: Colors.history_back,
    // borderColor: Colors.color_eeeeee,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
});
