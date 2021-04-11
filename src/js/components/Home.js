import {templates, select} from '../settings.js';
import {app} from '../app.js';

class Home{
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initCarousel();
    thisHome.navigate();
  }

  render(element){
    const thisHome = this;
    const generatedHTML = templates.home();
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.order = document.querySelector(select.home.orderOnline);
    thisHome.dom.booking = document.querySelector(select.home.bookTable);
  }

  initCarousel(){
    const elem = document.querySelector('.main-carousel');
    new Flickity(elem, { // eslint-disable-line
      cellAlign: 'left',
      contain: true,
      autoPlay: true,
    });
  }

  navigate() {
    const thisHome = this;
    thisHome.dom.booking.addEventListener('click', function() {
      app.activatePage('booking');
      window.location.hash = '#/booking';
    });
    thisHome.dom.order.addEventListener('click', function() {
      app.activatePage('order');
      window.location.hash = '#/order';
    });
  }
}
export default Home;
