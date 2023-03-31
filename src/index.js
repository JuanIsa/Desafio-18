'use strict';
//Librerias externas o kernel
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//Routes
import usersRoute from './routes/users.js';
import productsRoute from './routes/products.js';
import cartRoute from './routes/cart.js';
//Servicios
import initializePassport from './services/passport.config.js';
import addLogger from './middlewares/logger.js';
import mongoConnect from './services/mongoConnection.js';

mongoConnect();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 4300;

//Midlewares
initializePassport();
app.use(cors());
app.use(addLogger);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', express.static(__dirname + '/public'));
app.use('/auth/login', express.static(__dirname + '/public'));
app.use('/auth/register', express.static(__dirname + '/public'));
app.use('/home', express.static(__dirname + '/public'));
app.use('/home/carrito', express.static(__dirname + '/public'));

//ROUTES
app.use('/users', usersRoute);
app.use('/products', productsRoute);
app.use('/cart', cartRoute);

//RUTA 404
app.use('*', (req, res) => {
    res.status(404).json({ status: 1, descripcion: `ruta:${req.url}`, método: `${req.method} no implementado.` });
});

//ESCUCHA DEL SERVER
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}.`);
});