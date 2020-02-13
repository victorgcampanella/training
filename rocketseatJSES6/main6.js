const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP'
    },
}

const {nome, idade, endereco: {cidade}} = usuario

console.log(nome)
console.log(idade)
console.log(cidade)