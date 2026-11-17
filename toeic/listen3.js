/* Part 2 擴充（2026.11）：60 題原創應答問句，多放正式考試常見的間接回答、直述句、否定問句、附加問句和選擇問句。
   格式和 bank2.js 一樣：[題目, [三個回答], 正解, 詳解]，翻譯放 ZH2。音檔是 audio/p2-76 以後。 */
(function () {
  const add2 = (q, opts, ans, expl, qz, oz) => { P2.push([q, opts, ans, expl]); ZH2.push([qz, oz]); };

  /* ---------- Wh 問句：間接回答 ---------- */
  add2("When will the new software be installed?", ["The IT team hasn't decided yet.", "It's on the third floor.", "Yes, it was very expensive."], 0, "When 問時間，正解沒有直接給時間，而是說「還沒決定」，這是多益最常見的間接回答。Wh 問句不能用 Yes 回答。", "新軟體什麼時候會安裝？", ["IT 團隊還沒決定。", "在三樓。", "是的，它很貴。"]);
  add2("Where are the extra name tags?", ["Did you look in the supply cabinet?", "Yes, they're extra large.", "Tag me in the photo."], 0, "Where 問地點，正解反問有沒有找用品櫃，間接回答。extra 和 tag 都是重複字陷阱。", "多的名牌在哪裡？", ["你找過用品櫃了嗎？", "是的，是特大號。", "在照片裡標記我。"]);
  add2("Who's giving the welcome speech at the banquet?", ["The CEO, I believe.", "At the Grand Hotel.", "It was a warm welcome."], 0, "Who 問人，正解說應該是執行長。It was a warm welcome 重複 welcome 當陷阱。", "誰要在宴會上致歡迎詞？", ["我想是執行長。", "在 Grand 飯店。", "很熱烈的歡迎。"]);
  add2("Why hasn't the order been shipped yet?", ["We're still waiting for the customer's payment.", "By express mail.", "Yes, I ordered it yesterday."], 0, "Why 問原因，正解說明還在等付款。By express mail 答方式，Yes 不能回答 Wh 問句。", "訂單為什麼還沒出貨？", ["我們還在等客戶付款。", "用快捷郵件。", "是的，我昨天訂的。"]);
  add2("How many people are coming to the workshop?", ["Registration closes on Friday.", "It's in Room 12.", "The shop around the corner."], 0, "How many 問人數，正解說報名週五才截止（所以還不知道），間接回答。shop 和 workshop 是發音陷阱。", "有多少人會來參加工作坊？", ["報名週五才截止。", "在 12 號教室。", "轉角那家店。"]);
  add2("Which supplier offered the lowest price?", ["I haven't seen the final quotes.", "About fifteen percent.", "Yes, the price is right."], 0, "Which 問哪一家，正解說還沒看到最後的報價，間接回答。", "哪家供應商報價最低？", ["我還沒看到最終報價。", "大約百分之十五。", "是的，價格沒錯。"]);
  add2("When does the next shuttle bus leave?", ["There's a schedule by the door.", "It's a long way.", "I'll leave it on your desk."], 0, "When 問時間，正解指出門邊有時刻表。I'll leave it 重複 leave 當陷阱。", "下一班接駁車幾點開？", ["門邊有時刻表。", "路很遠。", "我會放在你桌上。"]);
  add2("Where can I find the quarterly sales figures?", ["Kevin is updating them right now.", "Every three months.", "They're selling quickly."], 0, "Where 問地點，正解說 Kevin 正在更新（所以去問他），間接回答。Every three months 是解釋 quarterly 的陷阱。", "我在哪裡可以找到季度銷售數字？", ["Kevin 現在正在更新。", "每三個月一次。", "它們賣得很快。"]);
  add2("Who approved this budget request?", ["It came from the finance director's office.", "Yes, it's been approved.", "About five thousand dollars."], 0, "Who 問人，正解說是財務長辦公室批的。", "這筆預算申請是誰核准的？", ["是財務長辦公室批的。", "是的，已經核准了。", "大約五千美元。"]);
  add2("How did the product launch go?", ["Better than we expected.", "At the convention center.", "I'll go next time."], 0, "How did... go 問事情進行得如何，回答「比預期好」。I'll go 重複 go 當陷阱。", "產品發表會進行得如何？", ["比我們預期的好。", "在會議中心。", "我下次會去。"]);
  add2("Why is the front entrance closed?", ["They're repainting the lobby.", "Close to the station.", "Through the side door."], 0, "Why 問原因，正解說大廳在重新粉刷。Close to 用 close 的另一個意思當陷阱；Through the side door 答怎麼進去，沒答原因。", "正門為什麼關了？", ["他們在重新粉刷大廳。", "靠近車站。", "從側門。"]);
  add2("What did the client think of our proposal?", ["She wants a few more details.", "I think so too.", "A business proposal."], 0, "What did... think 問看法，正解說客戶想要更多細節。I think so too 重複 think 當陷阱。", "客戶覺得我們的提案怎麼樣？", ["她想要多一點細節。", "我也這麼覺得。", "一份商業提案。"]);
  add2("How often does the bus run on weekends?", ["Every forty minutes or so.", "It ran out yesterday.", "Only on weekdays."], 0, "How often 問頻率，回答每四十分鐘左右。ran out 用 run 的另一個意思（用完）當陷阱。", "週末公車多久一班？", ["大約每四十分鐘一班。", "昨天用完了。", "只有平日。"]);
  add2("Whose turn is it to write the meeting minutes?", ["I did it last week.", "Turn left at the corner.", "About thirty minutes."], 0, "Whose turn 問輪到誰，正解說「我上週做過了」，暗示不是自己。Turn left 重複 turn，About thirty minutes 用 minutes（會議紀錄也叫 minutes）當陷阱。", "這次輪到誰寫會議紀錄？", ["我上週寫過了。", "在轉角左轉。", "大約三十分鐘。"]);
  add2("Where should we hold the year-end party?", ["How about the hotel we used last year?", "In late December.", "Hold on a second."], 0, "Where 問地點，正解用反問句提議飯店。In late December 答時間，Hold on 重複 hold 當陷阱。", "年終派對要在哪裡辦？", ["去年那家飯店怎麼樣？", "十二月底。", "等一下。"]);

  /* ---------- Yes/No 問句、否定問句、附加問句 ---------- */
  add2("Did you get a chance to look at my report?", ["I'll read it this afternoon.", "Yes, a good chance of rain.", "He reported it yesterday."], 0, "問有沒有看報告，正解說下午會看（也就是還沒看）。chance 和 report 都是重複字陷阱。", "你有空看我的報告了嗎？", ["我今天下午會看。", "是的，很可能下雨。", "他昨天回報了。"]);
  add2("Is the conference room available tomorrow morning?", ["The sales team reserved it.", "Yes, it's a large room.", "Tomorrow is fine."], 0, "問會議室明早能不能用，正解說業務部已經訂了，也就是不能用。", "明天早上會議室有空嗎？", ["業務部已經訂了。", "是的，那間很大。", "明天可以。"]);
  add2("Have you finished the inventory count?", ["Almost — just one more shelf.", "I counted on you.", "It's in the storeroom."], 0, "問盤點做完沒，正解說快好了，只剩一個架子。counted on 用 count 當陷阱。", "你盤點完了嗎？", ["快好了，只剩一個架子。", "我指望你了。", "在倉庫裡。"]);
  add2("Aren't you going to the trade show in Chicago?", ["No, Maria is going instead.", "It was a great show.", "By plane, probably."], 0, "否定問句照一般問句回答：去就 Yes，不去就 No。正解說不去，Maria 代替他去。", "你不是要去芝加哥的商展嗎？", ["沒有，改由 Maria 去。", "那場表演很棒。", "大概搭飛機。"]);
  add2("Doesn't this store accept credit cards?", ["Only for purchases over ten dollars.", "I'll accept the offer.", "A store credit."], 0, "問這家店是不是不收信用卡，正解說消費滿十美元才收。accept 和 credit 都是重複字陷阱。", "這家店不收信用卡嗎？", ["消費滿十美元才收。", "我會接受這個提議。", "店內購物金。"]);
  add2("Wasn't the delivery supposed to arrive this morning?", ["The driver called to say he's running late.", "Yes, I'm supposed to.", "It arrived in good condition."], 0, "問貨不是早上該到嗎，正解解釋司機打來說會晚到。", "貨不是今天早上該到嗎？", ["司機打來說他會晚到。", "是的，我應該要。", "送到時狀況良好。"]);
  add2("You've worked with Mr. Adams before, haven't you?", ["Yes, on the Denver project.", "He works downtown.", "Before five o'clock."], 0, "附加問句問有沒有和 Adams 合作過，正解說有，在丹佛的案子。", "你以前和 Adams 先生合作過，對吧？", ["對，在丹佛的案子。", "他在市中心工作。", "五點以前。"]);
  add2("The museum is open on Mondays, isn't it?", ["Only during the summer.", "I'm open to suggestions.", "It's a history museum."], 0, "問博物館週一有沒有開，正解說只有夏天有開。open to suggestions 是 open 的另一個意思。", "博物館週一有開，對吧？", ["只有夏天有開。", "我願意聽聽建議。", "那是歷史博物館。"]);
  add2("We need to reserve a table for the client dinner, don't we?", ["I already called the restaurant.", "Yes, it's a wooden table.", "For the client's company."], 0, "問是不是要訂位，正解說已經打給餐廳了。", "我們要為客戶晚餐訂位，對吧？", ["我已經打給餐廳了。", "對，那是木桌。", "給客戶的公司。"]);
  add2("Will you be attending the training session on Friday?", ["I have a client meeting then.", "The train was delayed.", "On the fifth floor."], 0, "問週五會不會去訓練，正解說那時要見客戶，也就是不去。train 是 training 的發音陷阱。", "你週五會參加訓練課程嗎？", ["我那時候要見客戶。", "火車誤點了。", "在五樓。"]);
  add2("Is Ms. Chen still working in the marketing department?", ["She transferred to sales last month.", "Yes, it's working now.", "A marketing plan."], 0, "問陳女士還在行銷部嗎，正解說她上個月調到業務部了。it's working 是 working 的另一個意思。", "陳女士還在行銷部嗎？", ["她上個月調到業務部了。", "是的，現在能用了。", "一份行銷計畫。"]);
  add2("Has the projector been repaired yet?", ["The technician is coming at two.", "I'll project the sales.", "Yes, a pair of them."], 0, "問投影機修好沒，正解說技術人員兩點來，也就是還沒修。project 和 pair 都是發音陷阱。", "投影機修好了嗎？", ["技術人員兩點會來。", "我會預估銷售額。", "是的，一對。"]);

  /* ---------- 選擇問句 ---------- */
  add2("Should we take a taxi or walk to the restaurant?", ["It's only five minutes away.", "Yes, we should.", "I'll take the steak."], 0, "選擇問句不能用 Yes/No 回答。正解說只要五分鐘，暗示走路就好。I'll take the steak 重複 take 當陷阱。", "我們要搭計程車還是走路去餐廳？", ["只要五分鐘就到了。", "是的，我們應該要。", "我要點牛排。"]);
  add2("Would you like the report printed or sent by e-mail?", ["E-mail is fine, thanks.", "It was a long report.", "Yes, please print it."], 0, "選擇問句，正解選了 e-mail。", "報告你要印出來還是用 e-mail 寄？", ["e-mail 就好，謝謝。", "那份報告很長。", "是的，請印出來。"]);
  add2("Do you want to meet this week or next week?", ["Either is fine with me.", "Yes, I'd like to meet him.", "It was a weak argument."], 0, "選擇問句，正解說兩個都可以，這也是常見正解。weak 和 week 同音陷阱。", "你想這週見面還是下週？", ["我都可以。", "是的，我想見他。", "那是個薄弱的論點。"]);
  add2("Is the presentation in the morning or the afternoon?", ["It's been moved to Thursday.", "A very good presentation.", "Yes, in the morning."], 0, "選擇問句，正解說改到週四了，兩個選項都沒選，但提供了更有用的資訊。", "簡報是早上還是下午？", ["已經改到週四了。", "非常好的簡報。", "是的，在早上。"]);
  add2("Should I call the client now or wait until tomorrow?", ["She's in a meeting all afternoon.", "I'll wait for you.", "Yes, call me tomorrow."], 0, "選擇問句，正解說客戶整個下午都在開會，暗示明天再打。", "我應該現在打給客戶還是等明天？", ["她整個下午都在開會。", "我會等你。", "對，明天打給我。"]);
  add2("Would you prefer tea or coffee?", ["Just some water, please.", "Yes, I prefer it.", "In the coffee shop."], 0, "選擇問句，正解選了第三樣（水），多益常這樣出。", "你想要茶還是咖啡？", ["給我一點水就好。", "是的，我比較喜歡。", "在咖啡店。"]);

  /* ---------- 請求、提議、建議 ---------- */
  add2("Could you help me move these chairs?", ["Sure, where do they go?", "They moved last year.", "The chair of the committee."], 0, "請求幫忙，正解爽快答應並反問要搬去哪。chair 的另一個意思是「主席」。", "可以幫我搬這些椅子嗎？", ["當然，要搬到哪裡？", "他們去年搬家了。", "委員會主席。"]);
  add2("Why don't we ask Ms. Romero to lead the project?", ["That's a great idea.", "Because she was busy.", "The project is due soon."], 0, "Why don't we 是提議，不是問原因，正解表示贊成。Because 是 Why 的陷阱回答。", "我們何不請 Romero 女士帶這個專案？", ["好主意。", "因為她很忙。", "專案很快就要交了。"]);
  add2("Would you mind taking a photo of us?", ["Of course not. Say cheese!", "I don't mind the weather.", "It's a nice photo frame."], 0, "Would you mind...? 回答 Of course not 表示「不介意，好的」。", "可以幫我們拍張照嗎？", ["當然好，笑一個！", "我不在意天氣。", "那是個好看的相框。"]);
  add2("Let's order more paper before we run out.", ["I'll put in the request today.", "He ran the marathon.", "The paper was published."], 0, "直述句提議，正解說今天就下單。ran 和 paper（報紙）都是陷阱。", "我們趁紙用完前再多訂一些吧。", ["我今天就提出申請。", "他跑了馬拉松。", "那篇論文發表了。"]);
  add2("Can I borrow your stapler for a minute?", ["It's in the top drawer.", "A minute ago.", "I borrowed it from the library."], 0, "請求借東西，正解直接告訴對方在哪裡，等於答應。", "可以借一下你的釘書機嗎？", ["在最上面的抽屜。", "一分鐘前。", "我是跟圖書館借的。"]);
  add2("How about meeting in the lobby at nine?", ["Let's make it nine thirty.", "It's about the meeting.", "The hotel lobby is large."], 0, "How about 是提議，正解提出另一個時間。It's about 重複 about 當陷阱。", "九點在大廳碰面怎麼樣？", ["改成九點半吧。", "是關於那場會議。", "飯店大廳很大。"]);
  add2("Would you like me to make copies of the agenda?", ["Thanks, that would be helpful.", "I like the new copier.", "On the agenda for today."], 0, "提議幫忙，正解道謝接受。", "要我幫你影印議程嗎？", ["謝謝，那會很有幫助。", "我喜歡新的影印機。", "在今天的議程上。"]);
  add2("Please remember to lock the door when you leave.", ["I'll be the last one here.", "I remember him well.", "The key is new."], 0, "直述句提醒鎖門，正解說「我會最後一個走」，暗示會負責鎖門。", "你離開時請記得鎖門。", ["我會是最後一個走的。", "我對他印象很深。", "鑰匙是新的。"]);

  /* ---------- 直述句 ---------- */
  add2("The printer on the second floor is out of ink again.", ["I'll order some cartridges.", "It's printed on both sides.", "On the second floor."], 0, "直述句說印表機沒墨水，正解提出解決辦法（訂墨水匣）。On the second floor 只是重複原句。", "二樓的印表機又沒墨水了。", ["我來訂墨水匣。", "是雙面印的。", "在二樓。"]);
  add2("I can't find the file for the Henderson account.", ["Did you check the shared folder?", "It's a fine account.", "Mr. Henderson called."], 0, "直述句說找不到檔案，正解反問有沒有找共用資料夾。fine 和 find 發音相近。", "我找不到 Henderson 客戶的檔案。", ["你看過共用資料夾了嗎？", "那是個不錯的帳戶。", "Henderson 先生打來過。"]);
  add2("The new manager starts on Monday.", ["Have you met her yet?", "It starts at eight.", "Monday through Friday."], 0, "直述句告知新經理週一報到，正解自然地追問「你見過她了嗎」。", "新經理週一報到。", ["你見過她了嗎？", "八點開始。", "週一到週五。"]);
  add2("I think we should hire a few more temporary workers.", ["We don't have enough in the budget.", "It's a higher price.", "Temporarily closed."], 0, "直述句提出意見，正解說預算不夠，表示反對。higher 和 hire 發音相近，temporarily 和 temporary 是相近字陷阱。", "我覺得我們應該再多請幾個臨時工。", ["我們的預算不夠。", "價格比較高。", "暫停營業。"]);
  add2("The flight to Tokyo has been delayed by two hours.", ["Then we'll miss our connection.", "Two hours ago.", "Yes, I've been to Tokyo."], 0, "直述句說班機延誤兩小時，正解說那會趕不上轉機，最合理的反應。", "飛往東京的班機延誤兩小時。", ["那我們會趕不上轉機。", "兩小時前。", "是的，我去過東京。"]);
  add2("These sales figures don't look right.", ["Let me check the calculations.", "Turn right at the light.", "They look nice."], 0, "直述句說數字不對，正解說「我來檢查計算」。right 的另一個意思是「右邊」。", "這些銷售數字看起來不對。", ["我來檢查一下計算。", "在紅綠燈右轉。", "它們看起來很好看。"]);
  add2("The air conditioning in my office isn't working.", ["I'll call maintenance for you.", "He works in that office.", "It's a working lunch."], 0, "直述句說冷氣壞了，正解提出幫忙叫維修。", "我辦公室的冷氣壞了。", ["我幫你打給維修部。", "他在那間辦公室工作。", "是工作午餐。"]);

  /* ---------- How／What 其他問法 ---------- */
  add2("How do you like your new office?", ["It's much brighter than the old one.", "I like to walk to work.", "On the fourth floor."], 0, "How do you like 問感想，正解說比舊的亮很多。", "你覺得新辦公室怎麼樣？", ["比舊的亮多了。", "我喜歡走路上班。", "在四樓。"]);
  add2("What's the best way to contact Mr. Patel?", ["He usually answers e-mails quickly.", "It's the best one.", "To discuss the contract."], 0, "問聯絡 Patel 先生的最好方式，正解說他回信很快，暗示寫 e-mail。", "聯絡 Patel 先生最好的方式是什麼？", ["他通常很快回信。", "那是最好的一個。", "討論合約。"]);
  add2("How far is the hotel from the convention center?", ["It's within walking distance.", "Since last year.", "Very far-reaching."], 0, "How far 問距離，正解說走路就能到。", "飯店離會議中心多遠？", ["走路就到得了。", "從去年開始。", "影響非常深遠。"]);
  add2("What time should we leave for the airport?", ["Our flight's at six, so around three.", "I left it at the airport.", "For about a week."], 0, "What time 問時間，正解給出時間和理由。left it 重複 leave 的過去式當陷阱。", "我們幾點該出發去機場？", ["我們的班機六點，所以三點左右。", "我把它忘在機場了。", "大約一週。"]);
  add2("How much does it cost to rent a booth at the fair?", ["It depends on the size.", "About two days.", "At the fairgrounds."], 0, "How much 問價錢，正解說要看攤位大小，間接回答。", "在展覽會租一個攤位要多少錢？", ["要看大小。", "大約兩天。", "在展覽場。"]);
  add2("What's on the agenda for this afternoon's meeting?", ["Mainly the budget for next year.", "Yes, at two o'clock.", "In the main hall."], 0, "What's on the agenda 問議程內容，正解說主要討論明年預算。", "今天下午的會議要討論什麼？", ["主要是明年的預算。", "是的，兩點。", "在大廳。"]);
  add2("How long has Ms. Kim been with the company?", ["Almost ten years now.", "It's a long company name.", "She's with a client."], 0, "How long 問多久，正解說快十年了。She's with a client 重複 with 當陷阱。", "Kim 女士在公司多久了？", ["快十年了。", "那家公司的名字很長。", "她正在接待客戶。"]);
  add2("Which room is the interview in?", ["The receptionist will show you.", "At ten thirty.", "Yes, I'm interviewing today."], 0, "Which room 問哪一間，正解說櫃檯人員會帶你去，間接回答。", "面試在哪一間？", ["櫃檯人員會帶你過去。", "十點半。", "是的，我今天要面試。"]);
  add2("Who should I send the invoice to?", ["Address it to the accounts department.", "I sent it last week.", "It's an invoice number."], 0, "Who 問人，正解說寄給會計部（部門也算正確回答）。", "發票我該寄給誰？", ["寄給會計部。", "我上週寄了。", "那是發票號碼。"]);
  add2("Why did the store change its hours?", ["Not many customers came in the evening.", "It changed in March.", "For two hours."], 0, "Why 問原因，正解說晚上客人不多。It changed in March 答時間，For two hours 重複 hours。", "這家店為什麼改營業時間？", ["晚上客人不多。", "三月改的。", "兩個小時。"]);
  add2("When are you moving to the new apartment?", ["As soon as the lease is signed.", "It's a new movie.", "Downtown, near the park."], 0, "When 問時間，正解說租約一簽就搬，用條件代替具體日期。movie 和 moving 發音相近。", "你什麼時候搬去新公寓？", ["租約一簽好就搬。", "那是新電影。", "在市中心，公園附近。"]);
  add2("Can you recommend a good place for lunch nearby?", ["The café across the street is popular.", "I recommend him for the job.", "At about twelve thirty."], 0, "請對方推薦午餐地點，正解推薦對面的咖啡廳。I recommend him 重複 recommend 當陷阱，At about twelve thirty 答時間。", "你可以推薦附近吃午餐的好地方嗎？", ["對面那家咖啡廳很受歡迎。", "我推薦他做這份工作。", "大約十二點半。"]);
})();
