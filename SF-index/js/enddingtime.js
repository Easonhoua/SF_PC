
$(function(){
	function changtime(){
		
		var targetTime=new Date("2017/6/16 13:54:38")
	
		var currentTime=new Date();
		
		var mintime=targetTime-currentTime;
	
		
		var ss=Math.floor(mintime/1000%60);
		var mm=Math.floor(mintime/1000/60%60);
		var hh=Math.floor(mintime/1000/60/60%24);
		
		ss=ss<10?"0"+ss:ss
		mm=mm<10?"0"+mm:mm
		hh=hh<10?"0"+hh:hh
		
		
		$('.hh').html(hh);
		$('.mm').html(mm);
		$('.ss').html(ss);
	}
	setInterval(changtime,1000)
})







