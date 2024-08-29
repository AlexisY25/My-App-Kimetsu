import { View, Image, StyleSheet } from "react-native";
import icon from '../../assets/home.gif';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");

export default function SplashScreen(){
  return(
    <View style = {style.container}>
      <View>
        <Image source = {icon} style={style.image}/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alingItems: "center",
    backgroundColor:'#1e1e1e'
  },
  image:{
    width:width,
    height:height,
    resizeMode: 'cover'
  }
})