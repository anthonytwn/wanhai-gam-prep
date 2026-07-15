export type QuizQuestion = {
  id: string;
  category: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  optionNotes?: string[];
  passage?: string;
};

const q = (
  id: string,
  category: string,
  prompt: string,
  options: string[],
  answer: number,
  explanation: string,
  optionNotes?: string[],
  passage?: string,
): QuizQuestion => ({ id, category, prompt, options, answer, explanation, optionNotes, passage });

export const aptitudeQuestions: QuizQuestion[] = [
  q("a01", "數列與規律", "2、5、11、23、？", ["35", "41", "47", "49"], 2, "每一項都是前一項 × 2 ＋ 1，因此 23 × 2 ＋ 1＝47。"),
  q("a02", "數列與規律", "81、27、9、3、？", ["0", "1", "1.5", "2"], 1, "每次除以 3，因此下一項為 1。"),
  q("a03", "數列與規律", "4、7、13、22、34、？", ["43", "46", "49", "52"], 2, "相鄰差為 3、6、9、12，下一個差為 15；34＋15＝49。"),
  q("a04", "數列與規律", "1、1、2、3、5、8、？", ["11", "12", "13", "14"], 2, "每項為前兩項相加，5＋8＝13。"),
  q("a05", "數列與規律", "100、96、88、76、？", ["56", "58", "60", "62"], 2, "依序減 4、8、12，下一次減 16；76－16＝60。"),

  q("a06", "比例百分比", "某航線運價由 1,200 美元調升 15%，新運價為？", ["1,320", "1,350", "1,380", "1,400"], 2, "1,200 × 1.15＝1,380。"),
  q("a07", "比例百分比", "目標 800 TEU，實際完成 680 TEU，達成率為？", ["80%", "82.5%", "85%", "88%"], 2, "680 ÷ 800＝85%。"),
  q("a08", "比例百分比", "甲、乙貨量比為 3：5，合計 640 TEU，乙為多少？", ["240", "320", "400", "480"], 2, "乙占 5／8，640 × 5／8＝400。"),
  q("a09", "比例百分比", "三個月貨量為 420、510、570 TEU，平均為？", ["480", "500", "510", "520"], 1, "總和 1,500，除以 3 得 500。"),
  q("a10", "比例百分比", "報價先降 10%，再漲 10%，相較原價結果為？", ["不變", "下降 1%", "上升 1%", "下降 2%"], 1, "0.9 × 1.1＝0.99，因此比原價低 1%。"),

  q("a11", "速率時間距離", "卡車以時速 60 公里行駛 150 公里，需要多久？", ["2 小時", "2.5 小時", "3 小時", "3.5 小時"], 1, "時間＝距離 ÷ 速率＝150 ÷ 60＝2.5 小時。"),
  q("a12", "速率時間距離", "船舶 08:00 出發，航行 17 小時，預計何時抵達？", ["當日 23:00", "次日 00:00", "次日 01:00", "次日 03:00"], 2, "08:00 加 17 小時為次日 01:00。"),
  q("a13", "速率時間距離", "甲乙相距 360 公里，兩車同時相向而行，速率分別 70、50 公里／小時，幾小時相遇？", ["2", "2.5", "3", "3.5"], 2, "相對速率 120 公里／小時；360 ÷ 120＝3 小時。"),
  q("a14", "速率時間距離", "作業效率提升 25%，原需 10 小時，現約需多久？", ["7.5", "8", "8.25", "9"], 1, "時間與效率成反比；10 ÷ 1.25＝8 小時。"),
  q("a15", "速率時間距離", "原航程 5 天，繞航後增加 36 小時，總航程為？", ["6 天", "6.5 天", "7 天", "7.5 天"], 1, "36 小時＝1.5 天，總計 6.5 天。"),

  q("a16", "邏輯排序", "A 必須在 B 前，C 必須在 A 後。下列何者可能？", ["B-A-C", "C-A-B", "A-C-B", "B-C-A"], 2, "A 在 B 前且 C 在 A 後，A-C-B 符合。"),
  q("a17", "邏輯排序", "甲、乙、丙三人排班；甲不排第一，乙必須在丙之前。何者可行？", ["甲乙丙", "乙甲丙", "丙乙甲", "甲丙乙"], 1, "乙甲丙同時符合甲不在第一、乙在丙之前。"),
  q("a18", "邏輯排序", "若所有直航服務都是定期航線，部分亞洲服務是直航，可推出？", ["所有亞洲服務皆為定期", "部分亞洲服務為定期", "所有定期航線皆為直航", "亞洲服務皆非轉船"], 1, "部分亞洲服務屬直航，而所有直航皆為定期，因此至少部分亞洲服務為定期。"),
  q("a19", "邏輯排序", "文件完成後才能報關；報關完成後才能進場。現在貨櫃已進場，可確定？", ["文件與報關均完成", "只有文件完成", "報關可能未完成", "無法判斷文件"], 0, "進場代表前置的文件與報關條件都已完成。"),
  q("a20", "邏輯排序", "四批貨 P、Q、R、S；P 在 Q 前，R 在 S 後。何者不可能？", ["P-Q-S-R", "S-P-R-Q", "P-S-Q-R", "Q-P-S-R"], 3, "Q-P 違反 P 必須在 Q 前。"),

  q("a21", "圖形空間推理", "箭頭依序旋轉：↑、→、↓、？", ["↗", "←", "↙", "↑"], 1, "箭頭每次順時針旋轉 90 度，因此下一個方向是向左。"),
  q("a22", "圖形空間推理", "圖形規律：○、○○、○○○、？", ["○○", "○○○○", "●●●●", "○●○●"], 1, "每一步增加一個相同的空心圓，下一組為四個空心圓。"),
  q("a23", "圖形空間推理", "方位序列：左上、右上、右下、？", ["左下", "左上", "右上", "中央"], 0, "位置沿正方形四角順時針移動，下一個位置是左下。"),
  q("a24", "圖形空間推理", "將字母 L 順時針旋轉 180 度，長直線原本在左側，旋轉後會在？", ["左側", "右側", "上方", "位置不變"], 1, "旋轉 180 度後左右與上下同時對調，長直線會移到右側。"),
  q("a25", "圖形空間推理", "矩陣規律：第一列為 △、□、△□；第二列為 ○、◇、？", ["○◇", "◇○", "△◇", "○□"], 0, "每列第三格都是前兩格依原順序合併，因此答案為 ○◇。"),
];

