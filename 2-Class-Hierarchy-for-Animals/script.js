class Animal {
  constructor(name, age, species) {
    this.name = name
    this.age = age
    this.species = species
  }
  // Your code here
  eat() {
    return console.log(`The ${this.species} named ${this.name} is eating.`)
  }
  sleep() {
    return console.log(`The ${this.species} named ${this.name} is sleeping.`)
  }
  reproduce() {
    return console.log(`The ${this.species} named ${this.name} is reproducing.`)
  }
}

class Dog extends Animal {
  constructor(name, age, species) {
    super()
    this.name = name
    this.age = age
    this.species = species
  }

  breed = 'dog'
  
  bark() {
    console.log(`The ${this.breed} named ${this.name} is barking.`)
  }
}

class Cat extends Animal {
  constructor(name, age, species) {
    super()
    this.name = name
    this.age = age
    this.species = species
  }

  breed = 'cat'
  
  meow() {
    console.log(`The ${this.breed} named ${this.name} is meowing.`)
  }
}

class Bird extends Animal {
  constructor(name, age, species) {
    super()
    this.name = name
    this.age = age
    this.species = species
  }

  breed = 'bird'
  
  fly() {
    console.log(`The ${this.breed} named ${this.name} is flying.`)
  }
}

class Fish extends Animal {
  constructor(name, age, species) {
    super()
    this.name = name
    this.age = age
    this.species = species
  }

  breed = 'fish'
  
  swim() {
    console.log(`The ${this.breed} named ${this.name} is swimming.`)
  }
}

// Create the subclasses here

// Test Cases - Uncomment the next line to run the test cases
/*
// Create some instances of the Animal subclasses:
const fido = new Dog("Fido", 5, "Golden Retriever");
const felix = new Cat("Felix", 3, "Tabby");
const tweety = new Bird("Tweety", 1, "Canary");
const nemo = new Fish("Nemo", 2, "Clownfish");

// Call the methods on the instances:
fido.eat(); // Should log 'The Golden Retriever named Fido is eating.'
fido.bark(); // Should log 'The dog named Fido is barking.'

felix.sleep(); // Should log 'The Tabby named Felix is sleeping.'
felix.meow(); // Should log 'The cat named Felix is meowing.'

tweety.reproduce(); // Should log 'The Canary named Tweety is reproducing.'
tweety.fly(); // Should log 'The bird named Tweety is flying.'

nemo.eat(); // Should log 'The Clownfish named Nemo is eating.'
nemo.swim(); // Should log 'The fish named Nemo is swimming.'
*/

const fido = new Dog("Fido", 5, "Golden Retriever");
fido.eat();
fido.bark();

const felix = new Cat("Felix", 3, "Tabby");
felix.sleep(); // Should log 'The Tabby named Felix is sleeping.'
felix.meow();

const tweety = new Bird("Tweety", 1, "Canary");
tweety.reproduce(); // Should log 'The Canary named Tweety is reproducing.'
tweety.fly(); // Should log 'The bird named Tweety is flying.'

const nemo = new Fish("Nemo", 2, "Clownfish");
nemo.eat(); // Should log 'The Clownfish named Nemo is eating.'
nemo.swim(); // Should log 'The fish named Nemo is swimming.'