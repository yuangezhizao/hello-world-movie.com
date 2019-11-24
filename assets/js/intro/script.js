// JavaScript Document
$(document).ready(function() {
"use strict";

//------------- ローディング -------------//
$(window).load(function(){
	$(".loadingWrap .ng-scope").fadeOut({'duration':800,'easing':'easeInCubic','complete':function(){
		$('.loadingWrap').fadeOut({'duration':800,'easing':'easeInSine'});
			topStart();
	}
	});
});

function topStart() {
		$('#img1').addClass('scaleDownIn').removeClass('scaleDownOut2');
		$('#tit').addClass('scaleUpIn').removeClass('scaleUpOut2');
		$('#copy1').addClass('scaleUpIn').removeClass('scaleUpOut2');
		
		$('#copy1').addClass('scaleUpIn').removeClass('scaleUpOut2');
		
		setTimeout(function(){$('#midashi1').addClass('fromBottomIn').removeClass('fromBottomOut');},0);
		
		setTimeout(function(){$('#txtArea1 p').addClass('fromBottomIn').removeClass('fromBottomOut');},200);
		setTimeout(function(){$('#copy2').addClass('fromBottomIn').removeClass('fromBottomOut');},400);
		
		setTimeout(function(){$('#img1_1').addClass('scaleDownIn').removeClass('scaleDownOut');},600);
		setTimeout(function(){$('#img1_2').addClass('scaleDownIn').removeClass('scaleDownOut');},600);
		setTimeout(function(){$('#img1_3').addClass('scaleDownIn').removeClass('scaleDownOut');},600);
		setTimeout(function(){$('#img1_4').addClass('scaleDownIn').removeClass('scaleDownOut');},600);
		setTimeout(function(){$('#img1_5').addClass('scaleDownIn').removeClass('scaleDownOut');},600);
		setTimeout(function(){$('#img1_6').addClass('scaleDownIn').removeClass('scaleDownOut');},600);
		setTimeout(function(){$('#img1_7').addClass('scaleDownIn').removeClass('scaleDownOut');},600);
		
		setTimeout(function(){$('#midashi2').addClass('fromBottomIn').removeClass('fromBottomOut');},600);
		
		setTimeout(function(){$('#copy3').addClass('fromBottomIn').removeClass('fromBottomOut');},800);
		setTimeout(function(){$('#txtArea2 p').addClass('fromBottomIn').removeClass('fromBottomOut');},1000);
		
		setTimeout(function(){$('#copy4').addClass('fromBottomIn').removeClass('fromBottomOut');},1200);
		setTimeout(function(){$('#copy5').addClass('fromBottomIn').removeClass('fromBottomOut');},1400);
		
		setTimeout(function(){$('#img2_1').addClass('scaleDownIn').removeClass('scaleDownOut');},1600);
		setTimeout(function(){$('#img2_2').addClass('scaleDownIn').removeClass('scaleDownOut');},1600);
		setTimeout(function(){$('#img2_3').addClass('scaleDownIn').removeClass('scaleDownOut');},1600);
		setTimeout(function(){$('#img2_4').addClass('scaleDownIn').removeClass('scaleDownOut');},1600);
		setTimeout(function(){$('#img2_5').addClass('scaleDownIn').removeClass('scaleDownOut');},1600);
		setTimeout(function(){$('#img2_6').addClass('scaleDownIn').removeClass('scaleDownOut');},1600);
		setTimeout(function(){$('#img2_7').addClass('scaleDownIn').removeClass('scaleDownOut');},1600);
		
}
//------------- メニュー表示・非表示 -------------//
$("#menuIcon").click(function(){
        if ($('#overlayMenu').is(':visible')) {
			$("#overlayMenu").slideUp({'duration':600,'easing':'easeOutQuart'});
			$("#menuOn").delay(0).fadeOut({'duration':150,'easing':'easeInQuart'});
			$("#menuOff").delay(150).fadeIn({'duration':450,'easing':'easeOutQuart'});
        } else {
			$("#overlayMenu").slideDown({'duration':600,'easing':'easeOutQuart'});
			$("#menuOff").delay(0).fadeOut({'duration':200,'easing':'easeInQuart'});
			$("#menuOn").delay(200).fadeIn({'duration':400,'easing':'easeOutQuart'});
        }
	return false;
});
//------------- 右クリック禁止 -------------//

$('body').on('contextmenu',function(){
	return false;
});

});