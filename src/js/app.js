import {settings, select} from '/js/settings.js';
import Product from '/js/components/Product.js';
import Cart from '/js/components/Cart.js';


const app = {
  initData: function () {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.product;
    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
        /*save parseResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;
        /*execute initMenu method*/
        app.initMenu();
      });

    console.log('thisapp.data', JSON.stringify(thisApp.data));
  },

  initMenu: function () {
    const thisApp = this;

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  init: function () {
    const thisApp = this;

    thisApp.initData();
  },

  initCart: function () {
    const thisApp = this;

    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem);

    thisApp.productList = document.querySelector(select.containerOf.menu);

    thisApp.productList.addEventListener('add-to-cart', function(event){
      app.cart.add(event.detail.product);
    });
  }
};

app.init();
//app.initCart();
