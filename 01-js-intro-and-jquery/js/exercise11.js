
$(document).ready(function(){
          $.getJSON('https://api.spotify.com/v1/search',{q:'Rolling Stones', type:'album'}, function (result) {
              console.log(result);
              $.each(result.albums.items,function(i,band){
                  var article =$("<article/>");
                  var h3 =$("<h3>"+ band.name +"</h3>");
                  var div = $("<div/>");
                  var img = $("<img/>").attr("width", band.images[2].width).attr("src", band.images[2].url).attr("height", band.images[2].height);
                  div.append(img);
                  var p = $("<p/>");
                  p.html("<a href='"+ band.href+"'>Link To Spotify</a>");
                  div.append(p.clone());
                  p.html(band.type);
                  div.append(p.clone());
                  /*$.each(e.images,function(i,e){  -- Sirve para agregar todas las imagenes del albun en vez de solo una -- 
                      var img = $("<img/>").attr("width", e.width).attr("src", e.url).attr("height", e.height);
                      article.append(img);
                  });*/
                  article.append(h3,[div]);
                  $("section").append(article.clone());
              });
          }).done(function(){});
});