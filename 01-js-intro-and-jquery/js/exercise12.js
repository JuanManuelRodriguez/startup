
$(document).ready(function() {
    $("#callSpotify").on("click", function () {
        $("#results").html("");
        $.getJSON('https://api.spotify.com/v1/search', {q: $("#artist").val(), type: 'album'}, function (result) {
            console.log(result); 
            $("#title").text($("#artist").val() + " Albums");
            $.each(result.albums.items, function (i, band) {
                var article = $("<article/>");
                var h3 = $("<h3>" + band.name + "</h3>");
                var div = $("<div/>");
                var img = $("<img/>").attr("width", band.images[2].width).attr("src", band.images[2].url).attr("height", band.images[2].height);
                div.append(img);
                var p = $("<p/>");
                p.html("<a href='" + band.href + "'>Link To Spotify</a>");
                div.append(p.clone());
                p.html(band.type);
                div.append(p.clone());
                article.append(h3, [div]);
                $("#results").append(article.clone());
            });
        }).done(function(){});
       
    });
});