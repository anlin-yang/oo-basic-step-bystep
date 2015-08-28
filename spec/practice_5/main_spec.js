"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Obj = require("../../src/practice_5.js");
var expect = chai.expect;
chai.use(sinonChai);

describe('practice-5-spec', function() {

    it('student should have field name and age and method introduce', function() {
        var thePerson = new Obj.Person('Anlin', 26);
        var theStudent = new Obj.Student('Anlin', 26, 2);

        var introduce = theStudent.introduce();
        expect(introduce).equal("My name is Anlin. I am 26 years old. I am a Student. I am at Class 2.");
    });

    it('worker should have field name and age and method introduce', function() {
        var thePerson = new Obj.Person('Anlin', 26);
        var theWorker = new Obj.Worker('Anlin', 26);

        var introduce = theWorker.introduce();
        expect(introduce).equal("My name is Anlin. I am 26 years old. I am a Worker. I have a job.");
    });
});