/**
 * Created by Administrator on 2017/6/8 0008.
 */
$(function(){
	$('.header-del').click(function(){
		$('.header-ad').css('display','none')
	});
	
	$('.header-navl-inner').mouseover(function(){
		$('#icon_01').html('&#xe660;')
		$('.citylist').css('display','block')
	})
	$('.header-navl').mouseout(function(){
		$('#icon_01').html('&#xe6ac;')
		$('.citylist').css('display','none')
	})
	
	$('.header-navr a:eq(3)').mouseover(function(){
		$('#icon_02').html('&#xe660;')
		$('.myshopping').css('display','block')
	}).mouseout(function(){
		$('#icon_02').html('&#xe6ac;')
		$('.myshopping').css('display','none')
	})
	
	$('.header-navr a:eq(4)').mouseover(function(){
		$('#icon_03').html('&#xe668;')
		
	}).mouseout(function(){
		$('#icon_03').html('&#xe683;')
		
	})
	
	$('.header-navr a:eq(5)').mouseover(function(){
		$('#icon_04').html('&#xe660;')
		$('.help').css('display','block')
	}).mouseout(function(){
		$('#icon_04').html('&#xe6ac;')
		$('.help').css('display','none')
	})
	
	$('.cityDel').click(function () {
		$('.citylist').css('display','none')
	})
	
	
	
	$('.goods_photos ul li').mouseover(function () {
		$('#imgId').attr('src','img/photob_0'+($(this).index()+1)+'.jpg')
		// console.log('url(img/magnifier_0'+($(this).index()+1)+'.jpg)')
		$('.goods_photobig').css({
			'background':'url(img/magnifier_0'+($(this).index()+1)+'.jpg)',
		})
	})
	
	
	//放大镜效果
	$('.hide').mouseenter(function () {
		$('.moveSelect').css('display','block')
		$('.goods_photobig').css('display','block')
	})
	$('.hide').mouseleave(function () {
		$('.moveSelect').css('display','none')
		$('.goods_photobig').css('display','none')
	})
	
	$('.hide').mousemove(function (e) {
		// var e=evt||event
		var left=e.offsetX-85;
		var top=e.offsetY-55;
		if(left<=0){
			left=0;
		}
		if(left>=160){
			left=160;
		}
		if(top<=0){
			top=0;
		}
		if(top>220){
			top=220;
		}
		$('.moveSelect').css({left:left,top:top})
		
		$('.goods_photobig').css({backgroundPositionX:-left*3,backgroundPositionY:-top*3})
	})
	
	
	
	
	
	
	
	   	//回到顶部按钮淡入淡出
   	$(window).scroll(function () {
   		if($(window).scrollTop()>=300){
// 			console.log($(window).scrollTop());
   			$('.goTop').css('visibility','visible');
   		}else{
   			$('.goTop').css('visibility','hidden');
   		}
   	})
   	
   	
   	$('.listClass').mouseenter(function(){
   		$('.bannerClass_left').slideToggle();
   	})
   	$('.bannerClass_left').mouseleave(function(){
   		
   		$('.bannerClass_left').slideToggle();
   	})
   	
   	
   	var num=1;
   	$('.plus').click(function(){
   		num++;
   		$('.numBox').val(num)
   		
   	})
   	$('.minus').click(function(){
   		num--;
   		if(num<=1){
   			num=1
   		}
   		$('.numBox').val(num)
   		
   	})
   	
   	
   	
   	$(window).scroll(function(){
   		console.log($(window).scrollTop());
   		if($(window).scrollTop()>=1000){
   			$('.correlation_Classr2').css({
   				'position':'fixed',
   				top:0,
   				margin:0
   			})
   		}else{
   			$('.correlation_Classr2').css({
   				'position':'relative',
   				"margin-top":"10px"
   			})
   		}
   		
   	})
   	
   	
   	
   	$('.addCar').click(function(){
   		$('.buyTips').fadeIn();
   	})
   	
   	$('.buyTips').find('a').click(function(){
   		
   		$('.buyTips').fadeOut();
   		
   	})
})