import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imagen_linea from '../assets/Linea_titulo.png';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Instrucciones() {
    
    const navigation = useNavigation();
    const [animacionY] = useState(new Animated.Value(0));

    const handlePress = () => {
        Animated.sequence([
            Animated.timing(animacionY, {
                toValue: 5,
                duration: 50,
                useNativeDriver: true
            }),
            Animated.timing(animacionY, {
                toValue: 0,
                duration: 50,
                useNativeDriver: true
            })
        ]).start();
        navigation.navigate('Operaciones');
    };

    return (
        <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.titulo}>¡Desafíate!</Text>
            <Image source={imagen_linea} style={{ width: wp(35), height: hp(0.4), marginBottom: hp(3), marginTop: hp(1) }} />
            <Text style={styles.texto}>Supera estos desafíos y empieza a completar la misión de:</Text>
            <Text style={styles.textoN}>Jerarquía de Operaciones</Text>
            <View>
            <TouchableOpacity
                style={[styles.boton, { transform: [{ translateY: animacionY }] }]}
                activeOpacity={1}
                onPress={() => navigation.navigate('Operaciones')}
            >
                <Text style={styles.botonTexto}>¡ACEPTO EL RETO!</Text>
            </TouchableOpacity>
            <View style={styles.boton2} disabled={true} />
            </View>
        </View>
        <View style={styles.card2}>
        </View>
        
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: wp('90%'),
        height: hp('45%'),
        backgroundColor: '#204D8D',
        borderRadius: 20,
        zIndex: 10,
    },
    card2: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: wp('90%'),
        height: hp('40%'),
        backgroundColor: '#123051',
        borderRadius: 20,
        position: 'absolute',
        top: hp("36%"),
        zIndex: 5,
    },
    titulo: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        marginTop: hp(2.5),
        letterSpacing: 1,
    },
    texto: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        paddingVertical: hp(1),
        paddingHorizontal: wp(3),
    },
    textoN: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    boton: {
        marginTop: hp('5%'),
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('5%'),
        backgroundColor: '#ffff',
        borderRadius: 10,
        zIndex: 10,
    },
    botonTexto: {
        color: '#204D8D',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    boton2: {
        position: 'absolute',
        top: hp('5.6%'),
        width: wp('51%'),
        height: hp('5%'),
        backgroundColor: '#B3B6B7',
        borderRadius: 10,
    },
});
