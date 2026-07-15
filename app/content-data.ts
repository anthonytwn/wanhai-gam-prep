export const tradeTerms = [
  { term: "Sales Contract", zh: "買賣契約", definition: "買賣雙方就貨物、價格、數量、交期、付款與責任分配形成的約定。", example: "台灣出口商與日本買方約定 1,000 箱零件、FOB Kaohsiung、T/T 30 days。", scenario: "報價與訂單內容不一致時，先回到契約確認哪一版具約束力。", trap: "Incoterms 不能取代完整買賣契約。" },
  { term: "Quotation", zh: "報價", definition: "賣方向買方提出的價格與交易條件，通常包含有效期限、幣別、交期與費用範圍。", example: "USD 1,200/FEU, valid until 31 July, excluding local charges。", scenario: "燃油附加費調整時，要確認報價是否已含 surcharge。", trap: "報價不必然等於最終成交價。" },
  { term: "Purchase Order (PO)", zh: "採購單", definition: "買方正式下單的文件，列出品項、數量、價格、交貨與付款條件。", example: "買方以 PO No. 2026-0715 訂購 500 件產品。", scenario: "接單後逐欄核對 PO 與 quotation，避免條件落差。", trap: "PO 與 Proforma Invoice 的發出方不同。" },
  { term: "Proforma Invoice", zh: "形式發票", definition: "成交或付款前由賣方提供的預估商業文件，常供申請許可或安排付款。", example: "買方以 PI 向銀行申請信用狀。", scenario: "交易條件尚未完全確定時，以 PI 說明預計金額與條件。", trap: "PI 通常不是最終報關用 Commercial Invoice。" },
  { term: "Commercial Invoice", zh: "商業發票", definition: "賣方出具的正式交易與請款文件，也是海關估價的重要依據。", example: "列出單價、總價、幣別、Incoterm 與買賣雙方資料。", scenario: "報關行會依 invoice 申報完稅價格。", trap: "品名、金額與幣別不得和其他文件互相矛盾。" },
  { term: "Packing List", zh: "裝箱單", definition: "說明件數、包裝方式、毛重、淨重與尺寸的貨物明細。", example: "10 pallets / 500 cartons / GW 8,200 kg。", scenario: "海關查驗或倉庫點收時用來核對實物。", trap: "Packing List 重點是包裝與數量，不是付款。" },
  { term: "Letter of Credit (L/C)", zh: "信用狀", definition: "銀行依申請人指示，在受益人提交相符單據時承諾付款的工具。", example: "賣方提交 clean on-board B/L、invoice 與 packing list 請款。", scenario: "單據有 discrepancy 時，銀行可能拒付或要求買方接受瑕疵。", trap: "銀行審單據，不審實際貨物。" },
  { term: "Telegraphic Transfer (T/T)", zh: "電匯", definition: "買賣雙方透過銀行直接匯款，可約定預付、裝船後或到期付款。", example: "30% deposit，70% against copy B/L。", scenario: "新客戶通常會搭配較高預付款降低信用風險。", trap: "T/T 本身不提供像信用狀的銀行付款承諾。" },
  { term: "Incoterms", zh: "國際貿易條規", definition: "ICC 制定的交易條件，用來分配交貨任務、成本與貨損風險。", example: "CIF Kaohsiung, Incoterms 2020。", scenario: "同樣由賣方付海運費，CFR 與 CIF 的保險義務不同。", trap: "不決定所有權、付款時間或違約救濟。" },
  { term: "Customs Declaration", zh: "報關", definition: "向海關申報貨物品名、稅則、價值、原產地及進出口許可的程序。", example: "出口人委託報關行在 cut-off 前完成出口申報。", scenario: "品名或 HS Code 有疑義時，要先確認再申報。", trap: "船公司承運不等於替貨主承擔報關正確性。" },
  { term: "HS Code", zh: "國際商品統一分類碼", definition: "用於商品分類、關稅與管制判斷的編碼制度。", example: "相似零件可能因材質與用途落入不同稅則。", scenario: "錯誤歸類可能造成補稅、罰款或延誤。", trap: "不能只依商品俗名判定。" },
  { term: "Certificate of Origin", zh: "原產地證明", definition: "證明貨物原產國或地區的文件，可能影響優惠關稅與進口管制。", example: "符合協定規則的貨物申請優惠原產地證明。", scenario: "轉運不會自動改變原產地。", trap: "出貨國不一定等於原產國。" },
  { term: "Bill of Lading (B/L)", zh: "提單", definition: "承運人簽發的收貨證明、運送契約證明；可轉讓提單亦可能具物權憑證功能。", example: "Shipper 提交 SI 後，船公司依資料製作 B/L。", scenario: "Consignee 拼字錯誤可能影響目的港換單與交貨。", trap: "Sea Waybill 通常不可轉讓，功能與正本提單不同。" },
  { term: "Marine Cargo Insurance", zh: "海上貨物保險", definition: "保障貨物運輸途中因承保事故造成的損失，範圍依條款與除外責任而定。", example: "CIF 下賣方須安排符合條件的最低保險。", scenario: "高價或溫控貨物常需要更完整的承保範圍。", trap: "投保不代表所有原因都可獲賠。" },
  { term: "Sanctions Screening", zh: "制裁篩檢", definition: "確認交易對象、貨物、船舶與目的地是否涉及制裁或禁運。", example: "訂艙前核對 shipper、consignee、notify party 與貨名。", scenario: "命中名單時應暫停處理並交由法遵確認。", trap: "不能為了趕船先放行再補查。" },
  { term: "Landed Cost", zh: "落地成本", definition: "貨物抵達指定地點前累積的採購、運輸、保險、關稅與各項費用總和。", example: "貨價＋海運費＋附加費＋關稅＋內陸運輸。", scenario: "低基本運價不一定代表最低 landed cost。", trap: "只比較 ocean freight 容易低估總成本。" },
];