const notes = (correct: number, reasons: string[]) => reasons.map((reason, index) => `${index === correct ? "正確" : "不選"}：${reason}`);

export const professionalQuestions: QuizQuestion[] = [
  q("p01", "航運角色", "向船公司訂艙、整合報關與陸運，通常是哪個角色？", ["Consignee", "Forwarder", "Carrier", "Port authority"], 1, "Forwarder 負責整合物流環節。", notes(1,["收貨人主要接貨與進口清關。","貨代整合訂艙、文件、報關與陸運。","承運人提供船舶艙位與海運服務。","港務機關管理港區與公共設施。"])),
  q("p02", "航運角色", "萬海在線性貨櫃運輸中主要扮演？", ["Shipper", "Customs broker", "Carrier", "Consignee"], 2, "萬海是提供艙位與運送服務的 Carrier。", notes(2,["Shipper 是出貨人。","報關行代理海關程序。","Carrier 是海上承運人。","Consignee 是收貨人。"])),
  q("p03", "航運角色", "提單上接收貨物的一方通常稱為？", ["Consignee", "Shipper", "Notify party", "Terminal"], 0, "Consignee 為提單列示的收貨人。", notes(0,["Consignee 是收貨人。","Shipper 是出貨人。","Notify party 是到貨通知對象，不必然是收貨人。","Terminal 是碼頭或場站。"])),
  q("p04", "航運角色", "負責提供正確貨物資料與出貨指示的核心角色是？", ["Shipper", "Carrier", "Port authority", "Surveyor"], 0, "Shipper 應提供貨物及正確文件資訊。", notes(0,["出貨人掌握貨物與出貨資料。","承運人依資料安排運送。","港務機關不負責個別貨物資料。","公證或檢驗人員不是主要資料提供者。"])),
  q("p05", "航運角色", "GAM 處理客戶延誤案件時，最適合的定位是？", ["只把案件轉客服", "單一窗口並協調內外部", "直接承諾賠償", "只說明不可抗力"], 1, "GAM 應整合資訊、管理承諾並持續追蹤。", notes(1,["直接轉介會讓資訊與責任斷線。","單一窗口可連結客戶、客服、文件與運務。","未釐清責任前不應承諾賠償。","只引用不可抗力無法解決客戶決策問題。"])),

  q("p06", "流程與文件", "一般出口流程中，訂艙之後最合理的下一階段是？", ["目的港提貨", "備貨、提櫃與報關", "簽發到貨通知", "進口清關"], 1, "訂艙後進入出口端備貨與進場準備。", notes(1,["目的港提貨在運送末端。","備貨、提櫃、裝櫃與報關接續訂艙。","到貨通知在抵港前後。","進口清關屬目的地端。"])),
  q("p07", "流程與文件", "SI 的主要用途是？", ["申請貨物保險", "提供製作提單的指示", "支付關稅", "預約碼頭吊車"], 1, "Shipping Instruction 是客戶提供的提單製作資料。", notes(1,["保險另有投保文件。","SI 提供 shipper、consignee、貨名等提單資料。","關稅由報關與海關程序處理。","碼頭作業預約不是 SI 的核心功能。"])),
  q("p08", "流程與文件", "B/L 不包含下列哪一項核心功能？", ["收貨證明", "運送契約證明", "特定形式的物權憑證", "決定買賣付款方式"], 3, "提單不會自行決定付款條件。", notes(3,["提單可證明承運人已收貨。","提單是運送契約的證明。","可轉讓提單在特定情況具物權憑證功能。","付款方式由買賣契約與銀行安排決定。"])),
  q("p09", "流程與文件", "CY cut-off 最直接指的是？", ["貨櫃最晚進場時間", "提單最晚付款時間", "進口稅繳納期限", "船舶抵港時間"], 0, "CY cut-off 是貨櫃進入貨櫃場的截止時間。", notes(0,["這是碼頭收櫃的時間門檻。","付款期限不是 CY cut-off。","稅款期限由海關規定。","船舶抵港為 ETA。"])),
  q("p10", "流程與文件", "SI 與 booking 資訊不一致時，第一步應是？", ["照 SI 直接簽提單", "暫停並逐欄核對", "忽略差異先裝船", "請目的港自行修正"], 1, "先阻止錯誤文件流轉並取得可追溯確認。", notes(1,["直接簽發可能造成更正費與交付風險。","核對 shipper、港口、貨名與件數最穩妥。","裝船不會消除文件錯誤。","出口端應先完成正確資料。"])),
  q("p11", "流程與文件", "ETA 延後時，對客戶最有價值的第一則通知應包含？", ["只有一句抱歉", "新 ETA、已知原因、影響與下次更新時間", "公司完整歷史", "未確認的賠償金額"], 1, "有效通知要能支持客戶下一步決策。", notes(1,["只有道歉缺乏可行資訊。","時間、原因、影響與更新節點能管理不確定性。","公司歷史與當下異常無關。","未確認前不應承諾金額。"])),
  q("p12", "流程與文件", "貨物抵達目的港後，一般順序較合理的是？", ["到貨通知→清關→提櫃→還空櫃", "清關→訂艙→裝船→提櫃", "提櫃→出口報關→還櫃", "還櫃→到貨通知→清關"], 0, "目的地端由通知、清關、提領到還空櫃。", notes(0,["符合進口端實際流程。","訂艙與裝船屬出口端。","出口報關不會在目的港提櫃後發生。","還櫃是最後階段。"])),
  q("p13", "流程與文件", "文件 cut-off 未達成，最可能的直接風險是？", ["提單資料與裝船安排受影響", "貨櫃尺寸自動改變", "所有權自動移轉", "目的港關稅取消"], 0, "文件逾期會影響艙單、提單與裝船作業。", notes(0,["船公司需要及時完成相關申報與文件。","文件截止不會改變實體櫃型。","所有權由買賣安排決定。","關稅不會因此取消。"])),

  q("p14", "Incoterms", "FOB 條件下，風險通常何時由賣方移轉給買方？", ["工廠交貨時", "貨物裝上指定船舶時", "抵達目的港時", "買方付款時"], 1, "FOB 的風險點在裝船完成。", notes(1,["較接近 EXW 的起點。","FOB 以貨物裝上船為風險點。","抵達目的港不是 FOB 風險點。","付款與風險移轉不是同一概念。"])),
  q("p15", "Incoterms", "CFR 的正確描述是？", ["賣方付主運費，風險在裝船時移轉", "買方付主運費，風險在目的港移轉", "賣方必須提供最高額保險", "僅適用空運"], 0, "CFR 的費用點與風險點不同。", notes(0,["賣方付至目的港運費，但風險較早移轉。","主運費通常由賣方安排。","CFR 沒有 CIF 的保險義務。","CFR 僅適用海運與內河運輸。"])),
  q("p16", "Incoterms", "CIF 相較 CFR 多出的主要義務是？", ["進口清關", "最低限度海運保險", "目的地卸貨", "買方付款保證"], 1, "CIF 要求賣方安排符合條件的保險。", notes(1,["進口清關通常不是 CIF 賣方義務。","保險是 CIF 與 CFR 的核心差異。","目的地卸貨視契約與費用安排。","付款保證不是 Incoterms 功能。"])),
  q("p17", "Incoterms", "下列何者賣方責任通常最高？", ["EXW", "FOB", "CIF", "DDP"], 3, "DDP 通常要求賣方負擔至指定地點及進口責任。", notes(3,["EXW 賣方責任最低。","FOB 至裝船。","CIF 包含主運費與保險，但通常不含進口清關。","DDP 的賣方義務最廣。"])),
  q("p18", "Incoterms", "Incoterms 不直接規範下列何者？", ["成本分配", "風險移轉", "交貨任務", "貨物所有權移轉"], 3, "所有權與付款要由買賣契約另行規定。", notes(3,["Incoterms 會分配部分成本。","Incoterms 界定風險移轉點。","Incoterms 說明交貨相關任務。","不直接決定所有權。"])),
  q("p19", "Incoterms", "買方在出口國不便自行辦理出口清關時，EXW 實務上常考慮改用？", ["FCA", "CIF", "DDP", "CFR"], 0, "FCA 可由賣方負責出口清關，常比 EXW 實務可行。", notes(0,["FCA 可解決買方無法辦理出口清關的限制。","CIF 是海運成本與保險安排。","DDP 把責任推到進口端。","CFR 不是針對出口清關限制的首要替代。"])),
  q("p20", "Incoterms", "哪一組條件僅適用海運或內河運輸？", ["EXW、FCA", "FOB、CFR、CIF", "DDP、DAP", "CPT、CIP"], 1, "FOB、CFR、CIF 為水運專用規則。", notes(1,["EXW、FCA 可用於多式運輸。","三者皆為海運／內河專用。","DDP、DAP 可用於各運輸模式。","CPT、CIP 可用於多式運輸。"])),

  q("p21", "航運術語", "一只 40 呎標準櫃通常換算為？", ["0.5 TEU", "1 TEU", "2 TEU", "4 TEU"], 2, "40 呎櫃通常計為 2 TEU。", notes(2,["低估。","20 呎櫃才是 1 TEU。","40 呎為兩個 20 呎單位。","高估。"])),
  q("p22", "航運術語", "Blank Sailing 指的是？", ["船舶空載", "取消原定航次", "沒有提單", "目的港塞港"], 1, "Blank Sailing 是航商取消某一預定航次。", notes(1,["可能仍有貨，但不是定義。","取消航次是正解。","與是否簽發提單無關。","塞港可能造成取消，但不是詞義。"])),
  q("p23", "航運術語", "Demurrage 與 Detention 的主要差異是？", ["前者場內超期、後者場外持櫃超期", "前者海運費、後者燃油費", "前者出口、後者進口", "兩者完全相同"], 0, "判斷關鍵是貨櫃是否仍在碼頭／場內。", notes(0,["場內與場外是常見區分。","兩者都不是基本海運費。","出口與進口都可能發生。","概念不同。"])),
  q("p24", "航運術語", "Transshipment 最直接增加哪種風險？", ["轉運銜接與延誤", "貨櫃尺寸改變", "所有權失效", "關稅必然加倍"], 0, "多一個轉運節點就多一個銜接風險。", notes(0,["船班銜接是主要營運風險。","轉運不改變櫃型。","所有權不因轉運失效。","關稅不必然加倍。"])),
  q("p25", "航運術語", "Rolled Cargo 指的是？", ["貨物改用滾裝船", "貨物未裝原航次而順延", "貨櫃翻覆", "退關貨物"], 1, "原訂貨物未能裝上該航次，改到後續船班。", notes(1,["與 Ro-Ro 不同。","順延是正確定義。","翻覆是事故。","退關不是 rolled cargo。"])),

  q("p26", "萬海與時事", "萬海成立於哪一年？", ["1955", "1965", "1976", "1987"], 1, "萬海於 1965 年成立。", notes(1,["早於成立年份。","正確年份。","1976 是貨櫃化的重要轉折。","1987 與專用碼頭發展相關。"])),
  q("p27", "萬海與時事", "萬海最具代表性的網路優勢是？", ["只做單一遠洋航線", "亞洲近洋密集網路", "只承運散裝貨", "只服務台灣內河"], 1, "亞洲密集航線是萬海延伸遠洋市場的基礎。", notes(1,["萬海並非只做單一航線。","高密度亞洲網路是核心。","主業為貨櫃定期航運。","服務範圍遠超台灣內河。"])),
  q("p28", "萬海與時事", "紅海或重要航道風險升高，最直接影響何者？", ["航程、燃油與保險成本", "貨櫃尺寸標準", "提單三大功能", "公司成立年份"], 0, "繞航與風險溢價會先反映在時間與成本。", notes(0,["這是最直接的營運影響。","櫃型標準不因地緣風險改變。","提單法律功能不會因此改變。","歷史事實不受影響。"])),
  q("p29", "萬海與時事", "亞洲貨量旺季延續時，GAM 最應優先提醒客戶？", ["延後所有出貨", "提早預留艙位與轉運緩衝", "不必確認 ETA", "只比較最低價"], 1, "旺季的核心風險是艙位與銜接不確定性。", notes(1,["不必一律延後。","提前訂艙與留緩衝最可行。","旺季更要追蹤 ETA。","可靠度與艙位不應被忽略。"])),
  q("p30", "萬海與時事", "MASS Code 主要關注？", ["自主船舶安全與操作框架", "海運付款信用狀", "貨櫃重量單位", "出口退稅"], 0, "MASS Code 為自主水面船舶建立共同安全框架。", notes(0,["正確。","信用狀屬貿易金融。","重量與運量單位另有規範。","出口退稅是稅務議題。"])),
];

