class Werewolf {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, location = null) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

    change() {
      this.human = !this.human;
      this.wolf = !this.wolf;
      this.hungry = !this.hungry;
    }

    eat(victim) {
      if (this.hungry && this.wolf) {
        this.change();
        victim.alive = false;
        return 'YUM!';
      }
      else {
        return 'I cannot eat because I am not hungry.';
      }
    }
}
module.exports = Werewolf;
