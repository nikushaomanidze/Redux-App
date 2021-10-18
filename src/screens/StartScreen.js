import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";
import {Dimensions} from 'react-native';

const StartScreen = () => {
   const HEIGHT = Dimensions.get('window').height;
  const pan = useRef(new Animated.ValueXY()).current;

console.log(HEIGHT)
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          y: pan.y._value
        });
      },

  onPanResponderMove:
   Animated.event(
     [null,  {  dy: pan.y }] ,
     {useNativeDriver:false}),

 //     onPanResponderMove:(...args)=>{
  // console.log('ARGS',{...args[1]})
  //       },

      onPanResponderRelease: () => {
        pan.flattenOffset();
        //  console.log(pan.y);
        //  console.log(HEIGHT/4)
        // if(pan.y > HEIGHT/5){
        //   console.log('hello')
        //  } 
      }
    })
  ).current;


  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'orange',marginTop:0,width:'120%',
      height:'20%',borderBottomLeftRadius:200,borderBottomRightRadius:200,justifyContent:'flex-end',alignItems:'center',}}>
        <Text style={{marginBottom:30}}>Game Screen</Text>
      </View>
      <Animated.View
        style={{
          flex:1,
          justifyContent:'center',
           zIndex:1,
          transform: [ { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box}  >
          <Text style={{fontSize:30, fontWeight:'bold',color:'white',zIndex:2,position:'absolute'}}>game</Text>
        </View>
      </Animated.View>


      <View style={{backgroundColor:'gray',marginBottom:0,width:'120%',
      height:'20%',borderTopLeftRadius:200,borderTopRightRadius:200}}>
        <Text>hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-between",
    alignItems:'center'
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold"
  },
  box: {
    zIndex:1,
    opacity:0.5,
    height:250,
    width: 250,
    backgroundColor: "purple",
    borderRadius: 150,
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    shadowColor: "#171717",
    shadowOffset: { width: -8, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    }
});

export default StartScreen;
