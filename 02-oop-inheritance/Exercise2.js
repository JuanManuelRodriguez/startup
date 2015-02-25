var Movie  = {
    attributes : {},
    play: function () {
        console.log(this.attributes["title"]);
    },
    stop: function () {},
    get: function (key) {
        return this.attributes[key];
    },
    set: function (key, value) {
        this.attributes[key] = value;
    }
};

var fury = Movie;
fury.set("title","fury");
fury.play();
var bigHero6 = Movie;
bigHero6.set("title","big hero 6");
bigHero6.play();
