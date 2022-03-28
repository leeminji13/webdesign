$(document).ready(function(){
    var count = "";
    var total = $("#slide li").length;
    setInterval(function(){
        count++
        count%= total
        $("#slide li").removeClass('show')
        $("#slide li").eq(count).addClass('show')

    },3000)
    $("#trigger").click(function(){
        $("#modal").removeClass('d-none')
        $(".bg").addClass('ddd')
    })
    $("#modal button").click(function(){
        $("#modal").addClass('d-none')
        $(".bg").removeClass('ddd')
    })
    
}) 