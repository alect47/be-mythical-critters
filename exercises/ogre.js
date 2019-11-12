class Ogre {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, home = 'Swamp') {
    this.name = name;
    this.home = home;
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter++
    if (human.noticesOgre()) {
      this.swingAt()
    }
    if (human.encounterCounter > 1) {
      human.knockedOut = true;
    }
  }

  swingAt(human) {
    this.swings++
  }

  apologize(human) {
    human.knockedOut = false;
  }

}
module.exports = Ogre;
