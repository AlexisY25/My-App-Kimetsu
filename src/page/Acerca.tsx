import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

const backgroundImage = require('../../assets/fondo7.jpeg');

const Acerca: React.FC = () => {
    return (
        <ImageBackground source={backgroundImage} style={styles.imageback}>
            <View style={styles.container}>
                <Text style={styles.texttitulo}>Acerca de la serie</Text>
                <View style={styles.innerContainer}>
                    <Image
                        source={require('../../assets/acerca2.webp')} // Ajusta esta ruta con la ruta correcta de tu imagen
                        style={styles.image}
                        resizeMode="contain" // Ajusta el modo de redimensionamiento
                    />
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>
                            Esta seria trata a cerca de Tanjiro, la cual su familia fue asesinada por el rey demonio llamado "Muzan Kibotsuyi", pero no mato a toda su familia, quedo viva su hermana Nezuko la cual fue convertida en demonio, esta serie trata sobre como Tanjiro se involucra en la compañia cazademonios y trata de acabar con la vida de Muzan y volver a su hermana humana nuevamente.
                        </Text>
                    </View>
                    <View style={styles.additionalInfoContainer}>
                        <Text style={styles.additionalInfoText}>Autor: Koyoharu Gotouge</Text>
                        <Text style={styles.additionalInfoText}>Número de temporadas: 4</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    innerContainer: {
        width: '90%',
        height: '70%',
        backgroundColor: 'black', // Fondo negro sólido
        borderRadius: 40,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 200, // Ajusta la altura según tu necesidad
        borderRadius: 10,
    },
    descriptionContainer: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#B22222', // Fondo rojo sólido para la descripción
        padding: 10,
        borderRadius: 10,
    },
    descriptionText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    additionalInfoContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    additionalInfoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 5, // Espacio entre los textos
    },
    texttitulo: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 60,
        color: 'white'
    },
    imageback: {
        flex: 1,
        resizeMode: "cover", // Ajusta el modo de redimensionamiento de la imagen de fondo
        justifyContent: 'center',
    }
});

export default Acerca;
