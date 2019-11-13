class Sphinx {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name = null) {
    this.name = name;
    this.riddles = [];
    this.heroesEaten = 0;
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
      let oldRiddlesLength = this.riddles.length
      let newRiddles = this.riddles.filter(riddle => riddle.answer != solution);
      this.riddles = newRiddles;
      if (this.riddles.length == oldRiddlesLength) {
        this.heroesEaten++;
      }
      else if (this.riddles.length == 0) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${solution}"???`;
      }
      else {
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      }
  }

}
module.exports = Sphinx;
