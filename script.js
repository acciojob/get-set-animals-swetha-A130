class Animal {
  constructor(species) {
    this._species = species; // Use underscore to denote a private property
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log("The animal makes a sound");
  }
}

class Cat extends Animal {
  // Method to purr
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  // Method to bark
  bark() {
    console.log("woof");
  }
}
const myCat = new Cat("Siamese");
console.log(myCat.species); // Output: Siamese
myCat.makeSound(); // Output: The animal makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Bulldog");
console.log(myDog.species); // Output: Bulldog
myDog.makeSound(); // Output: The animal makes a sound
myDog.bark(); // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
