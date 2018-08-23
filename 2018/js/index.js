var listAnimateIsFin = false,
    listAnimateTimeout = [],
    loadingInterval;

$(document).ready(function() {

    if ($('#list').length == 1) {
		loadingInterval = setInterval(function(){
			if ( $('html.jf-active').length == 1 ) {
				clearInterval(loadingInterval);
				initList();
				//listActive(); 
				
            }
            clearInterval(loadingInterval);
				initList();
		}, 300);
	} else if ($('#detail').length == 1) {
		initDetail();
		
	}


});    


    function initList() {
        
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
    
        //$('.bg1, .bg2, .beer').removeClass('animate');
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
        listAnimateTimeout[0] = setTimeout(function() { $('.bg2').addClass('animate'); }, 800);
        listAnimateTimeout[1] = setTimeout(function() {
            $('.natural').css({'left': ($('.box-top-inner').width() - $('.natural').width()) / 2});
            $('.natural').animate({'opacity': 1}, 450);
            $('.bg1').css({'opacity': 0});
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
            $('.box-top-inner:not(.shadow)').animate({'top': 110}, 1000);
            $('.box-top-inner.shadow').animate({'top': 120}, 1000);
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
        listAnimateTimeout[11] = setTimeout(function() { $('.godown').animate({'opacity': 1}, 450);
        
         }, 5000);
        listAnimateTimeout[12] = setTimeout(function() {
            $("#list .box-top-inner.shadow").fadeOut();
            $('#list .box-title .bg .bg3').css({'opacity': 1});  
            $('.bg2').addClass('animate2'); }, 7000);
        
        


        listAnimateTimeout[13] = setTimeout(function() { listAnimateIsFin = true; }, 7000);
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