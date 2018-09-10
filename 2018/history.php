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
    <title>台灣麒麟 KIRIN | Bar Beer 車庫精神‧翻轉世代</title>
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
                                力求保留老屋風景的懷舊信念，<br>
                                帶給部落青年生機的麵包鬥魂，<br>
                                以及用熱血封存台灣在地原生水果的果醬小宇宙！<br>
                                這群一路堅持、勇往直前、閃耀不滅的翻轉世代，<br>
                                2018年，Bar BEER 邀你一起直擊他們如何逆轉困境再創新。<br>
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
                                2017 年 Bar BEER 前往台北三峽、苗栗苑裡、台東太麻里<br>
                                一探有志才俊、愛鄉青年、陽光牧師的歸鄉奮鬥路！<br>
                                堅持到底，就是他們返巢築夢的信念！<br>
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
                                致力公益環境，發掘自我價值<br>
                                在閃耀的信念下，一切的熱血行動都能綻放光芒！<br>
                                2016年，Bar BEER 由扶助弱勢、動物關懷、生態維護出發<br>
                                從熟悉的城市，邁開實踐車庫精神的腳步！<br>
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