export const tradeFlow = [
  ["01", "需求與詢價", "買方提出品項、數量、目的地與交期；賣方確認可供貨性與交易風險。", "輸出：RFQ／需求規格"],
  ["02", "報價與議約", "確認價格、幣別、Incoterm、付款方式、交貨期與報價有效期限。", "輸出：Quotation／Sales Contract"],
  ["03", "接單與付款安排", "核對 PO、PI；依 T/T、L/C 或其他方式完成預付款或開狀。", "輸出：PO／PI／L/C"],
  ["04", "訂艙與運輸規劃", "貨主或貨代比較航線、運價、艙位、轉船與準班率，向 Carrier 訂艙。", "輸出：Booking Confirmation"],
  ["05", "備貨、裝櫃與報關", "安排拖車、提空櫃、裝貨、VGM、出口申報並在 CY cut-off 前進場。", "輸出：Packing List／Customs Declaration／VGM"],
  ["06", "文件與裝船", "提交 SI、核對 draft B/L；承運人完成艙單與裝船作業。", "輸出：SI／B/L"],
  ["07", "海運與異常管理", "追蹤 ETD、ETA、轉船銜接、塞港、跳港與 rolled cargo，及時通知利害關係人。", "輸出：Status Update／Exception Plan"],
  ["08", "到港、清關與交付", "到貨通知、進口申報、繳稅、換單、提櫃與還空櫃，控制 Demurrage／Detention。", "輸出：Arrival Notice／Delivery Order"],
];

