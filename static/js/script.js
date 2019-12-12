$(document).ready(function(){

    var dialogEnable = false;
    $(".door-1").click(function(){
        $(".dialog").css("display", "block");
        dialogEnable = true;
        $(".fullscreen").css("display", "block");

    })

    $(".fullscreen").click(function(){
        if(dialogEnable == true){
            $(".dialog").css("display", "none");
        }
        $(".fullscreen").css("display", "none");

    })
})