import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

import img_moneda from '../assets/Moneda.png';
import planeta from "../assets/PlanetaAritmetica.png";
import img_desplegar from "../assets/Btn_Desplegable.png";

export default function Navbar({monedas}) {    
    return (
        <View style={styles.cont_planeta}>
            <View style={styles.leftContainer}>
                <Image source={planeta} style={styles.planeta} />
            </View>
            <View style={styles.rightContainer}>
                <Image source={img_moneda} style={styles.img_moneda2} />
                <View style={styles.cont_monedas}>
                    <Text style={styles.texto_monedas}>{monedas}</Text>
                </View>
                <Image source={img_desplegar} style={styles.img_desp} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cont_planeta: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", 
      },
      
      leftContainer: {
        marginRight: 'auto',
      },
      
      rightContainer: {
        flexDirection: "row", 
      },
      planeta: {
        width: wp(20),
        height: hp(30),
        resizeMode: "contain",
      },
      img_moneda2: {
        width: wp(8),
        height: hp(4),
        resizeMode: "contain",
        zIndex: 10,
        position: "absolute",
        top: hp(-0.5),
        left: wp(-3),
      },
      img_desp: { 
        width: wp(10),
        height: hp(5),
        resizeMode: "contain",
        zIndex: 10,
        position: "relative",
      },
      cont_monedas: { 
        width: wp(25),
        height: hp(3),
        backgroundColor: "#133362",
        borderRadius: 25,
        zIndex: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      },
      texto_monedas: {
        color: "white",
        fontSize: 18,
        margin: hp(0.2),
        
      },
});
