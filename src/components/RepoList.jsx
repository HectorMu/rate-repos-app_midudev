import React from "react";
import { Text, FlatList } from "react-native";
import repos from "../data/repositories";
import RepoItem from "./RepoItem";

const RepoList = () => {
  return (
    <FlatList
      data={repos}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repo }) => <RepoItem repo={repo} />}
    />
  );
};

export default RepoList;
