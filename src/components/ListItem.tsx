import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type ItemProps = {
  title: string;
  imageUrl?: string;
  sourceName: string;
  onPress: () => void;
};

const ListItem = ({ title, imageUrl, sourceName, onPress }: ItemProps) => (
  <Pressable style={styles.container} onPress={onPress}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.source}>{sourceName}</Text>
    </View>
    {imageUrl && <Image source={{ uri: imageUrl }} style={styles.cover} />}
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 20,
    gap: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  cover: {
    width: 100,
    height: 80,
    borderRadius: 8,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontSize: 15,
  },
  source: {
    fontSize: 12,
    color: "#666",
  },
});

export default ListItem;
