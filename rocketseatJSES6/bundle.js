"use strict";

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'São Paulo',
    estado: 'SP'
  }
}; // const {nome, idade, endereco: {cidade}} = usuario
// console.log(nome)
// console.log(idade)
// console.log(cidade)
// function mostrarNome(usuario){
//     console.log(usuario.nome)
// }
// mostrarNome(usuario)

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostrarNome(usuario);
