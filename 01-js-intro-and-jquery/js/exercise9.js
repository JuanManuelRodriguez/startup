$(document).ready(function(){
    $("#exercise7button").on("click",function(){
        $.getJSON('http://bootcamp.aws.af.cm/welcome/'+$('#Alias').val(),function(result){
            (result.error==undefined)?$("div").html(result.response).css("color","black"):$("div").html(result.error).css("color","red");
        });
    });
});