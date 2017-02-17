$( document ).ready(function(e) {
	if($( ".Nav_seek").css({ top: "-200px", opacity: "0" }).stop(false, true).animate({ top: "0px", opacity: "1" },1000)){
		 setTimeout("Nav_nav()",1000)
	}
	
	Lights();
	//$( ".nav1 a:eq(0)").addClass("light");
	$(".nav1 a" ).click(function(){
		$( this ).addClass("light").siblings().removeClass("light");	
	})
	

});
function Nav_nav(){
	$( ".Nav_nav").css({ opacity: "0" }).stop(false, true).animate({ opacity: "1" },3000);	
}
/*//搜索框高光效果
function Lights(){
	Light_L();
	setInterval("Light_L()",3000);
	Light_R();
	setInterval("Light_R()",3000);
	
	Light_L2();
	setInterval("Light_L2()",6000);
	Light_R2();
	setInterval("Light_R2()",6000);		
}
function Light_L(){
	 $(".Nav_seekC .LighT").animate({left:'600px'},1500).animate({left:'-40px'},1500)
}
function Light_R(){
	$(".Nav_seekC .LighR").animate({right:'600px'},1500).animate({right:'-40px'},1500)	
}

function Light_L2(){
	 $(".LighT2").animate({left:'910px'},3000).animate({left:'-32px'},3000)
}
function Light_R2(){
	$(".LighR2").animate({right:'910px'},3000).animate({right:'-32px'},3000)	
}*/

	/* $(".Nav_nav").Lights({
	Light_L:'.LighT2',
	Light_R:'.LighR2',
	Left_1:'910px',
	Left_2:'-32px',
	speed:1500,		 
 });
setInterval("$('.Nav_nav').Lights({Light_L:'.LighT2',Light_R:'.LighR2',Left_1:'910px',Left_2:'-32px',speed:1500,})",6000);

 $(".Nav_seekC").Lights({
	Light_L:'.LighT',
	Light_R:'.LighR',
	Left_1:'600px',
	Left_2:'-40px',
	speed:1500,		 
 });
setInterval("$('.Nav_seekC').Lights({Light_L:'.LighT',Light_R:'.LighR',Left_1:'600px',Left_2:'-40px',speed:1500,})",3000);	
	
	
	*/


	
	
	
	
	
	
	
	
	
