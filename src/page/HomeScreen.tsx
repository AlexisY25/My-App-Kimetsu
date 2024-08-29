import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const image = require('../../assets/Logo.jpg');

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
});

export default HomeScreen;
