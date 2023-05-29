import express from 'express';
import bodyParser from 'body-parser';
import userController from './application/controllers/userController';

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Rutas
app.use('/users', userController);
// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
