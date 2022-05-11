import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";
import { TouchableWithoutFeedback } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
    paddingHorizontal: 10,
  },
});

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to} replace={TouchableWithoutFeedback}>
      <StyledText fontWeight={"bold"} style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to={"/"}>
        Repositories
      </AppBarTab>
      <AppBarTab active to={"/signin"}>
        Sign in
      </AppBarTab>
    </View>
  );
};

export default AppBar;
