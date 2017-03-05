$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}
var div = $(".b-popup-content").children();

 // $(div).click(function() { 
 
	  // $("#popup1").hide();
	  
// });

$('html').click(function() { 
        var scrollPos = $(window).scrollTop();
        /* Скрыть окно, когда кликаем вне его области */
        $("#popup1").hide(); 
        $("html,body").css("overflow","auto");
        $('html').scrollTop(scrollPos);
    });


	
