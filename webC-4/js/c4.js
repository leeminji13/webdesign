$(document).ready(function(){
    var px = $(".slide").height();
    var dir = -1
    setInterval(function(){
        $(".slide ul").animate({'marginTop':px*dir},400,function(){
            $(this).find('li').eq(0).appendTo($(this));
            $(this).css('margin-top',0);
        });
    },3000);
    $("#trigger").click(function(){
        $("#modal").removeClass('d-none');
        $(".bg").addClass('show');
    });
    $("#modal button").click(function(){
        $("#modal").addClass('d-none');
        $(".bg").removeClass('show');
    });
});