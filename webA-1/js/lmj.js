$(document).ready(function(){
    var px = $("#slider").height();
    var dr = -1;
    
    setInterval(function(){
        $("#slider ul").animate({"marginTop":px*dr},400,function(){
            $(this).find("li").eq(0).appendTo($(this));
            $(this).css("margin-top",0)
        });
    },3000)

    $(".tab h3").click(function(){
        $(".tab > div").removeClass("on")
        $(this).parent().addClass("on");
    })

    $("#popuptrigger").click(function(){
        $("#modal").removeClass("d-none")
    })
    $("#modal > button").click(function(){
        $("#modal").addClass("d-none")
    })
})