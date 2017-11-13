/**
 * Created by julia on 11/5/17.
 */

// classical inheritance

// prototype
// inheritance

     "use strict";

var Person = function() {
    // class

    this.name = name;
}

Person.prototype = {}; //

Person.prototype.sayName = function(){
    console.log("Hi my name is " + this.name)
}

Person.prototype.shotName = function () {

}

var john = new Person("john"); // instanse
var bobby = new Person("bobby");


john.sayName();
bobby.sayName();


// this is module, constructor
var Friend = function(name) {
    Person.super_.call(this, name);
}

inherits(Friend, Person);

var julia = new Friend("julia");
julia.sayname();


var Musician = function(name, instrument) {
    Person.super_.call(this, name);
}


julia.getInstrument

Musician.prototype.shoutName = function () {

}

// https://www.youtube.com/watch?v=sWOXYDBbz0g
delete

    https://github.com/nodejs/node-v0.x-archive/blob/master/lib/util.js#L634-L644

// prototypal better pattern in differen way

//classical before
// function Person() {
//
// }
// var will = new Person();

var human = {
    species: "human",
    saySpecies: function(){
        console.log(this.)
    }
}

var musician = Object.create(human);
musician.pla
