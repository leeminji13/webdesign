$(document).ready(function(){
    // var px = $("#slide").height();
    // var dr = -1;
    var count = 0;
    var total = $("#slide li").length;
    setInterval(function(){
        count++
        count%= total
        // $("#slide > ul").animate({"marginTop":px*dr},400,function(){
        //     $(this).find('li').eq(0).appendTo($(this))
        //     $(this).css("margin-top",0);
        // })
        $("#slide li").removeClass('pop');
        $("#slide li").eq(count).addClass('pop');

    },3000)

    $("#trigger").click(function(){
        $("#modal").removeClass('d-none');
        $(".bg").addClass('show');
    })
    $("#modal button").click(function(){
        $("#modal").addClass('d-none');
        $(".bg").removeClass('show');
    })

})