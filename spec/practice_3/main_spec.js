"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var Person = require("../../src/practice_3.js");
var expect = chai.expect;
chai.use(sinonChai);

describe('practice-1-spec', function() {

    it('should have field name and age', function() {
        var thePerson = new Person('Anlin', 26);

        expect(thePerson.name).to.equal('Anlin');
        expect(thePerson.age).equal(26);
    });

    it('should have a method introduce, introduce person with name and age.', function() {
        var thePerson = new Person('Anlin', 26);

        var introduce = thePerson.introduce();
        expect(introduce).equal("My name is Anlin. I am 26 years old.");
    });

    it('test student', function() {
        var thePerson = new Person('Anlin', 26);
        var the

        expect(thePerson.name).to.equal('Anlin');
        expect(thePerson.age).equal(26);
    });
});