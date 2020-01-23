$(document).ready(function(){
    var light = false;
    var dialogEnable = false;


    $(".door-1").click(function(){
        
        $.get("corridor-1.php", function (data) {
            $('.room').html(data);
        })

    })

    $(".lamp").click(function(){
        if (light == false ) {
            light = true;
            $(".room").css("opacity", "25%");     
        } else {
            light = false;
            $(".room").css("opacity", "100%");
        }
    })

    $(".chest").click(function(){
        $(".dialog").css("display", "block");
        $(".dialog").html("No I've just knick-knack in my chest!");
        dialogEnable = true;
        $(".fullscreen").css("display", "block");

    })

    $(".wardrobe").click(function(){
        $(".dialog").css("display", "block");
        $(".dialog").html("No I've just clothes in my wardrobe!");
        dialogEnable = true;
        $(".fullscreen").css("display", "block");

    })

    $(".bed").click(function(){
        $(".dialog").css("display", "block");
        $(".dialog").html("I don't want to sleep!");
        dialogEnable = true;
        $(".fullscreen").css("display", "block");

    })

    $(".box").click(function(){
        $(".dialog").css("display", "block");
        $(".dialog").html("It's my dirty linen!");
        dialogEnable = true;
        $(".fullscreen").css("display", "block");

    })

    $(".shoes").click(function(){
        $(".dialog").css("display", "block");
        dialogEnable = true;
        $(".fullscreen").css("display", "block");
            $(".dialog").html("I've already my shoes!");


    })
    
    

    $(".fullscreen").click(function(){
        if(dialogEnable == true){
            $(".dialog").css("display", "none");
        }
        $(".fullscreen").css("display", "none");

    })
})