export const incoterms = [
  { code: "EXW", scope: "賣方工廠備妥貨物", risk: "買方在約定地點接收時", example: "EXW Taichung Factory", note: "買方若不便在出口國辦理清關，實務常改採 FCA。" },
  { code: "FCA", scope: "賣方出口清關並交給買方指定承運人", risk: "交付承運人時", example: "FCA Taoyuan Warehouse", note: "可用於海運、空運與多式聯運。" },
  { code: "FOB", scope: "賣方負責至貨物裝上指定船舶", risk: "裝船時", example: "FOB Kaohsiung", note: "只適用海運／內河；貨櫃運輸實務常評估 FCA。" },
  { code: "CFR", scope: "賣方另支付至目的港的主運費", risk: "仍在裝船時", example: "CFR Yokohama", note: "成本負擔點與風險移轉點不同。" },
  { code: "CIF", scope: "CFR 加上賣方安排最低限度保險", risk: "仍在裝船時", example: "CIF Los Angeles", note: "買方若需要更高保障，應另行約定。" },
  { code: "CPT", scope: "賣方支付至指定地的運費", risk: "交付第一承運人時", example: "CPT Chicago Rail Ramp", note: "適合多式聯運；風險早於費用終點移轉。" },
  { code: "CIP", scope: "CPT 加上較高保險義務", risk: "交付第一承運人時", example: "CIP Frankfurt Airport", note: "保險保障通常高於 CIF 的最低要求。" },
  { code: "DAP", scope: "賣方送抵目的地、未卸貨", risk: "目的地可供卸貨時", example: "DAP Customer Warehouse", note: "進口清關與稅通常由買方負責。" },
  { code: "DPU", scope: "賣方送抵並完成卸貨", risk: "目的地卸貨完成時", example: "DPU Distribution Center", note: "唯一明確要求賣方卸貨的規則。" },
  { code: "DDP", scope: "賣方負責至目的地並辦理進口清關與稅費", risk: "目的地可供卸貨時", example: "DDP Buyer Warehouse", note: "賣方責任最高，須確認能否合法擔任進口方。" },
];

export const shippingStakeholders = [
  ["Shipper／BCO", "出貨人或實際貨主", "決定貨物、交期與物流需求；提供正確貨物與文件資料。"],
  ["Consignee", "收貨人", "安排進口清關、換單、提貨與目的地配送。"],
  ["Freight Forwarder", "貨運承攬／貨代", "整合訂艙、報關、拖車、倉儲與文件，替客戶管理多個供應商。"],
  ["NVOCC", "無船承運人", "向船公司採購艙位再銷售，可能簽發自己的 House B/L。"],
  ["Ocean Carrier", "海上承運人", "營運航線與船舶、提供艙位、簽發 Master B/L 並管理運送。"],
  ["Customs Broker", "報關行", "依貨主授權完成申報、稅則與進出口管制程序。"],
  ["Terminal／Depot", "碼頭／貨櫃場", "處理進出場、堆存、裝卸、空櫃與貨櫃交接。"],
  ["Truck／Rail Operator", "內陸運輸商", "銜接工廠、港口、鐵路場站與客戶倉庫。"],
  ["Port／Customs Authority", "港務與海關機關", "管理港區安全、船舶進出、貨物監管、稅費與法規。"],
  ["Insurer／Surveyor", "保險與公證檢驗", "承保運輸風險；事故時查勘損失、原因與責任證據。"],
];

