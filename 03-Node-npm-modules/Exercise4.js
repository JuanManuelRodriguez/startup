var Movie = require('./AllMovies');

function director(name){
    this.movies = [];
    this.name= name;
}


director.prototype ={
		
    addMovie:function(Movie){
        this.movies.push(Movie);
    },
    getMovies:function(){
        return this.movies;
    },
    nameDirector :function(){
        console.log("Director "+ this.name);
    }
}

var cinema = new Movie();
var RidleyScott = new director("Ridley Scott");
cinema.set("title", "Alien");
cinema.set("Director", RidleyScott);
cinema.play();
cinema.get("Director").nameDirector();