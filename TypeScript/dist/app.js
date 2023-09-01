"use strict";
class Parent {
}
class child extends Parent {
}
let A = new child();
if (A instanceof Parent) {
    console.log(typeof A);
}
console.log('mostafa');
