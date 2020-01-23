$(document).ready(function(){

    $(".door-1").click(function(){
        $.get("bedroom1v2.php", function (data) {
            $('.room').html(data);
        })
    })

})