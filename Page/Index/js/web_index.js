$( document ).ready(function(e) {
	 Ascend()
	 $( ".Logo").animate({ top: "-100px", opacity: "0" }).stop(false, true).animate({ top: "0px", opacity: "1" },1000);
	//追溯信搜索框出现
		$( ".Seek_L").css({ left: "-100px", opacity: "0" }).stop(false, true).animate({ left: "0px", opacity: "1" },2000);
		$( ".Seek_R").css({ right: "-100px", opacity: "0" }).stop(false, true).animate({ right: "0px", opacity: "1" },2000);
});

//追溯信息
function Ascend(){
	$( ".L_one" ).fadeIn(3000)
	$( ".L_two").css({ right: "-100px", opacity: "0" }).stop(false, true).animate({ right: "0px", opacity: "1" },2000);
	$( ".L_four").css({ left: "-50px", opacity: "0" }).stop(false, true).animate({ left: "0px", opacity: "1" },2000);
}

/*$.fn.SHOW=function(d){
	var c={
		top1:'-100px',
		top2:'0px',
		left1:'-100px',
		left2:'0px',
		right1:'-100px',
		right2:'0px',
		speed:1000,
	};
	var F = $.extend(c,d);
	//var Ff=$(F.Clname);
	$( this ).animate({ top: F.top1, opacity: "0" }).stop(false, true).animate({ top: F.top2, opacity: "1" },F.speed);
	$( this ).animate({ left: F.left1, opacity: "0" }).stop(false, true).animate({ left: F.left2, opacity: "1" },F.speed);
	$( this ).animate({ right: F.right1, opacity: "0" }).stop(false, true).animate({ right: F.right2, opacity: "1" },F.speed);
}

$( document ).ready(function(e) {
    $(".Logo").SHOW({
		top1:'-100px',
		top2:'0px',	
		speed:1000,
	});
	$(".Seek_L").SHOW({
		left1:'-100px',
		left2:'0px',
		speed:2000,
				
	});
	$(".Seek_R").SHOW({
		right1:'-100px',
		right2:'0px',
		speed:1000,
	});
});
*/






//搜索框高光效果
$.fn.Lights=function(b){
	var a={
		Light_L:'.light_L',
		Light_R:'.light_R',
		Left_1:'643px',
		Left_2:'0px',
		speed:1500,		
	};
	var ops = $.extend(a,b);
	$( this ).find(ops.Light_L).animate({left:ops.Left_1},ops.speed).animate({left:ops.Left_2},ops.speed)
	$( this ).find(ops.Light_R).animate({right:ops.Left_1},ops.speed).animate({right:ops.Left_2},ops.speed)	
}






