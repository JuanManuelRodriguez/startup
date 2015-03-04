var Jquery = require('./jquery-2.1.3');
var movie  = require('./MovieExercise7');

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