var listAnimateIsFin = false,
    listAnimateTimeout = [],
    loadingInterval,
    gaFlag = [];
	// windowDirection;
var fadeInOut;	
$(document).ready(function() {
	   fadeInOut = function ($element) {
		   console.log("asas");
		var $children = $element.children(),
			current = 0,
			time = 10000,
			speed = 'opacity 3s';
	
		$children.css({ transition: speed }).eq(current).css({ opacity: '1' });
		$children.eq(current).addClass("set");
				  
		setInterval(function () {

			$children.eq(current).css({ opacity: '0' });
			current = current === $children.length - 1 ? 0 : current += 1;
			current2 = current + 1;
			current2 = current2 === $children.length  ? 0 : current2;
			$children.eq(current2).removeClass("set");
			
			current3 = current2 + 1;
			current3 = current3 === $children.length  ? 0 : current3;
			$children.eq(current3).removeClass("set");
						
			$children.eq(current).addClass("set");
			$children.eq(current).css({ opacity: '1' });
		}, time);
	};
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		// 如果需要前進後退按鈕
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		autoplay: {
			delay: 5000,
		  },
		speed:300,
		// 如果需要滾動條
		//   scrollbar: '.swiper-scrollbar',
		// effect : 'coverflow',
		slidesPerView: 1,
		centeredSlides: true,
		// coverflow: {
		// rotate: 30,
		// stretch: 10,
		// depth: 60,
		// modifier: 2,
		// slideShadows : true
		// }
		})
	if ($('#list').length == 1) {
		// if ( $(window).height() > $(window).width() ) {
		// 	windowDirection = 'vertical';
		// } else {
		// 	windowDirection = 'horizontal';
		// }
		loadingInterval = setInterval(function(){
			//console.log($('html.jf-active').length)
			//if ( $('html.jf-active').length == 1 ) {
				clearInterval(loadingInterval);
				
				initList();
				listActive();
				for ( var i = 0; i < $('.catalog .group-content li').length; i++ ) {
					gaFlag[i] = false;
				}
				scroll();
				// sendPage('/Index_CSV');
			//}
		}, 300);
	} else if ($('#detail').length == 1) {
		initDetail();
		// sendPage('/' + gaMark + '_CSV');
	}

});



function initList() {
	
	$('.bg1, .bg2, .beer').removeClass('animate');
	$('.natural').css({'opacity': 0});
	$('.title').css({'top': 98, 'opacity': 0});
	$('.caption1').css({'width': 0, 'left': 168});
	$('.caption2').css({'opacity': 0});
	$('.box-top-inner:not(.shadow)').css({'top': ( $('.box-title').height() - 219 ) / 2});
	$('.box-top-inner.shadow').css({'top': ( ( $('.box-title').height() - 219 ) / 2 ) + 10});
	$('.desc .line').css({'opacity': 0});
	$('.godown').css({'opacity': 0});

	startList();
}

