// function initial:
// function Potion(name) {
//   this.name = name;

//   if (this.name === "health") {
//     this.value = Math.floor(Math.random() * 10 + 30);
//   } else {
//     this.value = Math.floor(Math.random() * 5 + 7);
//   }
// }

// module.exports = Potion;

// refactored function:
// old code, the es5 version (with the function potion name instead of class)
// function Potion(name) {
//   this.types = ["strength", "agility", "health"];
//   this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

//   if (this.name === "health") {
//     this.value = Math.floor(Math.random() * 10 + 30);
//   } else {
//     this.value = Math.floor(Math.random() * 5 + 7);
//   }
// }

class Potion {
  constructor(name) {
    this.types = ["strength", "agility", "health"];
    this.name =
      name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === "health") {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  }
}

module.exports = Potion;
