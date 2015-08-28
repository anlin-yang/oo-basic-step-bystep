function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return "My name is Tom. I am 21 years old.";
}

module.exports = Person;