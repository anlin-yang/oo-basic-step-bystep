"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Obj = require("../../src/practice_8.js");
var expect = chai.expect;
chai.use(sinonChai);

describe('practice-8-spec', function() {

    it('student should have field name and age and method introduce', function() {
        var theClass = new Obj.Class(2);
        var thePerson = new Obj.Person('Anlin', 26);
        var theStudent = new Obj.Student('Anlin', 26, theClass);

        var introduce = theStudent.introduce();
        expect(introduce).equal("My name is Anlin. I am 26 years old. I am a Student. I am at Class 2.");
    });

    it('teacher should have field name and age and method introduce teach the Class', function() {
        var theClass = new Obj.Class(2);
        var thePerson = new Obj.Person('Anlin', 26);
        var theTeacher = new Obj.Teacher('Anlin', 26, theClass);
        var introduce = theTeacher.introduce();
        expect(introduce).equal("My name is Anlin. I am 26 years old. I am a Teacher. I teach Class 2.");
    });

    it('teacher should have field name and age and method introduce shouldn`t teach Class', function() {
        var thePerson = new Obj.Person('Anlin', 26);
        var theTeacher = new Obj.Teacher('Anlin', 26);

        var introduce = theTeacher.introduce();
        expect(introduce).equal("My name is Anlin. I am 26 years old. I am a Teacher. I teach No Class.");
    });

    it('test teacher teach student.', function() {
        var theClass = new Obj.Class(2);
        var thePerson = new Obj.Person('Anlin', 26);
        var theTeacher = new Obj.Teacher('Anlin', 26, theClass);
        var theStudent = new Obj.Student('Jerry', 23, theClass);

        var introduce = theTeacher.introduceWith(theStudent);
        expect(introduce).equal("My name is Anlin. I am 26 years old. I am a Teacher. I teach Jerry.");
    });

    it('test teacher don`t teach student.', function() {
        var theClass1 = new Obj.Class(1);
        var theClass2 = new Obj.Class(2);
        var thePerson = new Obj.Person('Anlin', 26);
        var theTeacher = new Obj.Teacher('Anlin', 26, theClass1);
        var theStudent = new Obj.Student('Jerry', 23, theClass2);

        var introduce = theTeacher.introduceWith(theStudent);
        expect(introduce).equal("My name is Anlin. I am 26 years old. I am a Teacher. I don`t teach Jerry.");
    });

});