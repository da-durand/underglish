$(document).ready(function(){

    $(".door-1").click(function(){
        $.get("bedroom1v2.php", function (data) {
            $('.room').html(data);
        })
    })
    
    if($(".corridor-1").css("background-position", "left")){
        $(".center").css("display", "none");
        $(".right").css("display", "none");
    }
    else if ($(".corridor-1").css("background-position", "center")){
        $(".left").css("display", "none");
        $(".right").css("display", "none");
    }
    else if ($(".corridor-1").css("background-position", "right")){
        $(".left").css("display", "none");
        $(".center").css("display", "none");
    }
    
    $(".left.to-right").click(function () {
        $(".corridor-1").css("background-position", "center");
        $(".left").css("display", "none");
        $(".right").css("display", "none");
        $(".center").css("display", "block");

    })

    $(".center.to-right").click(function () {
        $(".corridor-1").css("background-position", "right");
        $(".center").css("display", "none");
        $(".left").css("display", "none");
        $(".right").css("display", "block");

    })

    $(".center.to-left").click(function () {
        $(".corridor-1").css("background-position", "left");
        $(".center").css("display", "none");
        $(".left").css("display", "block");
        $(".right").css("display", "none");

    })

    $(".right.to-left").click(function () {
        $(".corridor-1").css("background-position", "center");
        $(".center").css("display", "block");
        $(".right").css("display", "none");
        $(".left").css("display", "none");

    })

})