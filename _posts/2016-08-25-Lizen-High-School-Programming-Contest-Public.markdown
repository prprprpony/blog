---
layout: post
title:  "立人高中程式設計校內排名賽（亂入心得暨題解）"
date:   2016-08-25 14:51:32 +0800
categories: contest
comments: true
---
[懶人包(README.md)](https://github.com/prprprpony/oj/tree/master/Lizen-High-School-Programming-Contest-Public-2016-08-20)  
[題目](https://github.com/yqkqknct/Lizen-High-School-Programming-Contest-Public/blob/master/statement.pdf)  
在 19 號晚上，yqkqknct 突然密我，丟了這個[連結](https://www.facebook.com/groups/1500275723594463/permalink/1747026845586015/)給我，問我要不要來踢館  
於是乎隔天早上早餐到午餐時間都在 coding  
比賽時因為預測題目不會太難就照順序寫了www  
結果還不錯，解了 5 題，剩一題構造題只拿部份分，最後排名第 2  
覺得好像多了一點信心  
雖然題目大多是經典考古題就是了

1.  A4:  
	\\(\lceil\log_2 a\rceil + \lceil\log_2 b\rceil\\)  
<script src="https://gist-it.appspot.com/https://github.com/prprprpony/oj/blob/master/Lizen-High-School-Programming-Contest-Public-2016-08-20/A4.cpp"></script>

2.  A10:  
	經典題：最大化最小值  
	因為最小值的最大值以下都剪的出來，以上都剪不出來，具單調性  
	二分搜答案即可  

	檢查剪不剪的出一個最小值 v 時採 greedy 作法  
	把每張紙條都不停的剪 v，剪到再剪下去會比 v 小為止

	\\(\text{Time Complexity:} O(n \log L), L = \min \\{ l_i | i \in N, 1 \le i \le n \\} \\) 
<script src="https://gist-it.appspot.com/https://github.com/prprprpony/oj/blob/master/Lizen-High-School-Programming-Contest-Public-2016-08-20/A10.cpp"></script>

3.  A53:  
	經典題：dp  
	這...就是 dp 的第 1 題練習題那種最初的感動（？）的感覺  
	雖然 \\(10^6\\) 應該不會 MLE，還是手癢寫了 rolling array  
	第 22 行 g[b][c] 什麼的絕對不是故意的  
	這一切都是命運石之門的選擇！

	\\(\text{Time Complexity:} O(nm)\\) 
<script src="https://gist-it.appspot.com/https://github.com/prprprpony/oj/blob/master/Lizen-High-School-Programming-Contest-Public-2016-08-20/A53.cpp"></script>

4.  A9:  
	數學題兼模擬題，模擬的出來有 7 分，柿子裂的出來就有滿分惹  
	模擬部份我覺得程式碼很清楚，就不解釋惹  
	總之跟河內塔有八成像

	數學部份是高一範圍R  
	令 \\(A_i\\) 表示把 \\([1,i]\\) 都拿走的步驟數， \\(B_i\\) 表示把 \\([1,i]\\) 放回來所需的步驟數  
	則  
	$$
		A_0 = 0\\
		A_1 = 1\\
		A_i = A_{i-2} + 1 + B_{i-2} + A_{i-1}\\ 
		B_0 = 0\\
		B_1 = 1\\
		B_i = B_{i-1} + A_{i-2} + 1 + B_{i-2}
	$$ 

	顯然 \\( A_i = B_i\\)  
	故問題變成求 \\( A_i \\) 的公式  
	$$
		\require{cancel}
		A_i = A_{i-1} + 2A_{i-2} + 1
		\\[2ex]
		A_i + A_{i-1} + 1\\
		= 2(A_{i-1} + A_{i-2} + 1)\\
		= 2^{i-1}(A_1 + A_0 + 1)\\
		= 2^{i-1} \times 2 = 2^i
		\\[2ex]
		\begin{align}
			\text{if i is odd} & 
			\\[1.3ex]
			\cancel{A_1} + A_0 + \cancel{1} & = 2^1\\
			-\cancel{A_2} - \cancel{A_1} - \cancel{1} & = -2^2\\
			\cancel{A_3} + \cancel{A_2} + \cancel{1} & = 2^3\\
			-\cancel{A_4} - \cancel{A_3} - \cancel{1} & = -2^4\\
			\cancel{A_5} + \cancel{A_4} + \cancel{1} & = 2^5\\
			& \vdots\\
			-\cancel{A_{i-1}} - \cancel{A_{i-2}} - \cancel{1} & = -2^{i-1}\\
			+) A_i + \cancel{A_{i-1}} + 1 & = 2^{i}\\
			\hline\\
			A_i + 1 & = \frac {2 \times [(-2)^i - 1]} {-2 - 1}\\
			A_i & = \frac {2^{i+1} - 1} {3}
			\\[2ex]
			\text{if i is even} &
			\\[1.3ex]
			A_{i+1} + A_i + 1 & = 2^{i+1}\\
			\frac {2^{i+2} - 1} {3} + A_i + 1 & = 2^{i+1}\\
			A_i & = \frac {2^{i+1} - 2} {3}
		\end{align}
	$$

	完畢！
<script src="https://gist-it.appspot.com/https://github.com/prprprpony/oj/blob/master/Lizen-High-School-Programming-Contest-Public-2016-08-20/A9.cpp"></script>

5. A3:  
	感覺很難的構造題  
	於是採用本地建表大法  
	寫個 \\(O(MN^2)\\) 的暴搜跑 \\(M = 20, N = 10^5\\) 的 case  
	放它跑個十幾二十分鐘（我沒測，應該沒那麼久  
	先去寫 p6  
	然後回來把暴搜結果塞進 code 裡上傳  
	結果發現 code 檔案大小限制 \\(10^5\\) bytes  
	想辦法把暴搜結果塞進 [\\(10^5\\) bytes 裡](https://github.com/prprprpony/oj/blob/master/Lizen-High-School-Programming-Contest-Public-2016-08-20/A3/A3ans.cpp) (電腦跟我的一樣爛的話點進去瀏覽器可能會當當 der，慎入！)  
	就成功喇到 <del>8.7</del> 8.67 分惹  
	yay

	正解在[這裡](https://www.facebook.com/groups/1500275723594463/permalink/1747026845586015/?comment_id=1747332988888734&reply_comment_id=1747334422221924&comment_tracking=%7B%22tn%22%3A%22R4%22%7D)，[原題來自數學愛好者](https://www.facebook.com/groups/204862582895831/permalink/1077609172287830/?comment_id=1088819931166754&comment_tracking=%7B%22tn%22%3A%22R2%22%7D)，下一樓有證明，我看不懂證明就是了QAQ
<script src="https://gist-it.appspot.com/https://github.com/prprprpony/oj/blob/master/Lizen-High-School-Programming-Contest-Public-2016-08-20/A3/A3.cpp"></script>

6.  ATP:  
	在比賽時我照順序寫，在 debug A9 時看到一堆人先 AC 了這題  
	稍微喵一下沒什麼想法，就繼續照順序寫惹 www  

	總之就是 greedy 
	喵
	
	若有兩個向右看的人，先幹掉左邊的那個較好  
	若有兩個向左看的人，先幹掉右邊的那個較好

	于是乎就得到了這個算法
	
<script src="https://gist-it.appspot.com/https://github.com/prprprpony/oj/blob/master/Lizen-High-School-Programming-Contest-Public-2016-08-20/ATP.cpp"></script>
