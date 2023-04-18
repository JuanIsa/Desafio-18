import userModel from "./models/modelUsers.js";

class Cart {
    async addProductToCart(email, product) {
        delete product._id;
        const readData = await userModel.findOne({ email })
            .then(data => {
                if (data.userCart.some(el => el.code == product.code)) {
                    if ((data.userCart[data.userCart.findIndex(el => el.code == product.code)].cant + product.cant) > product.stock) {
                    } else {
                        data.userCart[data.userCart.findIndex(el => el.code == product.code)].cant += product.cant;
                    }
                } else {
                    delete product.stock;
                    data.userCart.push(product)
                }
                return data;
            })
            .catch(e => { Error: e });
        await readData.save();
        return readData;
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
}

export default Cart;