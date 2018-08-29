<?
	include('../../../../config.php');
	include('../../../../barbeer/CSV/2017/js/data.php');
	$id = 3;

	if (!$data[$id]['title']) {
		header("Location:./");
		exit;
	}
	
	include('../../../include/head.php');
?>
<meta name="description" content="<?=$data[$id]['shareDescription']?>">
<meta name="keywords" content="KIRIN,台灣麒麟,歡笑,Bar,bar,beer,公益,甘樂文創,苑裡掀海風,八穀農糧手工作坊,甘樂,苑里,八穀,耀就來Bar,車庫精神,閃耀啟程,返巢世代,三峽,藍染,無毒,饅頭,孝念米,免費,抽獎,林峻丞,熱血,返鄉,返鄉青年">

<meta property="og:site_name" content="<?=$data[$id]['shareTitle']?>" /> 
<meta property="og:title" content="<?=$data[$id]['shareTitle']?>" /> 
<meta property="og:description" content="<?=$data[$id]['shareDescription']?>" />
<meta property="og:image" content="https://www.kirin.com.tw/barbeer/CSV/2017/images/item/<?=$id?>/metaimg.jpg?v=20170712" />
<meta property="og:url" content="https://www.kirin.com.tw/barbeer/CSV/2017/inner-<?=$id?>.php" />
<meta property="fb:app_id" content="1830556680498946">

<title><?=$data[$id]['title']?></title>
<link rel="stylesheet" type="text/css" href="css/index.css?v=201707192">
<script>
	var detailID = <?=$id?>,
		shareTitle = "<?=$data[$id]['shareTitle']?>",
		shareDescription = "<?=$data[$id]['shareDescription']?>",
		gaMark = "<?=$data[$id]['gaMark']?>";
</script>
<script type="text/javascript" src="../../../../js/libs/swipe.js"></script>
<script type="text/javascript" src="js/index.js?v=20170725"></script>

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
		clickforce_rtid("8268001");
		ElandTracker.Track({'source':'CAP8268',
		'trackType':'view',
		'trackSubfolderDepth':3,
		'targetType':'usual'
		});
	</script>
	<div id="wrap">
		<?php
			include('../../../include/header.php');
		?>
		<div id="wrap2">
			<div id="main" class="detail">
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
							<div class="btn-active">抽獎活動已結束</div>
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
								?>
								<a class="prev" href="https://www.kirin.com.tw/barbeer/CSV/2017/inner-<?=$prevId?>.php">上一篇</a>
								<a class="next" href="https://www.kirin.com.tw/barbeer/CSV/2017/inner-<?=$nextId?>.php">下一篇</a>
							</div>
							<div class="rule">
								<div class="rule-info">
									<div class="title">抽獎活動辦法</div>
									<div class="rule-content">
										【活動方式】<br>
										‧對象與資格：年滿18歲以上之全體國民<br>
										‧時間：2017/07/21(五)~ 2017/08/20(日)<br>
										‧方法：於2017/08/20(日)截止前，依下方「簡單三步驟」完成參與活動，即取得抽獎資格<br>
										‧得獎公布： 2017/08/25(五)於官網公布名單<br>
										‧詳細活動辦法：<a href="<?=$data[$id]['ruleUrl']?>" target="_blank"><?=$data[$id]['ruleUrl']?></a><br>
										‧Bar BEER提醒您：禁止酒駕，未滿18歲請勿飲酒<br>
										<br>
										【活動贈品】<br>
										<?=$data[$id]['award']?>
									</div>
									<div class="rule-image">
										<?  
											for($i=1 ; $i<=$data[$id]['ruleImageNum'] ; $i++){
												$item .= '<div class="item"><img src="images/item/'.$id.'/inner-img'.str_pad($i,2,'0',STR_PAD_LEFT).'.jpg"></div>';
											}
											echo $item;
										?>
									</div>
								</div>
								<div class="rule-step">
									<div class="title">簡單<span class="font-25px">3</span>步驟 完成抽獎資格</div>
									<div class="item">
										<div class="title"><span class="font-15px black">Step1.</span> 按BarBEER粉絲團讚</div>
										<div class='fb-like-wrap'>
											<div class="fb-like" data-href="https://www.facebook.com/kirinbar/" data-width="80" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
										</div>
									</div>
									<div class="item">
										<div class="title"><span class="font-18px black">Step2.</span> <?=$data[$id]['ruleStep2']?></div>
										<div class="btn-fb">Facebook 分享</div>
									</div>
									<div class="item">
										<div class="title"><span class="font-18px black">Step3.</span> <?=$data[$id]['ruleStep3']?>　　　<歡迎Tag好友，響應公益活動抽大獎唷~></div>
										<div class='fb-comments-wrap'>
											<div class="fb-comments" data-href="https://www.kirin.com.tw/barbeer/CSV/2017/inner-3.php" data-numposts="5"></div>
										</div>
									</div>
								</div>
							</div>
							<a class="back" href="https://www.kirin.com.tw/barbeer/CSV/2017/">返回首頁</a>
						</div>
					</div>
				</div>
			</div>
			<?php
				include('../../../include/footer.php');
			?>
		</div>
	</div>
	<?php
		include('../../../include/menu.php');
		include('../../../include/rotate.php');
	?>

	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.9&appId=1830556680498946";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));</script>

	<script>
		var tag = document.createElement('script');

		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		var player,
		    prevYoutubeData = [ 0, 0 ];
		function onYouTubeIframeAPIReady() {
			player = new YT.Player('video', {
				height: '179',
				width: '100%',
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
