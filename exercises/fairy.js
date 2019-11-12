class Fairy {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name, dust = 10, clothes = {dresses: ['Iris']}, disposition = 'Good natured') {
    this.name = name;
    this.dust = dust;
    this.clothes = clothes;
    this.disposition = disposition;
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust += 10;
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infant) {
    if (this.disposition == 'Vengeful') {
      this.humanWards.push(infant)
      infant.disposition = 'Malicious'
      if (this.humanWards.length == 3) {
        this.disposition ='Good natured'
      }
    }
    else {
      infant.disposition = infant.disposition
    }
    return infant;
  }

  makeDresses(flowers) {
    this.clothes.dresses.push(...flowers)
  }

}
module.exports = Fairy;
