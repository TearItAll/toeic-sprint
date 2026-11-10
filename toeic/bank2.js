/* 題庫擴充包：原創題目，題目與中文翻譯寫在一起，載入時同步加進 P2/P5/P6/P7 與 ZH2/ZH5/ZH6/ZH7。
   解析一律引用選項內容，不寫 A/B/C，因為作答時選項會打亂。 */
(function () {
  const add2 = (q, opts, ans, expl, qz, oz) => { P2.push([q, opts, ans, expl]); ZH2.push([qz, oz]); };
  const add5 = (skill, stem, opts, ans, expl, t, oz, w) => { P5.push([skill, stem, opts, ans, expl]); ZH5.push([t, oz, w || []]); };

  /* ---------- Part 2 ---------- */
  add2("Where is the staff meeting being held?", ["In the third-floor lounge.", "At ten thirty.", "Yes, I'll be there."], 0, "Where 問地點。「At ten thirty.」回答時間，Yes 不能回答 Wh 問句。", "員工會議在哪裡開？", ["在三樓的休息室。", "十點半。", "是的，我會到。"]);
  add2("When did you send the contract to the client?", ["First thing this morning.", "To their legal department.", "Yes, it's signed."], 0, "When 問時間。「To their legal department.」回答的是對象。", "你什麼時候把合約寄給客戶的？", ["今天一早。", "寄給他們的法務部。", "是的，已經簽了。"]);
  add2("Who approved the new marketing budget?", ["The finance director did.", "It's about fifty thousand dollars.", "For the spring campaign."], 0, "Who 問人。其他兩個回應分別回答金額和用途。", "新的行銷預算是誰核准的？", ["財務總監。", "大約五萬美元。", "給春季宣傳活動用的。"]);
  add2("How many people signed up for the workshop?", ["Just over thirty so far.", "Sign here, please.", "It's in Room 4."], 0, "How many 問數量。「Sign here, please.」重複 sign 是陷阱。", "有多少人報名研習會？", ["目前三十多人。", "請在這裡簽名。", "在 4 號教室。"]);
  add2("Why is the elevator out of service?", ["It's being inspected today.", "On the fifth floor.", "I'll take the stairs."], 0, "Why 問原因。「On the fifth floor.」回答地點，「I'll take the stairs.」只說了自己的反應，沒有回答原因。", "電梯為什麼停用？", ["今天在做檢查。", "在五樓。", "我走樓梯。"]);
  add2("Could you send me the updated price list?", ["I'll e-mail it to you right away.", "Prices went up last month.", "A list of names."], 0, "請求句，答應並說明怎麼做最自然。「Prices went up last month.」重複 price 是陷阱。", "可以把更新後的價目表寄給我嗎？", ["我馬上用 e-mail 寄給你。", "價格上個月調漲了。", "一份名單。"]);
  add2("Is this seat taken?", ["No, go ahead.", "I took the bus.", "Yes, it's a nice seat."], 0, "問座位有沒有人坐，「No, go ahead.」表示沒人、請坐。「I took the bus.」用 take 的過去式混淆。", "這個位子有人坐嗎？", ["沒有，請坐。", "我搭公車來的。", "是的，這是個好位子。"]);
  add2("Which printer should I use for color copies?", ["The one next to the window.", "Twenty copies, please.", "It's out of ink."], 0, "Which 問哪一台，用 the one 回答。", "印彩色要用哪一台印表機？", ["靠窗那一台。", "請印二十份。", "沒墨水了。"]);
  add2("Haven't we met before?", ["I think it was at the trade show.", "We'll meet at noon.", "No, I haven't finished."], 0, "否定問句。用「應該是在商展」間接表示見過。", "我們以前是不是見過？", ["我想是在商展上。", "我們中午碰面。", "不，我還沒做完。"]);
  add2("What's the fastest way to the airport?", ["Take the express train.", "Around six o'clock.", "My flight was delayed."], 0, "What's the fastest way 問方法或路線。", "去機場最快的方式是什麼？", ["搭機場快線。", "大約六點。", "我的班機延誤了。"]);
  add2("Would you prefer a window seat or an aisle seat?", ["An aisle seat, please.", "Yes, I would.", "The window is open."], 0, "選擇疑問句要選其一，不能用 Yes 回答。", "您想要靠窗還是靠走道的座位？", ["請給我靠走道的。", "是的，我想要。", "窗戶是開的。"]);
  add2("Mr. Tanaka will be joining us for dinner, won't he?", ["He said he'd be a little late.", "The dinner was delicious.", "Join the club."], 0, "附加問句，以「會晚一點到」間接表示會來。", "田中先生會跟我們一起吃晚餐，對吧？", ["他說會晚一點到。", "晚餐很好吃。", "加入俱樂部吧。"]);
  add2("How do I reset my password?", ["Click the link on the login page.", "It's a strong password.", "Yesterday afternoon."], 0, "How 問方法。", "我要怎麼重設密碼？", ["點登入頁面上的連結。", "這是很安全的密碼。", "昨天下午。"]);
  add2("The client wants to move the meeting to Thursday.", ["Thursday works for me.", "We moved last year.", "The meeting room is full."], 0, "直述句告知變更，回應「週四我可以」最自然。「We moved last year.」用 move 一字多義混淆。", "客戶想把會議改到週四。", ["週四我可以。", "我們去年搬家了。", "會議室滿了。"]);
  add2("Why don't we order lunch from the new Thai place?", ["Sure, I'll get the menu.", "Because it was late.", "In about an hour."], 0, "Why don't we 是提議，不是問原因。", "我們何不跟那家新開的泰式餐廳訂午餐？", ["好啊，我去拿菜單。", "因為它遲到了。", "大約一小時後。"]);
  add2("Who's going to pick up the clients from the station?", ["I've asked Ken to do it.", "They're from Osaka.", "At the north exit."], 0, "Who 問人。「They're from Osaka.」回答來自哪裡。", "誰要去車站接客戶？", ["我已經請 Ken 去了。", "他們從大阪來。", "在北出口。"]);
  add2("Where did you buy that briefcase?", ["It was a gift from my sister.", "About two hundred dollars.", "Last summer."], 0, "Where 問地點，用「是禮物」間接回答不是自己買的，多益常見的間接回答。", "那個公事包你在哪裡買的？", ["是我姊姊送的禮物。", "大約兩百美元。", "去年夏天。"]);
  add2("Do you have this jacket in a larger size?", ["Let me check in the back.", "Yes, it's very large.", "It comes with a belt."], 0, "問有沒有大一號，「我去後面看看」最自然。", "這件外套有大一點的尺寸嗎？", ["我去後面查一下。", "是的，它很大。", "它附一條腰帶。"]);
  add2("When is the store's grand opening?", ["It's been postponed until May.", "The doors open inward.", "Yes, it's a grand store."], 0, "When 問時間，以「延到五月」回答。其他兩個回應重複 open、grand。", "這家店什麼時候盛大開幕？", ["已經延到五月了。", "門是往內開的。", "是的，這是一家很大的店。"]);
  add2("Should I print the handouts now or wait?", ["Wait until the numbers are final.", "Yes, you should.", "Hand them to me."], 0, "選擇疑問句，選「等」並說明原因。", "我該現在印講義，還是再等等？", ["等數字確定再印。", "是的，你應該。", "交給我。"]);
  add2("How was your trip to Singapore?", ["Very productive, thanks.", "By plane.", "For five days."], 0, "How was 問感想，不是問交通方式或時間長度。", "你的新加坡之行怎麼樣？", ["非常有收穫，謝謝。", "搭飛機。", "五天。"]);
  add2("Can I leave my bag here while I shop?", ["Sorry, we don't offer that service.", "Yes, I'm leaving now.", "It's a shopping bag."], 0, "請求句，委婉拒絕。「Yes, I'm leaving now.」用 leave 一字多義混淆。", "我逛街的時候可以把包包寄放在這裡嗎？", ["抱歉，我們沒有提供這項服務。", "是的，我現在要走了。", "那是購物袋。"]);
  add2("Who should I talk to about a refund?", ["The customer service desk can help.", "The fund was approved.", "Within thirty days."], 0, "Who 問人或單位。「The fund was approved.」用 refund／fund 相似音陷阱。", "退款的事我該找誰？", ["客服櫃檯可以協助您。", "那筆基金核准了。", "三十天內。"]);
  add2("Isn't Ms. Moore in charge of the Berlin office?", ["Not anymore, she transferred.", "The office is in Berlin.", "Charge it to my account."], 0, "否定問句。「Not anymore」表示不再是。「Charge it to my account.」用 charge 一字多義陷阱。", "Moore 女士不是負責柏林辦公室嗎？", ["已經不是了，她調職了。", "辦公室在柏林。", "記在我的帳上。"]);
  add2("Why was the shipment returned?", ["The address was incorrect.", "It will return on Monday.", "By express mail."], 0, "Why 問原因。「It will return on Monday.」重複 return 但答非所問。", "這批貨為什麼被退回？", ["地址錯了。", "它週一會回來。", "用快遞。"]);
  add2("How long have you lived in this city?", ["Since I was a child.", "It's a long street.", "Near the city center."], 0, "How long 問多久。", "你住在這個城市多久了？", ["從小就住這裡。", "那是一條很長的街。", "在市中心附近。"]);
  add2("Let's take a short break before the next session.", ["Good idea, I need some coffee.", "It was broken yesterday.", "The session is full."], 0, "提議句，同意最自然。「It was broken yesterday.」用 break／broken 混淆。", "下一場開始前我們休息一下吧。", ["好主意，我需要喝杯咖啡。", "它昨天壞了。", "那一場額滿了。"]);
  add2("Which bus goes to the convention center?", ["Number 12 stops right in front.", "The convention starts tomorrow.", "Every fifteen minutes."], 0, "Which 問哪一班車。「Every fifteen minutes.」回答的是班次頻率。", "哪一路公車到會議中心？", ["12 號公車就停在門口。", "大會明天開始。", "每十五分鐘一班。"]);
  add2("Are you taking any time off this summer?", ["I'm going hiking for a week in July.", "Turn it off, please.", "It's the summer menu."], 0, "Yes/No 問句，以具體計畫回答。「Turn it off」用 off 混淆。", "你今年夏天有要休假嗎？", ["我七月要去健行一週。", "請把它關掉。", "這是夏季菜單。"]);
  add2("What time does the pharmacy close?", ["I think it's open until nine.", "It's very close to here.", "At the pharmacy."], 0, "What time 問時間。「It's very close to here.」用 close（關門）／close（近的）一字多義陷阱。", "藥局幾點關門？", ["我想它開到九點。", "離這裡很近。", "在藥局。"]);
  add2("I'm afraid the projector isn't working.", ["I'll call the technician.", "The project is working well.", "Don't be afraid."], 0, "直述句說明問題，回應「我來找技師」最自然。", "恐怕投影機壞了。", ["我來打電話叫技師。", "專案進行得很順利。", "別害怕。"]);
  add2("Who left the lights on in the conference room?", ["The cleaning crew was in there last.", "Turn left at the corner.", "It's very bright."], 0, "Who 問人，以「清潔人員最後在那裡」間接回答。「Turn left」用 left 一字多義。", "是誰把會議室的燈開著沒關？", ["最後在那裡的是清潔人員。", "在轉角左轉。", "很亮。"]);
  add2("How much will the repairs cost?", ["We'll know after the inspection.", "About two weeks.", "They're very costly to us."], 0, "How much 問價錢，以「檢查後才知道」間接回答。", "修理要花多少錢？", ["檢查完才會知道。", "大約兩週。", "它們對我們代價很高。"]);
  add2("Didn't the train leave on time?", ["No, it was delayed by a signal problem.", "Yes, it's time to train.", "Leave it on the desk."], 0, "否定問句，用 No 加說明回答。", "火車不是準時開了嗎？", ["沒有，因為號誌問題延誤了。", "是的，該訓練了。", "把它放在桌上。"]);
  add2("Where can I get a parking permit?", ["From the security office in the lobby.", "Park on the left side.", "It's permitted on weekends."], 0, "Where 問地點。其他兩個回應重複 park 和 permit 的字根。", "停車證在哪裡辦？", ["在大廳的保全辦公室。", "停在左邊。", "週末允許。"]);
  add2("Would you mind reviewing my report?", ["Not at all, send it over.", "I reviewed the hotel.", "It's a long report, isn't it?"], 0, "Would you mind 回答 Not at all 表示「不介意，好」。", "你介意幫我看一下報告嗎？", ["一點也不，寄過來吧。", "我評論了那家飯店。", "這份報告很長，對吧？"]);
  add2("Why did Ms. Grant leave the company?", ["She started her own business.", "She left at five.", "Yes, she did."], 0, "Why 問原因。「She left at five.」把 leave（離職）誤解成「離開」。", "Grant 女士為什麼離職？", ["她自己創業了。", "她五點離開的。", "是的，她有。"]);
  add2("When will the new menu be available?", ["Starting next Monday.", "It's available in three colors.", "I'll have the soup."], 0, "When 問時間。", "新菜單什麼時候推出？", ["從下週一開始。", "有三種顏色。", "我要點湯。"]);
  add2("Is there a pharmacy near the hotel?", ["There's one around the corner.", "The hotel has a pool.", "Near the end of the month."], 0, "問附近有沒有藥局，「轉角就有一家」最自然。", "飯店附近有藥局嗎？", ["轉角就有一家。", "飯店有游泳池。", "接近月底。"]);
  add2("Who designed the new company logo?", ["An outside agency created it.", "I like the new design.", "On the front page."], 0, "Who 問人，「外部公司做的」也算回答誰。", "新的公司標誌是誰設計的？", ["是外部的設計公司做的。", "我喜歡新設計。", "在頭版。"]);

  /* ---------- Part 5 ---------- */
  add5("pos", "Ms. Reyes handled the customer's complaint ------- and professionally.", ["calm", "calmly", "calmness", "calmed"], 1, "and 連接兩個副詞，與 professionally 對等，用 calmly。", "Reyes 女士冷靜又專業地處理了顧客的投訴。", ["冷靜的 (adj.)", "冷靜地 (adv.)", "冷靜 (n.)", "使平靜了 (p.p.)"], [["handle", "處理"], ["complaint", "投訴"]]);
  add5("pos", "The new manager has made several ------- changes to the scheduling system.", ["benefit", "beneficial", "beneficially", "beneficiary"], 1, "修飾名詞 changes，用形容詞 beneficial。", "新經理對排班系統做了幾項有益的改變。", ["好處 (n.)", "有益的 (adj.)", "有益地 (adv.)", "受益人 (n.)"], [["scheduling", "排班；排程"]]);
  add5("pos", "Please ensure that all ------- are labeled with the client's name.", ["deliver", "delivers", "deliveries", "delivered"], 2, "all 後接複數名詞 deliveries 作子句主詞。", "請確保所有送貨都標上客戶姓名。", ["遞送 (v.)", "遞送（第三人稱）", "遞送物（複數 n.）", "已遞送 (p.p.)"], [["ensure", "確保"], ["label", "貼標籤"]]);
  add5("pos", "The conference was ------- organized, and attendees praised the smooth registration process.", ["exceptional", "exception", "exceptionally", "except"], 2, "修飾過去分詞 organized，用副詞 exceptionally。", "這場會議籌辦得非常好，與會者稱讚報到流程很順暢。", ["傑出的 (adj.)", "例外 (n.)", "格外地 (adv.)", "除了 (prep.)"], [["registration", "報到；登記"]]);
  add5("pos", "Mr. Lin's ------- to detail makes him an excellent editor.", ["attentive", "attention", "attend", "attentively"], 1, "所有格 Mr. Lin's 後接名詞 attention，attention to detail＝注重細節。", "林先生注重細節，所以是很出色的編輯。", ["專注的 (adj.)", "注意力 (n.)", "出席 (v.)", "專注地 (adv.)"], [["attention to detail", "注重細節"], ["editor", "編輯"]]);
  add5("pos", "Online sales have grown ------- over the past decade.", ["consistent", "consistency", "consistently", "consist"], 2, "修飾動詞 grown，用副詞 consistently。", "過去十年線上銷售穩定成長。", ["一致的 (adj.)", "一致性 (n.)", "持續地 (adv.)", "由……組成 (v.)"], [["decade", "十年"]]);
  add5("pos", "The ------- for the position must be submitted by e-mail.", ["applicants", "applications", "applying", "applied"], 1, "必須被提交的是申請書 applications，不是應徵者 applicants。", "這個職位的申請書必須用電子郵件提交。", ["應徵者 (n.)", "申請書 (n.)", "申請中 (V-ing)", "已申請 (p.p.)"], [["position", "職位"]]);
  add5("pos", "Our technicians are ------- trained to handle all types of equipment.", ["full", "fully", "fullness", "fuller"], 1, "修飾過去分詞 trained，用副詞 fully。", "我們的技師都受過完整訓練，能處理各種設備。", ["完整的 (adj.)", "完全地 (adv.)", "充滿 (n.)", "較滿的（比較級）"], [["technician", "技師"]]);
  add5("tense", "Mr. Hassan ------- in the accounting department before he moved to sales.", ["works", "has worked", "had worked", "will work"], 2, "在過去另一件事（moved to sales）之前就已發生，用過去完成式。", "Hassan 先生調到業務部之前，在會計部工作。", ["工作（現在式）", "已工作（現在完成式）", "之前曾工作（過去完成式）", "將工作（未來式）"], [["accounting department", "會計部"]]);
  add5("tense", "The board ------- the merger proposal at its next meeting.", ["discussed", "has discussed", "will discuss", "discussing"], 2, "at its next meeting 表未來。", "董事會將在下次會議討論合併提案。", ["討論了（過去式）", "已討論（現在完成式）", "將討論（未來式）", "討論中 (V-ing)"], [["merger proposal", "合併提案"]]);
  add5("tense", "Since the new policy took effect, complaints ------- by nearly half.", ["drop", "dropped", "have dropped", "will drop"], 2, "Since + 過去事件，主要子句用現在完成式。", "自從新政策生效後，投訴減少了將近一半。", ["下降（現在式）", "下降了（過去式）", "已下降（現在完成式）", "將下降（未來式）"], [["take effect", "生效"]]);
  add5("tense", "Ms. Cho ------- her presentation when the fire alarm went off.", ["gives", "was giving", "has given", "will give"], 1, "過去某動作發生時正在進行，用過去進行式。", "火災警報響起時，Cho 女士正在做簡報。", ["做（現在式）", "正在做（過去進行式）", "已做（現在完成式）", "將做（未來式）"], [["fire alarm", "火災警報"], ["go off", "（警報）響起"]]);
  add5("tense", "The museum ------- open late every Friday this summer.", ["stays", "stayed", "has stayed", "staying"], 0, "every Friday 表固定時程，用現在簡單式。", "今年夏天博物館每週五延長開放。", ["保持（現在式）", "保持了（過去式）", "已保持（現在完成式）", "保持中 (V-ing)"], []);
  add5("tense", "As soon as the samples ------- , we will begin testing.", ["arrive", "will arrive", "arrived", "are arriving"], 0, "時間副詞子句（as soon as）用現在式代替未來式。", "樣品一到，我們就會開始測試。", ["抵達（現在式）", "將抵達（未來式）", "抵達了（過去式）", "正在抵達"], [["sample", "樣品"]]);
  add5("tense", "By next March, the company ------- in business for fifty years.", ["is", "has been", "will have been", "was"], 2, "By + 未來時間，表到那時已持續，用未來完成式。", "到明年三月，這家公司就營業滿五十年了。", ["是（現在式）", "已經（現在完成式）", "將已經（未來完成式）", "是（過去式）"], [["in business", "營業中"]]);
  add5("voice", "All luggage ------- through the security scanner before boarding.", ["pass", "must pass", "passing", "to pass"], 1, "句子缺動詞。luggage 是不可數名詞，不能接複數動詞 pass；pass through 是主動用法，搭配 must 表規定。", "所有行李在登機前都必須通過安檢掃描。", ["通過（複數動詞，與不可數名詞不合）", "必須通過", "通過中 (V-ing)", "去通過 (to V)"], [["luggage", "行李"], ["boarding", "登機"]]);
  add5("voice", "The winners of the design competition ------- next week.", ["announce", "will announce", "will be announced", "announcing"], 2, "得獎者「被宣布」，用未來被動。", "設計比賽的得獎者將於下週公布。", ["宣布（主動）", "將宣布（主動）", "將被宣布（被動）", "宣布中 (V-ing)"], [["competition", "比賽"]]);
  add5("voice", "The meeting room ------- for the training session on Thursday.", ["reserved", "has been reserved", "is reserving", "reserves"], 1, "會議室「已被預訂」，用現在完成被動。", "會議室已經預訂好週四的訓練課程。", ["預訂了（主動）", "已被預訂（被動）", "正在預訂（主動）", "預訂（現在式）"], [["reserve", "預訂"]]);
  add5("voice", "Mr. Okoro ------- the sales team since last April.", ["has managed", "has been managed", "is managed", "manages to"], 0, "Okoro 先生主動管理團隊，後面有受詞，用主動的現在完成式。", "Okoro 先生從去年四月開始管理業務團隊。", ["已管理（主動）", "已被管理（被動）", "被管理（被動）", "設法（後需接動詞）"], []);
  add5("voice", "Customers will ------- by e-mail when their orders are ready.", ["notify", "notifying", "be notified", "have notified"], 2, "顧客「被通知」，用 will be notified。", "訂單備妥時，顧客會收到 e-mail 通知。", ["通知（原形）", "通知中 (V-ing)", "被通知（被動）", "已通知（主動）"], [["notify", "通知"]]);
  add5("voice", "The factory ------- to a larger site outside the city last year.", ["relocated", "will relocate", "has been relocated to", "relocates"], 0, "last year 用過去式；relocate 可作不及物「遷移」，主動即可。", "工廠去年遷到城外一個更大的廠址。", ["遷移了（過去式）", "將遷移（未來式）", "已被遷到（重複 to）", "遷移（現在式）"], [["relocate", "遷移"], ["site", "地點"]]);
  add5("agree", "Each of the new interns ------- assigned a mentor.", ["is", "are", "were", "have been"], 0, "Each of + 複數名詞作主詞，動詞用單數。", "每位新實習生都被分配了一位導師。", ["是（單數）", "是（複數）", "是（過去複數）", "已（複數）"], [["intern", "實習生"], ["mentor", "導師"]]);
  add5("agree", "The results of the customer survey ------- surprising.", ["was", "were", "is", "has been"], 1, "主詞是 The results（複數），of the customer survey 為修飾語。", "顧客調查的結果出人意料。", ["是（過去單數）", "是（過去複數）", "是（現在單數）", "已（單數）"], [["survey", "調查"]]);
  add5("agree", "Either the manager or her assistants ------- the visitors at the entrance.", ["greet", "greets", "greeting", "has greeted"], 0, "either A or B 動詞依 B（就近原則），assistants 為複數。", "經理或她的助理們會在入口迎接訪客。", ["迎接（複數動詞）", "迎接（單數動詞）", "迎接中 (V-ing)", "已迎接（單數）"], [["entrance", "入口"]]);
  add5("agree", "Twenty dollars ------- a reasonable price for a lunch buffet.", ["is", "are", "were", "have been"], 0, "金額視為一個整體，動詞用單數。", "二十美元對午餐自助餐來說是合理的價格。", ["是（單數）", "是（複數）", "是（過去複數）", "已（複數）"], [["reasonable", "合理的"]]);
  add5("verbal", "Ms. Wang is responsible for ------- new suppliers.", ["evaluate", "evaluating", "evaluated", "to evaluate"], 1, "介系詞 for 後接動名詞。", "王女士負責評估新的供應商。", ["評估（原形）", "評估 (V-ing)", "被評估 (p.p.)", "去評估 (to V)"], [["supplier", "供應商"]]);
  add5("verbal", "The company hopes ------- its market share in Europe.", ["increase", "increasing", "to increase", "increased"], 2, "hope to V。", "公司希望擴大在歐洲的市占率。", ["增加（原形）", "增加 (V-ing)", "去增加 (to V)", "增加了 (p.p.)"], [["market share", "市占率"]]);
  add5("verbal", "Please avoid ------- personal calls during working hours.", ["make", "to make", "making", "made"], 2, "avoid + V-ing。", "上班時間請避免打私人電話。", ["打（原形）", "去打 (to V)", "打 (V-ing)", "打了 (p.p.)"], [["working hours", "上班時間"]]);
  add5("verbal", "The report ------- last week contains several errors.", ["submitting", "submitted", "submits", "to submit"], 1, "報告「被提交」，過去分詞修飾 report。", "上週提交的報告有好幾處錯誤。", ["提交中 (V-ing)", "被提交的 (p.p.)", "提交（第三人稱）", "去提交 (to V)"], [["contain", "包含"]]);
  add5("verbal", "------- in 1985, the firm now has offices in twelve countries.", ["Founding", "Founded", "Found", "To found"], 1, "公司「被創立」，分詞構句用過去分詞。", "這家公司創立於 1985 年，如今在十二個國家設有辦公室。", ["創立 (V-ing)", "被創立 (p.p.)", "創立（原形）", "為了創立 (to V)"], [["found", "創立"], ["firm", "公司"]]);
  add5("verbal", "Employees who wish ------- the seminar should register by Friday.", ["attend", "attending", "to attend", "attended"], 2, "wish to V。", "想參加研討會的員工請在週五前報名。", ["參加（原形）", "參加 (V-ing)", "去參加 (to V)", "參加了 (p.p.)"], [["register", "報名"]]);
  add5("verbal", "Mr. Diaz recommended ------- the order in bulk to save money.", ["place", "placing", "to placing", "placed"], 1, "recommend + V-ing。", "Diaz 先生建議大量訂購以節省費用。", ["下（原形）", "下 (V-ing)", "（錯誤形式）", "下了 (p.p.)"], [["place an order", "下訂單"], ["in bulk", "大量地"]]);
  add5("verbal", "The manager made the team ------- the report again.", ["revise", "to revise", "revising", "revised"], 0, "使役動詞 make + 人 + 原形動詞。", "經理要團隊再修改一次報告。", ["修改（原形）", "去修改 (to V)", "修改 (V-ing)", "修改了 (p.p.)"], []);
  add5("prep", "The bank is located ------- the post office and the pharmacy.", ["between", "among", "across", "through"], 0, "介於兩者之間用 between ... and ...。", "銀行位於郵局和藥局之間。", ["在（兩者）之間", "在（三者以上）之中", "在對面", "穿過"], [["pharmacy", "藥局"]]);
  add5("prep", "Ms. Carter has been promoted ------- senior editor.", ["for", "to", "at", "by"], 1, "be promoted to + 職位。", "Carter 女士升為資深編輯。", ["為了", "升到（職位）", "在", "被"], [["promote", "升職"], ["senior", "資深的"]]);
  add5("prep", "The new branch will open ------- the next six months.", ["within", "since", "until", "among"], 0, "within + 期間＝在……之內。", "新分店將在未來六個月內開幕。", ["在……之內", "自從", "直到", "在……之中"], [["branch", "分店"]]);
  add5("prep", "All orders placed ------- noon will be shipped the same day.", ["before", "during", "between", "while"], 0, "before noon＝中午前。", "中午前下的訂單都會當天出貨。", ["在……之前", "在……期間", "在……之間", "當……時（接子句）"], [["ship", "出貨"]]);
  add5("prep", "The seminar is open to all employees, regardless ------- their department.", ["for", "to", "of", "with"], 2, "regardless of＝不論。", "這場研討會開放給所有員工，不論部門。", ["為了", "到", "（regardless of＝不論）", "和"], [["regardless of", "不論"]]);
  add5("prep", "Please contact Mr. Shaw ------- any questions about the schedule.", ["with", "of", "at", "to"], 0, "contact sb with questions＝帶著問題聯絡某人。", "如果對時程有任何問題，請聯絡 Shaw 先生。", ["帶著；關於", "的", "在", "到"], [["schedule", "時程"]]);
  add5("prep", "The hotel shuttle runs every twenty minutes ------- 6 A.M. to midnight.", ["from", "since", "between", "at"], 0, "from A to B＝從 A 到 B。", "飯店接駁車從早上 6 點到午夜每二十分鐘一班。", ["從", "自從", "在（兩者）之間（需搭 and）", "在（時刻）"], [["shuttle", "接駁車"]]);
  add5("prep", "Sales increased ------- 12 percent compared to last year.", ["by", "at", "for", "on"], 0, "表增減的幅度用 by。", "銷售額比去年增加了 12%。", ["（增減幅度）", "在", "為了", "在……上"], [["compared to", "與……相比"]]);
  add5("conj", "------- the price is higher, the new model is worth buying because it lasts longer.", ["Although", "Despite", "Because", "Unless"], 0, "後接子句、語意讓步，用 Although。Despite 後只能接名詞。", "雖然價格比較高，新機型因為更耐用，還是值得買。", ["雖然（接子句）", "儘管（接名詞）", "因為", "除非"], [["worth V-ing", "值得……"], ["last", "持續；耐用"]]);
  add5("conj", "Mr. Park will lead the training ------- Ms. Lee is on vacation.", ["while", "during", "so", "until that"], 0, "while＝當……的時候，後接子句。during 後接名詞。", "李女士休假期間，由朴先生帶領訓練。", ["當……時（接子句）", "在……期間（接名詞）", "所以", "（錯誤組合）"], [["on vacation", "休假中"]]);
  add5("conj", "The office will be closed on Monday ------- the national holiday.", ["because", "because of", "since", "so that"], 1, "後接名詞片語 the national holiday，用 because of。", "因為國定假日，辦公室週一休息。", ["因為（接子句）", "因為（接名詞）", "因為；自從（接子句）", "以便"], [["national holiday", "國定假日"]]);
  add5("conj", "The software is easy to use; -------, it is very affordable.", ["however", "moreover", "otherwise", "instead"], 1, "前後都是優點，表追加用 moreover。", "這套軟體很好用，而且價格非常實惠。", ["然而", "此外", "否則", "取而代之"], [["affordable", "價格實惠的"]]);
  add5("conj", "You must show a valid ID; -------, you will not be admitted.", ["otherwise", "therefore", "moreover", "meanwhile"], 0, "otherwise＝否則。", "你必須出示有效證件，否則無法入場。", ["否則", "因此", "此外", "同時"], [["valid", "有效的"], ["admit", "准許進入"]]);
  add5("conj", "------- Ms. Silva nor Mr. Gomez was available to meet the client.", ["Either", "Neither", "Both", "Not only"], 1, "與 nor 搭配的是 neither。", "Silva 女士和 Gomez 先生都沒空跟客戶見面。", ["兩者之一（搭 or）", "兩者都不（搭 nor）", "兩者都（搭 and）", "不僅（搭 but also）"], [["available", "有空的"]]);
  add5("conj", "The event was so popular ------- tickets sold out in two hours.", ["that", "as", "which", "because"], 0, "so + adj. + that＝如此……以致於。", "這場活動太受歡迎了，票兩小時就賣完。", ["以致於（so … that）", "如同", "（關係代名詞）", "因為"], [["sell out", "賣完"]]);
  add5("pron", "The engineers presented ------- findings to the board.", ["they", "them", "their", "theirs"], 2, "所有格 their 修飾名詞 findings。", "工程師們向董事會報告了他們的調查結果。", ["他們（主格）", "他們（受格）", "他們的", "他們的（所有格代名詞）"], [["findings", "調查結果"]]);
  add5("pron", "Ms. Patel prefers to book flights -------, rather than use a travel agent.", ["she", "her", "herself", "hers"], 2, "反身代名詞強調「親自」。", "Patel 女士比較喜歡自己訂機票，而不是透過旅行社。", ["她（主格）", "她（受格）", "她自己", "她的（所有格代名詞）"], [["travel agent", "旅行社"]]);
  add5("pron", "Our prices are lower than ------- of our main competitors.", ["that", "those", "them", "theirs"], 1, "代替複數名詞 prices，用 those。", "我們的價格比主要競爭對手的價格低。", ["那個（單數）", "那些（複數）", "他們（受格）", "他們的（所有格代名詞）"], [["competitor", "競爭對手"]]);
  add5("pron", "If you have questions about your order, please ask ------- of our staff members.", ["any", "every", "each other", "whoever"], 0, "any of + 複數名詞＝其中任何一位。every 不能接 of，each other 是「彼此」。", "如果對訂單有疑問，請詢問我們任何一位工作人員。", ["任何一個", "每一個（不能接 of）", "彼此", "無論誰"], [["staff member", "工作人員"]]);
  add5("rel", "The supplier ------- products we ordered has gone out of business.", ["who", "whose", "which", "that"], 1, "空格後接名詞 products，表所有，用 whose。", "我們訂購其產品的那家供應商已經倒閉了。", ["（指人，作主詞）", "……的（所有格）", "（指物）", "（指人或物）"], [["go out of business", "倒閉"]]);
  add5("rel", "The training manual, ------- was updated in May, is available online.", ["that", "which", "who", "what"], 1, "逗號後非限定用法，指物用 which，不能用 that。", "訓練手冊在五月更新過，可以在網路上取得。", ["（不能用在逗號後）", "（指物，非限定）", "（指人）", "……的事物"], [["manual", "手冊"]]);
  add5("rel", "------- you decide, please let us know by Friday.", ["Whatever", "Whoever", "Whenever", "Wherever"], 0, "decide 的受詞是事物，用 Whatever（無論決定什麼）。", "無論您決定如何，都請在週五前告訴我們。", ["無論什麼", "無論誰", "無論何時", "無論哪裡"], []);
  add5("rel", "The day ------- the new store opened was the busiest of the year.", ["which", "when", "where", "what"], 1, "先行詞為時間、子句完整，用關係副詞 when。", "新店開幕那天是整年最忙的一天。", ["（指物，需缺主詞或受詞）", "（指時間）", "（指地點）", "……的事物"], []);
  add5("comp", "This model is ------- expensive than the one we bought last year.", ["less", "least", "little", "fewer"], 0, "less + 形容詞 + than＝比較不……。", "這個機型比我們去年買的便宜。", ["較不（比較級）", "最不（最高級）", "少的", "較少的（修飾可數名詞）"], []);
  add5("comp", "Ms. Aoki is one of the ------- experienced engineers in the company.", ["more", "most", "much", "very"], 1, "one of the + 最高級 + 複數名詞。", "青木女士是公司裡最有經驗的工程師之一。", ["更", "最", "很多", "非常"], [["experienced", "有經驗的"]]);
  add5("comp", "The new route is just as ------- as the old one but takes less time.", ["safe", "safer", "safest", "safely"], 0, "as + 原級 + as。", "新路線和舊路線一樣安全，但比較省時。", ["安全的（原級）", "較安全的", "最安全的", "安全地 (adv.)"], [["route", "路線"]]);
  add5("vocab", "The manager asked staff to ------- their expense reports by the end of the month.", ["submit", "admit", "commit", "permit"], 0, "submit a report＝提交報告。", "經理要員工在月底前提交費用報告。", ["提交", "承認；准許進入", "承諾；犯（錯）", "允許"], [["expense report", "費用報告"]]);
  add5("vocab", "Due to a scheduling -------, the interview has been moved to Wednesday.", ["conflict", "contract", "contest", "context"], 0, "scheduling conflict＝時間衝突。", "由於時間衝突，面試改到週三。", ["衝突", "合約", "比賽", "上下文"], [["scheduling conflict", "時間衝突"]]);
  add5("vocab", "The hotel offers ------- shuttle service to and from the airport.", ["complimentary", "complementary", "competent", "compulsory"], 0, "complimentary＝免費招待的；complementary 是「互補的」，常被混淆。", "飯店提供免費的機場接駁服務。", ["免費的", "互補的", "能幹的", "強制的"], [["shuttle service", "接駁服務"]]);
  add5("vocab", "Ms. Kim was ------- for her outstanding work on the project.", ["recognized", "realized", "recovered", "reminded"], 0, "be recognized for＝因……受到表揚。", "Kim 女士因為在專案中的傑出表現而受到表揚。", ["受表揚", "了解到", "恢復", "被提醒"], [["outstanding", "傑出的"]]);
  add5("vocab", "The company will ------- a new line of eco-friendly products next spring.", ["launch", "lunch", "lend", "lift"], 0, "launch a product＝推出產品。", "公司明年春天將推出一系列環保產品。", ["推出", "午餐", "借出", "舉起"], [["eco-friendly", "環保的"]]);
  add5("vocab", "Please ------- from using your phone during the performance.", ["refrain", "restrict", "retain", "remain"], 0, "refrain from V-ing＝避免、克制做某事。", "表演期間請勿使用手機。", ["克制（refrain from）", "限制", "保留", "保持"], [["performance", "表演"]]);
  add5("vocab", "The new system will ------- the time needed to process orders.", ["shorten", "shortage", "shortly", "short"], 0, "空格需及物動詞，shorten＝縮短。", "新系統將縮短處理訂單所需的時間。", ["縮短 (v.)", "短缺 (n.)", "不久 (adv.)", "短的 (adj.)"], [["process", "處理"]]);
  add5("vocab", "All employees must ------- with the updated safety regulations.", ["comply", "complete", "compete", "compose"], 0, "comply with＝遵守。", "所有員工都必須遵守更新後的安全規定。", ["遵守（comply with）", "完成", "競爭", "組成"], [["regulation", "規定"]]);
  add5("vocab", "The CEO expressed ------- to the staff for their hard work this year.", ["gratitude", "attitude", "altitude", "aptitude"], 0, "express gratitude＝表達感謝。", "執行長向員工表達今年辛勞的感謝。", ["感謝", "態度", "海拔", "天資"], [["express", "表達"]]);
  add5("vocab", "The store is offering a ------- discount on all winter clothing.", ["substantial", "substitute", "subsequent", "subscribed"], 0, "substantial discount＝大幅折扣。", "這家店所有冬季服飾都有大幅折扣。", ["大量的", "替代品", "隨後的", "已訂閱的"], [["discount", "折扣"]]);
  add5("vocab", "Interested candidates should ------- a résumé and two references.", ["provide", "prevent", "protect", "promote"], 0, "provide＝提供。", "有興趣的人選請提供履歷和兩位推薦人。", ["提供", "防止", "保護", "促銷；升職"], [["reference", "推薦人"]]);
  add5("vocab", "The road will be closed ------- while repairs are carried out.", ["temporarily", "temperately", "tentatively", "timely"], 0, "temporarily＝暫時地。", "維修期間道路將暫時封閉。", ["暫時地", "有節制地", "暫定地", "及時的 (adj.)"], [["carry out", "執行"]]);
  add5("vocab", "We need to ------- the budget before the project can begin.", ["finalize", "finance", "finish up to", "fine"], 0, "finalize＝最後確定。", "專案開始前我們需要先把預算定案。", ["定案", "資助", "（錯誤用法）", "罰款"], [["budget", "預算"]]);
  add5("vocab", "The airline apologized for the ------- caused by the delay.", ["inconvenience", "incompetence", "independence", "incident"], 0, "apologize for the inconvenience＝為不便致歉。", "航空公司為延誤造成的不便道歉。", ["不便", "無能", "獨立", "事件"], [["delay", "延誤"]]);
  add5("vocab", "Ms. Lowe will ------- the company at the international trade fair.", ["represent", "present", "resent", "repeat"], 0, "represent the company＝代表公司。", "Lowe 女士將代表公司參加國際商展。", ["代表", "呈現；贈送", "怨恨", "重複"], [["trade fair", "商展"]]);
  add5("vocab", "Please read the terms and ------- carefully before signing.", ["conditions", "conclusions", "connections", "considerations"], 0, "terms and conditions＝條款與條件，固定用法。", "簽名前請仔細閱讀條款。", ["條件", "結論", "連結", "考量"], [["sign", "簽名"]]);
  add5("vocab", "The renovation will ------- the size of the lobby.", ["double", "duplicate", "dual", "doubt"], 0, "double＝使加倍（動詞）。", "整修將使大廳面積加倍。", ["使加倍", "複製", "雙重的 (adj.)", "懷疑"], [["renovation", "整修"]]);

  /* ---------- Part 6 ---------- */
  P6.push({ title: "E-mail", head: "To: Marcus Webb\nFrom: Orchid Hotel Reservations\nSubject: Your upcoming stay",
    text: "Dear Mr. Webb,\n\nThank you for choosing the Orchid Hotel. We are pleased to confirm your booking for a deluxe room from October 3 to October 6. [1] As a member of our rewards program, you are entitled to a free room upgrade, [2] availability. Please note that the hotel parking garage [3] renovated during your stay. Guests may park at the public lot across the street at a [4] rate of $10 per day.",
    qs: [
      ["context", ["Your confirmation number is OH-55821.", "The hotel was built in 1972.", "Parking is free for all employees.", "Breakfast was not served yesterday."], 0, "前句確認訂房，接著提供確認編號，是訂房確認信的標準內容。"],
      ["prep", ["subject to", "according", "due", "instead of"], 0, "subject to availability＝視空房情況而定。"],
      ["voice", ["is being", "has", "is", "renovating"], 0, "停車場「正在被整修」：is being + p.p.。"],
      ["vocab", ["discounted", "discounting", "discount", "discounts"], 0, "修飾名詞 rate，用過去分詞 discounted（打折的）。"]
    ] });
  ZH6.push({ t: "Webb 先生您好：\n\n感謝您選擇蘭花飯店。我們很高興確認您 10 月 3 日至 10 月 6 日的豪華客房訂房。您的確認編號是 OH-55821。身為我們的會員，您可以免費升等房型，視空房情況而定。請注意，您入住期間飯店停車場正在整修。房客可以停在對街的公共停車場，享有每日 10 美元的優惠價。",
    w: [["confirm", "確認"], ["booking", "訂房"], ["be entitled to", "有權享有"], ["upgrade", "升等"], ["rate", "費率"]],
    q: [[["您的確認編號是 OH-55821。", "飯店建於 1972 年。", "所有員工停車免費。", "昨天沒有供應早餐。"], ["✓ 確認訂房後接著給確認編號，是這類信件的固定格式。", "✗ 建造年份和訂房確認無關。", "✗ 員工停車和房客無關。", "✗ 昨天的早餐和這位房客還沒開始的住宿無關。"]],
      [["視……而定", "（according 需加 to）", "（due 需加 to）", "取而代之"]], [["正在被（整修）", "有", "是", "整修中 (V-ing)"]], [["打折的 (p.p.)", "打折中 (V-ing)", "折扣 (n.)", "折扣（複數）"]]] });

  P6.push({ title: "Notice", head: "Message from the Building Management",
    text: "Starting next Monday, all visitors to Riverside Tower must register at the security desk [1] proceeding to the elevators. Visitors will be asked to show photo identification and will receive a temporary pass. [2] Tenants who expect a large number of guests are encouraged to submit a visitor list in advance. This will help reduce waiting times [3] busy periods. We appreciate your [4] in keeping the building safe.",
    qs: [
      ["prep", ["before", "until", "since", "by"], 0, "before + V-ing＝在……之前。"],
      ["context", ["The pass must be returned when leaving the building.", "Riverside Tower has thirty floors.", "The elevators were installed recently.", "Many tenants work in finance."], 0, "前句提到會拿到臨時通行證，接著說明離開時要歸還，最連貫。"],
      ["prep", ["during", "while", "among", "about"], 0, "during + 名詞片語 busy periods。while 後接子句。"],
      ["pos", ["cooperate", "cooperative", "cooperation", "cooperatively"], 2, "所有格 your 後接名詞 cooperation。"]
    ] });
  ZH6.push({ t: "從下週一開始，所有進入 Riverside 大樓的訪客在前往電梯之前，都必須先在保全櫃檯登記。訪客需要出示有照片的證件，並會領到一張臨時通行證。離開大樓時必須歸還通行證。預計會有大量訪客的租戶，建議事先提交訪客名單，這有助於減少尖峰時段的等候時間。感謝您配合維護大樓安全。",
    w: [["register", "登記"], ["proceed", "前往"], ["identification", "身分證件"], ["temporary", "臨時的"], ["tenant", "租戶"], ["in advance", "事先"]],
    q: [[["在……之前", "直到", "自從", "在……之前（期限）"]],
      [["離開大樓時必須歸還通行證。", "Riverside 大樓有三十層。", "電梯是最近才裝的。", "許多租戶在金融業工作。"], ["✓ 前句說會拿到臨時通行證，接著說明歸還規定，同一個主題。", "✗ 樓層數和訪客登記流程無關。", "✗ 電梯安裝時間和登記規定無關。", "✗ 租戶的行業和訪客流程無關。"]],
      [["在……期間", "當……時（接子句）", "在……之中", "關於"]], [["合作 (v.)", "合作的 (adj.)", "合作 (n.)", "合作地 (adv.)"]]] });

  P6.push({ title: "Article", head: "Local Library Launches Coding Program",
    text: "The Maple Grove Public Library has launched a free coding program for teenagers. The program, [1] runs every Saturday morning, teaches the basics of website design and app development. [2] Library director Anita Shah said the response has been [3] positive. \"Within a week, all twenty spots were filled,\" she explained. The library plans to add a second class in the spring if it can find [4] volunteer instructors.",
    qs: [
      ["rel", ["which", "that", "who", "where"], 0, "逗號後非限定用法，指物用 which。"],
      ["context", ["Participants do not need any previous experience.", "The library also lends board games.", "Maple Grove is known for its parks.", "Coding was invented in the 1800s."], 0, "前句介紹課程內容，接著說明不需經驗，和下一段報名踴躍也連得上。"],
      ["pos", ["overwhelming", "overwhelmingly", "overwhelm", "overwhelmed"], 1, "修飾形容詞 positive，用副詞 overwhelmingly。"],
      ["vocab", ["additional", "addition", "additionally", "add"], 0, "修飾名詞 instructors，用形容詞 additional。"]
    ] });
  ZH6.push({ t: "楓林公共圖書館推出了一項給青少年的免費程式課程。這個課程每週六早上上課，教網站設計和 app 開發的基礎。參加者不需要任何經驗。館長 Anita Shah 表示反應非常熱烈。「一週內二十個名額全部額滿，」她說。如果能找到更多志工講師，圖書館計畫在春天加開第二班。",
    w: [["launch", "推出"], ["basics", "基礎"], ["response", "反應"], ["spot", "名額"], ["volunteer", "志工"], ["instructor", "講師"]],
    q: [[["（指物，非限定）", "（不能用在逗號後）", "（指人）", "（指地點）"]],
      [["參加者不需要任何經驗。", "圖書館也出借桌遊。", "楓林以公園聞名。", "程式設計是 1800 年代發明的。"], ["✓ 補充課程的參加條件，延續介紹課程的內容。", "✗ 桌遊和程式課程無關。", "✗ 城市的公園和課程無關。", "✗ 程式設計的歷史和這則新聞無關，內容也有問題。"]],
      [["壓倒性的 (adj.)", "壓倒性地 (adv.)", "壓倒 (v.)", "被壓垮的 (p.p.)"]], [["額外的 (adj.)", "增加 (n.)", "此外 (adv.)", "增加 (v.)"]]] });

  P6.push({ title: "Letter", head: "Dear Valued Customer,",
    text: "We are writing to inform you of a change to our delivery service. Beginning July 1, orders under $50 will be charged a $5 delivery fee. Orders of $50 or more will continue to be delivered [1] charge. [2] We understand that this change may be [3] to some of our customers. However, rising fuel costs have made it necessary. As always, you can avoid delivery fees [4] picking up your order at any of our stores.",
    qs: [
      ["prep", ["free of", "without of", "no", "out"], 0, "free of charge＝免費。"],
      ["context", ["This applies to all orders placed online or by phone.", "Our stores sell fresh flowers.", "Our founder opened the first store in 1990.", "July is usually our busiest month."], 0, "前面說明運費規定，接著說明適用範圍，屬同一主題。"],
      ["pos", ["disappointing", "disappointed", "disappointment", "disappoint"], 0, "這項改變「令人失望」，用 disappointing 修飾事物。"],
      ["prep", ["by", "with", "for", "at"], 0, "by + V-ing＝藉由……的方式。"]
    ] });
  ZH6.push({ t: "親愛的顧客您好：\n\n我們來信通知您，外送服務有所調整。從 7 月 1 日起，未滿 50 美元的訂單將收取 5 美元運費。50 美元以上的訂單仍然免運費。這項規定適用於所有網路和電話訂單。我們了解這項調整可能會讓部分顧客失望，但燃料成本上漲使我們不得不這麼做。和以往一樣，您可以到任何一家門市自取，就不必付運費。",
    w: [["inform", "通知"], ["delivery fee", "運費"], ["charge", "收費"], ["rising", "上漲的"], ["fuel cost", "燃料成本"]],
    q: [[["免於（free of charge＝免費）", "（錯誤組合）", "沒有", "外面"]],
      [["這項規定適用於所有網路和電話訂單。", "我們的門市販售鮮花。", "創辦人在 1990 年開了第一家店。", "七月通常是我們最忙的月份。"], ["✓ 說明新運費規定的適用範圍，延續前句。", "✗ 賣什麼商品和運費調整無關。", "✗ 公司歷史會打斷說明。", "✗ 最忙的月份和運費規定無關。"]],
      [["令人失望的", "感到失望的（修飾人）", "失望 (n.)", "使失望 (v.)"]], [["藉由", "用（工具）", "為了", "在"]]] });

  /* ---------- Part 7 ---------- */
  P7.push({ title: "Advertisement", text: "Green Leaf Office Cleaning\n\nKeep your workplace spotless without lifting a finger! Green Leaf provides daily, weekly, and monthly cleaning plans for offices of all sizes. We use only environmentally friendly products that are safe for people and pets. All of our staff are fully insured and undergo background checks.\n\nSign a 12-month contract before August 31 and receive your first month free. Call 555-0193 to schedule a free on-site estimate.",
    qs: [
      ["detail", "What is mentioned about the cleaning products?", ["They are environmentally friendly.", "They are imported.", "They are sold in stores.", "They are made by Green Leaf."], 0, "原文 environmentally friendly products。"],
      ["detail", "How can a business receive a free month of service?", ["By signing a one-year contract", "By referring another company", "By paying in advance", "By requesting a weekly plan"], 0, "12-month contract＝一年合約，可獲第一個月免費。"],
      ["infer", "What is suggested about Green Leaf's employees?", ["They have been checked for safety.", "They work only on weekends.", "They are all part-time workers.", "They speak several languages."], 0, "undergo background checks＝接受背景調查，可推論經過安全查核。"]
    ] });
  ZH7.push({ t: "綠葉辦公室清潔\n\n不用動手，就能讓您的辦公室一塵不染！綠葉為各種規模的辦公室提供每日、每週和每月清潔方案。我們只使用對人和寵物都安全的環保產品。所有員工都有完整保險並經過背景調查。\n\n8 月 31 日前簽訂 12 個月合約，即可享第一個月免費。請撥 555-0193 預約免費到府估價。",
    w: [["spotless", "一塵不染的"], ["environmentally friendly", "環保的"], ["insured", "有保險的"], ["background check", "背景調查"], ["estimate", "估價"]],
    q: [["關於清潔產品，文中提到什麼？", ["它們很環保。", "它們是進口的。", "它們在店裡販售。", "它們是綠葉自己生產的。"], "We use only environmentally friendly products"],
      ["企業要怎樣獲得一個月免費服務？", ["簽一年合約", "推薦其他公司", "預先付款", "申請每週方案"], "Sign a 12-month contract before August 31 and receive your first month free."],
      ["關於綠葉的員工，文中暗示了什麼？", ["他們經過安全查核。", "他們只在週末工作。", "他們都是兼職。", "他們會說好幾種語言。"], "All of our staff are fully insured and undergo background checks."]] });

  P7.push({ title: "E-mail", text: "To: All Department Heads\nFrom: Rachel Kim, Facilities Manager\nDate: March 4\nSubject: Office move\n\nAs you know, our team will move to the newly renovated fifth floor next month. The movers will arrive on Friday, April 12, at 6 P.M., after regular business hours. Please make sure that all items in your department are packed in the boxes provided and labeled with your department name by 4 P.M. that day.\n\nComputers and phones will be disconnected and reinstalled by the IT team, so please do not pack them yourselves. Employees should expect to work from home on Monday, April 15, while the IT team completes the setup.\n\nRachel Kim",
    qs: [
      ["main", "What is the purpose of the e-mail?", ["To give instructions about a move", "To announce a renovation project", "To introduce a new IT manager", "To request new office furniture"], 0, "整封信在說明搬遷的時間與注意事項。"],
      ["detail", "What should employees NOT do?", ["Pack their computers", "Label their boxes", "Finish packing by 4 P.M.", "Use the boxes provided"], 0, "please do not pack them yourselves，指電腦和電話。"],
      ["infer", "What is suggested about Monday, April 15?", ["The new office will not be ready for work yet.", "The movers will return.", "It is a public holiday.", "Department heads will meet."], 0, "員工那天要在家工作，因為 IT 還在完成設定。"],
      ["syn", "The word \"expect\" in paragraph 2 is closest in meaning to", ["plan", "wait", "hope", "demand"], 0, "should expect to work from home＝應該預先打算（plan）在家工作。"]
    ] });
  ZH7.push({ t: "收件人：各部門主管\n寄件人：總務經理 Rachel Kim\n日期：3 月 4 日\n主旨：辦公室搬遷\n\n如各位所知，我們團隊下個月將搬到剛整修好的五樓。搬家公司會在 4 月 12 日（週五）下午 6 點、正常上班時間結束後抵達。請確保各部門的所有物品在當天下午 4 點前裝進提供的紙箱，並標上部門名稱。\n\n電腦和電話會由 IT 團隊拆線和重新安裝，請不要自己打包。4 月 15 日（週一）IT 團隊完成設定期間，員工應預計在家工作。\n\nRachel Kim",
    w: [["renovated", "整修過的"], ["mover", "搬家工人"], ["business hours", "上班時間"], ["disconnect", "拆線；斷開"], ["reinstall", "重新安裝"], ["setup", "設定"]],
    q: [["這封 e-mail 的目的是什麼？", ["說明搬遷的注意事項", "宣布整修工程", "介紹新的 IT 經理", "申請新的辦公家具"], "our team will move to the newly renovated fifth floor next month"],
      ["員工不應該做什麼？", ["打包自己的電腦", "在箱子上貼標籤", "下午 4 點前打包完成", "使用提供的紙箱"], "so please do not pack them yourselves"],
      ["關於 4 月 15 日（週一），文中暗示了什麼？", ["新辦公室還不能上班。", "搬家公司會再來。", "那天是國定假日。", "部門主管要開會。"], "Employees should expect to work from home on Monday, April 15, while the IT team completes the setup."],
      ["第 2 段的 expect 意思最接近", ["打算", "等待", "希望", "要求"], "Employees should expect to work from home"]] });

  P7.push({ title: "Online chat", text: "Kevin Brooks (2:14 P.M.)\nHi Lisa, are you still at the printer's? The client just called. They want to add their new logo to the brochures.\n\nLisa Moreno (2:16 P.M.)\nI'm here now. They haven't started printing yet.\n\nKevin Brooks (2:17 P.M.)\nGreat timing. I'm sending you the new file now.\n\nLisa Moreno (2:19 P.M.)\nGot it. They say the change will push delivery back to Thursday.\n\nKevin Brooks (2:20 P.M.)\nThat should be fine. The trade show isn't until next Tuesday.\n\nLisa Moreno (2:21 P.M.)\nOK, I'll approve the new proof before I leave.",
    qs: [
      ["detail", "Why does Mr. Brooks contact Ms. Moreno?", ["A client requested a design change.", "The printer is broken.", "A trade show was canceled.", "He needs her to call a client."], 0, "客戶想在手冊加上新 logo。"],
      ["intent", "At 2:17 P.M., what does Mr. Brooks mean when he writes, \"Great timing\"?", ["He is glad the printing has not begun.", "He thinks the meeting started on time.", "He is pleased the client called early.", "He wants Ms. Moreno to hurry."], 0, "回應「還沒開始印」，表示時機剛好、還來得及修改。"],
      ["infer", "What is implied about the brochures?", ["They will be used at a trade show.", "They will be delivered on Tuesday.", "They have already been printed.", "They were designed by the client."], 0, "延到週四也沒關係，因為商展在下週二，可推論手冊是商展要用的。"]
    ] });
  ZH7.push({ t: "Kevin Brooks（下午 2:14）\n嗨 Lisa，你還在印刷廠嗎？客戶剛打來，他們想在手冊上加新的標誌。\n\nLisa Moreno（下午 2:16）\n我在。他們還沒開始印。\n\nKevin Brooks（下午 2:17）\n時機剛好。我現在把新檔案傳給你。\n\nLisa Moreno（下午 2:19）\n收到了。他們說這個修改會讓交貨延到週四。\n\nKevin Brooks（下午 2:20）\n應該沒問題，商展要到下週二才開始。\n\nLisa Moreno（下午 2:21）\n好，我離開前會核准新的打樣。",
    w: [["printer's", "印刷廠"], ["brochure", "手冊"], ["push back", "延後"], ["trade show", "商展"], ["proof", "打樣；校樣"]],
    q: [["Brooks 先生為什麼聯絡 Moreno 女士？", ["客戶要求修改設計。", "印表機壞了。", "商展取消了。", "他需要她打電話給客戶。"], "They want to add their new logo to the brochures."],
      ["下午 2:17，Brooks 先生寫「Great timing」是什麼意思？", ["他很高興還沒開始印。", "他覺得會議準時開始了。", "他很高興客戶早打電話。", "他要 Moreno 女士快一點。"], "They haven't started printing yet."],
      ["關於手冊，文中暗示了什麼？", ["會在商展上使用。", "週二會送達。", "已經印好了。", "是客戶自己設計的。"], "The trade show isn't until next Tuesday."]] });

  P7.push({ title: "Article", text: "HARBOR CITY (June 18) — Nexa Foods, the region's largest frozen food maker, announced yesterday that it will open a research center dedicated to plant-based products. The center, located in the city's Innovation District, will employ about 60 food scientists when it opens in January.\n\nNexa's chief executive, Paul Grant, said the move reflects changing consumer tastes. \"Sales of our plant-based meals have tripled in three years,\" he said. The company also plans to work with Harbor City University, whose students will be offered paid internships at the center.\n\nNexa currently operates two factories in the region and employs more than 1,500 people.",
    qs: [
      ["main", "What is the article mainly about?", ["A company's new research facility", "The opening of a university", "A decline in frozen food sales", "A change in company leadership"], 0, "主旨是 Nexa 要開設植物性食品研究中心。"],
      ["detail", "Why is Nexa opening the center?", ["Demand for plant-based food has grown.", "Its factories are too small.", "The city offered tax benefits.", "Its competitors opened similar centers."], 0, "消費者口味改變，植物性餐點銷量三年成長三倍。"],
      ["detail", "What will some university students receive?", ["Paid internships", "Free meals", "Scholarships", "Full-time jobs"], 0, "students will be offered paid internships。"],
      ["syn", "The word \"reflects\" in paragraph 2 is closest in meaning to", ["shows", "returns", "considers", "copies"], 0, "the move reflects changing consumer tastes＝這項決定反映出（shows）消費者口味的改變。"]
    ] });
  ZH7.push({ t: "港市（6 月 18 日）— 區域最大的冷凍食品製造商 Nexa 食品昨天宣布，將開設一座專門研發植物性產品的研究中心。這座位於市內創新園區的中心將於一月啟用，屆時約聘用 60 名食品科學家。\n\nNexa 執行長 Paul Grant 表示，這項決定反映出消費者口味的改變。「我們植物性餐點的銷量三年內成長了三倍，」他說。公司也計畫與港市大學合作，提供該校學生在中心的有薪實習機會。\n\nNexa 目前在該區經營兩座工廠，員工超過 1,500 人。",
    w: [["dedicated to", "專門用於"], ["plant-based", "植物性的"], ["employ", "僱用"], ["consumer", "消費者"], ["triple", "成長三倍"], ["internship", "實習"]],
    q: [["這篇文章主要在講什麼？", ["一家公司的新研究中心", "一所大學開幕", "冷凍食品銷量下滑", "公司換了領導人"], "it will open a research center dedicated to plant-based products"],
      ["Nexa 為什麼要開設這個中心？", ["植物性食品的需求成長了。", "它的工廠太小。", "市政府提供稅務優惠。", "競爭對手也開了類似的中心。"], "Sales of our plant-based meals have tripled in three years"],
      ["有些大學生會得到什麼？", ["有薪實習", "免費餐點", "獎學金", "全職工作"], "whose students will be offered paid internships at the center"],
      ["第 2 段的 reflects 意思最接近", ["顯示", "歸還", "考慮", "複製"], "the move reflects changing consumer tastes"]] });
})();
