$(document).ready(function() {

	if ($('#list').length == 1) {
		loadingInterval = setInterval(function(){
			if ( $('html.jf-active').length == 1 ) {
				clearInterval(loadingInterval);
				initList();
				listActive(); 
				// sendPage('/Index_CSV');
			}
		}, 300);
	} else if ($('#detail').length == 1) {
		initDetail();
		// sendPage('/' + gaMark + '_CSV');
	}

});

var listAnimateIsFin = false,
    listAnimateTimeout = [],
    loadingInterval;
function initList() {
	$('#video').YTPlayer({
		fitToBackground: true,
		videoId: 'LSmgKRx5pBo'
	});
	// func.setCookie('productsHash', '', 1);

/* transition
----------------------------------------*/

	var transitionOpacityElements = [
		'#news .navigation li a',
		'#news .catalog li .pic img',
		'#news .pagination a'
		// '#products .navigation li a',
		// '#products .catalog li'
	];

	$.each(transitionOpacityElements, function(index, ele) {
		$(ele).addClass('tst-opacity');
	});

	$('.bg1, .bg2, .beer').removeClass('animate');
	$('.natural').css({'opacity': 0});
	if ( $(window).height() <= 917 ) {
		$('.title').css({'top': '26%', 'opacity': 0});
	} else {
		$('.title').css({'top': 210, 'opacity': 0});
	}
	$('.caption1').css({'width': 0, 'left': 500});
	$('.caption2').css({'opacity': 0});
	if ( $(window).height() <= 917 ) {
		$('.box-top-inner:not(.shadow)').css({'top': ( ( ( ( $(window).height() - 138 - 90 ) - (0.47 * $('.box-top-inner').height()) ) / 2 ) - (0.06 * $('.box-top-inner').height()) )});
		$('.box-top-inner.shadow').css({'top': ( ( ( ( $(window).height() - 138 - 90 ) - (0.47 * $('.box-top-inner').height()) ) / 2 ) - (0.06 * $('.box-top-inner').height()) + 10 )});
	} else {
		$('.box-top-inner:not(.shadow)').css({'top': 111});
		$('.box-top-inner.shadow').css({'top': 121});
	}
	$('.desc .line').css({'opacity': 0});
	$('.godown').css({'opacity': 0});

	startList();
}

function startList() {

	//$('.bg1').addClass('animate');
	//listAnimateTimeout[0] = setTimeout(function() { $('.bg2').addClass('animate'); }, 800);
	listAnimateTimeout[1] = setTimeout(function() {
		$('.natural').css({'left': ($('.box-top-inner').width() - $('.natural').width()) / 2});
		$('.natural').animate({'opacity': 1}, 450);
	}, 1300);
	listAnimateTimeout[2] = setTimeout(function() {
		$('.title').css({'left': ($('.box-top-inner').width() - $('.title').width()) / 2});
		if ( $(window).height() <= 917 ) {
			$('.title').animate({'top': '25%', 'opacity': 1}, 450);
		} else {
			$('.title').animate({'top': 200, 'opacity': 1}, 450);
		}
	}, 1700);
	listAnimateTimeout[3] = setTimeout(function() {
		$('.beer').addClass('animate');
		flyBubble('left', 1);
		flyBubble('right', 1);
	}, 2300);
	listAnimateTimeout[4] = setTimeout(function() {
		$('.caption1').animate({'width': $('.caption1').height() * 3.46, 'left': ($('.box-top-inner').width() - ($('.caption1').height() * 3.46)) / 2}, 300);
	}, 2650);
	listAnimateTimeout[5] = setTimeout(function() {
		$('.caption2').css({'left': ($('.box-top-inner').width() - $('.caption2').width()) / 2});
		$('.caption2').animate({'opacity': 1}, 450);
	}, 3200);
	listAnimateTimeout[6] = setTimeout(function() {
		$('.box-top-inner:not(.shadow)').animate({'top': 0}, 1000);
		$('.box-top-inner.shadow').animate({'top': 10}, 1000);
	}, 3500);
	listAnimateTimeout[7] = setTimeout(function() {
		if ( $(window).height() <= 917 ) {
			$('.desc').css({'top': $('.natural').position().top + $('.natural').height() + (40 * ($(window).height() / 917) * 0.25)});
		} else {
			$('.desc').css({'top': $('.natural').position().top + $('.natural').height() + 40});
		}
		$('.desc .line').eq(0).animate({'opacity': 1}, 450);
	}, 4000);
	listAnimateTimeout[8] = setTimeout(function() { $('.desc .line').eq(1).animate({'opacity': 1}, 450);}, 4300);
	listAnimateTimeout[9] = setTimeout(function() { $('.desc .line').eq(2).animate({'opacity': 1}, 450); }, 4600);
	listAnimateTimeout[10] = setTimeout(function() { $('.desc .line').eq(3).animate({'opacity': 1}, 450); }, 4900);
	listAnimateTimeout[11] = setTimeout(function() { $('.godown').animate({'opacity': 1}, 450); }, 5000);
	listAnimateTimeout[12] = setTimeout(function() { listAnimateIsFin = true; }, 5000);
}

