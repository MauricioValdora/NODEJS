class ProductManager {
    constructor() {
        this.products = [];
    }

    addProducts(title, description, price, thumbNail, code, stock) {

        if (!title || !description || !price || !thumbNail || !code || !stock) {
            console.error('ALL FIELDS ARE REQUIRED');
            return;
        }

        if (this.products.find(product => product.code === code)) {
            return console.error('PRODUCT ALREADY EXISTS');
           
        }

        const product = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbNail,
            code,
            stock
        };

        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductsById(id) {
        const found = this.products.filter(p => p.id === id);
        if (found.length === 0) {
           console.error('PRODUCT NOT FOUND');
           return null
        }
        return found;
    }
}

const productManager = new ProductManager();

productManager.addProducts(
    "producto prueba 1",
    "este es un producto de prueba 1",
    200,
    "sin imagen",
    "abc123",
    25
);

productManager.addProducts(
    "producto prueba 2",
    "este es un producto de prueba 2",
    300,
    "sin imagen",
    "abc1234",
    10
);


console.log(productManager)
// console.log(productManager.getProducts());
// console.log(productManager.getProductsById(1));
// console.log(productManager.getProductsById(3)); 
