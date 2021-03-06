<?
	include('../../../config.php');
	start_session(7*24*60*60);
	include('js/data.php');
	$id = 1;
	$page = '';
	if (!$data[$id]['title']) {
		header("Location:./");
		exit;
	}

	include('../../../include/head.php');
	if($_SESSION['city']){
		$formCity = '"'.$_SESSION['city'].'"';
	}else{
		$formCity = 'null';
	}
	if($_SESSION['area']){
		$formArea = '"'.$_SESSION['area'].'"';
	}else{
		$formArea = 'null';
	}
	
?>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-15575589-7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-15575589-7');
</script>

<meta name="description" content="<?=$data[$id]['shareDescription']?>">
<meta name="keywords" content="KIRIN Bar BEER,Bar, 車庫精神, 翻轉世代, 青年">

<meta property="og:site_name" content="<?=$data[$id]['innerTitle']?>" /> 
<meta property="og:title" content="<?=$data[$id]['shareTitle']?>" /> 
<meta property="og:description" content="<?=$data[$id]['shareDescription']?>" />
<meta property="og:image" content="https://www.kirin.com.tw/barbeer/CSV/2018/images/item/<?=$id?>/metaimg.jpg" />
<meta property="og:url" content="https://www.kirin.com.tw/barbeer/CSV/2018/inner-<?=$id?>.php" />
<meta property="fb:app_id" content="1830556680498946">

<title><?=$data[$id]['title']?></title>
<link rel="stylesheet" type="text/css" href="css/reset.css">
<!-- <link rel="stylesheet" type="text/css" href="css/common.css"> -->
<link rel="stylesheet" type="text/css" href="css/style.css">
<script>
	var detailID = <?=$id?>,
		shareTitle = "<?=$data[$id]['shareTitle']?>",
		shareDescription = "<?=$data[$id]['shareDescription']?>",
		gaMark = "<?=$data[$id]['gaMark']?>";
</script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<!-- <script type="text/javascript" src="../../../js/libs/swipe.js"></script> -->
<script src="js/tw-city-selector.min.js"></script>
<script type="text/javascript" src="js/index.js?v=2"></script>
	<!-- Facebook Pixel Code -->
	<script>
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1857929141121316'); // Insert your pixel ID here.
    fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1857929141121316&ev=PageView&noscript=1"/></noscript>
    <!-- DO NOT MODIFY -->
    <!-- End Facebook Pixel Code -->


</head>

<body id="news">
	<?php
		include('../../../include/track.php');
	?>
	<script src="//cdn.doublemax.net/js/rtid.js"></script>
	<script src="//dmp.eland-tech.com/dmpreceiver/eland_tracker.js"></script>
	<script>
		clickforce_rtid("8269001");
		ElandTracker.Track({'source':'CAP8269',
		'trackType':'view',
		'trackSubfolderDepth':3,
		'targetType':'usual'
		});
	</script>




	<?php
		include('../../../include/track.php');
	?>
	<!-- <script src="//cdn.doublemax.net/js/rtid.js"></script>
	<script src="//dmp.eland-tech.com/dmpreceiver/eland_tracker.js"></script>
	<script>
		clickforce_rtid("8269001");
		ElandTracker.Track({'source':'CAP8269',
		'trackType':'view',
		'trackSubfolderDepth':3,
		'targetType':'usual'
		});
    </script> -->
	<div id="wrap">
		<div id="wrap2">
			<?php
				include('../../../include/header.php');
			?>
			<div id="main" class='detail'>

				<div class="inner">
					<div id="detail" class="box">
						<div class="box-title">
						<div class="form">
                                <div class="startform">
                                        <input class="name form_style" type="text" placeholder="" value="<?=$_SESSION['uname']?>">
                                        <input class="tel form_style" type="tel" placeholder="" maxlength="10" value="<?=$_SESSION['tel']?>">
                                        <input class="email form_style" type="email" placeholder="" value="<?=$_SESSION['email']?>">
                                        <div class="my-selector-c" >
                                            
                                                <select class="county form_style"></select>
                                            
                                            
                                                <select class="district form_style"></select>
                                            						
                                        </div>
                                        <input class="address form_style" type="text" placeholder="" value="<?=$_SESSION['addr']?>">
                                        <div class="check_btn"></div>
                                        <div class="rule_btn">
                                            <a href="https://www.kirin.com.tw/privacy.php" target="_blank"></a>
                                        </div>
                                        <div class="send_btn">
                                            <img src="images/index/send_form.png" alt="">
                                        </div>
                                    

                                    </div>
                                    <div class="overform">
                                        <div class="content">
                                            <div class="title">資料已成功送出!</div>
                                            <span>中獎名單將於2018/10/29於活動網站公布</span>
                                        </div>
                                        <div class="more_btn">
                                            <a href="./<?=$page?>" target="_blank">
                                                <img src="images/index/more_btn.jpg" alt="">	
                                            </a>
                                        </div>
                                    </div>
                                    <!-- <div class="close_btn change_btn">
                                            <img src="images/index/close_btn.png" alt="">
                                    </div> -->
                                </div>
						</div>
						<div class="box-content">
							
							
							<a class="back" href="./<?=$page?>?t=back">返回 BarBEER 車庫精神 翻轉世代 列表頁</a>
						</div>
					</div>
				</div>
				<div class="bg">	
							<div class="fixed_bg">	
								<div class="bg_beer toleft">
									<div class='fly-bubble'></div>
									<img src="images/index/bg_beer.png" alt="">
								</div>
								<div class="bg_beer toright">
										<div class='fly-bubble'></div>
								    	<img src="images/index/bg_beer2.png" alt="">
									</div>
								</div>
							</div>
			</div>
			<div id="mask"></div>
			
		</div>
		<?php
			include('../../../include/footer.php');
		?>
	</div>

	<div id="fb-root"></div>
	<!-- <script>(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.9&appId=1830556680498946";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script> -->

	<script>
		var type = "<?php echo $id; ?>";
		//console.log(type);
		new TwCitySelector({
			el: ".my-selector-c",
			elCounty: ".county", // 在 el 裡查找 dom
			elDistrict: ".district", // 在 el 裡查找 dom ,
			selectedCounty: <?=$formCity?>, // 預設選擇的縣市名稱
			selectedDistrict: <?=$formArea?>, // 預設選擇的區域名稱
		});

		var tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		var player,
		    prevYoutubeData = [ 0, 0 ];
		function onYouTubeIframeAPIReady() {
			player = new YT.Player('video', {
				height: '718',
				width: '413',
				videoId: '<?=$data[$id]['video']?>',
				playerVars: {
					iv_load_policy: 0,
					modestbranding: 1,
					rel: 0,
					showinfo: 0,
					fs: 1
				},
				events: {
					'onStateChange': onPlayerStateChange
				}
			});
		}

		function onPlayerStateChange(event) {
			switch (event.data) {
				case -1:
					isYoutubeStart = true;
					break;
				case 1:
					if ( ( prevYoutubeData[0] == -1 && prevYoutubeData[1] == 3 ) || ( prevYoutubeData[1] == 0 ) || ( player.getCurrentTime() >= 0 && player.getCurrentTime() <= 0.5 ) ) {
						sendEvent('KOL_' + gaMark +'_影片', '點選_KOL_' + gaMark +'_影片', 'KOL');
					}
					break;
			}
			prevYoutubeData[0] = prevYoutubeData[1];
			prevYoutubeData[1] = event.data;
		}
	</script>
</body>
</html>