function startList() {

	//$('.bg1').addClass('animate');
	listAnimateTimeout[0] = setTimeout(function() { $('.bg2').addClass('animate'); }, 800);
	listAnimateTimeout[1] = setTimeout(function() {
		$('.natural').animate({'opacity': 1}, 450);
		$('.bg2').removeClass('animate');
		$('.bg1').css({'opacity': 0});
	}, 1300);
	listAnimateTimeout[2] = setTimeout(function() {
		$('.title').animate({'top': 88, 'opacity': 1}, 450);
	}, 1700);
	listAnimateTimeout[3] = setTimeout(function() {
		$('.beer').addClass('animate');
		flyBubble('left', 1);
		flyBubble('right', 1);
	}, 2300);
	listAnimateTimeout[4] = setTimeout(function() {
		$('.caption1').animate({'width': 115, 'left': 110}, 300);
	}, 2650);
	listAnimateTimeout[5] = setTimeout(function() {
		$('.caption2').animate({'opacity': 1}, 450);
	}, 3200);
	listAnimateTimeout[6] = setTimeout(function() {
		if ( $(window).height() > 600 ) {
			$('.box-top-inner:not(.shadow)').animate({'top': 110}, 1000);
			$('.box-top-inner.shadow').animate({'top': 120}, 1000);
		} else if ( $(window).height() > 570 && $(window).height() <= 600 ) {
			$('.box-top-inner:not(.shadow)').animate({'top': '15%'}, 1000);
			$('.box-top-inner.shadow').animate({'top': ($('.box-top-inner.shadow').height() * 0.15) + 10}, 1000);
		} else if ( $(window).height() > 540 && $(window).height() <= 570 ) {
			$('.box-top-inner:not(.shadow)').animate({'top': '10%'}, 1000);
			$('.box-top-inner.shadow').animate({'top': ($('.box-top-inner.shadow').height() * 0.1) + 10}, 1000);
		} else if ( $(window).height() > 510 && $(window).height() <= 540 ) {
			$('.box-top-inner:not(.shadow)').animate({'top': '5%'}, 1000);
			$('.box-top-inner.shadow').animate({'top': ($('.box-top-inner.shadow').height() * 0.05) + 10}, 1000);
		} else {
			$('.box-top-inner:not(.shadow)').animate({'top': 0}, 1000);
			$('.box-top-inner.shadow').animate({'top': 10}, 1000);
		}
	}, 3500);
	listAnimateTimeout[7] = setTimeout(function() { $('.desc .line').eq(0).animate({'opacity': 1}, 450); }, 4000);
	listAnimateTimeout[8] = setTimeout(function() { $('.desc .line').eq(1).animate({'opacity': 1}, 450); }, 4300);
	listAnimateTimeout[9] = setTimeout(function() { $('.desc .line').eq(2).animate({'opacity': 1}, 450); }, 4600);
	listAnimateTimeout[10] = setTimeout(function() { $('.desc .line').eq(3).animate({'opacity': 1}, 450); }, 4900);
	listAnimateTimeout[10] = setTimeout(function() { $('.desc .line').eq(4).animate({'opacity': 1}, 450); }, 5200);
	listAnimateTimeout[11] = setTimeout(function() { $('.godown').animate({'opacity': 1}, 450); }, 5300);
	listAnimateTimeout[12] = setTimeout(function() {
		fadeInOut($('.bg3'));
		$("#list .box-top-inner.shadow").fadeOut();
		$('#list .box-title .bg .bg3').css({'opacity': 1});  
		$("#list .desc,#list .arrow").fadeOut();
		$("#list .beer img,.caption1,.caption2,.natural,#list .title").addClass("filter_y");
		$("#list .step2").fadeIn();
		//$("#list .box-top-inner .godown").css({'background-position': '0px -35px'}); 
		$('.bg2').addClass('animate2'); }, 7000);
	listAnimateTimeout[13] = setTimeout(function() { listAnimateIsFin = true; }, 7000);
}

function listActive() {
	$('.godown').click(function() {

		$('html, body').animate({scrollTop: $('.box-content').offset().top - 61}, 1000);

	});

	$('.group-content li .inner a').click(function(){
		switch ($(this).parent().parent().index()) {
			case 0:
				var gaName = '甘樂';
				break;
			case 1:
				var gaName = '苑里';
				break;
			case 2:
				var gaName = '八穀';
				break;
		}	
		sendEvent('首頁_' + gaName, '點選首頁_' + gaName, 'CSV');	
	});

	$(window).scroll(scroll);
}

function scroll() {
	for ( var i = 0; i < $('.catalog .group-content li').length; i++ ) {
		if ( ( ( $('.catalog .group-content li').eq(i).offset().top >= $(window).scrollTop() + $('#header').height() &&
			     $('.catalog .group-content li').eq(i).offset().top <= $(window).scrollTop() + $(window).height() - $('#warnings').height() ) ||
			   ( $('.catalog .group-content li').eq(i).offset().top + $('.catalog .group-content li').eq(i).height() >= $(window).scrollTop() + $('#header').height() &&
			     $('.catalog .group-content li').eq(i).offset().top + $('.catalog .group-content li').eq(i).height() <= $(window).scrollTop() + $(window).height() - $('#warnings').height() ) ) &&
			 !gaFlag[i] ) {
			gaFlag[i] = true;
			switch (i) {
				case 0:
					var gaName = '甘樂';
					break;
				case 1:
					var gaName = '苑里';
					break;
				case 2:
					var gaName = '八穀';
					break;
			}
			sendPage('/Index_CSV_' + gaName);
		}
	}	
}

function endList() {
	if ( $(window).height() > 600 ) {
		$('.box-top-inner:not(.shadow)').css({'top': 110}, 1000);
		$('.box-top-inner.shadow').css({'top': 120}, 1000);
	} else if ( $(window).height() > 570 && $(window).height() <= 600 ) {
		$('.box-top-inner:not(.shadow)').css({'top': '15%'}, 1000);
		$('.box-top-inner.shadow').css({'top': ($('.box-top-inner.shadow').height() * 0.15) + 10}, 1000);
	} else if ( $(window).height() > 540 && $(window).height() <= 570 ) {
		$('.box-top-inner:not(.shadow)').css({'top': '10%'}, 1000);
		$('.box-top-inner.shadow').css({'top': ($('.box-top-inner.shadow').height() * 0.1) + 10}, 1000);
	} else if ( $(window).height() > 510 && $(window).height() <= 540 ) {
		$('.box-top-inner:not(.shadow)').css({'top': '5%'}, 1000);
		$('.box-top-inner.shadow').css({'top': ($('.box-top-inner.shadow').height() * 0.05) + 10}, 1000);
	} else {
		$('.box-top-inner:not(.shadow)').css({'top': 0}, 1000);
		$('.box-top-inner.shadow').css({'top': 10}, 1000);
	}
}

