//Add name:string, a quotes:array properties, and a speak() method to Director; calling speak() will return director’s quotes.
var movie = require('./MovieExercise7');

function Director(nameDir){
    this.name= nameDir;
    this.quotes = [];
}


Director.prototype ={
        
    getName :function(){
        return this.name;
    },
    set: function(DirectorSay){
        this.quotes.push(DirectorSay);
    },
    speak: function(){
        console.log(this.name+" says: "+this.quotes) ;
     
    }
}
 
module.exports = Director;

var alien = new movie();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set(['Cast is everything.', 'Do what ...']);
alien.set("director", ridleyScott);
alien.get("director").speak();