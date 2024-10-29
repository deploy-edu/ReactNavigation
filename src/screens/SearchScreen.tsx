import { useEffect, useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import ListItem from "../components/ListItem";

export type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: Date;
  content: string | null;
};

function SearchScreen({ navigation }) {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${keyword}&from=2024-09-29&sortBy=publishedAt&apiKey=e40c9540da594621a4e0e3349a197c63&language=en`
      );
      const data = await response.json();
      setData(data.articles);
    }

    if (keyword.length < 2) {
      return;
    }

    fetchData();
  }, [keyword]);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <TextInput
        style={{
          borderWidth: 3,
          borderRadius: 5,
          height: 50,
          padding: 10,
          fontSize: 20,
        }}
        value={keyword}
        onChangeText={(text) => {
          setKeyword(text);
        }}
      />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            imageUrl={item.urlToImage}
            sourceName={item.source.name}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default SearchScreen;
