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

function Movie(){
    this.attributes = {};
    this.observers = new ObserverList();
}

Movie.prototype = {
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
DownloadableMovie.prototype = new Movie();

var movies = new DownloadableMovie();
movies.addObserver(observer);
movies.set("title","Fury");
movies.play();
movies.stop();
movies.getDownloadMethod();