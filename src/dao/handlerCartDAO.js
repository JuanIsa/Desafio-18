import userModel from "./models/modelUsers.js";
import Products from "./handlerProductsDAO.js";
import sendMail from "../services/mailer.js";

const instanceOfProducts = new Products();

class Cart {
    async addProductToCart(email, product) {
        delete product._id;
        let alertUser = "";
        //Obtengo el stock real de la base de datos
        const productsStock = await instanceOfProducts.readOneProduct(product.code);
        const readData = await userModel.findOne({ email })
            .then(data => {
                //Verifico si el producto que está intentando agregar el usuario ya existe en su carrito.
                if (data.userCart.some(el => el.code == product.code)) {
                    //Si el producto ya existe verifico que no pueda agregar más de los que hay disponibles en stock.
                    if ((data.userCart[data.userCart.findIndex(el => el.code == product.code)].cant + product.cant) > productsStock.stock) {
                        alertUser = "Estás intentando agregar al carrito más productos de los que hay en el stock disponible.";
                    } else {
                        //Si el producto ya existe en el carrito del usuario agrego más cantidad a su pedido.
                        data.userCart[data.userCart.findIndex(el => el.code == product.code)].cant += product.cant;
                    }
                } else {
                    //Si el producto NO existe en el carrito de usuario pusheo un nuevo producto dentro de su carrito.
                    delete product.stock;
                    data.userCart.push(product);
                    //Aumento la cantidad de items que tiene en su carrito.

                }
                return data;
            })
            .catch(e => { Error: e });
        await readData.save();
        return ({ payload: readData, message: alertUser });
    }
    async readCartFromUser(email) {
        const readData = await userModel.findOne({ email })
            .then(data => data.userCart)
            .catch(e => { Error: e });
        return readData;
    }
    async deleteProductFromCart(email, code) {
        const userToDeleteAProduct = await userModel.findOne({ email })
            .then(user => {
                user.userCart = user.userCart.filter(element => element.code != code.code)
                return user;
            })
            .catch(e => { Error: e });
        await userToDeleteAProduct.save();
        return userToDeleteAProduct;
    }
    async endBuy(email, userCart) {
        userCart.forEach(async element => {
            await instanceOfProducts.uptadteProductForBuy(element.code, element)
                .then(data => console.log(data))
                .catch(e => { Error: e });
        });
        sendMail(email, 'Resumen de tu compra', `${JSON.stringify(userCart)}`)
            .then(() => console.log('Se envió un correo al administrador por la creación de un nuevo usuario.'))
            .catch(e => console.log(e));
        return ({ email });
    }
}

export default Cart;