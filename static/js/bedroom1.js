$(document).ready(function(){
    var light = false;
    var dialogEnable = false;
    var shoes = false;

    $(".door-1").click(function(){
        if (shoes == false) {
            $(".dialog").css("display", "block");
            $(".dialog").html("I need my shoes to leave my room");
            dialogEnable = true;
            $(".fullscreen").css("display", "block");
        } else {
            $('.container-level').html($.get("couloir_maison.php", function () {
                
            }))
        }

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
        if (shoes == false) {
            $(".dialog").html("Yes I'm ready to go!");
            shoes = true;
        } else {
            $(".dialog").html("I've already my shoes!");
        }


    })
    
    

    $(".fullscreen").click(function(){
        if(dialogEnable == true){
            $(".dialog").css("display", "none");
        }
        $(".fullscreen").css("display", "none");

    })
})