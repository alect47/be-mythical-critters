class Sphinx {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name = null) {
    this.name = name;
    this.riddles = [];
  }

  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle)
    }
    else {
      this.riddles.shift();
      this.riddles.push(riddle);
    }
  }

  attemptAnswer(solution) {
      let newRiddles = this.riddles.filter(riddle => riddle.answer != solution)
      this.riddles = newRiddles
  }

}
module.exports = Sphinx;
