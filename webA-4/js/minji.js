$(document).ready(function(){
    var count = 0;
    var total = $("#slide li").length
    setInterval(function(){
        count++
        count%=total
        $("#slide li").removeClass('show');
        $("#slide li").eq(count).addClass('show')

    },3000);

    $("#trigger").click(function(){
        $("#modal").removeClass('d-none')
    })
    $("#modal button").click(function(){
        $("#modal").addClass('d-none')
    })
})