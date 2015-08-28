function Class(number) {
    this.number = number;
}


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return "My name is " + this.name +". I am " + this.age + " years old.";
}


function Student(name, age, theClass) {
    Person.apply(this, arguments);
    this.theClass = theClass;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.super_introduce = Student.prototype.introduce;

Student.prototype.introduce = function() {
    return this.super_introduce() + " I am a Student. I am at Class " +  this.theClass.number + ".";
};


function Teacher(name, age, theClass) {
    Person.apply(this, arguments);
    this.theClass = theClass;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.super_introduce = Teacher.prototype.introduce;

Teacher.prototype.introduce = function() {
    var result = this.theClass ? "Class " +  this.theClass.number + "." : "No Class.";
    return this.super_introduce() + " I am a Teacher. I teach " + result;
};

Teacher.prototype.introduceWith = function(student) {
    var result = student.theClass === this.theClass ? "teach " +  student.name + "." : "don`t teach " + student.name + ".";
    return this.super_introduce() + " I am a Teacher. I " + result;
};

module.exports = {
    Person: Person,
    Student: Student,
    Teacher: Teacher,
    Class: Class
};