export const shippingVocabulary = [
  ["shipment", "一批貨物／出貨"], ["vessel", "船舶"], ["voyage", "航次"], ["freight", "運費／貨物"],
  ["booking", "訂艙"], ["quotation", "報價"], ["surcharge", "附加費"], ["congestion", "壅塞"],
  ["customs clearance", "通關"], ["transit time", "運送時間"], ["service reliability", "服務可靠度"],
  ["rate restoration", "運價恢復／調升"], ["container availability", "貨櫃供應狀況"],
  ["documentation cut-off", "文件截止時間"], ["consignee", "收貨人"], ["shipper", "出貨人"],
  ["demurrage", "場內超期費"], ["detention", "場外持櫃超期費"], ["transshipment", "轉船"], ["blank sailing", "取消航次"],
];

const passageA = "Due to congestion at the transshipment port, the vessel's estimated arrival has been postponed by two days. Customers should submit revised shipping instructions before 3:00 p.m. today. The carrier will provide another update tomorrow morning.";
const passageB = "A manufacturer ships 12 containers every week. During peak season, container availability becomes tight, so the account manager recommends booking two weeks earlier and keeping one alternative sailing in the plan.";
const shippingNotice = "SHIPPING NOTICE — Voyage WH218E will omit Port Klang because of berth congestion. Cargo booked for Port Klang will be transferred to voyage WH220E. The revised ETD is Friday, 18 July. Customers who cannot accept the change should contact Customer Service by 12:00 noon tomorrow.";

