import React ,{useState} from 'react'
import {View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import ModalScreen from '../components/ModalScreen'
import {Dimensions} from 'react-native';

export default function SettingScreen({navigation}){
  const [openModal,setOpenmodal]=useState(false)
  const [countWin,setCountWin]=useState(0)
   const WIDTH = Dimensions.get('window').width;
   const HEIGHT = Dimensions.get('window').height;
  return(
    <View style={styles.container}>
      <View style={{backgroundColor:'orange',marginTop:0,width:'120%',
      height:'20%',borderBottomLeftRadius:200,borderBottomRightRadius:200}}>
        <Text>hello</Text>
      </View>
     
{/* <View style={{width:'100%', alignItems:'center',backgroundColor:'red'}}>
      <View style={{backgroundColor:'yellow',width:'100%',paddingHorizontal:'13%'}}>
        <Text style={{fontSize:30, letterSpacing:1,fontWeight:'500'}}>points required</Text>
        <Text>to win a game</Text>
      </View>
    <Slider
  style={{width: '80%', height: 50}}
  minimumValue={countWin}
  maximumValue={120}
  minimumTrackTintColor="#5663FF"
  maximumTrackTintColor="yellow"
  thumbTintColor='white'
  step={5}
/>
</View> */}
{/* <Text>{countWin}</Text>
<Text>{setCountWin}</Text> */}
   <ModalScreen ModalOpen={openModal} ModalClose={()=>setOpenmodal(false)} />      
   <TouchableOpacity style={styles.buttonStyle}  onPress={()=>setOpenmodal(true)}>
     <Text>open modal !</Text>
   </TouchableOpacity >
   <TouchableOpacity style={{backgroundColor:'blue', padding:10, borderRadius:30, marginTop:30}} onPress={()=>navigation.navigate('StartScreen')}>
    <Text style={{fontSize:30}}>panResponder screen  </Text>
     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor:'blue', padding:10, borderRadius:30, marginTop:30}} onPress={()=>navigation.navigate('GameScreen')}>
    <Text style={{fontSize:30}}>Start Game  screen  </Text>
     </TouchableOpacity>

   </View>
  )}

  const styles=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'green',
  alignItems:'center',
},
buttonStyle:{
  marginTop:30,
  backgroundColor:'red',
  padding:20,
  borderRadius:20
},
  })
