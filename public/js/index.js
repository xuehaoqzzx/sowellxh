$(document).ready(function(){
	//go top按钮处理
	$('.top_a').hide();
	 $(function(){
            $(window).scroll(function(){
                if($(this).scrollTop()>1){//当window的scrolltop距离大于1时，go to top按钮淡出，反之淡入
                    $(".top_a").fadeIn();
                } else {
                    $(".top_a").fadeOut();
                }
            });
			
        });
	
	$('.top_a a').click(function(){
		$('html,body').animate({scrollTop:0},'slow');
	});
	
	var t=$(".nav1 ul li").eq($(".selected").index());
	//alert(t);

	$(".nav1 ul li").mouseover(function(){
		$(this).addClass('selected').siblings().removeClass();
	})
	/*$(".nav1 ul li").hover(function(){
		$(this).addClass('selected');
	},function(){
		$(this).removeClass('selected');
		//t.addClass('selected');
	});*/

})

function tabmove(num){
	for (var i=1;i<4;i++)
		{
			if(i==num){
				get_id('tab' + i).style.display='';
			}else{
				get_id('tab' + i).style.display='none';
			}
		}

}

function get_id(id){
	return document.getElementById(id);
}

