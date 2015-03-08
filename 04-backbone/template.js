var movie = {urlPage:"The best Movies.com", title: "Pulp Fiction", duration:"154min",year:"1994",genres:["drama","action","thriller"],description:"The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",director:"Quentin Tarantino",stars:["Uma Thurman","Samuel L. jackson","John Travolta"]};
var movieTemplate =$("#movie-template").html();
var compiledMovie = Handlebars.compile(movieTemplate);
$("#container").append(compiledMovie(movie));