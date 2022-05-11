import React from "react";
import { View, StyleSheet } from "react-native";
import RepoItemHeader from "./RepoItemHeader";
import RepoStats from "./RepoStats";
import theme from "../theme";

const RepoItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <RepoItemHeader repo={repo} />
      <RepoStats repo={repo} />
    </View>
  );
};

export default RepoItem;

//forma recomendada  de hacer estilos en RN
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});
