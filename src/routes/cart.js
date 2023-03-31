'use strict';
import { Router } from 'express';
import Cart from '../mongodb/handlerCart.js';

const cartRoute = Router();
const instanceOfCart = new Cart();


cartRoute.post('/:email', (req, res) => {
    instanceOfCart.addProductToCart(req.params.email, req.body)
        .then(info => res.send({ info }))
        .catch(error => res.send({ error }))
});
export default cartRoute;