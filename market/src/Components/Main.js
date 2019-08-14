import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import marketContext from '../MarketContext/MarketContext'


const Main = props => {
    const market = React.useContext(marketContext);
    const [mouseOver, onmouseout] = React.useState(false);
    const [getSubcat, changeSubcat] = React.useState(0);
    return (
      <div className="second-box">
        <nav className="toateCategoriile">
          <h4>Categorii</h4>
          {market.map((categ, index) => {
            return (
              <>
                <div
                  key={index}
                  id={index}
                  className="categorie"
                  onMouseOver={() => {
                    onmouseout(true);
                    changeSubcat(index);
                  }}
                  onMouseOut={() => {
                    onmouseout(false);
                    changeSubcat(index);
                  }}
                >
                  {" "}
                  {categ.numeCategorie}{" "}
                </div>
                <div
                  className={mouseOver ? "subcategorieAfisata" : "subcategorie"}
                  onMouseOver={() => onmouseout(true)}
                  onMouseOut={() => onmouseout(false)}
                >
                  {market[getSubcat].subCategorii.map((subcat, index2) => {
                    return (
                      <Link
                        key={index2}
                        to={
                          "/" +
                          market[getSubcat].numeCategorie +
                          "/" +
                          subcat.numeSubcategorie
                        }
                      >
                        {subcat.numeSubcategorie}
                      </Link>
                    );
                  })}
                </div>
              </>
            );
          })}
        </nav>
        <div className="main-pannel">
          <Switch>
            <Route path="/:categorie/:subcategorie" component={props.produse} />
            <Route path="/cart" component={props.cart} />
          </Switch>
        </div>
      </div>
    );
  };
  
export default Main;