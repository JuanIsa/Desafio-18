'use strict';
import { Router } from 'express';
import Producs from '../mongodb/handlerProducts.js'

const productsRoute = Router();
const instanceOfProducts = new Producs();

productsRoute.post('/insert', (req, res) => {
    instanceOfProducts.readOneProduct(req.body.code)
        .then(dataOne => {
            if (dataOne == null) {
                instanceOfProducts.insertProduct(req.body)
                    .then(fullInfo => res.send({ status: 0, message: fullInfo }))
                    .catch(e => console.log(e));
            } else {
                res.send({ status: 1, message: 'Ese código ya existe y está asociado a un producto.' });
            }
        })
        .catch(e => res.send({ status: 1, message: e }));
});

productsRoute.get('/completelist', (req, res) => {
    instanceOfProducts.readAllProducts()
        .then(data => res.send({ status: 0, message: data }))
        .catch(e => res.send({ status: 1, message: e }));
});

productsRoute.delete('/delete/:code', (req, res) => {
    const code = req.params.code;
    console.log('aca borrando');
    instanceOfProducts.deleteProductByCode(code)
        .then(data => {
            console.log(data);
            return res.send({ status: 0, message: data })
        })
        .catch(e => res.send({ status: 1, message: e }));

});

productsRoute.put('/update/:code', (req, res) => {
    const code = req.params.code;
    const info = req.body;
    instanceOfProducts.uptadteProductByCode(code, info)
        .then(data => {
            return res.send({ status: 0, message: data })
        })
        .catch(e => res.send({ status: 1, message: e }));
});

export default productsRoute;