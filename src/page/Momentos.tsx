import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Image, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from './HomeMain';
import Swiper from 'react-native-swiper';


type MomentsScreenProps = BottomTabScreenProps<RootTabParamList, 'Moments'>;
const image = require('../../assets/fondo2.jpeg');


const carouselItems = [
  {
    title: '"Tanjiro vs Rui"',
    text: 'Esta es una de las primeras peleas de la temporada 1 de Kimetsu no Yaiba, esta es una pelea emocionante ya que aqui es cuando Tanjiro usa por primera vez la respiracion solar y despues de aqui es cuando todo empieza a vovlerse mas emocionante.',
    image: require('../../assets/gifsMomentos/Riu.gif')
  },
  {
    title: '"Tanjiro vs Gyutaro"',
    text: 'Esta pelea sucede en la segunda temporada, aqui es cuando ya Tanjiro a practicado mas con la respiracion solar y demuestra su fueraz en contra de la 7ma luna superior junto a uno de los pilares (El pilar del sonido).',
    image: require('../../assets/gifsMomentos/gyutaro2.gif')
  },
  {
    title: '"Tanjiro vs Hantengu"',
    text: 'Esta es una de las ultimas peleas, cuando Tanjiro despierta su marca del cazador y la espada roja carmesi lo cual esta espada permite que los demonios no de regeneren tan rapido.',
    image: require('../../assets/gifsMomentos/Hantengu-2.gif')
  },
  // Agrega más elementos aquí
];

const Momentos: React.FC<MomentsScreenProps> = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.texttitulo}>Momentos</Text>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={true}
          paginationStyle={styles.pagination}
          dotStyle={styles.paginationDot}
          activeDotStyle={styles.paginationActiveDot}
        >
          {carouselItems.map((item, index) => (
            <View key={index} style={styles.slide}>
            <Text style={styles.texttitle}>{item.title}</Text>
              <Image source={item.image} style={styles.slideImage} />
              <Text style={styles.text}>{item.text}</Text>
            </View>
          ))}
        </Swiper>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  slide: {
    height:'80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '90%',
    height: '40%',
    borderRadius: 8,
  },
  wrapper: {},
  pagination: {
    bottom: '25%',
  },
  paginationDot: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  paginationActiveDot: {
    backgroundColor: '#B22222',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  texttitulo: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '20%',
    color:'white'
    
  },
  text: {
    color: '#fff',
    fontSize: 12,
    marginRight: 20,
    marginLeft: 20,
    marginTop:20,
    fontWeight: 'bold',
    backgroundColor:'#B22222',
    padding:10,
    borderRadius: 5,
    },
    texttitle: {
      color: 'white',
      fontSize: 28,
      margin: 10,
      },
});

export default Momentos;