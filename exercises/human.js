class Human {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  noticesOgre() {
    return this.encounterCounter > 0 && this.encounterCounter % 3 == 0;
  }

}
module.exports = Human;
