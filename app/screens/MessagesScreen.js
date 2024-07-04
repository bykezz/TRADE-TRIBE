import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description:
      "Enhanced security features and a robust rating system build trust between users, ensuring a safe trading environment.",
    image: require("../assets/profilePhoto.png"),
  },
  {
    id: 2,
    title: "T2",
    description:
      "Enhanced security features and a robust rating system build trust between users, ensuring a safe trading environment.",
    image: require("../assets/profilePhoto.png"),
  },
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <ListItemSeperator />
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/profilePhoto.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});

export default MessagesScreen;
