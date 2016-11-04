function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}


var p = new Person('sp')
console.log(p.greet('bs'))