function listActive() {
	$('.godown').click(function() {

		$('html, body').animate({scrollTop: $('.box-content').offset().top - 58}, 1000);

	});

	$('.group-content li').click(function(){

		switch ($(this).index()) {
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
}

function endList() {
	$('.natural').css({'left': ($('.box-top-inner').width() - $('.natural').width()) / 2});
	if ( $(window).height() <= 917 ) {
		$('.title').css({'top': '25%'});
	} else {
		$('.title').css({'top': 200});
	}
	$('.title').css({'left': ($('.box-top-inner').width() - $('.title').width()) / 2});
	$('.caption1').css({'width': $('.caption1').height() * 3.46, 'left': ($('.box-top-inner').width() - ($('.caption1').height() * 3.46)) / 2});
	$('.caption2').css({'left': ($('.box-top-inner').width() - $('.caption2').width()) / 2});
	if ( $(window).height() <= 917 ) {
		$('.desc').css({'top': $('.natural').position().top + $('.natural').height() + (40 * ($(window).height() / 917) * 0.25)});
	} else {
		$('.desc').css({'top': $('.natural').position().top + $('.natural').height() + 40});
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

	var transitionOpacityElements = [
		'#news #detail .back',
		'#news .slide-arrow li a',
		'#news .links a',
		'#news .btn-active',
		'#news .btn-fb'
		// '#products .back',
		// '#products .zoom',
		// '#products .info .more',
		// '#products .related-content li a',
		// '#products .related-arrow li a'
	];

	$.each(transitionOpacityElements, function(index, ele) {
		$(ele).addClass('tst-opacity');
	});

/* 版面調整
----------------------------------------*/

	if ($('#detail .slide').length == 0) {

		// $('#article, .links').css('width', 720);

	}

/* banner
----------------------------------------*/

	var slideCount = 0, slideMove, slideTimer = 5000, slideAction, slideLength = $('.slide .controller div').length;

	// for (i = 0; i < slideLength; i++) {

	// 	var template = $('<li><a></a></li>');
	// 	if (i == 0) template.addClass('current');
	// 	template.appendTo('.slide .slide-nav ul');

	// }

	slideMove = function(count) {
		$('.slide .controller').animate({
			'left': count * $('.slide .slide-content').innerWidth() * -1
		}, 250, 'easeOutCubic');
		$('.slide .slide-nav li:eq(' + count + ')').addClass('current').siblings().removeClass('current');
	}

	slideAction = function() {
		var next = slideCount + 1;
		if (next == slideLength) next = 0;
		$('.slide .slide-nav li:eq(' + next + ')').trigger('click');
	}

	$('.slide .slide-nav li').click(function() {
		if ($('.slide .controller').is(':animated')) return false;
		slideCount = $(this).index();
		slideMove(slideCount);
	});

	$('.slide .slide-arrow li').click(function() {
		if ($('.slide .controller').is(':animated')) return false;
		if ($(this).hasClass('next')) {
			slideCount = $('.slide .slide-nav li.current').index() + 1;
			if (slideCount >= $('.slide .controller div').length) slideCount = 0; 
		} else {
			slideCount = $('.slide .slide-nav li.current').index() - 1;
			if (slideCount <= -1) slideCount = $('.slide .controller div').length - 1; 
		}
		slideMove(slideCount);
	});

	var slideInterval = setInterval(function() {
		slideAction();
	}, slideTimer);

	$('.slide').hover(

		function() {
			clearInterval(slideInterval);
		},

		function() {
			slideInterval = setInterval(function() {
				slideAction();
			}, slideTimer);
		}

	);

	$('#detail .links a').click(function() {

		// sendEvent('訊息按鈕-' + func.getParameterByName('id'), '點選', '最新訊息-' + $('#detail .box-title .title').text());

	});

	$('#detail .btn-active').click(function() {

		$('html, body').animate({scrollTop: $('#detail .box-content .rule-info .rule-image').offset().top - 58 + 80}, 2000);
		sendEvent('分頁_' + gaMark +'_立即抽獎', '點選分頁_' + gaMark +'_立即抽獎', 'CSV');

	});

	$('#detail .btn-fb').click(function() {

		sendEvent('分頁_' + gaMark +'_分享', '點選分頁_' + gaMark +'_分享', 'CSV');

		FB.ui({
			method: 'feed',
			link: 'https://' + proj.domain + 'barbeer/CSV/2017/inner-' + detailID + '.php?utm_source=facebook&utm_medium=post_0' + detailID + '&utm_content=0721_csv&utm_campaign=csv17&v=20170712',
			picture: 'https://' + proj.domain + 'barbeer/CSV/2017/images/item/' + detailID + '/metaimg.jpg?v=20170712',
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
}

$(window).resize(function(){
	if ($('#list').length == 1) {
		if ( !listAnimateIsFin ) {
			$.each(listAnimateTimeout, function(index, ele) {
				clearTimeout(listAnimateTimeout[index]);
			});
			initList();
		} else {
			endList();
		}
	}
});
