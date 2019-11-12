class Centaur {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.crankyCount = 5;
    this.standing = true;
    this.layingDown = false;
  }

    doThing(phrase) {
      this.crankyCount++;
      if (this.cranky) {
        return 'NO!';
      }
      else {
        if (this.crankyCount > 2) {
          this.cranky = true
          }
      return phrase;
      }
    }
    shoot() {
      return this.doThing('Twang!!!')
    }

    run() {
      return this.doThing('Clop clop clop clop!!!')
    }

    sleep() {
      if (this.standing) {
        return 'NO!';
      }
    }

    layDown() {
      this.standing = false;
      this.layingDown = false;
    }

    layDown() {
      this.standing = false;
      this.layingDown = false;
    }

}
module.exports = Centaur;
