$( document ).ready(function(e) {
    $(".Small ul li").click(function(){
		var index = $( this ).index();
		var W = $(".Big ul li:first").width();
		$( this ).addClass("light").siblings().removeClass("light");
		$(".Big ul").stop().animate({ "marginLeft": -W * index },"fast");
	});
	
});