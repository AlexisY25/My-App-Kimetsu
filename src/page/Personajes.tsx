import React, { useState, useRef } from "react";
import { View, StyleSheet, ImageBackground, Image, TouchableOpacity, Text, Modal } from "react-native";
import Swiper from "react-native-swiper";
import { Ionicons } from '@expo/vector-icons';

const images = [
  {
    title: 'Tanjiro',
    source: require('../../assets/personajes/tanjiro.png'),
    description: 'Este es el personaje principal del anime, usa la respiracion solar la mas fuerte de todas.'
  },
  {
    title: 'Nezuko',
    source: require('../../assets/personajes/Nezuko.png'),
    description: 'Ella es la hermana del protagonista que fue convertida en demonio y se intenta volverla humana nuevamente.'
  },
  {
    title: 'Inosuke',
    source: require('../../assets/personajes/Inosuke.png'),
    description: 'El es uno de los amigos del protagonista, es super gracioso, usuario de la respiracion de la bestia.'
  },
  {
    title: 'Zenitsu',
    source: require('../../assets/personajes/Zenitsu.png'),
    description: 'Este es el otro amigo del protagonista, muy fuerte, es usuario de la respiracion del rayo.'
  },
  // Añade más imágenes según sea necesario
];

export default function Caracteristicas() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const swiperRef = useRef<Swiper | null>(null);

  const handleIndexChanged = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImagePress = () => {
    setIsModalVisible(true);
  };

  const renderNextButton = () => {
    return (
      <TouchableOpacity
        onPress={() => swiperRef.current?.scrollBy(1)}
        disabled={currentIndex === images.length - 1}
        style={styles.arrowButton}
      >
        <Ionicons
          name="arrow-forward"
          size={50} // Aumenta el tamaño de la flecha
          color={currentIndex === images.length - 1 ? 'grey' : '#8B0000'}
        />
      </TouchableOpacity>
    );
  };

  const renderPrevButton = () => {
    return (
      <TouchableOpacity
        onPress={() => swiperRef.current?.scrollBy(-1)}
        disabled={currentIndex === 0}
        style={styles.arrowButton}
      >
        <Ionicons
          name="arrow-back"
          size={50} // Aumenta el tamaño de la flecha
          color={currentIndex === 0 ? 'grey' : '#8B0000'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground source={require('../../assets/fondo1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          loop={false}
          showsButtons={true}
          onIndexChanged={handleIndexChanged}
          ref={swiperRef}
          nextButton={renderNextButton()}
          prevButton={renderPrevButton()}
        >
          {images.map((item, index) => (
            <TouchableOpacity key={index} style={styles.slide} onPress={handleImagePress}>
              <View style={styles.imageContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.source} style={styles.image} />
              </View>
            </TouchableOpacity>
          ))}
        </Swiper>
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={images[currentIndex].source} style={styles.modalImage} />
              <Text style={styles.modalText}>{images[currentIndex].description}</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Ajusta la imagen de fondo para que cubra toda la pantalla
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Fondo negro semi-transparente
  },
  wrapper: {
    height: 400, // Ajusta la altura del swiper según sea necesario
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  imageContainer: {
    width: 280,  // Ajusta el ancho del contenedor de la imagen según sea necesario
    height: 400, // Ajusta la altura del contenedor de la imagen según sea necesario
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70, // Borde redondeado opcional
    overflow: "hidden", // Asegura que la imagen no se desborde del contenedor
    marginTop: 0, // Ajusta esto para mover el contenedor más arriba o abajo
  },
  title: {
    position: "absolute",
    bottom:360, // Ajusta según sea necesario
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    zIndex: 1, // Asegura que el texto esté por encima de la imagen
  },
  image: {
    width: 200,
    height: "100%",
    resizeMode: "contain", // Ajusta la imagen dentro del contenedor
  },
  arrowButton: {
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 200,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: '#fff'
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#8B0000",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
