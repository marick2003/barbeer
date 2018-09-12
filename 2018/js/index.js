var listAnimateIsFin = false,
    listAnimateTimeout = [],
    loadingInterval,
    scrolltop,
    windowH,
    first_srcoll,
    windowW;
    

$(document).ready(function() {
    
    BGflyBubble('toleft', 1);
    BGflyBubble('toright', 1);
    change_beer();
    first_srcoll=false;
    if ($('#list').length == 1) {
        sendPage('/index'); 
		loadingInterval = setInterval(function(){
			if ( $('html.jf-active').length == 1 ) {
				clearInterval(loadingInterval);
				initList();
				listActive(); 
				
            }
            clearInterval(loadingInterval);
                initList();
                listActive(); 
        }, 300);
        
        if(func.getParameterByName("t")=="back"){

            $('html, body').animate({scrollTop: $('.box-content').offset().top - 58}, 1000);
            var newURL = location.href.split("?")[0];
            window.history.pushState('object', document.title, newURL);
        }



	} else if ($('#detail').length == 1) {

        if(func.getParameterByName("utm_source")=="facebook"){
            
            sendEvent( gaMark +'_FB_回訪', '點選_' + gaMark +'_FB_回訪', 'KOL');

        }
        switch(type){

            case "1":
                sendPage('/B_story'); 
            break;
            case "2":
                sendPage('/L_story'); 
            break;
            case "3":
                sendPage('/T_story'); 
            break;
        }
        
		initDetail();
		
	}else{

        history_initDetail();
    }
    $(window).scroll(function() {
			
        scrolltop=$(window).scrollTop();
        //console.log(scrolltop+"::::"+$(".box-content").offset().top);

        if ($('#list').length == 1) {
            if(scrolltop>=$(".box-content").offset().top-126 && scrolltop<$(".box-content").height()){
                $(".fixed_bg .bg_beer").css({"position":"absolute","top":scrolltop-$(".box-content").offset().top+340})
            }else if(scrolltop>$(".box-content").height()-70){
                $(".fixed_bg .bg_beer").css({"position":"absolute","bottom": "20px","top":"auto"})
            }else if(scrolltop<=740){
                $(".fixed_bg .bg_beer").css({"position":"absolute","bottom": "auto","top":"340px"})
            }
        }
    });

});    


    function initList() {
        $('#video').YTPlayer({
            fitToBackground: true,
            videoId: 'VXw1Dbmhc_E'
        });
    // func.setCookie('productsHash', '', 1);
    
    /* transition
    ----------------------------------------*/
        windowH=$(window).height();
        var transitionOpacityElements = [
            '#news .navigation li a',
            '#news .catalog li .pic img',
            '#news .pagination a'
            // '#products .navigation li a',
            // '#products .catalog li'
        ];
        // windowH=$(window).height();
        // var listh=windowH-138-90;
        // $("#list").css({'height':listh});
    
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
            $('.box-top-inner:not(.shadow)').animate({'top':10}, 1000);
            $('.box-top-inner.shadow').animate({'top': 20}, 1000);
        }, 3500);
        listAnimateTimeout[7] = setTimeout(function() {
            if ( $(window).height() <= 917 ) {
                $('.desc,.desc2').css({'top': $('.natural').position().top + $('.natural').height() + (40 * ($(window).height() / 917) * 0.25)});
            } else {
                $('.desc,.desc2').css({'top': $('.natural').position().top + $('.natural').height() + 40});
            }
            $('.desc .line').eq(0).animate({'opacity': 1}, 450);
        }, 4000);
        listAnimateTimeout[8] = setTimeout(function() { $('.desc .line').eq(1).animate({'opacity': 1}, 450);}, 4300);
        listAnimateTimeout[9] = setTimeout(function() { $('.desc .line').eq(2).animate({'opacity': 1}, 450); }, 4600);
        listAnimateTimeout[10] = setTimeout(function() { $('.desc .line').eq(3).animate({'opacity': 1}, 450); }, 4900);
        listAnimateTimeout[11] = setTimeout(function() { $('.godown').animate({'opacity': 1}, 450);
         $(".ytplayer-container").css({"top": -$(".box-top-inner").height()/3});
         }, 5000);
        listAnimateTimeout[12] = setTimeout(function() {
            
            $("#list .box-top-inner.shadow").fadeOut();
            $('#list .box-title .bg .bg3').css({'opacity': 1});  
            $("#list .desc,#list .arrow").fadeOut();
            $("#list .beer img,.caption1,.caption2,.natural,#list .title").delay(500).addClass("filter_y");
            $("#list .step2 ").fadeIn();
            $('.desc2 .line').eq(0).delay(1500).animate({'opacity': 1}, 450);
            $('.desc2 .line').eq(1).delay(1800).animate({'opacity': 1}, 450);
            $('.desc2 .line').eq(2).delay(2200).animate({'opacity': 1}, 450);
            $("#list .box-top-inner .godown").css({'background-position': '0px -35px'}); 
            $('.bg2').addClass('animate2'); }, 6000);
            
        


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

    function BGflyBubble(direction, num) {
        setTimeout(function(){
            var item = '<div data-num="' + num + '" class="type' + Math.floor((Math.random() * 3) + 1) +'" style="left: ' + Math.floor((Math.random() * 100) + 0) + '%;"></div>';
            $('.fixed_bg .' + direction + ' .fly-bubble').append(item);
            BGflyBubbleEnd(direction, num);
        }, Math.floor((Math.random() * 1000) + 200));
        setTimeout(function(){
            BGflyBubble(direction, num+=1);
        }, Math.floor((Math.random() *1000) + 200));
    }
    function BGflyBubbleEnd(direction, num) {
        setTimeout(function(){
            $('.fixed_bg .' + direction + ' .fly-bubble div[data-num=' + num +']').remove();
        }, 3000);
    }
    function history_initDetail(){
        $("#history-detail .item:eq(0) .history_img img").each(function(index) {  
                    
            $(this).delay(200 * index).animate({
                'opacity': '1',
                'margin-top': '0px'
            }, 500, function() {
                
            });
            
           }); 
        $(window).scroll(function() {
			
                
         
             if( $(window).scrollTop() >=$("#history-detail .item").eq(1).offset().top-200){
                
                $("#history-detail .item:eq(1) .history_img img").each(function(index) {  
                    
                    $(this).delay(200 * index).animate({
                        'opacity': '1',
                        'margin-top': '0px'
                    }, 500, function() {
                        
                    });
                    
                   });  
            }
             if( $(window).scrollTop() >=$("#history-detail .item").eq(2).offset().top-200){
    
                $("#history-detail .item:eq(2) .history_img img").each(function(index) {  
                    
                    $(this).delay(200 * index).animate({
                        'opacity': '1',
                        'margin-top': '0px'
                    }, 500, function() {
                        
                    });
                    
                   });  
            }
    
        });




    }
    function initDetail() {
      
        /* transition
        ----------------------------------------*/
        // BGflyBubble('toleft', 1);
        // BGflyBubble('toright', 1);
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
                sendEvent('分頁_' + gaMark +'_立即抽獎', '點選_分頁_' + gaMark +'_立即抽獎', 'CSV');
        
            });
        
            $('#detail .btn-fb').click(function() {
        
                // sendEvent('分頁_' + gaMark +'_分享', '點選分頁_' + gaMark +'_分享', 'CSV');
        
                // FB.ui({
                //     method: 'feed',
                //     link: 'https://' + proj.domain + 'barbeer/CSV/2018/inner-' + detailID + '.php?utm_source=facebook&utm_medium=post_0' + detailID + '&utm_content=0721_csv&utm_campaign=csv17&v=20170712',
                //     picture: 'https://' + proj.domain + 'barbeer/CSV/2018/images/item/' + detailID + '/metaimg.jpg',
                //     name: shareTitle,
                //     description: shareDescription
                // }, function(response) {
                //     if (response && !response.error_message) {
                //         alert('分享成功，請進行Step3留言，就有機會中大獎！');
                //         sendEvent('分頁_' + gaMark +'_分享done', '點選分頁_' + gaMark +'_分享done', 'CSV');
                //     }
                // });
        
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
               
                sendEvent('KOL_' + gaMark +'_分享', '點選KOL_' + gaMark +'_分享', 'KOL');
                var str="";
                switch(detailID){

                    case "1":   
                        str="B_storyback";
                    break;
                    case "2":
                        str="L_storyback";
                    break;
                    case "3":
                        str="T_storyback"
                    break;

                }
                FB.ui({
                    method: 'feed',
                    link: 'https://' + proj.domain + 'barbeer/CSV/2018/inner-' + detailID + '.php?utm_source=facebook&utm_medium=' + str + '',
                    picture: 'https://' + proj.domain + 'barbeer/CSV/2018/images/item/' + detailID + '/metaimg.jpg',
                    name: "【分享影片即有機會得到Bar BEER獨家限量好禮】",
                    description: shareDescription
                }, function(response) {
                    if (response && !response.error_message) {
                      
                        openPopup();
                        sendEvent('KOL_' + gaMark +'_分享done', '點選_KOL_' + gaMark +'_分享', 'KOL');
                    }
                });
            
            });
            $(".close_btn").click(function(){

                closePopup();
            
            });
           
            $(".check_btn").click(function(){

                $( this ).toggleClass( "check" );
                         
            });
            $(".more_btn").click(function(){

                sendEvent('填寫資料', '點選_填寫資料＿看其他', 'KOL');
            });
            $(".send_btn").click(function(){

                if(check_form()){

                sendEvent('填寫資料＿完成', '點選＿填寫資料_完成', 'KOL');
                var _str="name="+$(".form .name").val()+"&phone="+$(".form .tel").val()+"&email="+$('.form .email').val()+"&address="+$(".form .county").val()+$(".form .district").val()+$('.form .address').val()+"&type="+type;
                $.ajax({
                            type: "POST",
                            url: "./api/sendForm.php",
                            data:_str,
                            dataType: "text",
      
                            error: function(xhr) {
      
                              console.log(xhr);
                       
                          },
                            success: function(response) {
                            
                             console.log(response);
                             if(response.slice(4)=='yes'){
                                sendPage("/finish");
                                $(".startform").fadeOut();
                                $(".form").delay(1000 ).addClass("over");
                                $(".overform").delay( 1500 ).fadeIn();
                                
                               

                             }  
                             
                        }
                       
                  });


                    
                }
                
            
            });
        }
        function check_form(){

            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            var reg2 =/[a-zA-Z0-9]/g;
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var error=[];
    
            if($(".form .name").val()=="")
            {
                alert('請填寫姓名');
                return false;
            }else if($(".form .tel").val().length!=10)
            {
                 alert('請填寫正確手機格式');
                return false;
            }else if(!/^\d+$/.test($('.form .tel').val()) ){
    
                alert('請填寫正確手機格式');
                return false;
              
            }else if(!re.test($('.form .email').val())){
    
                alert('請填寫正確Email');
                return false;
              
            }else if($(".form .county").prop('selectedIndex')<=0){
    
                alert("請選擇城市");
                return false;
    
            }else if($(".form .district").prop('selectedIndex')<=0){
    
                alert("請選擇區域");
                
                return false;
            }else if($('.form .address').val()=="")
            {
    
                 alert("請填寫地址");
                 return false;
            }else if(!$(".form .check_btn").hasClass("check")){

                alert("請勾選同意活動辦法");
                return false;
            }
    
            return true;
        }
    
    function openPopup(){

        $(".check_btn").removeClass("check");
        $(".startform").css({'display' : 'block'});
        $(".overform").css({'display' : 'none'});
        $(".form").removeClass("over");
        $("html,body").css({'overflow' : 'hidden'});
            
            $("#overlay,#popup").fadeIn(function(){
                      
        });

        sendPage("/personal");


    } 
    function closePopup(){

        $("html,body").css({'overflow' : ''});
        $("#overlay,#popup").fadeOut(function(){
        
        });


    } 

    function listActive() {
        $('.godown').click(function() {
    
            $('html, body').animate({scrollTop: $('.box-content').offset().top - 58}, 1000);
    
        });
    
        $('.group-content li').click(function(){
    
            switch ($(this).index()) {
                case 0:
                    var gaName = '芭特芙萊';
                    break;
                case 1:
                    var gaName = '老屋顏';
                    break;
                case 2:
                    var gaName = '甜玉軒';
                    break;
            }		
            sendEvent('首頁_' + gaName, '點選_首頁_' + gaName, '首頁');
    
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
            $('.desc,.desc2').css({'top': $('.natural').position().top + $('.natural').height() + (40 * ($(window).height() / 917) * 0.25)});
        } else {
            $('.desc,.desc2').css({'top': $('.natural').position().top + $('.natural').height() + 40});
        }
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
       
        change_beer();

       $(".ytplayer-container").css({"top": -$(".box-top-inner").height()/3});


    });
 function change_beer(){

//    if($(window).width()>=1620){
//         $(".fixed_bg .bg_beer").css({"transform":"scale("+$(window).width()/2000+")"});
//     }else{
//         $(".fixed_bg .bg_beer").css({"transform":"scale("+$(window).width()/2600+")"});
//     }

 }