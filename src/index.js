"use strict";

function sayHello() {
    console.log('hello');
}

sayHello();

const niceMessage = require('./say-hello');

console.log(niceMessage('Trevor'));