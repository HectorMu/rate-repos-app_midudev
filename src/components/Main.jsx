import React from "react";
import { View } from "react-native";
import RepoList from "./RepoList";
import AppBar from "./AppBar";
import { Route, Routes } from "react-router-native";
import StyledText from "./StyledText";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/signin" element={<StyledText>Sign in</StyledText>} />
      </Routes>
    </View>
  );
};

export default Main;
