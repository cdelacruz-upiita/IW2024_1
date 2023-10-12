/**
 * modulo http no requiere instalación
 * npm install --save nodemon
 * npm install --save express 
 */

/* creación de servidor HTTP con el módulo HTTP
const HTTP = require("http");
const PUERTO = 3000;

const SERVER = http.createserver ((req, res)=>{
  console.log("respuesta del servidor");
  res.end("Mensaje desde el servidor con node.js");
});

SERVER.listen(PUERTO,()=>{
  console.log(`Escuchando peticiones en el puerto ${PUERTO}`)	
})

*/
/**
 * creación de servidor HTTP con express para el manejo
 * de rutas en la app.
 */
const express = require("express");
const app = express();
const PORT = 3000;

/**
 * Ruta inicial de la aplicación que se accede con
 * http://localhost:3000/
 */
app.get("/", (req, res) => {
  res.send("Ruta raíz de la aplicación Web con express");
});

app.get("/resetpasswd", (req, res) => {
	res.send("Ruta para camnbiar la contraseña");
});

app.get("/register", (req, res) => {
	res.send("Ruta para registrar un nuevo usuario");
});

/**
 * Uso de middleware para acceder a archivos estáticos 
 * en la aplicación
 */
app.use(express.static(__dirname + "/public"));
//app.use(express.static(path.join(__dirname, "public")));

/**
 * configuración para error 404
 */
app.use((req, res, next) => {
	res.status(404).sendFile(__dirname + "../public/html/error404.html");
});

app.use(express.urlencoded({extended:true}));

app.listen(PORT, () => {
  console.log(`Aplicación Web ejecutándose en  http://localhost:${PORT}`);
});