function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return "My name is " + this.name +". I am " + this.age + " years old.";
}

function Student(name, age, stuClass) {
    Person.call(this, name, age);
    this.class = stuClass;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.introduce = function(){
    return "I am a Student. I am at Class " + this.stuClass + ".";
}


module.exports = Person;

