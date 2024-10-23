lass Animal {
  constructor(species) {
    this._species = species; 
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
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
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
