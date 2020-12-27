import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import AppBackground from "../AppBackground";
import Article from "../components/Article";
import { createStackNavigator } from "@react-navigation/stack";

const PoliticsStack = createStackNavigator();

const Politics = ({ route, navigation }) => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <Article
      headline={
        "Brexit cancelled due to Boris Johnson signing wrong name on bill"
      }
      imageURI={"https://www.abc.net.au/cm/rimage/13014282-16x9-xlarge.jpg?v=4"}
    />
    <Article
      headline={
        "Donald Trump gets second term in office, splits power with Biden"
      }
      imageURI={
        "https://media3.s-nbcnews.com/j/newscms/2020_45/3426834/201107-election-live-blog-main-cover-cs_c1e29142255a740c891255566384f4a8.fit-760w.jpg"
      }
    />
  </ScrollView>
);

function PoliticsScreen() {
  return (
    <PoliticsStack.Navigator>
      <PoliticsStack.Screen
        name="Latest"
        component={Politics}
        options={{ headerShown: false }}
      />
    </PoliticsStack.Navigator>
  );
}

export default PoliticsScreen;
