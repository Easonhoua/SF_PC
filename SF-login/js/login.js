/**
 * Created by Administrator on 2017/6/10 0010.
 */

$(function(){
//	// 点击生成随机数
		$('.yzm').click(function(){
			var num=Math.floor(Math.random()*9000)+1000
			$('.yzm').text(num)
		})
////
		$(".loginname").focus(function () {
			$(".loginname").css('border','1px solid #6e9b0c');
		
		}).blur(function () {
			$(".loginname").css('border','1px solid #dadada');
			$(".confirm1").css('display','none')
		})
		
		
		$(".loginpsw").focus(function () {
			$(".loginpsw").css('border','1px solid #6e9b0c');
		
		}).blur(function () {
			$(".loginpsw").css('border','1px solid #dadada');
			$(".confirm2").css('display','none')
		})
		
		
		
		$(".loginyzm").focus(function () {
			$(".loginyzm").css('border','1px solid #6e9b0c');
		
		}).blur(function () {
			$(".loginyzm").css('border','1px solid #dadada');
			$(".confirm3").css('display','none')
		})
		
		
//		var flag1=true;
//		var flag2=true;
//		var flag3=true;
//		var user = $(".loginname").val();
//		var pass = $(".loginpsw").val();
//		var yzm = $('.loginyzm').val();
//		if(user == "") {
//			$(".confirm1").css('display','block').text("请输入登录用户名");
//			$(".loginname").css('border','1px solid #fa9600');
//			$(".loginname").focus();
//			return;
//		}
//		if(pass == "") {
//			$(".confirm2").css('display','block').text("请输入登录密码");
//			$(".loginpsw").css('border','1px solid #fa9600')
//			$(".loginpsw").focus();
//			return;
//		}
//		if(yzm == ""){
//			$(".confirm3").css('display','block').text("请输入验证码");
//			$(".loginyzm").css('display','1px solid #fa9600');
//			$(".loginyzm").focus();
//			return;
//		}
////		
//		
		
		
	
					$('.btn').click(function(){
//						if(flag1=true&&flag2=true&&flag3=true){
							$.ajax({
                        	type:"get",
                            url:'php/userLogin.php',
                            dataType:'json',
                            data:{
                                username:$('.loginname').val(),
                                password:$('.loginpsw').val()
                            },
                            success:function(data){
                            	if(data.content=="登陆成功"){
                            		
                            		alert('登陆成功')
                        			location.href="http://10.20.152.10/SF/SF-index/"
                            	}else{
                            		
                            		alert('错误的账号密码')
                            	}
                            		
                            },
                            error:function(XMLHttpRequest,textStatus,errorThrown){
                            	
                            	alert(XMLHttpRequest.status);
                            	alert(errorThrown)
                                alert('登录失败')
                            }
                        })
							
//							return false;
                   })
				
							
//						}
                        

})

	