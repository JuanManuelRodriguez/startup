


function movie(){
    this.attributes = [];
}
movie.prototype = {
        
        play : function(){
            console.log("Now playing "+this.get("title"));
        },
 
        stop :function(){
            console.log("Now sttoped  "+this.get("title"));
        },
        set :function(key, value){
             this.attributes[key]=value;
        },
        get :function(key){
            return this.attributes[key];
        }
}
 


module.exports = movie;

var StarTrek = new movie();
StarTrek.set("title","Star Trek");
StarTrek.set("genre","Sci-fi");
StarTrek.play();
StarTrek.stop();