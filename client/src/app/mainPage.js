/* global $ */

import MyClass from './components/MyComponent';

function sleep(milliSeconds) {
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
}

sleep(3000);

console.log('main page');
console.log($);

let myInstance = new MyClass;
myInstance.foo = 'ololo';
console.log(myInstance.foo);
