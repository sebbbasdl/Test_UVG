import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Navbar from "../components/Navbar";
import img_estrella_p from '../assets/estrella_preguntas.png';
import img_estrella_c from '../assets/estrella_correctas.png';
import img_estrella_i from '../assets/estrella_incorrectas.png';
import img_conteo_p from '../assets/background_conteo_preguntas.png';
import img_conteo_moneda from '../assets/background_conteomonedas.png';
import img_moneda from '../assets/Moneda.png';

export default function Resultados() {
    const route = useRoute();
    const { correctas, incorrectas, total, monedas } = route.params;
    console.log(correctas, " ", incorrectas, " ", total, " ", monedas)

    const navigation = useNavigation();

    // Define animaciones a nivel del componente
    const animacionY = useRef(new Animated.Value(0)).current;
    const animacionX = useRef(new Animated.Value(0)).current;
    const animacionOpacidad = useRef(new Animated.Value(1)).current;

    // Crea 5 monedas y propiedades de animaciones de las 5 monedas
    const monedasAnimadas = useRef(Array.from({ length: 5 }, () => ({
        animacionY: new Animated.Value(0),
        animacionX: new Animated.Value(0),
        animacionOpacidad: new Animated.Value(1),
        animacionScale: new Animated.Value(1),
    }))).current;

    const Animacion_Monedas = () => {
        monedasAnimadas.forEach((moneda, index) => {
            Animated.sequence([
                Animated.delay(index * 100), // Delay entre cada moneda
                Animated.parallel([
                    Animated.timing(moneda.animacionY, {
                        toValue: -430,
                        duration: 500,
                        useNativeDriver: true
                    }),
                    Animated.timing(moneda.animacionX, {
                        toValue: 110,
                        duration: 500,
                        useNativeDriver: true
                    }),
                    Animated.timing(moneda.animacionOpacidad, {
                        toValue: 0.5,
                        duration: 500,
                        useNativeDriver: true
                    }),
                    Animated.timing(moneda.animacionScale, { 
                        toValue: 0.5, 
                        duration: 500,
                        useNativeDriver: true
                    })
                ]),
                Animated.parallel([
                    Animated.timing(moneda.animacionY, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    }),
                    Animated.timing(moneda.animacionX, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    }),
                    Animated.timing(moneda.animacionOpacidad, {
                        toValue: 1,
                        duration: 0,
                        useNativeDriver: true
                    }),
                    Animated.timing(moneda.animacionScale, { 
                        toValue: 1, 
                        duration: 0,
                        useNativeDriver: true
                    })
                ])
            ]).start();
        });
    };

    useEffect(() => {
        Animacion_Monedas();
    }, []);

    return (
        <View>
            {/*Navbar*/ }
            <Navbar monedas={monedas} />
            <View style={styles.container}>
                {/*Contenedor azul*/ }
                <View style={styles.card}>
                    {/*Contenedor titulo*/ }
                    <Text style={styles.titulo}>Buen Trabajo!</Text>
                    {/*Contenedor de los resultados (Total preguntas, respuestas correctas y respuestas incorrectas)*/ }
                    <View>
                        <View style={styles.cont_resultados}>
                            <View style={styles.subcont_res}>
                                <Image source={img_estrella_p} style={styles.img_estrellas}></Image>
                                <View style={styles.img_conteo}>
                                    <Image source={img_conteo_p} style={styles.img}></Image>
                                    <Text style={styles.texto_conteo}>{total}</Text>
                                    <Text style={styles.texto_texto_conteo}>Preguntas</Text>
                                </View>
                            </View>
                            <View style={styles.subcont_res}>
                                <Image source={img_estrella_c} style={styles.img_estrellas}></Image>
                                <View style={styles.img_conteo}>
                                    <Image source={img_conteo_p} style={styles.img}></Image>
                                    <Text style={styles.texto_conteo}>{correctas}</Text>
                                    <Text style={styles.texto_texto_conteo}>Correctas</Text>
                                </View>
                            </View>
                            <View style={styles.subcont_res}>
                                <Image source={img_estrella_i} style={styles.img_estrellas}></Image>
                                <View style={styles.img_conteo}>
                                    <Image source={img_conteo_p} style={styles.img}></Image>
                                    <Text style={styles.texto_conteo}>{total - correctas}</Text>
                                    <Text style={styles.texto_texto_conteo}>Incorrectas</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.texto_titulo_moneda}>Monedas obtenidas</Text>
                        {/*Contenedor moneda y contador*/ }
                        <View style={styles.cont_mo}>
                            <Image source={img_conteo_moneda} style={styles.img_conteo_m}></Image>
                            {monedasAnimadas.map((moneda, index) => (
                                <Animated.Image
                                    key={index}
                                    source={img_moneda}
                                    style={[
                                        styles.img_moneda,
                                        {
                                            transform: [
                                                { translateY: moneda.animacionY },
                                                { translateX: moneda.animacionX },
                                                { scaleX: moneda.animacionScale }, 
                                                { scaleY: moneda.animacionScale }, 
                                            ],
                                            opacity: moneda.animacionOpacidad
                                        }
                                    ]}
                                />
                            ))}
                            <Text style={styles.texto_moneda}>{monedas}</Text>
                        </View>
                            {/*Boton para repetir Misión*/ }
                        <View style={styles.botonContainer}>
                            <TouchableOpacity
                                style={[styles.boton]}
                                activeOpacity={1}
                                onPress={() => navigation.navigate('BackgroundScreen')}
                            >
                                <Text style={styles.botonTexto}>¡REPETIR MISIÓN!</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.boton2]}
                                activeOpacity={1}
                                disabled={true}
                            >
                                <Text style={styles.botonTexto2}>¡REPETIR MISIÓN!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/*Contenedor profundidad azul*/ }
                <View style={styles.card2}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: hp(-2),
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: wp('90%'),
        height: hp('55%'),
        backgroundColor: '#204D8D',
        borderRadius: 20,
        zIndex: 10,
    },
    card2: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        width: wp('90%'),
        height: hp('45%'),
        backgroundColor: '#123051',
        borderRadius: 20,
        position: 'absolute',
        top: hp(12),
        zIndex: 5,
    },
    titulo: {
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold',
        marginTop: hp(2.5),
        letterSpacing: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 10,
    },
    botonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('2%'),
    },
    boton: {
        width: wp('55%'),
        height: hp('5%'),
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('5%'),
        backgroundColor: '#ffff',
        borderRadius: 10,
        zIndex: 10,
        marginBottom: hp('1%'),
    },
    botonTexto: {
        color: '#133362',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    boton2: {
        position: 'absolute',
        width: wp('55%'),
        height: hp('5%'),
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('5%'),
        backgroundColor: '#B3B6B7',
        borderRadius: 10,
    },
    botonTexto2: {
        color: '#B3B6B7',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cont_resultados: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: hp('2%'),
    },
    subcont_res: {
        width: wp(20),
        height: hp(10),
        marginHorizontal: wp('2%'),
        marginVertical: hp('3%'),
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    img_conteo: {
        width: wp(20),
        height: hp(15),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        zIndex: 10,
    },
    img_estrellas: {
        width: wp(12),
        height: hp(6),
        resizeMode: 'contain',
        zIndex: 15,
        position: 'absolute',
        top: hp(-4),
    },
    texto_conteo: {
        position: 'absolute',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#133362',
        zIndex: 20,
    },
    texto_texto_conteo: {
        position: 'absolute',
        fontSize: 10,
        color: '#133362',
        zIndex: 20,
        fontWeight: 'bold',
        top: hp(9),
    },

    cont_mo: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    img_conteo_m: {
        width: wp(40),
        height: hp(15),
        resizeMode: 'contain',
        zIndex: 10,
    },
    img_moneda: {
        width: wp(22),
        height: hp(11),
        resizeMode: 'contain',
        zIndex: 15,
        position: 'absolute',
        left: wp(13),
    },
    texto_moneda: {
        position: 'absolute',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#133362',
        zIndex: 20,
        left: wp(35.5),
    },
    texto_titulo_moneda: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    }
});
