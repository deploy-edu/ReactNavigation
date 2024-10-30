import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { Image, Text, View } from "react-native";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type Props = StackScreenProps<RootStackParamList, "NewsView">;

function NewsViewScreen({ navigation, route }: Props) {
  const { article } = route.params;
  console.log("article", article);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        {article.title}
      </Text>
      <Text
        style={{
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        {article.content}
      </Text>
      <Image
        source={{
          uri: article.urlToImage,
        }}
        style={{
          borderRadius: 10,
          width: 400,
          height: 300,
        }}
      />
    </View>
  );
}

export default NewsViewScreen;
