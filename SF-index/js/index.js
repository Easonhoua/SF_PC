   $(function(){
   	$('.header-del').click(function(){
   		$('.header-ad').css('display','none')
   	});

   	$('.header-navl').mouseover(function(){
   		$('#icon_01').html('&#xe660;')
   		$('.citylist').css('display','block')
   	})
   	$('.header-navl').mouseout(function(){
   		$('#icon_01').html('&#xe6ac;')
   		$('.citylist').css('display','none')
   	})

   	$('.wdyx').mouseover(function(){
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

   	$('.helptop').mouseover(function(){
   		$('#icon_04').html('&#xe660;')
   		$('.help').css('display','block')
   	}).mouseout(function(){
   		$('#icon_04').html('&#xe6ac;')
   		$('.help').css('display','none')
   	})

   	$('.cityDel').click(function () {
   		$('.citylist').css('display','none')
   	})

   	//轮播图效果
   	var count=1;
   	var timer=setInterval(bannerMove,2000);


   	function bannerMove(){
   		count++;
   		moveAction();
   		// console.log(count);
   	};
   	function moveAction(){
   		$(".bannerClass_center").mouseenter(function(){
   			clearInterval(timer);
   		})

   		$(".bannerClass_center").mouseleave(function(){
   			clearInterval(timer);
   			timer=setInterval(bannerMove,2000);
   		})
   //		console.log(count);
   		if(count==0){
   			$('.bannerList').css('left','-9000')
   			count=8;
   		}
   		if(count==9){
   			$('.bannerList').css('left','0')
   			count=1;
   		}
   		$('.bannerList').animate({left:-1000*count})
   		$('.numList li').removeClass();
   		$('.numList li').eq(count-1).addClass('select')
   		// alert(1)
   	}

   	//点击小序号切换轮播图
   	$('.numList li').click(function(){
   		$(this).addClass('select').siblings().removeClass();
   		count=$(this).index();
// 		console.log(count+1)
   		$('.bannerList').animate({left:-1000*(count+1)},1000)

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

   	//回到顶部效果
   	$('.aside ul .goTop').click(function () {
   		$('body,html').animate({scrollTop:0},300)
   	})

	
//	购物车划入画出

	$('.bestGoods_classl').find("li").mouseenter(function(){
		$(this).find(".hidegobuy").css({
			bottom:0,
			display:"block",
		}).animate({bottom:"20px"})
	}).mouseleave(function(){
		$(this).find(".hidegobuy").fadeOut()
	})
	
	$('.fruit_classbC').find("li").mouseenter(function(){
		$(this).find(".hidegobuyfruit").css({
			bottom:48,
			display:"block",
		}).fadeIn()
	}).mouseleave(function(){
		$(this).find(".hidegobuyfruit").fadeOut()
	})
	
	
	
	$('.seafood_classbC').find("li").mouseenter(function(){
		$(this).find(".hidegobuysea").css({
			bottom:48,
			display:"block",
		}).fadeIn()
	}).mouseleave(function(){
		$(this).find(".hidegobuysea").fadeOut()
	})
	
	
	
	$('.header-navrspan').find('a').innerHTML=location.href.split("?")[1];
	
		console.log(location.href.split("?")[1])
		
		
   })
