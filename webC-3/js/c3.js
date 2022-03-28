$(document).ready(function(){
    var px = $(".slide").width();
    var dir = -1;
    setInterval(function(){
        $(".slide ul").animate({'marginLeft':px*dir},400,function(){
            $(this).find('li').eq(0).appendTo($(this))
            $(this).css('margin-left',0)
        })
    },3000)

    $("#trigger").click(function(){
        $("#modal").removeClass('d-none')
    })
    $("#modal button").click(function(){
        $("#modal").addClass('d-none')
    })

})