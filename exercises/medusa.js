class Medusa {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name) {
    this.name = name;
    this.statues = [];
  }


    stare(victim) {
      if (this.statues.length < 3) {
        this.statues.push(victim);
        victim.stoned = true;
      }
      else {
      this.statues.shift().stoned = false;
        // unstoned.stoned = false;
        this.statues.push(victim);
        victim.stoned = true;
      }
    }


  says(message) {
    return `**;* ${message} *;**`;
  }
}



// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Medusa;
