//搜索框高光流动效果
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