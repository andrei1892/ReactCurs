import React from 'react';
import { BrowserRouter} from "react-router-dom";

import marketContext from './MarketContext/MarketContext';
import cartContext from './CartContext/CartContext';
import Dictionary from './Dictionary/Dictionary';
import Header from './Components/Header';
import Main from './Components/Main';

import './App.css';

const Produse = props => {
  // partea de afisare a tuturor produselor
  const market = React.useContext(marketContext);
  const params = props.match.params;
  const subcatcategorii = market.find(x => x.numeCategorie === params.categorie)
    .subCategorii;
  const subcat = subcatcategorii.find(
    x => x.numeSubcategorie === params.subcategorie
  );
  return (
    <>
      <h3> {subcat.numeSubcategorie}</h3>
      <cartContext.Consumer>
        {context => {
          return (
            <div className="produse">
              {subcat.produse.map((product, index) => {
                return (
                  <div key={index} id={product.idProdus} className="UnProdus">
                    <p> {product.numeProdus}</p>
                    <img src={product.imagine} alt="" />
                    <p> Pret: {product.pret} </p>
                    <p>Nr Produse ramase: {product.numarProduse}</p>
                    <button onClick={e => context.addProduct(e, 1, product)}>
                      Add to cart
                    </button>
                  </div>
                );
              })}
            </div>
          );
        }}
      </cartContext.Consumer>
    </>
  );
};

const Cart = () => {
  return (
    <>
      <h3>In Cos </h3>
      <div className="produse">
        <cartContext.Consumer>
          {context => {
            return context.selectedProducts.map((produs, indexCart) => {
              return (
                <>
                  <div key={indexCart} className="UnProdus">
                    <p>{produs.content.numeProdus}</p>
                    <img src={produs.content.imagine} alt="" />
                    <p>Cantitate: {produs.cantitate} </p>
                  </div>
                </>
              );
            });
          }}
        </cartContext.Consumer>
      </div>
    </>
  );
};


class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      nrOfProducts: 0,
      selectedProducts: []
    };
  }

  componentDidMount() {
    let lastTimeItems = this.rememberProducts();
    let lastCount = lastTimeItems.reduce((acc, item) => {
      acc += item.cantitate;
      return acc;
    }, 0);
    this.setState({
      selectedProducts: lastTimeItems,
      nrOfProducts: lastCount
    });
  }

  /*   dictionary = (key, value) => {}; */
  storedProducts = new Dictionary();

  rememberProducts = () => {
    let products = [];
    for (let i in this.state) {
      if (localStorage.hasOwnProperty(i)) {
        products = JSON.parse(localStorage.getItem(i));
        products = products.filter(x => x !== null);
      }
    }
    return products;
  };

  addProduct = (ev, increment, product) => {
    // eveniment, valoarea de incrementare , produs specific
    let elem = ev.target;
    this.storedProducts.addInCart(elem.parentElement.id, product); // asociere id produs cu referinta din contextul "market"
    this.setState(prevState => {
      let nrOfProducts = prevState.nrOfProducts;
      nrOfProducts += increment; // incrementare iteme in cos
      let selectedItem = prevState.selectedProducts;
      let check = selectedItem.find(item => item.id === elem.parentElement.id); // verifica daca produsul a mai fost adaugat
      if (check) check.cantitate++;
      // daca da, creste cantitatea
      else {
        // daca nu, adaugam un obiect ce contine id , continut si cantiate
        selectedItem.push({
          id: elem.parentElement.id,
          content: this.storedProducts.displayProduct(elem.parentElement.id), // functia hash din dictionar care aduce produsul specific pe baza id-ului
          cantitate: 1
        });
      }

      window.localStorage.setItem(
        //store items in local storage to remember after exit
        "selectedProducts",
        JSON.stringify(selectedItem)
      );

      return {
        // update state
        nrOfProducts: nrOfProducts,
        selectedProducts: selectedItem
      };
    });
  };

  render() {
    return (
      <cartContext.Provider
        value={{
          addProduct: this.addProduct,
          counter: this.state.nrOfProducts,
          selectedProducts: this.state.selectedProducts
        }}
      >
        {this.props.children}
      </cartContext.Provider>
    );
  }
}

function Market() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Provider>
          <Header />
          <Main produse={Produse} cart={Cart} />
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default Market;
