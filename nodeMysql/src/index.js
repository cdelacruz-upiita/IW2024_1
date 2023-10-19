import express from 'express';
import indexRoutes from './routes/index.routes.js';
import usersRoutes from './routes/users.routes.js';

// Instancia para el servidor HTTP de la aplicación
const app = express();
const PORT = 3000;

// Se habilita el uso de routes users.

app.use(express.urlencoded({extended:true}));
//app.use(express.json());
app.use (indexRoutes);
app.use (usersRoutes);

app.listen(PORT,()=>{
  console.log(`Servidor ejecutandose en el puerto ${PORT}`);  
});


