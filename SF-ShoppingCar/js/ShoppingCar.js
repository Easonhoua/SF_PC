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
	
	
	

   	var oNum=1
   	$('.jiafa').click(function(){
   		oNum++;
   		$('.buyNum').val(oNum);
   		
   	})
   	
   	$('.jianfa').click(function(){
   		oNum--;
   		if(oNum <= 1){
// 			$('.buyNum').val(1);
   			oNum = 1
   		}
   		$('.buyNum').val(oNum);
   		
   	})
   	
   	
   	
   	$('.removeThis').click(function(){
   		$('.buylist').fadeOut();
   	})
   	
 
   	

	
	
	
})