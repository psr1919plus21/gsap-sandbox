/* global TweenMax */

export default class MyClass {
  constructor(selector) {
    this.el = document.querySelector(selector);
  }

  animate() {
    TweenMax.to(this.el, 2, {
       x: 500,
       y: 300,
       rotation: 360,
       scale: 3,
       ease:TweenMax.Back.easeOut
    });
  }

}
