import productsModel from "./models/modelProducts.js";

class Products{
    //LEER TODOS LOS PRODUCTOS
    async readAllProducts(){
        const products = await productsModel.find()
            .then(data => data)
            .catch(e => { Error: e });
        return products;
    }
    //LEER UN SOLO PRODUCTO
    async readOneProduct(code){
        const products = await productsModel.findOne({code})
            .then(data => data)
            .catch(e => { Error: e });
        return products;
    }
    //INSERTAR UN PRODUCTO
    async insertProduct(product) {
        console.log(product)
        const createData = await productsModel.create( product )
            .then(data => data)
            .catch(e => { Error: e });
        return createData;
    }
    //BORRAR UN SOLO PRODUCTO
    async deleteProductByCode(code){
        const products = await productsModel.findOneAndDelete({ code })
            .then(data => data)
            .catch(e => { Error: e });
        return products;
    }
    //ACTUALIZAR UN PRODUCTO
    async uptadteProductByCode(code, data) {
        const products = await productsModel.updateOne({code},data)
            .then(data => data)
            .catch(e => { Error: e });
        return products;
    }

}
export default Products;