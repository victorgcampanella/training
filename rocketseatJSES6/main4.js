const arr = [1, 3, 4, 5, 6]

const newArr = arr.map(item => item * 2)

console.log(newArr)

//function teste
const teste = () => {
  return 'teste'
}

const teste1 = () => [1, 2, 3]

const teste2 = () => ({nome : 'Diego'})

console.log(teste())
console.log(teste1())
console.log(teste2())