function flyBubble(direction, num) {
	setTimeout(function(){
		var item = '<div data-num="' + num + '" class="type' + Math.floor((Math.random() * 2) + 1) +'" style="left: ' + Math.floor((Math.random() * 100) + 0) + '%;"></div>';
		$('.box-top-inner .beer.' + direction + ' .fly-bubble').append(item);
		flyBubbleEnd(direction, num);
	}, Math.floor((Math.random() * 1500) + 500));
	setTimeout(function(){
		flyBubble(direction, num+=1);
	}, Math.floor((Math.random() * 1500) + 500));
}

function flyBubbleEnd(direction, num) {
	setTimeout(function(){
		$('.box-top-inner .beer.' + direction + ' .fly-bubble div[data-num=' + num +']').remove();
	}, 1000);
}

function initDetail() {

/* transition
----------------------------------------*/

	// var transitionOpacityElements = [
	// 	'#products .back',
	// 	'#products .zoom',
	// 	'#products .info .more',
	// 	'#products .related-content li a',
	// 	'#products .related-arrow li a'
	// ];

	// $.each(transitionOpacityElements, function(index, ele) {
	// 	$(ele).addClass('tst-opacity');
	// });

/* 返回列表
----------------------------------------*/
/*
	$('#detail .back').click(function() {
		// if (document.referrer.indexOf('products-detail.php') != -1) {
		window.location.href = 'products.php' + func.getCookie('productsHash');
		// } else {
		// 	history.back();
		// }
	});
*/
/* 了解更多
----------------------------------------*/

	// $('.overview .more').click(function() {

	// 	var text = $(this).text().replace('了解更多 ', '');
	// 	sendEvent('前往商品子網-' + text, '點選', '商品單品頁');

	// });

/* 同品牌商品
----------------------------------------*/
/*
	var orderLeft = [-178, 6, 190, 374, 558, 742];

	if ($('#related .related-content li').length == 0) {
		$('#related').parents('.row').remove();
	} else if ($('#related .related-content li').length < 5) {
		$('.related-arrow').hide();
		$('.related-content').css('left', -6);
	}

	$('#related .related-content li').addClass('order-5');

	for (i = 0; i < 4; i++) {
		$('#related .related-content li:eq(' + i + ')').attr('class', '').addClass('order-' + (i + 1));
	}

	$('.related-arrow li a').click(function() {

		if ($('#related .related-content li').is(':animated')) return false;

		if ($(this).parent().hasClass('prev')) {

			var current = $('.order-1').index();
			var next 	= current - 1;

			if (next == -1) next = $('#related .related-content li').length - 1;

			for (i = 1; i < 5; i++) {
				$('.order-' + i)
					.animate({
						'left': orderLeft[i + 1]
					}, 300, function() {
						var id = parseInt($(this).attr('class').split('-')[1]);
						$(this)
							.attr('class', 'order-' + (id + 1))
							.attr('style', '');
					})
			}

			$('#related .related-content li:eq(' + next + ')')
				.attr('class', 'order-0')
				.show()
				.animate({
					'left': orderLeft[1]
				}, 300, function() {
					$(this)
						.attr('class', 'order-1')
						.attr('style', '');
				});

		} else {

			var current = $('.order-4').index();
			var next 	= current + 1;

			if (next == $('#related .related-content li').length) next = 0;

			for (i = 1; i < 5; i++) {
				$('.order-' + i)
					.animate({
						'left': orderLeft[i - 1]
					}, 300, function() {
						var id = parseInt($(this).attr('class').split('-')[1]);
						$(this)
							.attr('class', 'order-' + (id - 1))
							.attr('style', '');
					})
			}

			$('#related .related-content li:eq(' + next + ')')
				.attr('class', 'order-5')
				.show()
				.animate({
					'left': orderLeft[4]
				}, 300, function() {
					$(this)
						.attr('class', 'order-4')
						.attr('style', '');
				});

		}

	});
*/
/* banner 滑動
----------------------------------------*/

	// var swipeLength = $('.swipe-wrap > div').length;

	// var elem = document.getElementById('slide-swipe');
	// window.mySwipe = Swipe(elem, {
	// 	// startSlide: 0,
	// 	auto: 3000,
	// 	continuous: true,
	// 	// disableScroll: true,
	// 	// stopPropagation: true,
	// 	callback: function(index, element) {
	// 		if (swipeLength > 1) {
	// 			var i = swipeDots.length;
	// 			if (i == 2) {
	// 				$('#swipe-dots .current')
	// 					.removeClass('current')
	// 					.siblings()
	// 					.addClass('current');
	// 			} else {
	// 				while(i--) {
	// 					swipeDots[i].className = '';
	// 				}
	// 				swipeDots[index].className = 'current';
	// 			}
	// 		}
	// 	},
	// 	transitionEnd: function(index, element) {}
	// });

	// if (swipeLength > 1) {

	// 	for (i = 0; i < swipeLength; i++) {
	// 		var template = $('<li></li>');
	// 		if (i == 0) template.addClass('current');
	// 		template.appendTo('#swipe-dots');
	// 	}

	// 	var swipeDots = document.getElementById('swipe-dots').getElementsByTagName('li');

	// } else {

	// 	$('.slide').css('margin-bottom', 20);

	// }

	// $('.slide-nav .prev').click(function() {
	// 	mySwipe.prev();
	// });

	// $('.slide-nav .next').click(function() {
	// 	mySwipe.next();
	// });

	$('#detail .links a').click(function() {

		// sendEvent('訊息按鈕-' + func.getParameterByName('id'), '點選', '最新訊息-' + $('#detail .box-title .title').text());

	});

	$('#detail .box-title .title').html($('#detail .box-title .title').html().replace('│ ', '<br>'));

	$('#detail .btn-active').click(function() {

		$('html, body').animate({scrollTop: $('#detail .box-content .rule-info .rule-image').offset().top - 61}, 2000);
		sendEvent('分頁_' + gaMark +'_立即抽獎', '點選分頁_' + gaMark +'_立即抽獎', 'CSV');

	});

	$('#detail .btn-fb').click(function() {

		sendEvent('分頁_' + gaMark +'_分享', '點選分頁_' + gaMark +'_分享', 'CSV');

		FB.ui({
			method: 'feed',
			link: 'https://' + proj.domain + 'barbeer/CSV/2018/inner-' + detailID + '.php?utm_source=facebook&utm_medium=post_0' + detailID + '&utm_content=0721_csv&utm_campaign=csv17',
			picture: 'https://' + proj.domain + 'barbeer/CSV/2018/images/item/' + detailID + '/metaimg.jpg?v=20170712',
			name: shareTitle,
			description: shareDescription
		}, function(response) {
			if (response && !response.error_message) {
				alert('分享成功，請進行Step3留言，就有機會中大獎！');
				sendEvent('分頁_' + gaMark +'_分享done', '點選分頁_' + gaMark +'_分享done', 'CSV');
			}
		});

	});

	$('#detail .back').click(function(){

		sendEvent('分頁_' + gaMark +'_回首頁', '點選分頁_' + gaMark +'_回首頁', 'CSV');

	});

	$('#detail .box-content .links a').click(function(){

		if ( $(this).attr('class').match('prev') ) {
			sendEvent('分頁_' + gaMark +'_上一篇', '點選分頁_' + gaMark +'_上一篇', 'CSV');
		} else {
			sendEvent('分頁_' + gaMark +'_下一篇', '點選分頁_' + gaMark +'_下一篇', 'CSV');
		}		

	});
	$(".fb_btn").click(function(){

		openPopup();
	
	});
	$(".close_btn").click(function(){

		closePopup();
	
	});
	$(".check_btn").click(function(){

		$( this ).toggleClass( "check" );
	
	});
	$(".send_btn").click(function(){

		$(".startform").fadeOut();
		$(".form").delay( 500 ).addClass("over");
		$(".overform").delay( 1000 ).fadeIn();
		
	
	});

}
function openPopup(){
	$(".check_btn").removeClass("check");
	$(".startform").css({'display' : 'block'});
	$(".overform").css({'display' : 'none'});
	$(".form").removeClass("over");
	$("html,body").css({'overflow' : 'hidden'});
		
		$("#overlay,#popup").fadeIn(function(){
				  
	});


} 
function closePopup(){

	$("html,body").css({'overflow' : ''});
	$("#overlay,#popup").fadeOut(function(){
	
	});


}




$(window).resize(function(){
	// if ($('#list').length == 1) {
	// 	if ( !listAnimateIsFin ) {
	// 		$.each(listAnimateTimeout, function(index, ele) {
	// 			clearTimeout(listAnimateTimeout[index]);
	// 		});
	// 		initList();
	// 	} else {
	// 		if ( ( $(window).height() > $(window).width() ) && windowDirection == 'horizontal' ) {
	// 			windowDirection = 'vertical';
	// 			endList();
	// 		} else if ( ( $(window).height() <= $(window).width() ) && windowDirection == 'vertical' ) {
	// 			windowDirection = 'horizontal';
	// 			endList();
	// 		}			
	// 	}
	// }
});
