import React from "react";
import { View, Image, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const RepoItemHeader = ({ repo }) => {
  return (
    <View style={{ flexDirection: "row", paddingBottom: 10 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: repo.ownerAvatarUrl }} />
      </View>

      <View style={{ flex: 1 }}>
        <StyledText fontWeight={"bold"} fontSize="subheading">
          {repo.fullName}
        </StyledText>
        <StyledText color="secondary">{repo.description}</StyledText>
        <StyledText style={styles.language}>{repo.language}</StyledText>
      </View>
    </View>
  );
};

export default RepoItemHeader;

const styles = StyleSheet.create({
  //la imagen no se ve hasta estilarla
  image: {
    height: 48,
    width: 48,
    borderRadius: 10,
  },
  strong: {
    color: "#09f",
    fontWeight: "bold",
    marginBottom: 3,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    fontWeight: "bold",
    borderRadius: 5,
    overflow: "hidden",

    marginVertical: 7,
  },
});
