var movie  = {
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