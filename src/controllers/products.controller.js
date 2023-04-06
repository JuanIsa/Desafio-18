'use strict';
import Producs from '../mongodb/handlerProducts.js'
const instanceOfProducts = new Producs();

export const productsPost = (req, res) => {
    instanceOfProducts.readOneProduct(req.body.code)
        .then(dataOne => {
            if (dataOne == null) {
                instanceOfProducts.insertProduct(req.body)
                    .then(fullInfo => res.send({ status: 0, message: fullInfo }))
                    .catch(e => res.send({ status: 1, message: e }));
            } else {
                res.send({ status: 1, message: 'Ese código ya existe y está asociado a un producto.' });
            }
        })
        .catch(e => res.send({ status: 1, message: e }));
}
export const productsGet = (req, res) => {
    instanceOfProducts.readAllProducts()
        .then(data => res.send({ status: 0, message: data }))
        .catch(e => res.send({ status: 1, message: e }));
}
export const productsDelete = (req, res) => {
    const code = req.params.code;
    instanceOfProducts.deleteProductByCode(code)
        .then(data => {
            return res.send({ status: 0, message: data })
        })
        .catch(e => res.send({ status: 1, message: e }));

}

export const productsPut = (req, res) => {
    const code = req.params.code;
    const info = req.body;
    instanceOfProducts.uptadteProductByCode(code, info)
        .then(data => {
            return res.send({ status: 0, message: data })
        })
        .catch(e => res.send({ status: 1, message: e }));
}