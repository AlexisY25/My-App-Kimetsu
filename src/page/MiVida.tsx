import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function InMyLifeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/fondo8.jpeg')} 
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Porque Kimetsu no Yaiba es mi serie favorita</Text>
          <Video
            source={require('../../assets/Mylife.mp4')} // Ruta del video que debes colocar en tu proyecto
            rate={1.0}
            volume={80}
            isMuted={false}
            resizeMode={ResizeMode.COVER}
            shouldPlay
            useNativeControls
            style={styles.video}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Asegura que la imagen de fondo cubra toda la pantalla
    justifyContent: 'center', // Centra el contenido hijo verticalmente
    alignItems: 'center', // Centra el contenido hijo horizontalmente
  },
  content: {
    backgroundColor: '#B22222', // Fondo blanco con transparencia
    padding: 20, // Padding alrededor del contenido
    borderRadius: 10, // Bordes redondeados
    shadowColor: '#000', // Color de la sombra
    shadowOffset: { width: 0, height: 5 }, // Desplazamiento de la sombra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowRadius: 10, // Radio de la sombra
    elevation: 8, // Elevación para Android
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  title: {
    fontSize: 24, // Tamaño de la fuente para el título
    fontWeight: 'bold', // Negrita para el título
    marginBottom: 10, // Espaciado inferior
  },
  video: {
    width: 360, // Ancho del video
    height: 500, // Alto del video
    borderRadius: 10, // Bordes redondeados del video
  },
});