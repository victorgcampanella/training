"use strict";

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); //function teste

var teste = function teste() {
  return 'teste';
};

var teste1 = function teste1() {
  return [1, 2, 3];
};

var teste2 = function teste2() {
  return {
    nome: 'Diego'
  };
};

console.log(teste());
console.log(teste1());
console.log(teste2());
