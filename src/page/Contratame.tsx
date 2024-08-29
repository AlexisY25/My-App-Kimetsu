import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const fotoPerfil = require('../../assets/perfil.jpg');

const fondoImagen = require('../../assets/fondo6.jpg');

const Contratame: React.FC = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={fondoImagen} style={styles.backgroundImage}>
            <View style={styles.profileContainer}>
                <View style = {styles.DatosContainer}>
                    <Image
                        source={fotoPerfil}
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>Alexis Yunior Romero</Text>
                    <Text style={styles.jobTitle}>Telefono: 829-328-9916</Text>
                    <Text style={styles.location}>Correo: alexisy_25@outlook.com</Text>
                </View>
            </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    profileContainer: {
        alignItems: 'center',
        width:'70%',
        height:'40%',
        backgroundColor: '#B22222',
        marginTop:0,
        borderRadius:'50%',
        marginLeft:60
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75, // Radio para hacer la imagen circular
        marginBottom: 20,
        overflow: 'hidden',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    jobTitle: {
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    location: {
        fontSize: 16,
        color: 'black',
    },
    DatosContainer:{
        alignItems:"center",
        marginTop:40
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover', // Ajusta el modo de redimensionamiento de la imagen de fondo
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }
});

export default Contratame;
