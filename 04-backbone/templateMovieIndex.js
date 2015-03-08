var movies = [{title: "Pulp Fiction", duration:"154min",year:"1994",genres:["drama","action","thriller"],description:"The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",director:"Quentin Tarantino",stars:["Uma Thurman","Samuel L. jackson","John Travolta"]},

            {title: "Star Wars: Episode V - The Empire Strikes Back", duration:"124min",year:"1980",genres:["adventure","action","fantasy"],description:"After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.",director:"Irvin Kershner",stars:["Mark Hamill"," Harrison Ford"," Carrie Fisher"]},

            {title: "The Hunger Games", duration:"142min",year:"2012",genres:["adventure","Sci-fi"],description:"Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games, a televised fight to the death in which two teenagers from each of the twelve Districts of Panem are chosen at random to compete.",director:" Gary Ross",stars:[" Jennifer Lawrence"," Josh Hutcherson"," Liam Hemsworth"]}];

var movieIndexTemplate = $("#movie-index").html();
var compiledMovieIndex = Handlebars.compile(movieIndexTemplate);
$("#container").html(compiledMovieIndex(movies));