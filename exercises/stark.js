class Stark {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, location = 'Winterfell') {
    this.name = name;
    this.location = location;
    this.safe = false;
  }

  houseWords() {
    if (this.safe) {
      return 'The North Remembers';
    }
    else {
      return 'Winter is Coming';
    }
  }

}
module.exports = Stark;
