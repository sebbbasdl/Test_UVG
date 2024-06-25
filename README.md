
## INFORMACIÓN IMPORTANTE
1. **Instalación de Dependencias:**
   - Ejecutar `npm install` para instalar las dependencias del archivo `package.json` del proyecto.

2. **Inicio del Proyecto:**
   - Utilizar `npx expo start` o `npm start` para ejecutar el proyecto (preferiblemente `npx expo start`).

## Animación de "Estrellitas"
La animación de "Estrellitas" está disponible únicamente para dispositivos móviles debido a limitaciones de la librería utilizada. Para habilitar la visualización en un dispositivo móvil, sigue estos pasos en el archivo `Operaciones.js`:

Descomenta el siguiente código:
```javascript
/*Declaración de Dependencias*/
import LottieView from 'lottie-react-native';

/*Dentro del Return (descomentar y quitar llaves"{}")*/
<LottieView
	source={require('../animaciones/Estrellitas.json')}
    autoPlay
    loop={false}
    style={styles.lottie}
/>

/*Styles*/
lottie: {
	width: wp(30),
	height: hp(20),
	backgroundColor: "transparent",
	justifyContent: "center",
	alignContent: "center",
	position: "absolute",
	top: hp(-5),
	left: wp(-10.5),
}