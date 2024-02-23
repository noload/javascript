//tradition way
function Dog() {
  this.name = "";
}

Dog.prototype.setName = function (name) {
  this.name = name;
};

Dog.prototype.getName = function () {
  console.log(this.name);
};

const shefard = new Dog();
shefard.setName("German Shefard");
shefard.getName();

//After ES6
class Dog1 {
  name = "";

  setName(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

const labrador = new Dog1();
labrador.setName("labrador");
labrador.getName();
