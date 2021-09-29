import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";

const AddNotes = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const [title, setTitle] = useState("");

  const addHandler = (id, title) => {
    dispatch({ type: "AddTodo", title: title, id: id });
    setTitle("");
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header titleText="Add a Tam name" />
      <View
        style={{ marginTop: 50, alignItems: "center", marginHorizontal: 10 }}
      >
        <View style={styles.container1}>
          <TextInput
            style={styles.textInput}
            placeholder="players name"
            placeholderTextColor="#6E7FAA"
            autoCapitalize="none"
            autoCorrect={false}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "purple",
            marginBottom: 100,
            borderRadius: 50,
            width: 100,
            height: 70,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
            marginLeft: 150,
          }}
          onPress={() => addHandler(Math.random() * 666, title)}
        >
          <Text style={{ fontSize: 40 }}>✔️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#E8E8E8",
    borderWidth: 2,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
});

export default AddNotes;
