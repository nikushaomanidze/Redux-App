import React, { useState } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const StartScreen = () => {

  const pan = useState(new Animated.ValueXY())[0];
  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
            null,
          { dx: pan.x, dy: pan.y },
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();

      }
    })
  )[0];


  const [xlocation,setXlocation]= useState(pan.x._value)
  const [ylocation,setylocation]= useState(pan.y._value)

  return (
    <View style={styles.container}>

        {/* ტექსტის სახით მინდა გამოვსახო ბოქსის მდებარეობა  */}
      <Text style={styles.titleText}>{xlocation}</Text>
      <Text style={styles.titleText}>{ylocation}</Text>

      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >  
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    marginBottom:10,
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "pink",
    borderRadius: 100,
    marginBottom:10
  }
});

export default StartScreen;
