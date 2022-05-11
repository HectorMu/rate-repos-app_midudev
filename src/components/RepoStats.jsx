import React from "react";
import { View } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (value) =>
  value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);

const RepoStats = ({ repo }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText fontWeight={"bold"}>
          {" "}
          {parseThousands(repo.stargazersCount)}
        </StyledText>
        <StyledText align={"center"}>Stars</StyledText>
      </View>

      <View>
        <StyledText fontWeight={"bold"}>
          {parseThousands(repo.forksCount)}
        </StyledText>
        <StyledText align={"center"}>Forks</StyledText>
      </View>
      <View>
        <StyledText fontWeight={"bold"}>
          {" "}
          {parseThousands(repo.reviewCount)}
        </StyledText>
        <StyledText align={"center"}>Reviews</StyledText>
      </View>

      <View>
        <StyledText fontWeight={"bold"}>
          {parseThousands(repo.ratingAverage)}
        </StyledText>
        <StyledText align={"center"}>Rating</StyledText>
      </View>
    </View>
  );
};

export default RepoStats;
