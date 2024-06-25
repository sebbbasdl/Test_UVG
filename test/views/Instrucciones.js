import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import imagen_linea from "../assets/Linea_titulo.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Navbar from "../components/Navbar";

export default function Instrucciones() {
  const navigation = useNavigation();
  const [animacionY] = useState(new Animated.Value(0));
  // Animación del botón aceptar
  const Click_aceptar = () => {
    Animated.sequence([
      Animated.timing(animacionY, {
        toValue: 5,
        duration: 50,
        useNativeDriver: true,
      }),
      Animated.timing(animacionY, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
    navigation.navigate("Operaciones");
  };
  const monedas = 0;
  return (
    <View>
      {/*Navbar (Planeta y monedas)*/ }
      <Navbar monedas={monedas} />
      <View style={styles.container}>
        {/*Contenedor azul*/ }
        <View style={styles.card}>
            {/*Titutlo "¡Desafiate!"*/ }
          <Text style={styles.titulo}>¡Desafíate!</Text>
            {/*Linea morada (imagen)*/ }
          <Image
            source={imagen_linea}
            style={{
              width: wp(35),
              height: hp(0.4),
              marginBottom: hp(3),
              marginTop: hp(1),
            }}
          />
          {/*Texto*/ }
          <Text style={styles.texto}>
            Supera estos desafíos y empieza a completar la misión de:
          </Text>
          {/*Texto*/ }
          <Text style={styles.textoN}>Jerarquía de Operaciones</Text>
          {/*Boton "Acepto el reto"*/ }
          <View>
            <TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.boton,
                  { transform: [{ translateY: animacionY }] },
                ]}
                activeOpacity={1}
                onPress={Click_aceptar}
              >
                <Text style={styles.botonTexto}>¡ACEPTO EL RETO!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.boton2,
                  { transform: [{ translateY: animacionY }] },
                ]}
                activeOpacity={1}
                onPress={Click_aceptar}
                disabled={true}
              >
                <Text style={styles.botonTexto2}>¡ACEPTO EL RETO!</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        {/*Contenedor de profudidad azul*/ }
        <View style={styles.card2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: wp("90%"),
    height: hp("45%"),
    backgroundColor: "#204D8D",
    borderRadius: 20,
    zIndex: 10,
  },
  card2: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    width: wp("90%"),
    height: hp("40%"),
    backgroundColor: "#123051",
    borderRadius: 20,
    position: "absolute",
    top: hp(7),
    zIndex: 5,
  },
  titulo: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold",
    marginTop: hp(2.5),
    letterSpacing: 1,
  },
  texto: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
  },
  textoN: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  boton: {
    marginTop: hp("5%"),
    width: wp("55%"),
    height: hp("5%"),
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("5%"),
    backgroundColor: "#ffff",
    borderRadius: 10,
    zIndex: 10,
  },
  botonTexto: {
    color: "#133362",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  boton2: {
    position: "absolute",
    top: hp("5.6%"),
    width: wp("55%"),
    height: hp("5%"),
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("5%"),
    backgroundColor: "#B3B6B7",
    borderRadius: 10,
  },
  botonTexto2: {
    color: "#B3B6B7",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