export const shippingKnowledge = [
  { id: "shipping-network", title: "航線網路", points: ["Direct service 節點少、時間較可控；Transshipment 擴大覆蓋，但增加銜接風險。", "Mainline 連接大型樞紐港；Feeder 將貨物接駁到區域港。", "聯營、聯盟與 slot exchange 可提升頻率與覆蓋，不代表各航商服務品質完全相同。"] },
  { id: "shipping-equipment", title: "船舶與貨櫃", points: ["20 呎櫃約 1 TEU、40 呎櫃約 2 TEU；運量不等同實際貨重。", "Dry、Reefer、Open Top、Flat Rack、Tank 等櫃型對貨物與操作要求不同。", "VGM 是裝載貨櫃驗證總重；錯誤重量會影響配載與船舶安全。"] },
  { id: "shipping-pricing", title: "運價與附加費", points: ["報價通常由 base freight、origin/destination local charges 與 BAF、PSS、congestion 等附加費組成。", "即期價反映當下供需；長約價換取量與期間承諾。", "GAM 應同時比較價格、艙位、轉船、準班率與異常支援。"] },
  { id: "shipping-operations", title: "營運節點與異常", points: ["CY cut-off、SI cut-off、VGM cut-off 是不同門檻。", "Blank sailing 是取消航次；Rolled cargo 是貨物未裝原航次；Port omission 是跳過原定港口。", "塞港、天候、設備故障與航道風險會沿著 ETA、庫存、產線與客戶承諾向下傳導。"] },
  { id: "shipping-freetime", title: "Free Time 與櫃租", points: ["Demurrage 通常指櫃在碼頭／場內超過免費期。", "Detention 通常指櫃提離場站後未及時還空櫃。", "不同航線、進出口別、櫃型與合約的 free time 可能不同，必須查當地 tariff。"] },
  { id: "shipping-docs", title: "文件、危險品與法遵", points: ["SI 是製作提單的指示；B/L 是收貨與運送關係的重要證明。", "危險品需正確分類、包裝、標示與申報；瞞報會造成重大安全與法律風險。", "制裁、禁運、競爭法、海關與 SOLAS/VGM 都可能影響是否接受訂艙。"] },
];

export const topCarriers = [
  ["01", "MSC", "最大營運運能與廣泛全球網路；規模、直航覆蓋與自有資產是主要優勢。"],
  ["02", "Maersk", "由海運延伸端到端整合物流；與 Hapag-Lloyd 透過 Gemini Cooperation 強調準班率。"],
  ["03", "CMA CGM", "全球航線、區域品牌與 CEVA Logistics 結合，海運、物流與空運布局完整。"],
  ["04", "COSCO Group", "COSCO、OOCL 等集團網路，連結中國貨源、港口與全球幹線。"],
  ["05", "Hapag-Lloyd", "歐洲強勢、重視收益與服務品質；Gemini 網路以樞紐與準班為賣點。"],
  ["06", "ONE", "日本三大航商貨櫃事業整合而成，紫色品牌，跨太平洋與東西向幹線突出。"],
  ["07", "Evergreen", "台灣大型全球航商，東西向遠洋與大型船隊規模優勢明顯。"],
  ["08", "HMM", "韓國代表性航商，跨太平洋與亞洲—歐洲幹線比重高。"],
  ["09", "Yang Ming", "台灣全球航商，聚焦東西向幹線並參與 Premier Alliance。"],
  ["10", "ZIM", "較靈活的租船與利基航線策略，跨太平洋與數位化服務具辨識度。"],
];

export const wanhaiRoutes = [
  { region: "東北亞／台灣", services: "JTS、JH2 等", ports: "東京、橫濱、名古屋、清水、大阪、神戶、台北、高雄", status: "核心密集網路" },
  { region: "中國／香港／東南亞", services: "CIX、CI3、NS1、NS3", ports: "香港、蛇口、廈門、南沙、新加坡、巴生港、檳城", status: "核心密集網路" },
  { region: "越南／泰國／印尼／菲律賓", services: "JH2 與多條區域線", ports: "海防、胡志明、林查班、雅加達、馬尼拉", status: "亞洲近洋優勢" },
  { region: "印度／巴基斯坦／中東", services: "NS1、NS3、NS5 等轉接", ports: "Nhava Sheva、Colombo、Karachi、Jebel Ali、Dammam", status: "區域延伸" },
  { region: "北美西岸", services: "AP1 等", ports: "Los Angeles／Long Beach、Oakland，並銜接美國內陸點", status: "遠洋布局" },
  { region: "北美東岸", services: "AA7 等", ports: "亞洲經運河連接美東主要港口", status: "遠洋布局" },
  { region: "南美西岸／墨西哥", services: "WSA、WS3 等合作航線", ports: "Mexico、Colombia、Ecuador、Peru、Chile", status: "遠洋布局" },
  { region: "New Super 5", services: "NS5", ports: "巴生港、檳城、Phuoc An、香港、蛇口、東京、橫濱、川崎", status: "NEW · 2025" },
];