export const englishQuestions: QuizQuestion[] = [
  q("e01", "Grammar & Cloze", "The customer asked whether the quotation ___ the fuel surcharge.", ["include", "includes", "including", "included to"], 1, "The singular subject ‘quotation’ takes ‘includes’."),
  q("e02", "Grammar & Cloze", "Please submit the shipping instructions ___ the documentation cut-off.", ["at", "before", "during", "among"], 1, "‘Before the cut-off’ means earlier than the deadline."),
  q("e03", "Grammar & Cloze", "The vessel was delayed ___ severe port congestion.", ["because", "because of", "although", "despite of"], 1, "‘Because of’ is followed by a noun phrase."),
  q("e04", "Grammar & Cloze", "If space becomes available, we ___ you immediately.", ["notify", "notified", "will notify", "have notified"], 2, "A first conditional uses present tense in the if-clause and ‘will’ in the result."),
  q("e05", "Grammar & Cloze", "Neither the shipper nor the consignee ___ confirmed the amendment.", ["have", "has", "are", "were"], 1, "The verb agrees with the nearer singular subject ‘consignee’."),
  q("e06", "Grammar & Cloze", "The revised schedule is more reliable ___ the previous one.", ["then", "than", "that", "from"], 1, "Comparatives use ‘than’."),
  q("e07", "Grammar & Cloze", "We are responsible ___ coordinating the internal response.", ["to", "with", "for", "of"], 2, "The fixed phrase is ‘responsible for’."),
  q("e08", "Grammar & Cloze", "All documents must ___ by noon.", ["submit", "be submitted", "submitted", "be submitting"], 1, "The documents receive the action, so passive voice is required."),
  q("e09", "Grammar & Cloze", "The cargo arrived on time, ___ the bad weather.", ["because of", "despite", "unless", "therefore"], 1, "‘Despite’ introduces a contrasting noun phrase."),
  q("e10", "Grammar & Cloze", "Could you confirm ___ the consignee has received the arrival notice?", ["what", "whether", "which", "whose"], 1, "‘Whether’ introduces a yes/no indirect question."),
  q("e11", "Reading A", "Why has the ETA changed?", ["The shipper changed the cargo.", "The transshipment port is congested.", "The vessel was sold.", "The quotation expired."], 1, "The notice directly identifies congestion at the transshipment port.", undefined, passageA),
  q("e12", "Reading A", "What must customers do today?", ["Pay demurrage", "Change the consignee", "Submit revised shipping instructions", "Cancel the booking"], 2, "Customers must submit revised SI before 3:00 p.m.", undefined, passageA),
  q("e13", "Reading B", "What problem is expected during peak season?", ["A shortage of containers", "Lower weekly demand", "No customs office", "A change of currency"], 0, "The passage says container availability becomes tight.", undefined, passageB),
  q("e14", "Reading B", "What does the account manager recommend?", ["Ship without a booking", "Book earlier and keep an alternative sailing", "Reduce all prices", "Use only one sailing"], 1, "The recommendation combines earlier booking with a backup sailing.", undefined, passageB),
  q("e15", "Shipping Notice", "What should a customer do if the revised sailing is unacceptable?", ["Wait until Friday", "Contact Customer Service by noon tomorrow", "Send the cargo to another port", "Pay a congestion surcharge"], 1, "The notice gives a clear action and deadline: contact Customer Service by 12:00 noon tomorrow.", undefined, shippingNotice),
  q("e16", "Listening Scenario", "What is the caller asking for?", ["A lower freight rate", "A revised arrival estimate", "A new container size", "A customs refund"], 1, "The caller asks when the delayed cargo is now expected to arrive.", undefined, "Caller: Our cargo missed the connection in Singapore. Could you tell me the revised arrival estimate for Kaohsiung?"),
  q("e17", "Listening Scenario", "What will the speaker do next?", ["Cancel the booking", "Check space with Operations", "Issue the bill of lading", "Pay the duty"], 1, "The speaker explicitly says she will check space with Operations and reply before 4 p.m.", undefined, "Account manager: I don't want to promise space before it is confirmed. I'll check with Operations and get back to you before four this afternoon."),
  q("e18", "Listening Scenario", "Why must the customer act today?", ["The vessel has arrived", "The documentation cut-off is this evening", "The freight rate expires next month", "The office is moving"], 1, "The same-day action is driven by the 6 p.m. documentation cut-off.", undefined, "Service agent: Please send the corrected consignee details today. The documentation cut-off is six p.m., and late amendments may incur a fee."),
  q("e19", "Listening Scenario", "What is the main operational problem?", ["No empty containers are available", "The port is closed permanently", "The invoice is incorrect", "The cargo is overweight"], 0, "The depot cannot release empty containers until Thursday.", undefined, "Depot staff: We have no empty forty-foot containers available today. The next release is expected on Thursday morning."),
  q("e20", "Listening Scenario", "What solution does the account manager suggest?", ["Use a later sailing only", "Split the shipment between two sailings", "Change the product", "Ignore the deadline"], 1, "The proposal is to protect the urgent volume now and place the balance on the following vessel.", undefined, "Account manager: We can protect ten containers on Wednesday's sailing and move the remaining six on the next vessel. Would that split plan work for your production schedule?"),
];
