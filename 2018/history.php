<?
	include('../../../config.php');
	include('js/data.php');
	$id = 1;

	if (!$data[$id]['title']) {
		header("Location:./");
		exit;
	}

	include('../../../include/head.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>歷年車庫精神｜ KIRIN Bar Beer</title>
    <meta name="description" content="車庫為世界上孕育各種夢想的起點，KIRIN Bar BEER支持年輕人創造未來，展現獨有的車庫精神！協助年輕人實踐自己的夢想，讓更多人看見他們的努力。">
	<meta name="keywords" content="車庫精神,Bar BEER,夢想">
	<meta property="og:site_name" content="歷年車庫精神｜ KIRIN Bar Beer" /> 
	<meta property="og:title" content="歷年車庫精神｜ KIRIN Bar Beer" /> 
	<meta property="og:description" content="車庫為世界上孕育各種夢想的起點，KIRIN Bar BEER支持年輕人創造未來，展現獨有的車庫精神！協助年輕人實踐自己的夢想，讓更多人看見他們的努力。" />
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <!-- <link rel="stylesheet" type="text/css" href="css/common.css"> -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/history.css">
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
</head>
<body>
    <div id="wrap">
        <div id="wrap2">
			<?php
				include('../../../include/header.php');
			?>
         <div id="main" class='detail'>
            <div class="inner">
				<div id="history-detail">
                       <div class="title">
                            歷年車庫精神
                        </div>
                    <div class="item">
                        
                        <div class="content">
                            <div class="subTitle">2018車庫精神</div>
                            <div class="line"></div>
                            <div class="text">
                                <br>
                                力求保留懷舊窗花風景的【老屋顏工作室】、<br>
                                帶給部落青年奮鬥希望的【芭特芙萊手工烘焙坊】、<br>
                                用熱情將在地水果封存為果醬的【甜玉軒】，<br>
                                這群一路堅持、勇往直前、閃耀不滅的翻轉世代，<br>
                                2018年，Bar BEER 邀你一起直擊他們如何逆轉困境再創新！<br>
                                <br>
                            </div>
                            
                            <a href="https://www.kirin.com.tw/barbeer/CSV/2018/index_test.php" target="_blank"><div class="seemore">了解更多</div></a>
                            <div class="history_img history_img1">
                                <img src="images/history/history_img1-1.png" alt="">
                                <img src="images/history/history_img1-2.png" alt="">
                                <img src="images/history/history_img1-3.png" alt="">
                            </div>
                          
                        </div>
                    </div>
                    <div class="item">
                        
                        <div class="content">
                            <div class="subTitle">2017車庫精神</div>
                            <div class="line"></div>
                            <div class="text">
                                <br>
                                返巢，是為了回饋曾經養育我們的故土！<br>
                                2017 年 Bar BEER 前往台北三峽、苗栗苑裡、台東太麻里，<br>
                                一探為社區再造努力的【甘樂文創】、<br>
                                以友善農業賦予土地溫暖的【苑裡掀海風】、<br>
                                以及從農糧轉型為部落創造更多方向的【八穀農糧手作工坊】，<br>
                                由他們的歸鄉奮鬥路，見證堅持到底的逐夢信念！<br>
                                <br>
                            </div>
                            
                            <a href="https://www.kirin.com.tw/barbeer/CSV/2017/" target="_blank"><div class="seemore">了解更多</div></a>
                            <div class="history_img history_img2">
                                <img src="images/history/history_img2-1.png" alt="">
                                <img src="images/history/history_img2-2.png" alt="">
                                <img src="images/history/history_img2-3.png" alt="">
                            </div>
                            
                        </div>
                    </div>
                    <div class="item">
                        
                        <div class="content">
                            <div class="subTitle">2016車庫精神</div>
                            <div class="line"></div>
                            <div class="text">
                                <br>
                                閃耀信念下，只要有熱血就能展開行動！<br>
                                2016年，Bar BEER 從你我熟悉的城市出發，<br>
                                與扶助弱勢族群的【人生百味】、<br>
                                力主動物關懷的【浪浪別哭】、<br>
                                維護海岸生態的【RE-THINK】攜手合作，<br>
                                從發揚公益價值的行動，邁開實踐車庫精神的腳步！<br>
                                <br>
                            </div>
                            
                            <!-- <a href=""><div class="seemore">了解更多</div></a> -->
                            <div class="history_img history_img3">
                                <img src="images/history/history_img3-1.png" alt="">
                                <img src="images/history/history_img3-2.png" alt="">
                                
                            </div>
                            
                        </div>
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
        <?php
			include('../../../include/footer.php');
		?>
    </div>
</body>
</html>