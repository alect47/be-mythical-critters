class Direwolf {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if ((stark.location === this.home) && this.starksToProtect.length < 2) {
      stark.safe = true;
      this.starksToProtect.push(stark)
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    var newGroup = this.starksToProtect.filter(person => person !== stark)
    this.starksToProtect = newGroup
    stark.safe = false
  }

}
module.exports = Direwolf;
