$(document).ready(function(){
    var count = 0;
    var total = $("#slider li").length;

    setInterval(function(){
        count++
        count%=total
        $("#slider li").removeClass("show");
        $("#slider li").eq(count).addClass("show")

    },3000);

    $(".tab  h3").click(function(){
        $(".tab > div").removeClass('on')
        $(this).parent().addClass('on')
    })

    $("#trigger").click(function(){
        $("#modal").removeClass('d-none')
    })
    $("#modal button").click(function(){
        $("#modal").addClass('d-none')
    })
})