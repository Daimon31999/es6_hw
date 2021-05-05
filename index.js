// const helloWorldFromModule = require('./module')

// utility function to print in html and console
const print = (str) => {
  console.log(str)
  if (typeof str === 'object') {
    str = JSON.stringify(str)
  }
  document.getElementById('result').innerHTML += '<p>' + str + '</p>'
}
// utility function to clear from html and console
const clear = () => {
  console.clear()
  document.getElementById('result').innerHTML = ''
}

// ********************************
// ************** №1 **************
// ********************************
/* Classes

- define class “Animal” with an argument “name”, set this argument to  property “name”.

- define class “Dog” which extend  class “Animal”.

- “Dog” class will accept an argument name and will set this argument to the parent class “Animal”

- on creating “Dog” instance set a property “created” with the current date.

- create a “Dog” instance and show in console the name of this instance  */
class Animal {
  constructor(name) {
    this.name = name
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now()
  }
}

const handleNumberOne = () => {
  clear()
  const dog = new Dog('scooby doo')
  print(dog.name)
}

// ********************************
// ************** №2 **************
// ********************************
/* Async/Await

- Draw a button and add functionalities:

- on click button, load data from a public api

- Ex: (https://swapi.dev/api/people/)

- use async/await for async request

- display in console the loaded data

  */

const createButtonInElementWithId = (id = 'result', text = 'button') => {
  let button = document.createElement('button') // create button
  button.innerHTML = text
  button.className += 'border border-black bg-white color-black px-4 rounded' // change style
  document.getElementById(id).appendChild(button)
  return button
}
const getDataFrom = async (url = 'https://swapi.dev/api/people/') => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const handleNumberTwo = () => {
  clear()
  const button = createButtonInElementWithId('result', 'load data')
  button.onclick = () =>
    getDataFrom('https://swapi.dev/api/people/').then((result) => print(result))
}

// ********************************
// ************** №3 **************
// ********************************
/* 
Dynamic imports 

- create a module which  a function,
by calling this function you will show an alert with the text: “Hello World”. 

- draw a button and add functionalities 

- on click button, load the created module 

- after load, call the function from module  */
// import helloWorldFromModule from './module.js'

const handleNumberThree = () => {
  clear()
  const button = createButtonInElementWithId('result', 'load and call module')
  button.onclick = async () => {
    let { default: helloWorldFromModule } = await import('./module.js')
    helloWorldFromModule()
  }
}
