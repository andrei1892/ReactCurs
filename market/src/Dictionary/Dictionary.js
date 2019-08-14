class Dictionary {
    constructor() {
      this.selectedProducts = []; // associative array -> key-value pairs
    }
  
    addInCart(key, value) {
      this.selectedProducts[key] = value; // key = va fi id-ul produsului ; value = va fi referinta din context-ul "market"
    }
  
    displayProduct(key) {
      return this.selectedProducts[key];
    }
  }

export default Dictionary;