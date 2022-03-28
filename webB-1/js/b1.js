$(document).ready(function(){
    var px = $("#slide").width();
    var br = -1;
    setInterval(function(){
        $("#slide ul").animate({"marginLeft":px*br},400,function(){
            $(this).find("li").eq(0).appendTo($(this));
            $(this).css("margin-left",0)
        });

    },3000)

    $(".tabbox  h3").click(function(){
        $(".tabbox > div").removeClass('on')
        $(this).parent().addClass('on');
    })
    
    $("#trigger").click(function(){
        $("#modal").removeClass('d-none');
    })

    $("#modal button").click(function(){
        $("#modal").addClass('d-none');
    })
})