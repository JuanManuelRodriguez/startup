// The Observer
function Observer(){
    this.update = function(argument){
        console.log(argument);
    };
}

function ObserverList(){
    this.observerList = [];
}
ObserverList.prototype.add = function( obj ){
    return this.observerList.push( obj );
};

ObserverList.prototype.count = function(){
    return this.observerList.length;
};

ObserverList.prototype.get = function( index ){
    if( index > -1 && index < this.observerList.length ){
        return this.observerList[ index ];
    }
};

ObserverList.prototype.indexOf = function( obj, startIndex ){
    var i = startIndex;

    while( i < this.observerList.length ){
        if( this.observerList[i] === obj ){
            return i;
        }
        i++;
    }

    return -1;
};

ObserverList.prototype.removeAt = function( index ){
    this.observerList.splice( index, 1 );
};

function Movies(){
    this.attributes = {};
    this.observers = new ObserverList();
}

Movies.prototype = {
    play : function (){
        this.notify("notify play");
        console.log("Playing "+this.attributes["title"]);
    },
    stop : function (){
        this.notify("notify stop");
        console.log("Stopped "+this.attributes["title"]);
    },
    set : function(key,value){
        this.attributes[key]=value;
    },
    get : function(key){
        return this.attributes[key];
    },
    addObserver : function( observer ){
        this.observers.add( observer );
    },
    removeObserver : function( observer ){
        this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
    },
    notify : function (argument) {
        var observerCount = this.observers.count();
        for(var i=0; i < observerCount; i++){
            this.observers.get(i).update( argument );
        }
    }
};

var observer = new Observer();
function DownloadableMovie (){
    this.downloadMethod = "Torrent";
    this.getDownloadMethod = function(){console.log(this.downloadMethod)};
}
DownloadableMovie.prototype = new Movies();

//-----------------------------exercise 9 -----------------------------------------
//Create a mixin object called Social with the methods: share(friendName) and like().
var Social = {
    share:function(friendName){
        var name = friendName;
        console.log("Sharing "+this.attributes["title"]+" with "+name);
    },
    like:function(){}
}
//----------------------------end of exercise 9 -----------------------------------

//----------------------------exercise 10 -----------------------------------------
//Apply the mixin to Movie object and play with the console output.
function extend(destination, source) {
  for (var methodName in source) {
    if (!destination.hasOwnProperty(methodName)) {
      destination[methodName] = source[methodName];
    }
  }
  return destination; 
}

extend(Movies.prototype,Social);
//-------------------------end of exercise 10 -------------------------------------

var movie = new DownloadableMovie();
/*movie.addObserver(observer);
movie.set("title","Fury");
movie.play();
movie.stop();
movie.getDownloadMethod();
movie.share("V. Rivas");*/

module.exports = Movies;