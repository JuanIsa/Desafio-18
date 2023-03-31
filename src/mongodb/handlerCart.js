import userModel from "./models/modelUsers.js";

class Cart {
    constructor() {
        this.arrayCart = []
    }
    async addProductToCart(email, cart) {
        const readData = await userModel.findOne({ email })
            .then(data => {
                data.userCart.push(cart)
                return data;
            })
            .catch(e => { Error: e });
        await readData.save();
        return readData;
    }
}
    


export default Cart;