
$(document).ready(function(){
    
    $.getJSON('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=3&format=json',function(baconGoodness){
        if(baconGoodness && baconGoodness.length >0)
            {
                $("#demo").html('');
                for( var i = 0; i<baconGoodness.length; i++)
                    $("#demo").append('<p>' + baconGoodness[i] +'</p>');
                $("#demo").show();
            }
    });
});