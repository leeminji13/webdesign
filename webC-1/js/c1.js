$(document).ready(function(){
    var count = "";
    var total = $("#slide li").length;

    setInterval(function(){
        count++
        count%= total
        $("#slide li").removeClass('show')
        $("#slide li").eq(count).addClass('show')
    },3000)

    $("#tabbox h3").click(function(){
        $("#tabbox > div").removeClass('on')
        $(this).parent().addClass('on')
    })
    $("#trigger").click(function(){
        $("#modal").removeClass('d-none')
    })



    $("#trigger").click(function(){
        $("#modal").removeClass('d-none')
        $(".bg").addClass('black')
    })
    $("#modal button").click(function(){
        $("#modal").addClass('d-none')
        $(".bg").removeClass('black')
    })
    
})