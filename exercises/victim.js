class Victim {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, alive = true) {
    this.name = name;
    this.alive = alive;
  }

}



// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Victim;
