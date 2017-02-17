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
			fix: true,
			page: {html: '<div class="Imagse">'+IMG+'</div>'},});			
		})
    });

});