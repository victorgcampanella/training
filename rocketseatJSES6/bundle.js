"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//REST
// const usuario = {
//     id: 1,
//     email: 'junin@gmail.com',
//     senha: 'hdkhkkhkhdskhfkdsh',
//     nome: 'Diego',
//     idade: 23,
//     empresa: 'Rocketseat'
// }
// const {id, email, senha, ...corpo} = usuario
// console.log(id)
// console.log(email)
// console.log(senha)
// console.log(corpo)
// const arr = [1, 2, 3, 4, 5, 6]
// const [a, b, ...c] = arr
// console.log(a)
// console.log(b)
// console.log(c)
// function soma(...params){
//     return params.reduce((total, next)=> total + next)
// }
// console.log(soma(1, 2, 3))
//SPREAD
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)
var usuario = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

var userEdit = _objectSpread({}, usuario, {
  nome: 'Gabriel'
});

console.log(userEdit);
