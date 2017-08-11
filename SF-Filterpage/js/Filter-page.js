$(function() {

	$('.header-del').click(function() {
		$('.header-ad').css('display', 'none')
	});

	$('.header-navl-inner').mouseover(function() {
		$('#icon_01').html('&#xe660;')
		$('.citylist').css('display', 'block')
	})
	$('.header-navl').mouseout(function() {
		$('#icon_01').html('&#xe6ac;')
		$('.citylist').css('display', 'none')
	})

	$('.header-navr a:eq(3)').mouseover(function() {
		$('#icon_02').html('&#xe660;')
		$('.myshopping').css('display', 'block')
	}).mouseout(function() {
		$('#icon_02').html('&#xe6ac;')
		$('.myshopping').css('display', 'none')
	})

	$('.header-navr a:eq(4)').mouseover(function() {
		$('#icon_03').html('&#xe668;')

	}).mouseout(function() {
		$('#icon_03').html('&#xe683;')

	})

	$('.header-navr a:eq(5)').mouseover(function() {
		$('#icon_04').html('&#xe660;')
		$('.help').css('display', 'block')
	}).mouseout(function() {
		$('#icon_04').html('&#xe6ac;')
		$('.help').css('display', 'none')
	})

	$('.cityDel').click(function() {
		$('.citylist').css('display', 'none')
	})

	//回到顶部按钮淡入淡出
	$(window).scroll(function() {
		if($(window).scrollTop() >= 300) {
			// 			console.log($(window).scrollTop());
			$('.goTop').css('visibility', 'visible');
		} else {
			$('.goTop').css('visibility', 'hidden');
		}
	})

	$('.listClass').mouseenter(function() {
		$('.bannerClass_left').slideToggle();
	})

	$('.bannerClass_left').mouseleave(function() {
		$('.bannerClass_left').slideToggle();
	})

	$(window).scroll(function() {

		//		console.log($(window).scrollTop())
		if($(window).scrollTop() >= 600) {
			$('.reorder').css({
				'position': 'fixed',
				top: 0,
				margin: 0
			})
		} else {
			$('.reorder').css({
				'position': 'relative',
				"margin-top": "10px"
			})
		}

	})

	var flag = 0;
	$('.pinglupaixu').click(function() {
		flag++;
		var oLis = document.querySelectorAll(".productlist ul li")
		for(var i = 0; i < oLis.length; i++) {
			for(var j = 0; j < oLis.length - i - 1; j++) {
				var num1 = oLis[j].querySelector(".paixujiage").innerHTML
				var num2 = oLis[j + 1].querySelector(".paixujiage").innerHTML

				if(flag % 2 == 0) {

					if(Number(num1) < Number(num2)) {
						var temp = oLis[j + 1].innerHTML;
						oLis[j + 1].innerHTML = oLis[j].innerHTML;
						oLis[j].innerHTML = temp;
					}
				} else {
					if(Number(num1) > Number(num2)) {
						var temp = oLis[j + 1].innerHTML;
						oLis[j + 1].innerHTML = oLis[j].innerHTML;
						oLis[j].innerHTML = temp;
					}
				}

			}

		}
	})

})