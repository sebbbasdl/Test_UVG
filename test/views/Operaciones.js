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
import planeta from "../assets/PlanetaAritmetica.png";

export default function Instrucciones() {
  const navigation = useNavigation();
  const [animacionY] = useState(new Animated.Value(0));

  const handlePress = () => {
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

  return (
    <View>
      <View style={styles.cont_planeta}>
        <Image source={planeta} style={styles.planeta} />
      </View>
      <View>
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
          <View style={styles.cont_subope}>
            <TouchableOpacity style={styles.pregunta}>
                <View style={styles.pregunta}></View>
                <View style={styles.prof_pregunta}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opciones} onPress={handlePress}>
              <View style={styles.opciones}></View>
              <View style={styles.prof_opciones}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opciones} onPress={handlePress}>
              <View style={styles.opciones}></View>
              <View style={styles.prof_opciones}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opciones} onPress={handlePress}>
              <View style={styles.opciones}></View>
              <View style={styles.prof_opciones}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opciones} onPress={handlePress}>
              <View style={styles.opciones}></View>
              <View style={styles.prof_opciones}></View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont_planeta: {},
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
  pregunta: {
    width: wp(65),
    height: hp(8),
    marginBottom: hp(2),
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    zIndex: 10, 
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
});
