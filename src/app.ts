import express, { Application } from 'express';
import cors from 'cors';
import tipoDocumentoRoute from './routes/tipoDocumentoRoute';
import env from './config/env';

/*
    CONFIGURAR CONEXION A BD, RUTAS Y OTRAS COSAS DE LOS SERVICIOS
*/

const app: Application = express();

//Base de datos

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
//Rutas
app.use(`${env.API_PREFIX}/tipo-documentos`, tipoDocumentoRoute);

export default app;

