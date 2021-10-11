import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";

export default function AddTodo({navigation}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
    
  const DeleteList = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };
  
  return (
    <View style={styles.container}>
      <Header titleText='Teams'/>

    {/* აითემების გამოტანა */}
    <View style={{backgroundColor:'yellow',flex:1,alignItems:'center'}}>
        <FlatList
          data={state.teamList}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <View style={styles.ViewStyle}>
              <Text style={{ fontSize: 20 }}>{item.title}</Text>
              <TouchableOpacity onPress={() => DeleteList(item.id)}>
                <Text style={{ fontSize: 50 }}>-</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('AddTeams')} style={{backgroundColor:'red'}}>
        <Text style={{fontSize:40,}}> add</Text>
        </TouchableOpacity>
        </View>
      {/* ნავიგაციის ღილაკი */}
      {state.teamList.length < 2 ? (
        <TouchableOpacity style={styles.TouchableStyle} onPress={()=>alert('add minimum 2 team ')} >
          <Text style={{ fontSize: 30, letterSpacing: 3, fontWeight: "bold" }}>
            next
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.TouchableStyle} onPress={()=>navigation.navigate('SettingScreen')}>
          <Text style={{ fontSize: 30, letterSpacing: 3, fontWeight: "bold" }}>
            next
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C8B81",
    justifyContent:'space-between'

  },
  ViewStyle: {
    justifyContent:'space-between',
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#895464",
    marginVertical:15,
    width: 340,
    height: 60,
    borderRadius: 10,
    marginBottom:2
  },
  TouchableStyle: {
    backgroundColor: "#4E509A",
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  }
});
