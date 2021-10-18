import React, { useRef, useState } from "react";
import{View,Text,StyleSheet,Animated} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AnimationScreen(){
    const [state,setState]=useState({
        animationValue : new Animated.Value(80),
       })
      

    const changeBoxSize1=()=>{
                Animated.timing(state.animationValue, {
                  toValue :200,
                  timing : 1500,
                  useNativeDriver:false
                }).start()
    }

    const changeBoxSize2=()=>{
        Animated.timing(state.animationValue, {
          toValue : 80,
          timing : 1500,
          useNativeDriver:false
        }).start()
}



    const boxStyle={
        width:state.animationValue,
        height:state.animationValue
    }
    return(
        <View style={styles.container}>
           <Animated.View style={[styles.boxStyle, boxStyle]}>
              <Text>hello</Text>
           </Animated.View>
           <View style={styles.ButtonStyle}>
              <TouchableOpacity style={styles.button} onPress={()=> changeBoxSize2()}>
                 <Text style={{fontSize:30}}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=> changeBoxSize1()}>
                 <Text style={{fontSize:30}}>+</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
},
boxStyle:{
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center'
},
ButtonStyle:{
width:'100%',
marginTop:30,    
backgroundColor:"yellow",
flexDirection:'row',
justifyContent:'space-around'
},
button:{
    backgroundColor:'green',
    width:50,
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
}
})


