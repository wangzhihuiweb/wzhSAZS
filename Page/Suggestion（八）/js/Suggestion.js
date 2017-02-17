$( document ).ready(function(e) {
    $(".Pic a").each(function(index, element) {
        $( this ).click(function(){		
			var IMG=$( this ).html();
			$.layer({
			type: 1,
			shade: [.6, "#000", !0],
			title: false, //不显示默认标题栏
			shadeClose:true,
			border: [1, .3, "#494949", true],
			area: ['auto' , 'auto'],
			fix: false,
			page: {html: '<div class="Imagse">'+IMG+'</div>'},});			
		})
    });
	
	$(".video a").each(function(index, element) {
        $( this ).click(function(){
			$.layer({
				type: 1,
				shade:[.6,"#000",!0],
				title:false,
				shadeClose:true,
					border:[1,.3,"#494949",true],
					area:['800px','500px'],
					page:{html:"<object id='video' classid='' style='width:800x;height:500px;border:0px;'><param name='ShowDisplay' value='0'><param name='ShowControls' value='1'><param name='AutoStart' value='1'><param name='AutoRewind' value='0'><param name='PlayCount' value='0'><param name='Appearance value='0 value='''><param name='BorderStyle value='0 value='''><param name='MovieWindowHeight' value='500'><param name='MovieWindowWidth' value='800'><param name='FileName' value=''><embed width='800' height='500' border='0' showdisplay='0' showcontrols='1' autostart='1' autorewind='0' playcount='0' moviewindowheight='500' moviewindowwidth='800' filename='http://www.tudou.com/v/88lW7VVk68g/&resourceId=0_04_05_99/v.swf' src='http://www.tudou.com/v/88lW7VVk68g/&resourceId=0_04_05_99/v.swf'> </embed></object>"}
			})	
		})
    });

});