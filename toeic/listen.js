/* Part 3 簡短對話／Part 4 簡短獨白：原創題目。
   lines：[說話者, 英文, 中文]；qs：[技能, 題目, [選項], 正解, 解析, 題目中文, [選項中文], 原文線索] */
Object.assign(window.SKILLS, {
  lmain: { name: "聽力主旨目的", group: "L" },
  ldetail: { name: "聽力細節", group: "L" },
  linfer: { name: "聽力推論", group: "L" },
  lintent: { name: "說話者意圖", group: "L" }
});
window.P34 = [
  { part: 3, title: "Conversation · Office supplies", lines: [
    ["W", "Hi, Tom. The printer on our floor keeps jamming, and I have to print forty copies of the sales report for this afternoon's meeting.", "嗨，Tom。我們這層的印表機一直卡紙，可是我得為今天下午的會議印四十份業績報告。"],
    ["M", "Oh, that machine has been giving everyone trouble this week. Have you tried the one in the design department on the third floor?", "喔，那台機器這週一直出問題。妳試過三樓設計部那台嗎？"],
    ["W", "I didn't know we were allowed to use it.", "我不知道我們可以用那台。"],
    ["M", "Sure, just enter your employee number on the screen. And I'll call the repair company to come and look at ours.", "可以啊，只要在螢幕上輸入員工編號就好。我會打電話請維修公司來看看我們這台。"]],
    qs: [
      ["ldetail", "What does the woman need to do?", ["Print some documents", "Repair a machine", "Organize a meeting", "Order office supplies"], 0, "女士說要為下午的會議印四十份報告。", "女士需要做什麼？", ["列印文件", "修理機器", "籌辦會議", "訂購辦公用品"], "I have to print forty copies of the sales report"],
      ["ldetail", "What does the man suggest?", ["Using another printer", "Postponing a meeting", "Sending a file by e-mail", "Buying a new machine"], 0, "男士建議她去用三樓設計部的印表機。", "男士建議什麼？", ["使用另一台印表機", "延後會議", "用 e-mail 寄檔案", "買新機器"], "Have you tried the one in the design department on the third floor?"],
      ["linfer", "What will the man probably do next?", ["Contact a repair service", "Enter his employee number", "Go to the third floor", "Print the report himself"], 0, "男士說會打電話請維修公司來。", "男士接下來可能會做什麼？", ["聯絡維修公司", "輸入他的員工編號", "去三樓", "自己印報告"], "I'll call the repair company to come and look at ours"]
    ] },
  { part: 3, title: "Conversation · Restaurant reservation", lines: [
    ["M", "Good afternoon, Bella Vista Restaurant. How can I help you?", "午安，這裡是 Bella Vista 餐廳，有什麼能為您服務的嗎？"],
    ["W", "Hello, I'd like to book a table for twelve people this Friday at seven. It's for a retirement party for a colleague.", "你好，我想訂這週五晚上七點十二個人的位子，是同事的退休派對。"],
    ["M", "Let me check. Our main dining room is fully booked on Friday, but our private room upstairs is available. There's a fifty-dollar room fee, though.", "我查一下。週五主用餐區已經訂滿了，不過樓上的包廂還有空，但要收五十美元的包廂費。"],
    ["W", "That's fine. A private room would actually be better, since we're planning to give a short speech.", "沒問題。其實包廂更好，因為我們打算致詞。"],
    ["M", "Great. Could I have a name and phone number for the reservation?", "好的。可以給我訂位的姓名和電話嗎？"]],
    qs: [
      ["lmain", "Why is the woman calling?", ["To make a reservation", "To cancel an order", "To ask about a job", "To complain about a meal"], 0, "她打電話是要訂週五的位子。", "女士為什麼打電話？", ["訂位", "取消訂單", "詢問工作", "抱怨餐點"], "I'd like to book a table for twelve people"],
      ["ldetail", "What does the man say about the private room?", ["It requires an extra charge.", "It is being renovated.", "It holds only ten people.", "It is fully booked."], 0, "包廂要收五十美元的費用。", "關於包廂，男士說了什麼？", ["需要額外付費。", "正在整修。", "只能容納十人。", "已經訂滿。"], "There's a fifty-dollar room fee, though."],
      ["linfer", "Why does the woman prefer a private room?", ["Someone will give a speech.", "It is less expensive.", "It has a better view.", "Her group will arrive late."], 0, "因為他們打算致詞，包廂比較適合。", "女士為什麼比較想要包廂？", ["有人要致詞。", "比較便宜。", "景觀比較好。", "她們一行人會晚到。"], "since we're planning to give a short speech"]
    ] },
  { part: 3, title: "Conversation · Business trip", lines: [
    ["W", "Kenji, have you booked your flight to the Singapore trade fair yet?", "Kenji，你訂好去新加坡商展的機票了嗎？"],
    ["M", "Not yet. The direct flights are almost twice the price of the ones with a stop in Hong Kong.", "還沒。直飛的票價幾乎是在香港轉機的兩倍。"],
    ["W", "Well, the fair starts early on Monday morning, so you'll need to arrive on Sunday no matter which one you take.", "嗯，商展週一一大早就開始，所以不管搭哪一班，你都得週日到。"],
    ["M", "That's true. I'll take the cheaper option, then. I can review my presentation slides during the layover.", "也對。那我就選便宜的。轉機的時候我可以檢查簡報投影片。"]],
    qs: [
      ["ldetail", "Where is the man going?", ["To a trade fair", "To a job interview", "To a training course", "To a factory opening"], 0, "他要去新加坡的商展。", "男士要去哪裡？", ["商展", "工作面試", "訓練課程", "工廠開幕"], "your flight to the Singapore trade fair"],
      ["ldetail", "What problem does the man mention?", ["Direct flights are expensive.", "The flights are fully booked.", "His passport has expired.", "The fair has been postponed."], 0, "直飛的票價是轉機的兩倍。", "男士提到什麼問題？", ["直飛班機很貴。", "班機都客滿了。", "他的護照過期了。", "商展延期了。"], "The direct flights are almost twice the price"],
      ["linfer", "What will the man do during the layover?", ["Work on a presentation", "Meet a client", "Visit Hong Kong", "Call his manager"], 0, "他說轉機時會檢查簡報投影片。", "男士轉機時會做什麼？", ["準備簡報", "和客戶見面", "逛香港", "打電話給經理"], "I can review my presentation slides during the layover."]
    ] },
  { part: 3, title: "Conversation · Software training", lines: [
    ["M", "Excuse me, Ms. Ortiz. I'm the new hire in accounting. I was told to see you about the training for the expense software.", "不好意思，Ortiz 女士。我是會計部新來的，有人叫我來找您問報帳軟體的訓練。"],
    ["W", "Welcome! Yes, we run a session every Wednesday morning, but this week's is already full.", "歡迎！是的，我們每週三早上有一場訓練，不過這週的已經額滿了。"],
    ["M", "Oh, I see. I have to submit my first travel claim by Friday, though.", "喔，這樣啊。可是我週五前就得交第一份差旅報帳。"],
    ["W", "In that case, I can show you the basics myself. Are you free for about twenty minutes after lunch today?", "那這樣的話，我可以親自教你基本操作。你今天午餐後有大約二十分鐘的空嗎？"]],
    qs: [
      ["ldetail", "Who most likely is the man?", ["A new employee", "A software developer", "A training instructor", "A client"], 0, "他說自己是會計部的新人。", "男士最可能是誰？", ["新進員工", "軟體開發人員", "訓練講師", "客戶"], "I'm the new hire in accounting."],
      ["lintent", "Why does the man say, \"I have to submit my first travel claim by Friday\"?", ["To explain why he cannot wait", "To ask for a deadline extension", "To complain about his workload", "To request travel approval"], 0, "這週的訓練已滿，他用期限說明自己等不到下週。", "男士為什麼說「我週五前就得交第一份差旅報帳」？", ["說明他等不及", "要求延後期限", "抱怨工作量", "申請出差核准"], "I have to submit my first travel claim by Friday, though."],
      ["ldetail", "What does the woman offer to do?", ["Give a short lesson", "Submit a form for him", "Add him to a waiting list", "Extend a deadline"], 0, "她說可以親自教他基本操作。", "女士提議做什麼？", ["簡短教學", "幫他交表格", "把他列入候補", "延後期限"], "I can show you the basics myself."]
    ] },
  { part: 3, title: "Conversation · Delivery problem", lines: [
    ["W", "Hi, I'm calling about an order I placed online last week. The desk lamp arrived today, but the base is cracked.", "你好，我打來是關於上週在網路上下的訂單。桌燈今天送到了，可是底座裂了。"],
    ["M", "I'm sorry to hear that. Could you give me your order number?", "很抱歉發生這種事。可以給我您的訂單編號嗎？"],
    ["W", "Yes, it's 4-5-7-2-1.", "好，是 45721。"],
    ["M", "Thank you. I'll send a replacement right away, and you'll get it in two days. You don't need to return the damaged one.", "謝謝您。我會馬上寄一個新的給您，兩天內會收到。損壞的那個不用寄回來。"],
    ["W", "That's great, thanks. I need it for my new home office.", "太好了，謝謝。我新的居家辦公室要用。"]],
    qs: [
      ["lmain", "What is the problem?", ["A product was damaged.", "An order was not delivered.", "A bill was incorrect.", "A product is out of stock."], 0, "桌燈的底座裂了。", "問題是什麼？", ["商品損壞了。", "訂單沒有送達。", "帳單錯了。", "商品缺貨。"], "the base is cracked"],
      ["ldetail", "What does the man ask for?", ["An order number", "A receipt", "A photograph", "A delivery address"], 0, "他請她提供訂單編號。", "男士要求什麼？", ["訂單編號", "收據", "照片", "送貨地址"], "Could you give me your order number?"],
      ["ldetail", "What does the man say the woman does not need to do?", ["Send back an item", "Pay a shipping fee", "Fill out a form", "Wait a week"], 0, "損壞的那個不用寄回。", "男士說女士不需要做什麼？", ["寄回商品", "付運費", "填表", "等一週"], "You don't need to return the damaged one."]
    ] },
  { part: 3, title: "Conversation · Three speakers", lines: [
    ["M", "Sarah, Daniel, thanks for staying late. The client moved the product launch up by a week.", "Sarah、Daniel，謝謝你們留下來加班。客戶把產品發表提前了一週。"],
    ["W", "A week earlier? The packaging design isn't finished yet.", "提前一週？包裝設計還沒完成耶。"],
    ["M2", "I can help with that. My team just finished the website project, so we have some free time.", "我可以幫忙。我的團隊剛做完網站專案，所以現在比較有空。"],
    ["W", "That would be a big help. Could your designers start tomorrow?", "那幫助很大。你的設計師明天能開始嗎？"],
    ["M2", "Sure. I'll send you two people first thing in the morning.", "可以。我明天一早就派兩個人過去。"]],
    qs: [
      ["ldetail", "What change does the first man announce?", ["A deadline is earlier.", "A client has canceled.", "A budget has increased.", "A meeting room has changed."], 0, "客戶把發表提前一週，也就是期限提早了。", "第一位男士宣布了什麼改變？", ["期限提前了。", "客戶取消了。", "預算增加了。", "會議室換了。"], "The client moved the product launch up by a week."],
      ["linfer", "Why is Daniel's team available?", ["It recently completed a project.", "Its members are new.", "Its project was canceled.", "It works on weekends."], 0, "他的團隊剛做完網站專案。", "Daniel 的團隊為什麼有空？", ["剛完成一個專案。", "成員都是新人。", "專案被取消了。", "週末也上班。"], "My team just finished the website project"],
      ["ldetail", "What will Daniel do tomorrow morning?", ["Send some designers", "Meet the client", "Finish a website", "Approve a budget"], 0, "他說明天一早派兩個人過去。", "Daniel 明天早上會做什麼？", ["派設計師過去", "和客戶見面", "完成網站", "核准預算"], "I'll send you two people first thing in the morning."]
    ] },
  { part: 3, title: "Conversation · Apartment rental", lines: [
    ["W", "Hello, I saw your advertisement for the two-bedroom apartment on Maple Street. Is it still available?", "你好，我看到你們 Maple 街兩房公寓的廣告。還有在租嗎？"],
    ["M", "It is. The rent is eighteen hundred a month, and that includes water and internet.", "還有。房租每月一千八，包含水費和網路費。"],
    ["W", "Does the building have parking? I drive to work every day.", "大樓有停車位嗎？我每天開車上班。"],
    ["M", "There's a garage underneath, but spaces cost an extra seventy-five dollars a month. Would you like to see the apartment this weekend?", "地下有停車場，不過車位每月要多付七十五美元。妳這個週末想來看房嗎？"]],
    qs: [
      ["ldetail", "What is included in the rent?", ["Water and internet", "Electricity", "Parking", "Furniture"], 0, "房租包含水費和網路費。", "房租包含什麼？", ["水費和網路費", "電費", "停車位", "家具"], "that includes water and internet"],
      ["linfer", "Why does the woman ask about parking?", ["She commutes by car.", "She has visitors often.", "She owns two cars.", "She is selling her car."], 0, "她每天開車上班。", "女士為什麼問停車位？", ["她開車通勤。", "她常有訪客。", "她有兩輛車。", "她要賣車。"], "I drive to work every day."],
      ["ldetail", "What does the man invite the woman to do?", ["View the apartment", "Sign a lease", "Pay a deposit", "Meet the neighbors"], 0, "他問她週末要不要來看房。", "男士邀請女士做什麼？", ["看房", "簽租約", "付訂金", "認識鄰居"], "Would you like to see the apartment this weekend?"]
    ] },
  { part: 3, title: "Conversation · Hiring", lines: [
    ["M", "Linda, did you finish reviewing the applications for the marketing assistant position?", "Linda，行銷助理職缺的應徵資料妳看完了嗎？"],
    ["W", "Almost. Two candidates really stand out. One has great social media experience, and the other speaks three languages.", "快看完了。有兩位人選特別突出。一位社群媒體經驗很豐富，另一位會說三種語言。"],
    ["M", "We're expanding into Latin America next year, so language skills could be very useful.", "我們明年要拓展到拉丁美洲，所以語言能力可能很有用。"],
    ["W", "Good point. Why don't we invite both of them for interviews next week?", "說得好。我們何不邀請兩位下週都來面試？"],
    ["M", "OK. I'll check the conference room schedule.", "好。我去查一下會議室的時間。"]],
    qs: [
      ["lmain", "What are the speakers discussing?", ["Job applicants", "A marketing budget", "A language course", "A business trip"], 0, "他們在討論行銷助理的應徵者。", "說話者在討論什麼？", ["應徵者", "行銷預算", "語言課程", "出差"], "the applications for the marketing assistant position"],
      ["ldetail", "What does the man say about next year?", ["The company will enter a new market.", "The company will hire more staff.", "A new office will open.", "A product will be released."], 0, "公司明年要拓展到拉丁美洲。", "關於明年，男士說了什麼？", ["公司要進入新市場。", "公司要增聘員工。", "新辦公室要開幕。", "新產品要上市。"], "We're expanding into Latin America next year"],
      ["linfer", "What will the man most likely do next?", ["Check room availability", "Call the candidates", "Post a job advertisement", "Prepare interview questions"], 0, "他說要去查會議室的時間。", "男士接下來最可能做什麼？", ["查會議室能不能用", "打電話給應徵者", "刊登徵才廣告", "準備面試題目"], "I'll check the conference room schedule."]
    ] },
  { part: 3, title: "Conversation · Gym membership", lines: [
    ["W", "Hi, I'd like to cancel my gym membership. I'm moving to another city next month.", "你好，我想取消健身房會員。我下個月要搬到別的城市。"],
    ["M", "I'm sorry to hear you're leaving. Actually, we have locations in twelve cities. Where are you moving to?", "很遺憾妳要離開。其實我們在十二個城市都有分館。妳要搬去哪裡？"],
    ["W", "Portland.", "波特蘭。"],
    ["M", "We have two gyms there. I can transfer your membership for free, and you'd keep your current monthly rate.", "我們在那裡有兩家分館。我可以免費幫妳轉移會籍，而且月費維持現在的價格。"],
    ["W", "Oh, I didn't realize that. Let's do that instead.", "喔，我不知道有這種方式。那就改成這樣吧。"]],
    qs: [
      ["lmain", "Why did the woman come to the gym?", ["To end her membership", "To sign up for a class", "To change her payment method", "To complain about a trainer"], 0, "她一開始是來取消會員的。", "女士為什麼來健身房？", ["結束會員", "報名課程", "更改付款方式", "抱怨教練"], "I'd like to cancel my gym membership."],
      ["ldetail", "What does the man offer?", ["To transfer a membership", "To lower a monthly fee", "To give a free month", "To refund a payment"], 0, "他提議免費轉移會籍。", "男士提議什麼？", ["轉移會籍", "降低月費", "送一個月免費", "退款"], "I can transfer your membership for free"],
      ["lintent", "What does the woman mean when she says, \"Let's do that instead\"?", ["She accepts the man's offer.", "She wants to visit Portland.", "She prefers a different gym.", "She will pay a cancellation fee."], 0, "她改變主意，接受轉移會籍的提議。", "女士說「那就改成這樣吧」是什麼意思？", ["她接受男士的提議。", "她想去波特蘭玩。", "她比較喜歡別家健身房。", "她會付解約金。"], "Let's do that instead."]
    ] },
  { part: 3, title: "Conversation · Conference planning", lines: [
    ["M", "Ayumi, how's the planning going for the regional sales conference?", "Ayumi，區域業務大會籌備得怎麼樣了？"],
    ["W", "Pretty well. The hotel is confirmed, but our keynote speaker just canceled because of a family emergency.", "還不錯。飯店確定了，可是我們的主講人因為家裡有急事剛剛取消了。"],
    ["M", "That's unfortunate. What about asking Dr. Patel? She gave an excellent talk at last year's event.", "真可惜。要不要問 Patel 博士？她去年在活動上的演講很精采。"],
    ["W", "That's a good idea. I have her e-mail address somewhere. I'll write to her this afternoon.", "好主意。我有她的 e-mail 地址。我今天下午就寫信給她。"]],
    qs: [
      ["ldetail", "What problem does the woman mention?", ["A speaker canceled.", "A hotel is full.", "A budget was cut.", "A date was changed."], 0, "主講人取消了。", "女士提到什麼問題？", ["講者取消了。", "飯店客滿。", "預算被刪了。", "日期改了。"], "our keynote speaker just canceled"],
      ["ldetail", "What does the man say about Dr. Patel?", ["She spoke at a previous event.", "She works at the hotel.", "She is a sales manager.", "She organized the conference."], 0, "Patel 博士去年在活動上演講過。", "關於 Patel 博士，男士說了什麼？", ["她在之前的活動演講過。", "她在飯店工作。", "她是業務經理。", "她籌辦了這次大會。"], "She gave an excellent talk at last year's event."],
      ["linfer", "What will the woman do this afternoon?", ["Send an e-mail", "Visit the hotel", "Call a family member", "Prepare a speech"], 0, "她說下午會寫信給 Patel 博士。", "女士今天下午會做什麼？", ["寄 e-mail", "去飯店", "打電話給家人", "準備演講"], "I'll write to her this afternoon."]
    ] },
  { part: 3, title: "Conversation · Bookstore", lines: [
    ["M", "Excuse me, I'm looking for a book called The Quiet Market. It's about small business management.", "不好意思，我在找一本叫《The Quiet Market》的書，是講小型企業管理的。"],
    ["W", "Let me look it up. Hmm, we sold our last copy yesterday, but more are arriving on Thursday.", "我查一下。嗯，最後一本昨天賣掉了，不過週四會再進貨。"],
    ["M", "Thursday? I'm leaving on a business trip on Wednesday.", "週四？我週三就要出差了。"],
    ["W", "Our store downtown might still have one. I can call them and ask them to hold it for you.", "我們市中心的分店可能還有。我可以打電話請他們幫您保留。"]],
    qs: [
      ["ldetail", "What is the man looking for?", ["A book", "A magazine", "A map", "A gift card"], 0, "他在找一本書。", "男士在找什麼？", ["一本書", "一本雜誌", "一張地圖", "一張禮物卡"], "I'm looking for a book called The Quiet Market."],
      ["lintent", "Why does the man say, \"I'm leaving on a business trip on Wednesday\"?", ["He cannot wait for the delivery.", "He wants to order a travel guide.", "He needs a receipt for his company.", "He will return the book later."], 0, "書週四才到，他週三就要出差，表示等不到。", "男士為什麼說「我週三就要出差了」？", ["他等不到到貨。", "他想訂旅遊指南。", "他需要給公司的收據。", "他之後會退書。"], "I'm leaving on a business trip on Wednesday."],
      ["ldetail", "What does the woman offer to do?", ["Contact another store", "Deliver the book", "Give a discount", "Order a different book"], 0, "她提議打電話請市中心分店保留。", "女士提議做什麼？", ["聯絡另一家分店", "送書過去", "給折扣", "訂另一本書"], "I can call them and ask them to hold it for you."]
    ] },
  { part: 3, title: "Conversation · Budget report", lines: [
    ["W", "Mark, the director wants the quarterly budget report by tomorrow instead of Friday.", "Mark，主任要我們明天就交季度預算報告，不是週五。"],
    ["M", "Tomorrow? I'm still waiting for the figures from the Chicago office.", "明天？我還在等芝加哥辦公室的數字。"],
    ["W", "I spoke with them this morning. They said they'd send everything by three o'clock today.", "我今天早上跟他們談過了。他們說今天三點前會把資料全部寄來。"],
    ["M", "OK, then I should be able to finish it tonight. Could you check the charts before I send it?", "好，那我今晚應該能完成。我寄出之前，妳可以幫我檢查圖表嗎？"]],
    qs: [
      ["ldetail", "What has changed?", ["A deadline", "A meeting location", "A budget amount", "A director"], 0, "交報告的期限從週五提前到明天。", "什麼改變了？", ["期限", "開會地點", "預算金額", "主任"], "by tomorrow instead of Friday"],
      ["ldetail", "What is the man waiting for?", ["Information from another office", "Approval from the director", "A new computer", "A client's signature"], 0, "他在等芝加哥辦公室的數字。", "男士在等什麼？", ["另一個辦公室的資料", "主任的核准", "新電腦", "客戶的簽名"], "I'm still waiting for the figures from the Chicago office."],
      ["ldetail", "What does the man ask the woman to do?", ["Review some charts", "Call the Chicago office", "Speak to the director", "Work late tonight"], 0, "他請她在寄出前檢查圖表。", "男士請女士做什麼？", ["檢查圖表", "打電話給芝加哥辦公室", "跟主任談", "今晚加班"], "Could you check the charts before I send it?"]
    ] },

  { part: 4, title: "Talk · Airport announcement", lines: [
    ["N", "Attention, passengers on Flight 208 to Vancouver. Due to heavy snow in Vancouver, this flight has been delayed by approximately two hours. The new departure time is 4:15 P.M. Passengers can receive a meal voucher at the customer service desk near Gate 12. We will make another announcement if there are further changes. Thank you for your patience.", "搭乘 208 號班機前往溫哥華的旅客請注意。由於溫哥華大雪，本班機將延誤約兩小時，新的起飛時間是下午 4 點 15 分。旅客可以到 12 號登機門附近的客服櫃檯領取餐券。如有其他變動，我們會再廣播。感謝您的耐心。"]],
    qs: [
      ["ldetail", "Why is the flight delayed?", ["Bad weather", "A mechanical problem", "A crew shortage", "Heavy traffic"], 0, "因為溫哥華下大雪。", "班機為什麼延誤？", ["天氣惡劣", "機械問題", "機組人員不足", "交通壅塞"], "Due to heavy snow in Vancouver"],
      ["ldetail", "What is the new departure time?", ["4:15 P.M.", "2:15 P.M.", "12:00 P.M.", "6:15 P.M."], 0, "新的起飛時間是下午 4 點 15 分。", "新的起飛時間是幾點？", ["下午 4:15", "下午 2:15", "中午 12:00", "下午 6:15"], "The new departure time is 4:15 P.M."],
      ["ldetail", "What can passengers get at the customer service desk?", ["A meal voucher", "A new ticket", "A hotel room", "A seat upgrade"], 0, "可以在客服櫃檯領餐券。", "旅客可以在客服櫃檯拿到什麼？", ["餐券", "新機票", "飯店房間", "座位升等"], "Passengers can receive a meal voucher at the customer service desk"]
    ] },
  { part: 4, title: "Talk · Voice message", lines: [
    ["N", "Hi, this is Rachel from Greenway Dental Clinic, calling for Mr. James Fuller. I'm calling to remind you of your appointment tomorrow at ten A.M. with Dr. Kim. Please remember to bring your new insurance card, since our records show that your old one has expired. If you need to reschedule, please call us back at 555-0148 before five o'clock today. Thank you, and we'll see you tomorrow.", "您好，我是 Greenway 牙醫診所的 Rachel，找 James Fuller 先生。這通電話是提醒您明天上午十點和 Kim 醫師有約診。請記得攜帶新的保險卡，因為我們的紀錄顯示您的舊卡已經過期。如果需要改時間，請在今天五點前回電 555-0148。謝謝，明天見。"]],
    qs: [
      ["lmain", "What is the purpose of the call?", ["To confirm an appointment", "To announce a new dentist", "To request a payment", "To cancel a visit"], 0, "打電話是提醒明天的約診。", "這通電話的目的是什麼？", ["確認約診", "宣布有新醫師", "要求付款", "取消看診"], "I'm calling to remind you of your appointment tomorrow"],
      ["ldetail", "What is the listener asked to bring?", ["An insurance card", "A medical report", "A payment receipt", "A photo ID"], 0, "要帶新的保險卡。", "聽者被要求帶什麼？", ["保險卡", "醫療報告", "付款收據", "有照片的證件"], "Please remember to bring your new insurance card"],
      ["ldetail", "What should the listener do to change the time?", ["Call before five o'clock", "Send an e-mail", "Visit the clinic today", "Speak with Dr. Kim"], 0, "要在今天五點前回電。", "聽者要改時間該怎麼做？", ["五點前回電", "寄 e-mail", "今天去診所", "跟 Kim 醫師談"], "please call us back at 555-0148 before five o'clock today"]
    ] },
  { part: 4, title: "Talk · Tour guide", lines: [
    ["N", "Welcome to the Riverside Chocolate Factory tour. My name is Elena, and I'll be your guide this morning. The tour lasts about an hour. First, we'll watch a short video about the history of the company, which was founded here in 1952. Then we'll walk through the production area. For safety reasons, please don't touch any of the machines. At the end of the tour, everyone will receive a free box of chocolates in the gift shop.", "歡迎參加 Riverside 巧克力工廠導覽。我是 Elena，今天早上由我擔任導覽。導覽大約一小時。首先我們會看一段公司歷史的短片，公司 1952 年在這裡創立。接著我們會走過生產區。為了安全，請不要碰觸任何機器。導覽結束時，每個人都會在禮品店拿到一盒免費巧克力。"]],
    qs: [
      ["ldetail", "What will the listeners do first?", ["Watch a video", "Visit the gift shop", "Taste some chocolate", "Meet the company founder"], 0, "首先會看一段公司歷史的短片。", "聽者首先會做什麼？", ["看影片", "去禮品店", "試吃巧克力", "見公司創辦人"], "First, we'll watch a short video"],
      ["ldetail", "What are the listeners asked not to do?", ["Touch the machines", "Take photographs", "Leave the group", "Eat in the factory"], 0, "為了安全，請勿碰觸機器。", "聽者被要求不要做什麼？", ["碰觸機器", "拍照", "脫隊", "在工廠吃東西"], "please don't touch any of the machines"],
      ["ldetail", "What will the listeners receive at the end?", ["A free gift", "A discount coupon", "A certificate", "A company brochure"], 0, "最後每人會拿到一盒免費巧克力。", "聽者最後會得到什麼？", ["免費禮物", "折價券", "證書", "公司簡介"], "everyone will receive a free box of chocolates"]
    ] },
  { part: 4, title: "Talk · Staff meeting", lines: [
    ["N", "Good morning, everyone. Before we start, I have an announcement. Starting next month, we're switching to a new time-tracking system. Instead of filling out paper forms, you'll record your hours on your phone using an app. I know some of you are worried about learning something new, but the app is very simple. Helen from IT will hold two training sessions next week, and I'd like everyone to attend one of them.", "大家早安。開始之前我有件事要宣布。從下個月開始，我們要改用新的工時紀錄系統。不用再填紙本表格，改用手機上的 app 記錄工時。我知道有些人擔心要學新東西，不過這個 app 很簡單。IT 部門的 Helen 下週會開兩場訓練，希望大家都參加其中一場。"]],
    qs: [
      ["lmain", "What is the announcement mainly about?", ["A new way to record work hours", "A change in office hours", "A new phone policy", "A staff party"], 0, "主要是在宣布新的工時紀錄系統。", "這則宣布主要在講什麼？", ["記錄工時的新方式", "上班時間的改變", "新的手機使用規定", "員工派對"], "we're switching to a new time-tracking system"],
      ["lintent", "Why does the speaker say, \"the app is very simple\"?", ["To reassure the listeners", "To complain about the app", "To suggest a different app", "To explain a delay"], 0, "有人擔心要學新東西，說話者用「很簡單」讓大家安心。", "說話者為什麼說「這個 app 很簡單」？", ["讓聽者安心", "抱怨這個 app", "建議換別的 app", "解釋延誤原因"], "the app is very simple"],
      ["ldetail", "What are the listeners asked to do?", ["Attend a training session", "Download a form", "Contact Helen today", "Work extra hours"], 0, "希望大家參加其中一場訓練。", "聽者被要求做什麼？", ["參加訓練", "下載表格", "今天聯絡 Helen", "加班"], "I'd like everyone to attend one of them"]
    ] },
  { part: 4, title: "Talk · Radio advertisement", lines: [
    ["N", "Is your old sofa looking tired? Come to Hartley Furniture's spring sale this weekend only! All sofas and armchairs are thirty percent off, and dining tables are twenty percent off. Plus, we offer free delivery on any purchase over five hundred dollars. Hartley Furniture is located on Route 9, right next to the Lakeside Shopping Mall. Our doors open at nine A.M. on Saturday.", "您的舊沙發看起來很舊了嗎？快來 Hartley 家具的春季特賣，只有這個週末！所有沙發和單人扶手椅七折，餐桌八折。而且購物滿五百美元免運費。Hartley 家具位於 9 號公路，就在 Lakeside 購物中心旁邊。週六上午九點開門。"]],
    qs: [
      ["ldetail", "What is being advertised?", ["A furniture sale", "A shopping mall", "A moving company", "A restaurant"], 0, "廣告的是家具特賣。", "廣告的是什麼？", ["家具特賣", "購物中心", "搬家公司", "餐廳"], "Hartley Furniture's spring sale"],
      ["ldetail", "What discount is offered on dining tables?", ["20 percent", "30 percent", "50 percent", "10 percent"], 0, "餐桌打八折，也就是 20% off。", "餐桌有多少折扣？", ["20%（八折）", "30%（七折）", "50%（五折）", "10%（九折）"], "dining tables are twenty percent off"],
      ["ldetail", "How can customers get free delivery?", ["By spending over $500", "By shopping on Saturday", "By ordering online", "By becoming a member"], 0, "購物滿五百美元免運費。", "顧客要怎樣才能免運費？", ["消費超過 500 美元", "週六購物", "上網訂購", "成為會員"], "free delivery on any purchase over five hundred dollars"]
    ] },
  { part: 4, title: "Talk · Workshop introduction", lines: [
    ["N", "Thank you all for coming to today's workshop on writing effective business e-mails. I'm Paul Grant, and I've worked in corporate communications for over fifteen years. Today, we'll focus on three areas: writing clear subject lines, keeping messages short, and choosing the right tone. Before we begin, please take a look at the handout on your table. It includes some examples we'll discuss later. Now, let's start with a quick question. How many e-mails do you receive each day?", "謝謝大家來參加今天的商務 e-mail 寫作研習。我是 Paul Grant，在企業溝通領域工作超過十五年。今天會著重三個部分：寫清楚的主旨、讓訊息簡短，以及選擇合適的語氣。開始之前，請看一下桌上的講義，裡面有一些我們稍後會討論的例子。好，先從一個簡單的問題開始：你們每天會收到幾封 e-mail？"]],
    qs: [
      ["lmain", "What is the workshop about?", ["Business writing", "Public speaking", "Time management", "Computer skills"], 0, "研習主題是商務 e-mail 寫作。", "這場研習的主題是什麼？", ["商務寫作", "公開演說", "時間管理", "電腦技能"], "writing effective business e-mails"],
      ["ldetail", "What does the speaker say about himself?", ["He has many years of experience.", "He wrote a book.", "He works in IT.", "He is a new employee."], 0, "他在企業溝通領域工作超過十五年。", "說話者說了關於自己的什麼？", ["他有多年經驗。", "他寫過一本書。", "他在 IT 工作。", "他是新員工。"], "I've worked in corporate communications for over fifteen years"],
      ["ldetail", "What are the listeners asked to look at?", ["A handout", "A screen", "An e-mail", "A website"], 0, "請大家看桌上的講義。", "聽者被要求看什麼？", ["講義", "螢幕", "一封 e-mail", "網站"], "please take a look at the handout on your table"]
    ] },
  { part: 4, title: "Talk · News report", lines: [
    ["N", "In local news, the city of Brookfield has announced plans to build a new public library downtown. The three-story building will replace the current library, which is more than sixty years old. According to Mayor Lisa Tran, the new library will include study rooms, a children's area, and a café. Construction is scheduled to begin in March and will take about two years. During construction, a temporary library will operate at the community center on Elm Street.", "地方新聞，Brookfield 市宣布將在市中心興建新的公立圖書館。這棟三層樓建築將取代現有已有六十多年歷史的圖書館。根據市長 Lisa Tran 的說法，新圖書館將設有自習室、兒童區和咖啡廳。工程預定三月開始，約需兩年。施工期間，Elm 街的社區中心將設置臨時圖書館。"]],
    qs: [
      ["lmain", "What is the news report mainly about?", ["A new library", "A city election", "A community center", "A new café"], 0, "主要在報導新圖書館的興建計畫。", "這則新聞主要在講什麼？", ["新圖書館", "市長選舉", "社區中心", "新咖啡廳"], "plans to build a new public library downtown"],
      ["ldetail", "What is mentioned about the current library?", ["It is very old.", "It will become a café.", "It has three floors.", "It is closing next week."], 0, "現有圖書館已有六十多年歷史。", "關於現有的圖書館，新聞提到什麼？", ["很老舊。", "會改成咖啡廳。", "有三層樓。", "下週關閉。"], "which is more than sixty years old"],
      ["ldetail", "Where will a temporary library be located?", ["At a community center", "At city hall", "At a school", "At a shopping mall"], 0, "臨時圖書館設在 Elm 街的社區中心。", "臨時圖書館會設在哪裡？", ["社區中心", "市政府", "學校", "購物中心"], "a temporary library will operate at the community center"]
    ] },
  { part: 4, title: "Talk · Hotel welcome", lines: [
    ["N", "Good evening, and welcome to the Harbor View Hotel. I'm Marco, the night manager. I'd like to give you some information about our services. Breakfast is served from six thirty to ten in the restaurant on the second floor. The fitness center and pool are open twenty-four hours, and you'll need your room key to enter. Also, please note that the hotel shuttle to the convention center leaves from the main entrance every thirty minutes. If you need anything, just dial zero from your room phone.", "晚安，歡迎光臨 Harbor View 飯店。我是夜班經理 Marco。我想向各位介紹一下我們的服務。早餐在二樓餐廳供應，時間是六點半到十點。健身中心和游泳池二十四小時開放，進入時需要房卡。另外請注意，前往會議中心的接駁車每三十分鐘從正門出發一班。有任何需要，請用房間電話撥 0。"]],
    qs: [
      ["ldetail", "Who is the speaker?", ["A hotel manager", "A tour guide", "A shuttle driver", "A restaurant chef"], 0, "他是飯店的夜班經理。", "說話者是誰？", ["飯店經理", "導遊", "接駁車司機", "餐廳主廚"], "I'm Marco, the night manager"],
      ["ldetail", "What is needed to use the fitness center?", ["A room key", "A membership card", "A reservation", "An extra fee"], 0, "進入健身中心需要房卡。", "使用健身中心需要什麼？", ["房卡", "會員卡", "預約", "額外費用"], "you'll need your room key to enter"],
      ["ldetail", "How often does the shuttle leave?", ["Every 30 minutes", "Every hour", "Every 10 minutes", "Twice a day"], 0, "接駁車每三十分鐘一班。", "接駁車多久發一班？", ["每 30 分鐘", "每小時", "每 10 分鐘", "一天兩班"], "every thirty minutes"]
    ] },
  { part: 4, title: "Talk · Product recall", lines: [
    ["N", "This is an important message for customers who purchased the Brightway coffee maker between January and April of this year. We have found that the power cord on some units can overheat. For your safety, please stop using the product immediately. Bring it to any of our stores or mail it to us, and we will give you a full refund or a replacement model. Shipping is free. You can find a prepaid shipping label on our website. We apologize for the inconvenience.", "這是給今年一月到四月間購買 Brightway 咖啡機顧客的重要訊息。我們發現部分機型的電源線可能過熱。為了您的安全，請立即停止使用。您可以帶到我們任何一家門市或寄給我們，我們會全額退款或更換新機型。運費免費，預付運費的寄件標籤可以在我們的網站上取得。造成不便，敬請見諒。"]],
    qs: [
      ["lmain", "What is the purpose of the message?", ["To announce a product recall", "To advertise a new coffee maker", "To explain a price change", "To announce a store opening"], 0, "這是產品召回的通知。", "這則訊息的目的是什麼？", ["宣布產品召回", "宣傳新咖啡機", "說明價格調整", "宣布門市開幕"], "please stop using the product immediately"],
      ["ldetail", "What is the problem with the product?", ["A part can overheat.", "It makes weak coffee.", "It is too noisy.", "It was sold at the wrong price."], 0, "電源線可能過熱。", "產品有什麼問題？", ["某個零件可能過熱。", "煮出來的咖啡太淡。", "太吵。", "售價標錯。"], "the power cord on some units can overheat"],
      ["ldetail", "What can customers find on the website?", ["A shipping label", "A user manual", "A discount code", "A store map"], 0, "網站上有預付運費的寄件標籤。", "顧客可以在網站上找到什麼？", ["寄件標籤", "使用手冊", "折扣碼", "門市地圖"], "You can find a prepaid shipping label on our website."]
    ] },
  { part: 4, title: "Talk · Retirement speech", lines: [
    ["N", "Thank you all for being here tonight to celebrate Anna Lopez's retirement. Anna joined our company thirty-two years ago as a receptionist, and she later became the head of our customer service department. Under her leadership, our customer satisfaction scores reached their highest level ever. Anna, we'll truly miss you. Now, before we serve dinner, I'd like to invite Anna to come up and say a few words.", "謝謝大家今晚來參加 Anna Lopez 的退休慶祝會。Anna 三十二年前以接待員的身分加入公司，後來成為客服部主管。在她的帶領下，我們的顧客滿意度創下歷史新高。Anna，我們真的會很想念妳。現在，在上菜之前，我想請 Anna 上台說幾句話。"]],
    qs: [
      ["lmain", "What event is taking place?", ["A retirement celebration", "A job interview", "An awards ceremony", "A training session"], 0, "這是退休慶祝會。", "正在舉行什麼活動？", ["退休慶祝會", "工作面試", "頒獎典禮", "訓練課程"], "to celebrate Anna Lopez's retirement"],
      ["ldetail", "What was Ms. Lopez's first job at the company?", ["Receptionist", "Department head", "Sales manager", "Accountant"], 0, "她一開始是接待員。", "Lopez 女士在公司的第一份工作是什麼？", ["接待員", "部門主管", "業務經理", "會計"], "as a receptionist"],
      ["linfer", "What will most likely happen next?", ["Ms. Lopez will give a speech.", "Dinner will be served.", "Gifts will be given out.", "A video will be shown."], 0, "上菜前要請 Anna 上台說話，所以接下來是她致詞。", "接下來最可能發生什麼事？", ["Lopez 女士會致詞。", "開始上菜。", "發送禮物。", "播放影片。"], "I'd like to invite Anna to come up and say a few words."]
    ] }
];
