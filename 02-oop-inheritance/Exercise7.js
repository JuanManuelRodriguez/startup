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


var Movie = (function (){
	this.attributes = {};
    this.observers = new ObserverList();
    return {
    	play : function (){
		      this.notify("notify play");
		      console.log("Playing "+attributes["title"]);
      },
      stop : function (){
          this.notify("notify stop");
          console.log("Stopped "+attributes["title"]);
      },
      set : function(key,value){
          attributes[key]=value;
      },
      get : function(key){
          return attributes[key];
      },
      addObserver : function( observer ){
          observers.add( observer );
      },
      removeObserver : function( observer ){
          observers.removeAt( observers.indexOf( observer, 0 ) );
      },
      notify : function (argument) {
          var observerCount = observers.count();
          for(var i=0; i < observerCount; i++){
              observers.get(i).update( argument );
          }
      }
    }
})();

var observer = new Observer();
Movie.addObserver(observer);
Movie.set("title","Fury");
console.log(Movie.get("title"));
Movie.play();
Movie.stop();