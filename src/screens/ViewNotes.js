import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";

const ViewNotes = ({ navigation }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const deleteNote = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header titleText="Team Name" />
      {state.length === 0 ? (
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              textAlign: "center",
              marginTop: 250,
            }}
          >
            please add team name
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "gray",
              marginTop: 200,
              width: 200,
              height: 56,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 150,
            }}
            onPress={() => navigation.navigate("AddNotes")}
          >
            <Text style={{ fontSize: 30 }}>+ Add name</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.box}>
          <FlatList
            data={state}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => deleteNote(item.id)}
                style={{
                  borderRadius: 30,
                  width: 350,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 40,
                  height: 50,
                  backgroundColor: "tomato",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "gray",
              marginTop: 200,
              width: 200,
              height: 56,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 150,
            }}
            onPress={() => navigation.navigate("AddNotes")}
          >
            <Text style={{ fontSize: 30 }}>+ Add name</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    alignItems: "center",
  },
});

export default ViewNotes;
