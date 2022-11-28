import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenTabNavigation from "./HomeScreenTabNavigation";
import Fullinfo from "./Fullinfo";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Статьи"
        component={HomeScreenTabNavigation}
        options={{
          headerStyle: {
            backgroundColor: "#469c72",
          },
        }}
      />
      <Stack.Screen
        name="Описание"
        component={Fullinfo}
        options={{
          headerStyle: {
            backgroundColor: "#469c72",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
