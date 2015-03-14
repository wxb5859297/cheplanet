$(function(){

    $("#desc_3").hover(function() {
        $("#contact-btn").hide();
        $("#contact-info").show();
    });
    $("#desc_4").hover(function(){},function(){
        setTimeout(function(){
            $("#contact-btn").show();
            $("#contact-info").hide();
        }, 200);
    });
});
