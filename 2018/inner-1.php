<?
	//include('../../../config.php');
	include('js/data.php');
	$id = 1;

	if (!$data[$id]['title']) {
		header("Location:./");
		exit;
	}

	// include('../../../include/head.php');
?>
<meta name="description" content="<?=$data[$id]['shareDescription']?>">
<meta name="keywords" content="KIRIN,台灣麒麟,歡笑,Bar,bar,beer,公益,甘樂文創,苑裡掀海風,八穀農糧手工作坊,甘樂,苑里,八穀,耀就來Bar,車庫精神,閃耀啟程,返巢世代,三峽,藍染,無毒,饅頭,孝念米,免費,抽獎,林峻丞,熱血,返鄉,返鄉青年">

<meta property="og:site_name" content="<?=$data[$id]['shareTitle']?>" /> 
<meta property="og:title" content="<?=$data[$id]['shareTitle']?>" /> 
<meta property="og:description" content="<?=$data[$id]['shareDescription']?>" />
<meta property="og:image" content="https://www.kirin.com.tw/barbeer/CSV/2018/images/item/<?=$id?>/metaimg.jpg?v=20170712" />
<meta property="og:url" content="https://www.kirin.com.tw/barbeer/CSV/2018/inner-<?=$id?>.php" />
<meta property="fb:app_id" content="1830556680498946">

<title><?=$data[$id]['title']?></title>
<link rel="stylesheet" type="text/css" href="css/reset.css">
<link rel="stylesheet" type="text/css" href="css/common.css">
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
<script type="text/javascript" src="js/index.js"></script>



</head>

<body id="news">

<div id="overlay">
    <div id="popup">
            <div class="cover">
                        
            </div>
            <div class='container'>
				
				<div class="form">
					<div class="startform">
						<input class="name form_style" type="text" placeholder="">
						<input class="tel form_style" type="tel" placeholder="" maxlength="10">
						<input class="email form_style" type="email" placeholder="">
						<div class="my-selector-c">
							<div>
								<select class="county form_style"></select>
							</div>
							<div>
								<select class="district form_style"></select>
							</div>						
						</div>
						<input class="address form_style" type="text" placeholder="">
						<div class="check_btn"></div>
						<div class="rule_btn">
							<a href=""></a>
						</div>
						<div class="send_btn">
							<img src="images/index/send_form.png" alt="">
						</div>
					

					</div>
					<div class="overform">
						<div class="content">
							<div class="title">資料已成功送出!</div>
							<span>中獎名單將於2018/00/00於活動網站公布</span>
						</div>
						<div class="more_btn">
							<img src="images/index/more_btn.png" alt="">
						</div>
					</div>
					<div class="close_btn change_btn">
							<img src="images/index/close_btn.png" alt="">
					</div>
				</div>

				
                
            </div>
                
    </div>
</div>



	<?php
		// include('../../../include/track.php');
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
			//	include('../../../include/header.php');
			?>
			<div id="main" class='detail'>
				
				<div class="inner">
					<div id="detail" class="box">
						<div class="box-title">
							<p class="title"><?=$data[$id]['title']?></p>
							<p class="date"><?=$data[$id]['date']?></p>
						</div>
						<div class="box-content">
							<div class="video">
								<div id="video"></div>
							</div>
                            <!-- <div class="btn-active">抽獎活動已結束</div> -->
                            <div class="fb_btn">
                                <img src="images/index/fb_btn.png" alt="">
                            </div>
							<div id="article">
								<?=$data[$id]['article']?>
							</div>
							<div class="links">
								<?
									if ( $id != 1 ) {
										$prevId = $id-1;
									} else {
										$prevId = count($data);
									}
									if ( $id != count($data) ) {
										$nextId = $id+1;
									} else {
										$nextId = 1;
									}
									$data[$prevId]['title'] = substr($data[$prevId]['title'],  strpos($data[$prevId]['title'], '│ ')+3);
									$data[$nextId]['title'] = substr($data[$nextId]['title'],  strpos($data[$nextId]['title'], '│ ')+3);
								?>
								<a class="prev" href="https://www.kirin.com.tw/barbeer/CSV/2018/inner-<?=$prevId?>.php">上一篇：<?=$data[$prevId]['title']?></a>
								<a class="next" href="https://www.kirin.com.tw/barbeer/CSV/2018/inner-<?=$nextId?>.php">下一篇：<?=$data[$nextId]['title']?></a>
							</div>
							
							<a class="back" href="https://www.kirin.com.tw/barbeer/CSV/2018/">返回 BarBEER 車庫精神 翻轉世代 列表頁</a>
						</div>
					</div>
				</div>
				<div class="bg">	
							<div class="fixed_bg">	
								<div class="bg_beer toleft">
									<div class='fly-bubble'>
										
									</div>
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
			//include('../../../include/footer.php');
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
			elDistrict: ".district" // 在 el 裡查找 dom
		
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
					fs: 0
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
						sendEvent('分頁_' + gaMark +'_影片', '點選分頁_' + gaMark +'_影片', 'CSV');
					}
					break;
			}
			prevYoutubeData[0] = prevYoutubeData[1];
			prevYoutubeData[1] = event.data;
		}
	</script>
</body>
</html>
