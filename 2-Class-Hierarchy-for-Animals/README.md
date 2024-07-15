# 2. Class Hierarchy for Animals

## Instructions

1. Create a superclass called `Animal` that has the following properties and methods:
   - `name` - The name of the animal.
   - `age` - The age of the animal.
   - `species` - The species of the animal.
   - `eat` - A method that says `The <species> named <name> is eating.`.
   - `sleep` - A method that says `The <species> named <name> is sleeping.`.
   - `reproduce` - A method that says `The <species> named <name> is reproducing.`.
2. Create the following subclasses that **inherit** from the `Animal` class:
   - `Dog`
   - `Cat`
   - `Bird`
   - `Fish`
3. Each subclass should have its own unique properties and methods. For example, the `Dog` class should have a `bark` method that says `The dog named <name> is barking.`, and the `Bird` class should have a `fly` method that says `The bird named <name> is flying.`.

**Notes:**

- For subclasses, you are free to choose the properties and methods you want to add.

**Example:**

```javascript
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
```

**Note that you are free to choose the properties and methods you want to add to the subclasses. The example above is just an example.**

**Helpful Links:**

- [Classes | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Inheritance and the prototype chain | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