export const taiwanCarrierComparison = [
  ["定位", "亞洲近洋高密度＋選擇性遠洋", "大型全球航商、遠洋與規模導向", "全球幹線航商、聯盟網路導向"],
  ["代表優勢", "亞洲港口覆蓋、班次密度、區域反應速度", "大型船隊、東西向主幹線與全球規模", "跨太平洋／亞歐幹線與聯盟覆蓋"],
  ["網路策略", "以亞洲網路為底盤延伸印度、中東與美洲", "全球直航與大型船舶部署", "透過 Premier Alliance 與合作網路擴大覆蓋"],
  ["客戶感受", "區域供應鏈彈性與亞洲內貿易便利", "全球大貨量與遠洋選擇多", "幹線網路、聯盟轉接與企業客戶方案"],
  ["GAM 切入點", "把密集亞洲網路、在地協調與遠洋延伸組合成方案", "強調規模與全球一致性", "強調聯盟覆蓋與幹線連結"],
];

export const scenarios = [
  {
    id: "case-peak", lang: "中文", title: "旺季缺艙、Roll 與產線斷料", level: "MULTI-ISSUE",
    brief: "一家台灣電子零件客戶每週出口 18 FEU 至越南與泰國。旺季期間，原訂直航有 6 FEU 因超收被 Roll，下一班直航要等 7 天；轉船方案可早 3 天抵達，但有一次新加坡銜接。客戶越南廠安全庫存只剩 5 天，採購主管要求你『保證全部準時到』，同時不接受高於原價 8% 的方案。",
    customer: ["避免越南產線停線", "泰國貨可延後，但不希望拆單增加文件成本", "需要今天 17:00 前向管理層回報", "在意這次異常是否會重複發生"],
    task: "你如何分配 6 FEU、協調艙位並向客戶說明？請提出 A/B 方案、承諾邊界與下次更新時間。",
    knowledge: ["Rolled cargo", "Direct vs transshipment", "安全庫存", "艙位優先級", "Service recovery"],
    model: "先確認越南與泰國各自的貨量、庫存與最晚到貨日，把停線影響最大的越南貨列為第一優先。我會立即與艙控確認原航次候補與下一港加載可能，同時保留兩案：A 案將關鍵越南貨改走較早的轉船服務，控制在 8% 成本上限內；B 案把非急迫泰國貨留在下一班直航，避免全部承擔轉船風險。我不保證未確認的 ETA，但會在 17:00 前提供已確認艙位、成本差額、轉運節點與下一次更新時間，並於事後檢討 allocation 與預報量。"
  },
  {
    id: "case-docs", lang: "中文", title: "文件錯誤、Cut-off 與目的港費用", level: "DOCUMENT CONTROL",
    brief: "一家新客戶首次出口化學添加劑至馬來西亞。貨櫃已進場，SI cut-off 剩 90 分鐘；Commercial Invoice 使用商品名，SDS 與訂艙資料卻是另一個技術名稱，客戶聲稱『不是危險品，以前都這樣出』。同時 Consignee 要求把 B/L 品名簡化，否則當地清關較慢。若錯過本航次，可能增加場租並延後 6 天。",
    customer: ["不想錯過船期與增加費用", "擔心揭露配方", "希望文件能讓目的港快速清關", "對危險品分類沒有內部專家"],
    task: "你會先做哪三件事？如何在不替客戶做不當保證的情況下管理船期、文件與法遵？",
    knowledge: ["SDS／DG declaration", "SI cut-off", "品名一致性", "制裁與危險品法遵", "費用證據鏈"],
    model: "第一，暫停送出可能不實的 SI，不接受只為清關方便而模糊品名；第二，請客戶提供最新版 SDS、成分與分類依據，交由公司危險品／法遵窗口確認是否可承運；第三，同步通知文件與營運單位保留處理空間，並查明改船、場租與退關可能成本。我會向客戶說明安全與申報正確性優先於趕船，90 分鐘內分階段回報：先確認資料缺口，再告知能否趕上本航次及替代方案。"
  },
  {
    id: "case-tender", lang: "English", title: "Regional Tender: Price, Space and Reliability", level: "ACCOUNT STRATEGY",
    brief: "A regional retailer is tendering 1,200 TEU per year from Shanghai, Ho Chi Minh City and Kaohsiung to Los Angeles. Your rate is 4% above the lowest bid. The customer suffered two stock-outs last year and now asks for 95% space protection, weekly KPI reporting and a penalty for late arrivals. Operations can support the volume, but only 80% can be protected during the six-week peak season unless the customer submits forecasts four weeks ahead.",
    customer: ["Lower total landed cost, not just the cheapest ocean rate", "Protection against peak-season stock-outs", "Simple KPI governance across three origins", "A credible remedy when service fails"],
    task: "Prepare a concise response that protects margin, avoids an unrealistic guarantee and turns reliability into measurable value.",
    knowledge: ["Tender governance", "Allocation", "Forecast commitment", "Service-level KPI", "Total landed cost"],
    model: "I would acknowledge that our rate is 4% above the lowest bid, then quantify what the customer receives in return: one regional account owner, weekly origin-level visibility and a peak-season allocation plan. I would offer 95% protection outside peak and an 80% committed base during peak, with the remaining 15% linked to a rolling four-week forecast and booking cut-off compliance. Instead of accepting a blanket late-arrival penalty, I would propose KPIs we can control—booking acceptance, departure reliability, milestone updates and recovery response time—plus a quarterly review and pre-agreed escalation path."
  },
];

