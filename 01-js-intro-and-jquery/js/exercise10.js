function highlightName(container){
    var nombre = container.html().replace("Welcome ","").replace("!","");
    var span = $("<span/>").text(nombre); 
    container.html(container.text().substring(0,8)); // ("Welcome ")
    container.append(span);
    container.append("!");
}

$(document).ready(function(){
    $("#exercise7button").on("click",function() {
        $.getJSON('http://bootcamp.aws.af.cm/welcome/' + $('#Alias').val(), function (result) {
            var div = $("div");
            if (result.error == undefined) {
                div.html(result.response).css("color", "black");
            } else {
                div.html(result.error).css("color", "red");
            }
        }).done(function () {
            highlightName($("div"));
        });
    });
});