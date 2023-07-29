class ProductManager {
    constructor() {
      this.products = [];
    }
  
    generateId() {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      const existingProduct = this.products.find((product) => product.code === code);
      if (existingProduct) {
        throw new Error('El código del producto ya existe.');
      }
  
      const id = this.generateId();
      const product = { id, title, description, price, thumbnail, code, stock };
      this.products.push(product);
      return product;
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (!product) {
        throw new Error('Producto no encontrado.');
      }
      return product;
    }
  }
  

  const productManager = new ProductManager();
  
  console.log(productManager.getProducts());
  
  try {
    const newProduct = productManager.addProduct(
      'producto prueba',
      'Este es un producto prueba',
      200,
      'Sin imagen',
      'abc123',
      25
    );
    console.log('Producto agregado:', newProduct);
  } catch (error) {
    console.log(error.message);
  }
  
  console.log(productManager.getProducts());
  
  try {
    productManager.addProduct(
      'producto repetido',
      'Este es un producto repetido',
      150,
      'Sin imagen',
      'abc123',
      10
    );
  } catch (error) {
    console.log(error.message);
  }
  
  try {
    const productIdToFind = productManager.getProducts()[0].id;
    const foundProduct = productManager.getProductById(productIdToFind);
    console.log('Producto encontrado:', foundProduct);
  } catch (error) {
    console.log(error.message);
  }