
$(function() { 
    var offset = $("#asideshoppingCar").offset();
    $(".addshoppingCar").click(function(event){ 
        var addcar = $(this); 
        console.log(addcar)
        var img = addcar.parent().find('img').attr('src'); 
        var flyer = $('<img class="u-flyer" src="'+img+'">');
        flyer.fly({
            start: {
                left: event.clientX, //开始位置（必填）#fly元素会被设置成position: fixed
                top: event.clientY//开始位置（必填）
            },
            end: {
                left: offset.left+120, //结束位置（必填）
                top: offset.top+20, //结束位置（必填）
                width: 0, //结束时宽度
                height: 0 //结束时高度
                
            },
            onEnd: function(){ //结束回调
                $("#msg").show().animate({width: '120px'}, 200).fadeOut(1000); //提示信息 
                addcar.css("cursor","default").removeClass('orange').unbind('click'); 
                this.destroy(); //移除dom;
            } 
        });
    }); 
}); 








