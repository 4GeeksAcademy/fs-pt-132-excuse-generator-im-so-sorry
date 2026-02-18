import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};


// funciones de orden superior! 

const sum = (a, b) => a + b

console.log(sum(5, 15))

// metodos que van a ejecutar funciones ---> callback 

const arr = [1, 2, 3, 4, 5]

arr.push()
arr.pop()

// callbacks

for (let val of arr) {
  console.log(val)

}


for (let index in arr) {
  console.log(index)
}



arr.forEach((el, i) => {
  console.log('forEach', el)
  let aux
  if (i % 2 != 0) {
    aux = el + 50
  } else {
    aux = el * 125
  }
  console.log('forEach', aux)
})

const testFunction = (el, i) => {
  console.log('forEach', el)
  let aux
  if (i % 2 != 0) {
    aux = el + 50
  } else {
    aux = el * 125
  }
  console.log('forEach', aux)
}

arr.forEach(testFunction) // no se ponen los () porque el forEach la ejecuta

/*
 caracteristica 

  forEach--> lo dice en el nombre, es un loop, tipo for
  si es un for, NO devuelve informacion y no se le puede asignar a una variable

 */
//si una funcion flecha tiene un solo parametro, puede escribirse sin ()
const cubosBad = a =>{ 
  console.log('valor de a recibido:',)
  console.log( a**3) 

}

const tresAlCuboBad = cubosBad(3)

const cubosGood = a =>{ 
  return a**3 
}

const tresAlCuboGood = cubosGood(3) // guarda en la variable lo que retorna la funcion
console.log('cubo bad',tresAlCuboBad) // da indefinido porque no tiene retorno
console.log('cubo good ',tresAlCuboGood) // devuelve un valor por el retorno de la funcion

// la ejecucion, SI va con parentesis ej: potenciador(5)
console.log(cubosGood(5))

const potenciados = arr.forEach((el) => el ** 2)
console.log(potenciados) // indefinido porque forEach NO retorna informacion
//const potenciados = 

// MAP ---> loop pero DEVUELVE UN ARRAY NUEVO
const potenciadosOk = arr.map((el) => el ** 2)
const cubosOk = arr.map(cubosGood)
console.log(potenciadosOk);
console.log(cubosOk);

const newArr = []

for (let el of arr){ 
  newArr.push(el**2)
}

arr.forEach(el=>{ 
  newArr.push(el**2)
})

//filter

const filtered = cubosOk.filter((el)=> {
  return el<50 && el!=1
})
console.log(filtered)


// reducer
const startFromValue = 55
const reduced = arr.reduce((acc, el)=> acc+el, startFromValue)/arr.length
console.log(reduced)
const textos = ['hola', 'soy', 'pepe']
const sentence = textos.reduce((acc, el)=> acc+el)
console.log(sentence)

// sort
const randomNumbers = []
for (let i = 0; i<10 ; i++){
  randomNumbers.push(Math.floor(Math.random()*10))
}

console.log(randomNumbers)
console.log(randomNumbers.sort((a,b)=> b+a))
const orderedNumbers = textos.sort((a,b)=> a<b)
//sort NO retorno un array nuevo, sino que modifica el array en el que se ejecuta
console.log(randomNumbers);
console.log(orderedNumbers);


//programacion funcional
// una funcion, una responsabilidad
//funcion para generar numeros aleatorios
const randomNumberGenerator = (arrayQueVoyAUtilizar) => Math.floor(Math.random()*arrayQueVoyAUtilizar.length)
//funcion para extraer un valor de un array
const getRandomValueFromArr = (arrayQueVoyAUtilizar) => arrayQueVoyAUtilizar[randomNumberGenerator(arrayQueVoyAUtilizar)]

const what = ['pepe', 'lola', 'cucaracha']


console.log(what[0])
what.forEach((el, i)=> what[i])

console.log(randomNumberGenerator(what))
console.log(getRandomValueFromArr(what))