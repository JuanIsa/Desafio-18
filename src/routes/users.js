'use strict';
import { Router } from 'express';
import Users from '../mongodb/handlerUsers.js';
import dotenv from 'dotenv';
import upload from '../services/upload.js';
import fs from 'fs';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import executePolicies from '../middlewares/authJTS.js';
import sendMail from '../services/mailer.js';


dotenv.config();

const usersRoute = Router();
const instanceOfUsers = new Users();

usersRoute.use(cookieParser());

usersRoute.post('/register', upload.single('file'), (req, res) => {
    const infoFront = JSON.parse(req.body.data);
    if (req.file) {
        infoFront['userImg'] = `${req.protocol}://${req.hostname}:${process.env.PORT}/userImg/${req.file.filename}`;
    }
    instanceOfUsers.readUser(infoFront.email)
        .then(data => {
            if (data === null) {
                instanceOfUsers.createUser(infoFront)
                    .then(data => {
                        res.send({ status: 0, message: `${data.completeName} creaste con éxito tu usuario.` })
                        sendMail('juan_isa2003@yahoo.com.ar', 'Nuevo registro', `<h2>${JSON.stringify(data)}</h2>`)
                            .then(data => console.log(data))
                            .catch(e => console.log(e));
                    })
                    .catch(e => console.log(e));
            } else {
                res.send({ status: 1, message: 'El usuario YA existe. Registrate con otro email.' });
                if (infoFront['userImg'] != undefined) {
                    fs.unlink(`./public/userImg/${req.file.filename}`, (error) => {
                        if (error) {
                            console.error(error);
                            return;
                        }
                        console.log('Se borró la foto de perfíl.');
                    });
                };
            }
        });
});

usersRoute.post('/login', passport.authenticate('login', { session: false }), async (req, res) => {
    const userToken = {
        completeName: req.user.completeName,
        role: req.user.role,
        id: req.user._id,
        userImg: req.user.userImg
    };
    const token = jwt.sign(userToken, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie(process.env.JWT_COOKIE, token).send({ status: 0, message: 'Sesión iniciada con éxito.' });
});

usersRoute.get('/check', executePolicies(), (req, res) => {
    res.send({ status: 0, message: req.user });
});

usersRoute.get('/logout', (req, res) => {
    res.clearCookie(process.env.JWT_COOKIE).status(401).send({ status: 1, message: 'Sin autorización.' });
});

export default usersRoute;