export const fiveYearEvents = [
  { year: "2021.03", title: "Ever Given 堵塞蘇伊士運河", summary: "超大型貨櫃船擱淺使蘇伊士運河中斷近一週，凸顯單一航道、超大型船舶與供應鏈集中風險。", impact: "船舶排隊 → 船期錯位 → 空櫃與艙位失衡 → 即期運價與庫存壓力上升", href: "https://resilientmaritimelogistics.unctad.org/guidebook/15-accidents" },
  { year: "2021–2022", title: "疫情後塞港、缺櫃與運價高峰", summary: "需求轉向、港口人力與內陸物流瓶頸造成貨櫃周轉失衡，亞洲出口運價與等待時間大幅波動。", impact: "港口壅塞 → 櫃子回不來 → 有貨無櫃／有櫃無艙 → 客戶提前訂艙與提高安全庫存", href: "https://unctad.org/news/mindful-monday-10-complex-factors-behind-unprecedented-shortage-containers-hampering-trades" },
  { year: "2022.02–07", title: "俄烏戰爭與黑海穀物走廊", summary: "戰爭改變黑海航運與糧食供應；聯合國與土耳其促成黑海穀物倡議，建立商船安全通道。", impact: "港口與保險風險 → 改道與船舶需求增加 → 穀物、能源與運費連動", href: "https://unctad.org/publication/maritime-trade-disrupted-war-ukraine-and-its-effects-maritime-trade-logistics" },
  { year: "2023.01", title: "EEXI／CII 正式進入營運管理", summary: "IMO 的既有船舶能效指標與營運碳強度評級開始適用，減速、船隊更新與燃料選擇更直接影響服務設計。", impact: "碳效率要求 → 船速與資產配置調整 → 成本、Transit Time 與客戶減碳數據成為商業議題", href: "https://www.imo.org/en/mediacentre/pressbriefings/pages/cii-and-eexi-entry-into-force.aspx" },
  { year: "2023–2024", title: "巴拿馬運河乾旱限航", summary: "集水區降雨不足使運河採取節水、吃水與通行量管理，部分航商面臨等待、改道或減載選擇。", impact: "通行配額下降 → 等待與競標成本 → 航線改道／貨量調整 → 美洲供應鏈不確定性", href: "https://pancanal.com/maritime-services/informacion-para-clientes/" },
  { year: "2023.11–2024", title: "紅海危機與繞行好望角", summary: "商船遇襲使多家航商避開紅海與蘇伊士，亞歐航程拉長並吸收更多船舶運能。", impact: "安全風險 → 繞航與保險增加 → 有效運能收緊 → 運價、燃油與 ETA 上升", href: "https://unctad.org/news/unprecedented-shipping-disruptions-raise-risk-global-trade-unctad-warns" },
  { year: "2024.03", title: "Dali 撞擊巴爾的摩大橋", summary: "貨櫃船失去電力與推進後撞擊橋墩，橋梁倒塌並一度影響巴爾的摩港進出與內陸交通。", impact: "港口通道中斷 → 改掛鄰近港口 → 卡車與鐵路重排 → 汽車與區域供應鏈受壓", href: "https://www.ntsb.gov/investigations/Pages/DCA24MM031.aspx" },
  { year: "2025–2026", title: "航商聯盟重組與準班率競爭", summary: "Gemini Cooperation、Premier Alliance 等新網路架構上線，航商以樞紐設計、直航覆蓋與準班承諾重新競爭。", impact: "聯盟重組 → 港口與轉運配置改變 → 客戶需重評路線、銜接與服務可靠度", href: "https://alphaliner.axsmarine.com/PublicTop100/" },
];

