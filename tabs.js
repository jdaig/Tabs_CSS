$(document).ready(function () {
$("#tab1").css("display","block"); //utilizamos este comando para que se cargue por default el lock del tab1

$(".tabs [href= '#tab1']").click(function(){
        $("#tab1").css("display","block");
        $("#tab2").css("display","none");
        $("#tab3").css("display","none"); 

        $("li:nth-child(1)").addClass("active"); //utlizamos el .addClass para agregar la clase active
        $("li:nth-child(2)").removeClass("active"); // utilizamos el .removeClass para quitar la clase active 
        $("li:nth-child(3)").removeClass("active");

    });

// tambien podemos utilizar el nth-child para hacer referencia
$(".tabs li:nth-child(2)").click(function(){
    $("#tab2").addClass("active")
        $("#tab2").css("display","block");
        $("#tab1").css("display","none");
        $("#tab3").css("display","none");

        $("li:nth-child(2)").addClass("active");
        $("li:nth-child(1)").removeClass("active");
        $("li:nth-child(3)").removeClass("active");

    });

$(".tabs [href= '#tab3']").click(function(){
        $("#tab3").css("display","block");
        $("#tab1").css("display","none");
        $("#tab2").css("display","none"); 


        $("li:nth-child(3)").addClass("active");
        $("li:nth-child(1)").removeClass("active");
        $("li:nth-child(2)").removeClass("active");
    });

});
