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

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}

const userEdit = {...usuario, nome: 'Gabriel'}

console.log(userEdit)