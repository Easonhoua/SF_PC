$(function() {
		var uname = $('.userName').val();
		var psw1 = $('.psw1').val();
		var psw2 = $('.psw2').val();
		var yzm = $('.yzm').val();
	//	用户名验证
	$(".userName").focus(function() {
		$('#usernameerror2').fadeOut()
		$('#usernameerror1').fadeIn()
		$('.userName').css('border', "1px solid #6e9b0c")
		$('#usernameerror3').fadeOut()
//		alert(1)
	})
	$(".userName").blur(function() {

			$('#usernameerror3').fadeOut()
			$('#usernameerror1').fadeOut()
			var val = $(this).val();
			var reg = /^[1-3]\d{10}$/;
			var kongge = /(^\s+)|(\s+$)/g;
			if(reg.test(val) || val === "") {
				flag = true
				$('.userName').css('border', "1px solid #dadada")
			} else {
				$('#usernameerror2').css({
					'display': 'block',
					'color': "red"
				})
				$('.userName').css('border', "1px solid red")
				$('#usernameerror3').fadeOut()
			}
			if(reg.test(val)) {
				$('#usernameerror3').fadeIn()
			}
		})
		//	密码验证
	$(".psw1").focus(function() {
		$('#pswerror2').fadeOut()
		$('#pswerror1').fadeIn()
		$("#pswerror3").fadeOut()
		$(this).css('border', "1px solid #6e9b0c")

	})
	$(".psw1").blur(function() {
		$('#pswerror1').fadeOut()
		var val = $(this).val();
		var reg = /^[a-zA-Z_][a-zA-Z0-9_]{5,19}/;

		//		console.log($(this).val())

		if(reg.test(val) || val === "") {
			flag = true
			$('.psw1').css('border', "1px solid #dadada")
		} else {
			$('#pswerror2').css({
				'color': "red"
			}).fadeIn()
			$("#pswerror3").fadeOut()
			$('.psw1').css('border', "1px solid red")

		}

		if(val.length > 6 && val.length <= 10) {
			$('.tips').find('span:eq(0)').css("background", "orange").siblings().css("background", "#c4c4c4")
			$("#pswerror3").fadeIn()
		}
		if(val.length > 10 && val.length <= 15) {
			$('.tips').find('span:eq(1)').css("background", "orange").siblings().css("background", "#c4c4c4")
			$("#pswerror3").fadeIn()
		}
		if(val.length > 15 && val.length <= 20) {
			$('.tips').find('span:eq(2)').css("background", "orange").siblings().css("background", "#c4c4c4")
			$("#pswerror3").fadeIn()
		}

	})

	// 重复密码
	$(".psw2").focus(function() {
		$('#pswerror5').fadeOut();
		$('#pswerror4').fadeIn();
		$('#pswerror6').fadeOut()
		$(this).css('border', "1px solid #6e9b0c")
	})

	$(".psw2").blur(function() {
		$('#pswerror6').fadeOut()
		var val = $(this).val();
		if($(this).val() === $('.psw1').val() || val === "") {

			$('.psw2').css('border', "1px solid #dadada")
			$('#pswerror4').fadeOut();
		} else if($(this).val() !== $('.psw1').val()) {
			$('#pswerror5').css({
				'color': "red"
			}).fadeIn()
			$('.psw2').css('border', "1px solid red")
			$('#pswerror6').fadeOut()
			$('#pswerror4').fadeOut();
		}

		if($(this).val() === $('.psw1').val() && $(this).val() !== "") {
			$('#pswerror6').fadeIn()
		}
	})

	//	验证码
	$(".yzm").focus(function() {
		$('#yzmerror2').fadeOut()
		$('#yzmerror1').fadeIn()
		$('#yzmerror3').fadeOut()
		$(this).css('border', "1px solid #6e9b0c")
	})
	$(".yzm").blur(function() {
		$('#yzmerror3').fadeOut()
		var val = $(this).val();
		if($(this).val() === $('.photocheched').html() || val === "") {
			//		flag = true
			$('.yzm').css('border', "1px solid #dadada")
			$('#yzmerror1').fadeOut()
		} else if($(this).val() !== $('.photocheched').html()) {
			$('#yzmerror2').css({
				'color': "red"
			}).fadeIn()
			$('#yzmerror1').fadeOut()
			$('.yzm').css('border', "1px solid red")
			$('#yzmerror3').fadeOut()

		}

		if($(this).val() === $('.photocheched').html()) {
			$('#yzmerror3').fadeIn()
		}
	})

	// 点击生成随机数
	$('.photocheched').click(function() {
		var num = Math.floor(Math.random() * 9000) + 1000
		$('.photocheched').text(num)
			//		console.log($('.photocheched').text(num));
	})
	$('.changeNum').click(function() {
		var num = Math.floor(Math.random() * 9000) + 1000
		$('.photocheched').text(num)
	})

	//						

	//用户名验证
		

	//用户名验证
	var reg = /^[1-3]\d{10}$/;
	var kongge = /(^\s+)|(\s+$)/g;
	if(reg.test(uname) || uname === "") {
		$('.userName').css('border', "1px solid #dadada")
	} else {
		$('#usernameerror2').css({
			'display': 'block',
			'color': "red"
		})
		$('.userName').css('border', "1px solid red")
		$('#usernameerror3').fadeOut()
			//			return false;
	}
	if(reg.test(uname)) {
		$('#usernameerror3').fadeIn()
	}

	//重复密码验证
	if(psw1 === psw2 || psw2 === "") {

		$('.psw2').css('border', "1px solid #dadada")
		$('#pswerror4').fadeOut();
	} else if(psw2 !== psw1) {
		$('#pswerror5').css({
			'color': "red"
		}).fadeIn();
		$('.psw2').css('border', "1px solid red");
		$('#pswerror6').fadeOut();
		$('#pswerror4').fadeOut();
		//			return false;
	}

	if(psw2 === psw1 && psw2 !== "") {
		$('#pswerror6').fadeIn();
	}

	//验证码校验

	if(yzm === $('.photocheched').html() || yzm === "") {
		// flag=true
		$('.yzm').css('border', "1px solid #dadada")
		$('#yzmerror1').fadeOut()
	} else if(yzm !== $('.photocheched').html()) {
		$('#yzmerror2').css({
			'color': "red"
		}).fadeIn();
		$('#yzmerror1').fadeOut();
		$('.yzm').css('border', "1px solid red");
		$('#yzmerror3').fadeOut();
		//			return false;
	}

	if(yzm === $('.photocheched').html()) {
		$('#yzmerror3').fadeIn()
	}

	$('.btn').click(function() {
		register();
	
	})

	function register() {
		

		$.ajax({
			url: "php/register.php",
//			datatype:'json',
			data:{
				username:$('.userName').val(),
				password:$('.psw1').val()
			},
			success: function(data) {
				
				
				location.href = 'http://10.20.152.10/SF/SF-login/index-login.html';
			},

			error: function(data) {
				alert('注册失败')
			}

		})

//		function addStr(obj) {
//			var strArr = [];
//			for(var key in obj) {
//				var str = encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
//				strArr.push(str)
//			}
//			return strArr.join("&");
//		}

	}

})