export const extraVocabulary = [
  ["actual time of arrival (ATA)", "實際抵達時間"], ["actual time of departure (ATD)", "實際離港時間"],
  ["allocation", "艙位配額"], ["all-in rate", "包含約定費用的總運價"], ["arrival notice", "到貨通知"],
  ["berth", "泊位"], ["bill of lading amendment", "提單更正"], ["booking confirmation", "訂艙確認"],
  ["cargo manifest", "貨物艙單"], ["carrier haulage", "承運人安排的內陸運輸"], ["chassis", "貨櫃拖架"],
  ["commodity description", "貨物品名描述"], ["congestion surcharge", "壅塞附加費"], ["container yard (CY)", "貨櫃場"],
  ["cut-off time", "截止時間"], ["dangerous goods declaration", "危險品申報書"], ["delivery order", "提貨單"],
  ["door-to-door", "門到門運送"], ["draft bill of lading", "提單草稿"], ["drayage", "港區短程拖運"],
  ["equipment imbalance", "貨櫃供需失衡"], ["feeder service", "支線接駁服務"], ["free time", "免費用櫃／堆存期間"],
  ["freight prepaid", "運費預付"], ["freight collect", "運費到付"], ["general rate increase (GRI)", "全面運價調升"],
  ["house bill of lading", "貨代／NVOCC 簽發的分提單"], ["intermodal transport", "複合運輸"], ["laden container", "重櫃"],
  ["letter of indemnity (LOI)", "保函"], ["mainline service", "幹線服務"], ["merchant haulage", "貨主安排的內陸運輸"],
  ["no-show", "訂艙後未出貨"], ["ocean freight", "海運基本運費"], ["on-board date", "裝船日"],
  ["port omission", "跳港"], ["port rotation", "掛港順序"], ["reefer plug", "冷凍櫃電源插座／用電"],
  ["rollover", "貨物順延至後續航次"], ["seal number", "貨櫃封條號碼"], ["shipper-owned container (SOC)", "貨主自備櫃"],
  ["slot exchange", "艙位交換"], ["space protection", "艙位保障"], ["special equipment", "特殊櫃型設備"],
  ["stuffing / devanning", "裝櫃／拆櫃"], ["terminal handling charge (THC)", "碼頭操作費"],
  ["transit port", "轉運港"], ["verified gross mass (VGM)", "載貨貨櫃驗證總重"],
  ["war risk surcharge", "戰爭風險附加費"], ["waybill", "不可轉讓運送單據"],
];
