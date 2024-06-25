import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from "react-native";
import Navbar from "../components/Navbar";
import { useNavigation } from "@react-navigation/native";
import imagen_linea from "../assets/Linea_titulo.png";
import imagen_pregunta from "../assets/QuestionMark.png";
import imagen_check from "../assets/check.png";
import barra from "../assets/BarraProgresoNaranja.png";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Operaciones() {
  const navigation = useNavigation();
  const [animacionY] = useState(new Animated.Value(0));

  const [pruebas] = useState([
    {
      operacion: "3 + 4 x 5",
      incorrectas: [35, 12, 13],
      correcta: 23,
    },
    {
      operacion: "2 x 3 - 5",
      incorrectas: [0, 13, 5],
      correcta: 1,
    },
    {
      operacion: "1 + 3 x 5 ÷ 1",
      incorrectas: [17, 18, 19],
      correcta: 16,
    },
    {
      operacion: "5 + 6 + 5 x 4 - 3",
      incorrectas: [35, 32, 29],
      correcta: 28,
    },
    {
      operacion: "7 + 8 x 6",
      incorrectas: [61, 58, 50],
      correcta: 55,
    },
  ]);

  const [pruebaActual, setPruebaActual] = useState(pruebas[0]);
  const [contador, setContador] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
  const [monedas, setMonedas] = useState(0);

  const handlePress = (option) => {
    setSelectedOption(option);
    if (option === pruebaActual.correcta) {
      setRespuestasCorrectas(respuestasCorrectas + 1);
    }
  };

  const siguienteOperacion = () => {
    

    if (contador === pruebas.length - 1) {
      setMonedas(respuestasCorrectas * 5);
      navigation.navigate("Resultados", {
        correctas: respuestasCorrectas,
        total: pruebas.length,
        monedas: respuestasCorrectas * 5,
      });
    } else {
      setPruebaActual(pruebas[pruebas.indexOf(pruebaActual) + 1]);
      setSelectedOption(null);
      setContador(contador + 1);
    }
  };

  const progreso = contador / pruebas.length;

  return (
    <View>
      <Navbar monedas={monedas} />
      <View style={styles.contenedor_operaciones}>
        <View style={styles.cont_ope}>
          <Text style={styles.titulo}>Desafíate</Text>
          <Image
            source={imagen_linea}
            style={{
              width: wp(35),
              height: hp(0.4),
              marginBottom: hp(3),
              marginTop: hp(1),
            }}
          />
          <View>
            <Text style={styles.texto_barra}>
              Nivel {contador}/{pruebas.length}
            </Text>
            <View style={styles.barraContenedor}>
              <ImageBackground
                source={barra}
                style={[styles.barraProgreso, { width: `${progreso * 100}%` }]}
              />
            </View>
            <View style={styles.prof_barra}></View>
          </View>
          <View style={styles.cont_subope}>
            <TouchableOpacity disabled={true}>
              <View style={styles.pregunta}>
                <Text style={styles.texto_pregunta}>
                  {pruebaActual.operacion}
                </Text>
                <Text style={styles.texto_pregunta}> = </Text>
                <Image source={imagen_pregunta} style={styles.ima_preg}></Image>
              </View>
              <View style={styles.prof_pregunta}></View>
            </TouchableOpacity>

            {[...pruebaActual.incorrectas, pruebaActual.correcta]
              .sort()
              .map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.opciones}
                  onPress={() => handlePress(option)}
                  disabled={selectedOption !== null}
                >
                  <View
                    style={[
                      styles.opciones,
                      selectedOption === option &&
                        option !== pruebaActual.correcta && {
                          backgroundColor: "#E6333C",
                        },
                      selectedOption === option &&
                        option === pruebaActual.correcta && {
                          backgroundColor: "#4CAF50",
                        },
                    ]}
                  >
                    <Text style={[styles.texto_ope]}>{option}</Text>
                    {selectedOption !== null &&
                      selectedOption !== option &&
                      option === pruebaActual.correcta && (
                        <Image
                          source={imagen_check}
                          style={styles.ima_check}
                        ></Image>
                      )}
                  </View>
                  <View
                    style={[
                      styles.prof_opciones,
                      selectedOption === option &&
                        option !== pruebaActual.correcta && {
                          backgroundColor: "#B52C41",
                        },
                      selectedOption === option &&
                        option === pruebaActual.correcta && {
                          backgroundColor: "#4F9C2F",
                        },
                    ]}
                  ></View>
                </TouchableOpacity>
              ))}

            <TouchableOpacity disabled={false} onPress={siguienteOperacion}>
              <View style={styles.siguiente}>
                <Text style={styles.texto_siguiente}>SIGUIENTE</Text>
              </View>
              <View style={styles.prof_siguiente}></View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor_operaciones:{
    position: "absolute",
    top: hp(17),
  },
  cont_barra: {
    alignItems: "center",
    marginVertical: hp(3),
  },
  cont_ope: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cont_subope: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: wp(10),
  },
  titulo: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: hp(2.5),
    letterSpacing: 1,
    textAlign: "center",
  },
  planeta: {
    width: wp(20),
    height: hp(30),
    resizeMode: "contain",
  },
  barraContenedor: {
    width: wp(80),
    height: hp(3),
    backgroundColor: "white",
    borderRadius: 200,
    marginBottom: hp(3),
    overflow: "hidden",
    position: "relative",
    zIndex: 10,
    shadowColor: "#CD00FF",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  barraProgreso: {
    height: "100%",
    resizeMode: "cover",
  },
  prof_barra: {
    top: hp(3.8),
    position: "absolute",
    backgroundColor: "#B3B6B7",
    borderRadius: 10,
    width: wp(80),
    height: hp(3),
    zIndex: 5,
  },
  texto_barra: {
    color: "white",
    fontSize: 18,
    margin: hp(0.2),
  },
  pregunta: {
    width: wp(65),
    height: hp(8),
    marginBottom: hp(2),
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    zIndex: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  opciones: {
    width: wp(30),
    height: hp(8),
    margin: wp(2),
    borderRadius: 10,
    backgroundColor: "#6AB1B5",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    position: "relative",
  },
  prof_opciones: {
    top: hp(0.5),
    position: "absolute",
    backgroundColor: "#448B8C",
    borderRadius: 10,
    width: wp(30),
    height: hp(8),
    zIndex: 5,
  },
  prof_pregunta: {
    top: hp(0.5),
    position: "absolute",
    backgroundColor: "#B3B6B7",
    borderRadius: 10,
    width: "100%",
    height: hp(8),
    zIndex: 5,
  },
  texto_ope: {
    color: "white",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  texto_pregunta: {
    color: "#133362",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "800",
  },
  ima_preg: {
    width: wp(10),
    height: hp(6),
    resizeMode: "contain",
  },
  siguiente: {
    width: wp(40),
    height: hp(3.5),
    marginVertical: hp(2),
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    zIndex: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  texto_siguiente: {
    color: "#133362",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  prof_siguiente: {
    top: hp(0.5),
    position: "absolute",
    backgroundColor: "#B3B6B7",
    borderRadius: 10,
    width: wp(40),
    height: hp(3.5),
    marginVertical: hp(2),
    zIndex: 5,
  },
  ima_check: {
    width: wp(10),
    height: hp(6),
    resizeMode: "contain",
    position: "absolute",
    top: hp(-2),
    left: wp(23),
  },
});
