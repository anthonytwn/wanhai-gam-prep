export type QuizQuestion = {
  id: string;
  category: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
  optionNotes?: string[];
  passage?: string;
  relatedSection?: string;
};

const q = (id: string, category: string, prompt: string, options: string[], answer: number, explanation: string, relatedSection?: string, passage?: string, optionNotes?: string[]): QuizQuestion => ({ id, category, prompt, options, answer, explanation, relatedSection, passage, optionNotes });
const notes = (correct: number, values: string[]) => values.map((value, index) => `${index === correct ? "正確" : "不選"}：${value}`);

export const aptitudeQuestions: QuizQuestion[] = [
  q("a2-01","數列規律","3、8、18、38、？",["58","68","76","78"],3,"每一項為前一項 ×2＋2；38×2＋2＝78。"),
  q("a2-02","數列規律","144、72、36、18、？",["6","8","9","12"],2,"每次除以2，下一項為9。"),
  q("a2-03","數列規律","5、9、16、26、39、？",["52","54","55","57"],2,"相鄰差為4、7、10、13，每次增加3；下一差16，所以39＋16＝55。"),
  q("a2-04","數列規律","2、6、12、20、30、？",["38","40","42","44"],2,"依序為1×2、2×3、3×4、4×5、5×6；下一項6×7＝42。"),
  q("a2-05","數列規律","7、10、16、25、37、？",["49","50","51","52"],3,"相鄰差為3、6、9、12，下一差15；37＋15＝52。"),
  q("a2-06","數列規律","1、4、2、8、3、12、4、？",["14","16","18","20"],1,"兩組交錯數列：1、2、3、4；4、8、12、16。"),
  q("a2-07","數列規律","64、32、16、8、4、？",["1","2","3","4"],1,"每次減半，下一項為2。"),
  q("a2-08","數列規律","11、14、20、29、41、？",["53","54","55","56"],3,"相鄰差為3、6、9、12，下一差15；41＋15＝56。"),
  q("a2-09","數列規律","2、3、5、8、12、17、？",["21","22","23","24"],2,"相鄰差依序1、2、3、4、5，下一差6；17＋6＝23。"),
  q("a2-10","數列規律","90、81、65、42、？",["10","12","14","16"],1,"依序減9、16、23，減數每次加7；下一次減30，42－30＝12。"),

  q("a2-11","比例運算","某航線月目標1,250 TEU，完成1,075 TEU，達成率為？",["82%","84%","86%","88%"],2,"1,075÷1,250＝0.86，即86%。"),
  q("a2-12","比例運算","運價1,600美元先調升12%，再折讓5%，結果為？",["1,680.00","1,702.40","1,712.00","1,792.00"],1,"1,600×1.12×0.95＝1,702.4；調升與折讓不可直接相減。"),
  q("a2-13","比例運算","20呎櫃與40呎櫃數量比3：2，共有70只，合計多少TEU？",["84","90","96","98"],3,"20呎42只＝42 TEU；40呎28只＝56 TEU；合計98 TEU。"),
  q("a2-14","比例運算","A、B、C三客戶貨量比2：3：5，總量1,500 TEU，B為？",["300","400","450","500"],2,"B占3/10，1,500×3/10＝450。"),
  q("a2-15","比例運算","去年貨量800 TEU，今年增加到920 TEU，成長率為？",["12%","15%","18%","20%"],1,"(920－800)÷800＝15%。"),
  q("a2-16","比例運算","四週貨量為180、220、260、300 TEU，平均為？",["230","235","240","245"],2,"總和960，除以4為240。"),
  q("a2-17","比例運算","報價中基本運費占80%，附加費占20%。若基本運費漲10%、附加費不變，總價漲多少？",["8%","10%","12%","20%"],0,"只有占總價80%的部分上漲10%，總影響為80%×10%＝8%。"),
  q("a2-18","比例運算","匯率由1美元兌31.5元變為32.4元，同一筆1萬美元成本增加多少台幣？",["6,000","7,500","9,000","10,000"],2,"匯差0.9元×10,000美元＝9,000元。"),
  q("a2-19","比例運算","一批貨損率2.5%，4,800件中預計完好多少件？",["4,620","4,650","4,680","4,700"],2,"完好率97.5%；4,800×0.975＝4,680。"),
  q("a2-20","比例運算","三種方案成本分別為900、1,050、1,200美元，按貨量2：3：5加權，平均成本為？",["1,050","1,080","1,095","1,110"],2,"(900×2＋1,050×3＋1,200×5)÷10＝1,095。"),

  q("a2-21","速率時間","船舶以18節航行540海里，忽略停泊需多久？",["24小時","30小時","32小時","36小時"],1,"時間＝距離÷速率＝540÷18＝30小時。"),
  q("a2-22","速率時間","貨櫃車09:20出發，行駛2小時45分後抵達，時間為？",["11:55","12:05","12:15","12:25"],1,"09:20＋2:45＝12:05。"),
  q("a2-23","速率時間","甲隊每小時處理24櫃、乙隊16櫃，共同處理200櫃需多久？",["4小時","5小時","6小時","8小時"],1,"合計效率40櫃/時；200÷40＝5小時。"),
  q("a2-24","速率時間","原作業需15小時，效率提高20%，新時間約為？",["12小時","12.5小時","13小時","13.5小時"],1,"時間與效率成反比；15÷1.2＝12.5小時。"),
  q("a2-25","速率時間","A港至B港720海里，前半以16節、後半以20節航行，總時間為？",["36小時","40.5小時","42.5小時","45小時"],1,"兩段各360海里；360÷16＋360÷20＝22.5＋18＝40.5小時。"),
  q("a2-26","速率時間","三台吊車6小時處理540櫃，效率相同；五台吊車處理750櫃需多久？",["4小時","5小時","6小時","7.5小時"],1,"每台每小時30櫃；五台每小時150櫃；750÷150＝5小時。"),
  q("a2-27","速率時間","ETA原為週二18:00，延誤38小時後為？",["週三20:00","週四06:00","週四08:00","週四18:00"],2,"週二18:00＋24小時＝週三18:00，再加14小時＝週四08:00。"),
  q("a2-28","速率時間","兩車相距420公里，相向行駛，速率65與75公里/時，多久相遇？",["2.5小時","3小時","3.5小時","4小時"],1,"相對速率140公里/時；420÷140＝3小時。"),
  q("a2-29","速率時間","文件每份需8分鐘，熟練後縮短25%，處理30份需多久？",["150分鐘","160分鐘","180分鐘","200分鐘"],2,"每份6分鐘；30×6＝180分鐘。"),
  q("a2-30","速率時間","航程4天18小時，繞航增加30%，約增加多久？",["30小時","32.4小時","34.2小時","36小時"],2,"總航程114小時；114×30%＝34.2小時。"),

  q("a2-31","條件邏輯","A在B前；D緊接在C後；B在C前。何者可能？",["A-B-C-D","B-A-C-D","A-C-D-B","C-D-A-B"],0,"A-B-C-D同時符合A在B前、B在C前、D緊接C後。"),
  q("a2-32","條件邏輯","所有冷凍櫃都需供電；部分特殊櫃是冷凍櫃。必然可推出？",["所有特殊櫃都需供電","部分特殊櫃需供電","所有需供電的都是冷凍櫃","特殊櫃都不是乾櫃"],1,"至少那些同時屬冷凍櫃的特殊櫃需要供電。"),
  q("a2-33","條件邏輯","若文件逾期則不能裝船；此櫃已裝船。可推出？",["文件沒有逾期","文件一定提早一天","貨物是危險品","無法判斷"],0,"由逆否命題可推出文件未逾期。"),
  q("a2-34","條件邏輯","甲不在第一；乙在丙前；丁不在最後。何者可行？",["甲乙丁丙","乙甲丙丁","乙丁甲丙","丙乙丁甲"],2,"乙丁甲丙符合甲不第一、乙在丙前、丁不最後。"),
  q("a2-35","條件邏輯","P、Q至少一個被選；若選P則不能選R；已知選R。必然為何？",["選P","選Q","P與Q都選","Q與R不能同選"],1,"選R使P不能被選；又P、Q至少一個，因此必須選Q。"),
  q("a2-36","條件邏輯","五批貨依序處理：M在N前，O在P後，N在O前。哪個順序不可能？",["M-N-P-O-Q","Q-M-N-O-P","M-Q-N-P-O","N-M-Q-P-O"],3,"N-M違反M必須在N前。"),
  q("a2-37","條件邏輯","只有完成VGM的櫃才能進場。某櫃尚未完成VGM，合理結論是？",["一定已進場","不能依此規則進場","一定取消訂艙","可先裝船"],1,"完成VGM是進場的必要條件；未完成即不符合進場條件。"),
  q("a2-38","條件邏輯","A或B航線至少一條開航；A停航；若B開航則C也開航。可推出？",["B與C開航","只有C開航","A與C開航","無法判斷B"],0,"A停航且A/B至少一條開航，所以B開航；進而C開航。"),
  q("a2-39","條件邏輯","會議安排週一至週四：法遵在營運之前；業務不在週一；文件在週四。何者可行？",["營運、法遵、業務、文件","法遵、業務、營運、文件","業務、法遵、營運、文件","法遵、營運、文件、業務"],1,"法遵在營運前、業務不在週一、文件在週四，只有第二項符合。"),
  q("a2-40","條件邏輯","所有準班航次都按表離港；有些按表離港航次仍晚到。下列正確？",["晚到航次一定不準班","按表離港不保證準時抵達","準班航次都晚到","晚到代表未按表離港"],1,"題幹明示部分按表離港仍可能晚到，因此離港準時不足以保證抵達準時。"),

  q("a2-41","圖形空間","方向依序為↗、→、↘、↓、？",["↙","←","↖","↑"],0,"每次順時針旋轉45度，下一個為↙。"),
  q("a2-42","圖形空間","符號依序為○、●●、○○○、●●●●、？",["○○○○○","●●●●●","○●○●○","●○●○●"],0,"數量每次加1，空心與實心交替；下一組為5個空心圓。"),
  q("a2-43","圖形空間","位置沿四角移動：左下→左上→右上→？",["中央","右下","左下","右上"],1,"沿四角順時針移動，下一位置是右下。"),
  q("a2-44","圖形空間","矩陣第一列：△、○、△○；第二列：□、◇、？",["◇□","□◇","△◇","□○"],1,"每列第三格依序合併前兩格，因此為□◇。"),
  q("a2-45","圖形空間","箭頭↑經鏡面左右反射後為？",["↑","↓","←","→"],0,"垂直向上的箭頭左右反射後方向不變。"),
  q("a2-46","圖形空間","圖形每步增加一條邊：三角形、正方形、五邊形、？",["圓形","六邊形","七邊形","八邊形"],1,"邊數3、4、5，下一個為6邊形。"),
  q("a2-47","圖形空間","一個正方形順時針旋轉90度，其中黑點原在左上角，旋轉後位於？",["右上","右下","左下","左上"],0,"左上角順時針旋轉90度到右上角。"),
  q("a2-48","圖形空間","規律：▲▼、▲▲▼▼、▲▲▲▼▼▼、？",["▲▲▲▼▼","▲▲▲▲▼▼▼▼","▼▼▼▲▲▲","▲▼▲▼"],1,"每一步同時增加一個▲與一個▼。"),
  q("a2-49","圖形空間","字母序列以鏡像配對：b-d、p-q，則左側為『<』時右側應為？",["<",">","^","v"],1,"左右鏡像會把<反射成>。"),
  q("a2-50","圖形空間","九宮格中黑點依序位於左上、中央、右下；下一輪若回到同一規律，下一點為？",["左上","右上","左下","中央"],0,"位置沿主對角線循環，右下之後回到左上。"),
];

export const professionalQuestions: QuizQuestion[] = [
  q("p2-01","角色與網路","客戶希望整合海運、報關、拖車與倉儲，最直接的協調角色通常是？",["Port authority","Freight forwarder","Consignee only","Classification society"],1,"貨代的核心價值是跨供應商整合物流環節；港務機關管理港區，驗船協會關注船舶規範。","shipping-stakeholders",undefined,notes(1,["管理港區與公共設施，不承接整票物流整合。","整合訂艙、報關、拖車與倉儲。","收貨人是貨權與進口端角色，不必然提供整合服務。","負責船舶入級與技術規範。"])),
  q("p2-02","角色與網路","NVOCC 與 Ocean Carrier 的主要差異是？",["NVOCC不能簽發任何提單","NVOCC不營運船舶但可承擔契約承運人角色","Carrier不能向貨主報價","兩者完全相同"],1,"NVOCC 可採購艙位並簽發 House B/L，但通常不實際營運船舶；Ocean Carrier 營運或控制船舶與航線。","shipping-stakeholders"),
  q("p2-03","角色與網路","Master B/L 通常由誰簽發？",["Ocean Carrier","Customs Broker","Truck Driver","Consignee"],0,"Master B/L 由海上承運人簽發；NVOCC／Forwarder 可能另簽 House B/L。","shipping-docs"),
  q("p2-04","角色與網路","Direct service 相較 Transshipment 最直接的優勢是？",["一定最便宜","銜接節點較少","一定每天開船","不需要任何文件"],1,"直航少一個或多個轉運銜接點，通常降低 missed connection 風險；但價格與頻率不一定最好。","shipping-network"),
  q("p2-05","角色與網路","Slot exchange 的目的通常是？",["交換員工","互換艙位以擴大網路或班次","取消所有聯營","免除提單責任"],1,"航商以艙位交換擴大覆蓋與頻率，但對客戶的承運契約與服務責任仍須明確。","shipping-network"),
  q("p2-06","角色與網路","GAM 面對跨國客戶最重要的功能是？",["只提供最低價","作為單一窗口整合商務、營運與異常","取代海關決定稅則","保證所有船期"],1,"GAM 的價值在於把需求、報價、艙位、KPI 與跨部門處理整合成可管理的客戶方案。","shipping-stakeholders"),
  q("p2-07","角色與網路","Feeder service 主要負責？",["連接區域港與樞紐港","只運輸散裝貨","核發原產地證明","提供銀行融資"],0,"支線接駁把區域港貨物集中到主幹線樞紐，或反向分撥。","shipping-network"),
  q("p2-08","角色與網路","Consignee 在進口端通常不負責下列何者？",["安排清關","換單提貨","目的地配送","營運承運船舶"],3,"營運船舶屬 Carrier；Consignee 通常關注清關、換單、提貨與配送。","shipping-stakeholders"),

  q("p2-09","流程與文件","一般出口交易最合理的順序是？",["報價→接單→訂艙→報關裝船","裝船→報價→訂艙→付款","清關→提貨→報價→生產","到貨通知→出口報關→訂艙"],0,"先形成商務條件與訂單，再安排運輸、備貨、報關與裝船。","trade-flow"),
  q("p2-10","流程與文件","Shipping Instruction 的主要用途是？",["製作提單與艙單資料","申請貨物貸款","決定HS Code","預約卡車駕照"],0,"SI 提供 shipper、consignee、notify party、品名等資訊，是承運人製作提單的重要依據。","trade-docs"),
  q("p2-11","流程與文件","下列何者最能描述 B/L？",["只有請款功能","收貨證明與運送契約證明，特定形式可具物權憑證功能","海關稅單","保險單"],1,"提單具有多重法律與商務功能，但不等同發票、稅單或保險單。","trade-docs"),
  q("p2-12","流程與文件","Commercial Invoice 與 Packing List 的核心差異是？",["前者偏交易價值，後者偏包裝數量重量","兩者完全相同","Packing List決定付款","Invoice只列尺寸"],0,"Invoice 支持交易與海關估價；Packing List 支持件數、重量、尺寸與查驗。","trade-docs"),
  q("p2-13","流程與文件","VGM 的核心目的為何？",["證明貨物原產地","提供載貨貨櫃驗證總重以利安全配載","決定運價幣別","延長Free Time"],1,"SOLAS VGM 要求裝船前取得載貨貨櫃的驗證總重，避免錯誤重量危及配載與船舶安全。","shipping-equipment"),
  q("p2-14","流程與文件","Draft B/L 發現 Consignee 名稱錯誤，最佳作法是？",["先簽正本再說","裝船後由目的港自行猜測","在簽發前取得書面更正並重新核對","刪除Consignee"],2,"在正式簽發前建立可追溯的更正與複核，可降低清關、換單與更正費風險。","trade-docs"),
  q("p2-15","流程與文件","CY cut-off 與 SI cut-off 的差異是？",["前者管實體進場，後者管文件提交","兩者都是付款期限","前者只管進口稅","完全相同"],0,"CY cut-off 是重櫃進場門檻；SI cut-off 是文件資料提交門檻，逾期造成的風險不同。","shipping-operations"),
  q("p2-16","流程與文件","L/C 交易中銀行主要審查？",["實際貨物品質","提交單據是否相符","船員資格","碼頭設備"],1,"信用狀遵循單據交易原則；單據瑕疵可能構成 discrepancy。","trade-payment"),
  q("p2-17","流程與文件","原產地證明主要影響？",["優惠關稅與原產地管制","船舶吃水","吊車速度","貨櫃顏色"],0,"原產地規則會影響協定優惠、反傾銷與進口管制；出貨地不必然等於原產地。","trade-customs"),
  q("p2-18","流程與文件","危險品品名與SDS不一致時應？",["為趕船忽略差異","暫停並由DG/法遵確認分類與申報","改用一般品名","要求司機決定"],1,"安全與申報正確性優先；先取得一致資料並由專責單位確認是否可承運。","shipping-docs"),

  q("p2-19","Incoterms與交易","Incoterms 不直接決定？",["交貨任務","成本分配","風險移轉","貨物所有權與付款日"],3,"Incoterms 規範交貨相關任務、成本與風險，但所有權與付款須由買賣契約處理。","trade-incoterms"),
  q("p2-20","Incoterms與交易","FOB 的風險通常何時移轉？",["貨物裝上指定船舶時","抵達目的港時","買方付款時","卸貨完成時"],0,"FOB 以裝船為風險點，且只適用海運／內河運輸。","trade-incoterms"),
  q("p2-21","Incoterms與交易","CFR 正確描述為？",["賣方付主運費，但風險在裝船時移轉","買方付主運費且風險到港移轉","賣方必須負責進口稅","只能用於空運"],0,"CFR 的費用終點在目的港，但風險早在裝船時移轉，這是常考陷阱。","trade-incoterms"),
  q("p2-22","Incoterms與交易","CIF 相較 CFR 增加？",["賣方安排符合條件的貨物保險","賣方負責進口清關","買方免付款","目的港一定免費卸貨"],0,"CIF 的核心差異是賣方保險義務；進口清關通常仍由買方處理。","trade-incoterms"),
  q("p2-23","Incoterms與交易","貨櫃由賣方交到出口碼頭承運人，哪個條件通常比FOB更符合貨櫃實務？",["FCA","DDP","DPU","EXW"],0,"FCA 以交付承運人為風險點，較能對應貨櫃在裝船前已交給場站／承運人的實務。","trade-incoterms"),
  q("p2-24","Incoterms與交易","唯一明確要求賣方在目的地完成卸貨的條件是？",["DAP","DPU","CPT","FOB"],1,"DPU 的交貨點在目的地卸貨完成；DAP 則是抵達、可供卸貨但未卸。","trade-incoterms"),
  q("p2-25","Incoterms與交易","DDP 最大的實務風險之一是？",["賣方可能無法合法辦理進口清關與稅務","買方一定付海運費","不能使用卡車","沒有任何風險"],0,"DDP 要求賣方承擔進口端義務，必須確認當地進口人資格、稅務與法規可行性。","trade-incoterms"),
  q("p2-26","Incoterms與交易","CPT 的風險移轉點通常是？",["交付第一承運人時","抵達最終目的地時","付款時","清關完成時"],0,"CPT 由賣方支付至指定地的運費，但風險在較早交給第一承運人時移轉。","trade-incoterms"),
  q("p2-27","Incoterms與交易","Landed Cost 不應漏掉？",["只有商品售價","運費、附加費、關稅與內陸成本","只看匯率","只有保險"],1,"落地成本用來比較整體方案，不能只比較 ocean freight。","trade-basics"),
  q("p2-28","Incoterms與交易","報價寫『USD 1,500/FEU excluding local charges』表示？",["所有費用全包","1,500美元不含約定的當地費用","不用支付附加費","價格永久有效"],1,"excluding 表示排除；還需確認 surcharge、origin/destination charges 與有效期。","trade-basics"),

  q("p2-29","營運與術語","Blank Sailing 是？",["空船航行","取消原定航次","貨櫃未裝原航次","船舶沒有船員"],1,"Blank sailing 指航商取消一個預定航次；Rolled cargo 則是個別貨物順延。","shipping-operations"),
  q("p2-30","營運與術語","Rolled Cargo 是？",["貨物未裝原航次而順延","滾裝船貨物","貨櫃翻覆","退運"],0,"貨物可能因超收、艙位、重量或操作因素未裝上原航次，需安排 recovery。","shipping-operations"),
  q("p2-31","營運與術語","Port Omission 是？",["跳過原定掛靠港","增加新港口","取消提單","免收碼頭費"],0,"跳港會影響貨物卸載、轉運與替代安排，需快速判斷改港或後續接駁。","shipping-operations"),
  q("p2-32","營運與術語","Demurrage 與 Detention 常見區分為？",["場內超期／場外持櫃超期","出口／進口","海運費／空運費","基本運費／燃油費"],0,"判斷關鍵常是貨櫃是否仍在碼頭／場內；實際仍須依當地 tariff 與合約。","shipping-freetime"),
  q("p2-33","營運與術語","40呎標準櫃通常換算？",["0.5 TEU","1 TEU","2 TEU","4 TEU"],2,"TEU以20呎為一單位，因此40呎櫃通常為2 TEU。","shipping-equipment"),
  q("p2-34","營運與術語","Reefer 貨最關鍵的額外控制是？",["溫度設定、通風與供電","把所有文件刪除","一定走直航","不用VGM"],0,"冷凍櫃需確認 set point、ventilation、plug availability 與冷鏈異常處理。","shipping-equipment"),
  q("p2-35","營運與術語","Service Reliability 最合理的衡量是？",["只看船名","按計畫離港／抵達與班次執行情況","只看最低價","只看船舶大小"],1,"可靠度反映班次是否執行與時程表現，是客戶庫存與供應鏈決策的重要輸入。","shipping-pricing"),
  q("p2-36","營運與術語","PSS 通常指？",["Peak Season Surcharge","Port Safety Standard","Prepaid Shipping Slip","Panama Schedule Service"],0,"PSS 是旺季附加費，通常在需求旺盛與艙位吃緊時出現。","shipping-pricing"),
  q("p2-37","營運與術語","BAF 與哪項成本最直接相關？",["燃油","關稅","倉庫租金","產品售價"],0,"Bunker Adjustment Factor 用來反映船用燃油成本波動。","shipping-pricing"),
  q("p2-38","營運與術語","遇轉運失接，GAM第一則更新最應包含？",["只有道歉","新節點、替代船班、影響與下次更新時間","未確認的賠償承諾","公司歷史"],1,"有效異常溝通要降低不確定性並支持客戶行動，承諾必須可控且可追蹤。","shipping-operations"),

  q("p2-39","萬海與產業","萬海最具代表性的基礎優勢是？",["亞洲近洋高密度網路","只做散裝船","只服務台灣港口","只經營航空"],0,"萬海由亞洲區域密集網路建立頻率與港口覆蓋，再選擇性延伸遠洋。","wanhai-routes"),
  q("p2-40","萬海與產業","下列何者是萬海現行服務版圖的合理描述？",["僅東北亞","亞洲為核心，延伸印度、中東與美洲","只做歐洲內河","沒有北美服務"],1,"官方船期與服務查詢顯示亞洲密集航線及美洲、中東等延伸。","wanhai-routes"),
  q("p2-41","萬海與產業","相較長榮、陽明，萬海面試中較適合強調？",["亞洲區域密度與反應速度","公司規模一定最大","完全不做遠洋","不需要合作航線"],0,"差異化重點在亞洲網路底盤與區域供應鏈彈性，而非誇大規模。","wanhai-compare"),
  q("p2-42","萬海與產業","紅海危機最直接造成？",["繞航、燃油、保險與航程上升","貨櫃尺寸改變","提單失去效力","所有港口關閉"],0,"安全風險促使航商繞行好望角，拉長航程並吸收有效運能。","news-five-year"),
  q("p2-43","萬海與產業","巴拿馬運河乾旱限航反映哪種風險？",["氣候與關鍵水道容量風險","只影響空運","貨物所有權風險","銀行信用狀風險"],0,"水位限制影響吃水、通行量與等待時間，進而改變航線與成本。","news-five-year"),
  q("p2-44","萬海與產業","全球航商排名若以營運TEU計算，主要衡量？",["營運船隊可用艙位容量","員工數","營收單一數字","公司成立年份"],0,"Alphaliner Top 100 以營運船舶可用TEU容量衡量，需標示資料日期。","shipping-carriers"),
  q("p2-45","萬海與產業","聯盟或合作網路重組時，客戶最需要重新確認？",["港口掛靠、轉運節點、頻率與準班","公司Logo","貨櫃標準是否變成30呎","Incoterms是否失效"],0,"網路重組會改變路線設計與銜接，需要重新比較 end-to-end service。","shipping-network"),

  q("p2-46","法遵與永續","EEXI 主要衡量？",["既有船舶技術能效","客戶信用","貨物原產地","碼頭堆存"],0,"EEXI是既有船舶能效指標；CII則聚焦年度營運碳強度。","shipping-compliance"),
  q("p2-47","法遵與永續","CII 可能促使航商採取？",["改善營運效率、航速與船隊配置","取消所有文件","忽略燃油","改變貨物所有權"],0,"碳強度評級會影響船速、燃料、維修與資產部署等營運決策。","shipping-compliance"),
  q("p2-48","法遵與永續","制裁篩檢命中高風險對象時應？",["為趕船先放行","暫停並交由法遵確認","刪除對方名稱","請客戶口頭保證即可"],1,"制裁風險不能用資料刪除或口頭保證規避；需依程序升級查核。","trade-customs"),
  q("p2-49","法遵與永續","危險品瞞報的最大問題是？",["只影響字體","危及船舶、人員、貨物並造成法律責任","一定比較便宜","只影響目的港天氣"],1,"正確分類、包裝、標示與申報是安全底線，瞞報可能造成火災、拒運與重大責任。","shipping-docs"),
  q("p2-50","法遵與永續","客戶要求『保證95%準時抵達』，GAM最佳回應是？",["立即無條件答應","拒絕所有KPI","把承諾拆成可控KPI、前提、例外與補救機制","只談最低價"],2,"專業承諾應界定計算方式、客戶預報義務、不可控事件、更新與service recovery，而非空泛保證。","case-tender"),
];

export const shippingVocabulary = [
  ["shipment","一批貨物／出貨"],["vessel","船舶"],["voyage","航次"],["freight","運費／貨物"],["booking","訂艙"],
  ["quotation","報價"],["surcharge","附加費"],["congestion","壅塞"],["customs clearance","通關"],["transit time","運送時間"],
  ["service reliability","服務可靠度"],["rate restoration","運價恢復／調升"],["container availability","貨櫃供應狀況"],["documentation cut-off","文件截止時間"],
  ["consignee","收貨人"],["shipper","出貨人"],["demurrage","場內超期費"],["detention","場外持櫃超期費"],["transshipment","轉船"],["blank sailing","取消航次"],
];

const emailA = `Subject: Peak-season allocation for August\n\nDear Anthony,\nOur Ho Chi Minh City plant expects to ship 24 FEU per week in August, up from the usual 15. The cargo supports a product launch in California, so a missed sailing could delay store deliveries. Please confirm how much space Wan Hai can protect, whether the service is direct, and when bookings must be submitted. We can provide a four-week rolling forecast, but final purchase orders are sometimes released only ten days before departure. We would also like one backup option in case the primary sailing is full.\n\nBest regards,\nLinda Chen`;
const noticeB = `SERVICE NOTICE — Due to severe congestion at the transshipment hub, Voyage N218 will omit Port Klang. Cargo originally connecting at Port Klang will be discharged in Singapore and transferred to Voyage N222. The current estimated delay is three to four days. Customers with time-critical cargo should contact their account representative by 12:00 noon on Thursday so that alternative routings can be reviewed. Additional costs, if any, will be confirmed before changes are made.`;
const longC = `A home-appliance manufacturer used to award most of its ocean volume to the carrier offering the lowest annual rate. After two years of disruption, however, the company changed its tender scorecard. Price now represents 40 percent of the score, while space protection, schedule reliability, data quality and recovery response account for the remaining 60 percent. The change followed a costly incident in which twelve containers missed a connection at a regional hub. Although the ocean rate had been low, the manufacturer paid for emergency air freight and lost sales because replacement parts arrived late.\n\nIn the new tender, each carrier must provide lane-level performance data and describe what happens after a service failure. One bidder proposes a 95 percent allocation if the customer submits forecasts four weeks in advance. Another offers a lower rate without a firm allocation. The procurement team initially prefers the cheaper offer, but the supply-chain director asks the team to compare total landed cost under both normal and disrupted conditions. She also requests a quarterly business review so that recurring problems can be identified before the next peak season.`;
const longD = `Ocean carriers increasingly receive requests for emissions information from multinational customers. A carrier may estimate shipment emissions using vessel data, distance, cargo allocation and an agreed methodology. The resulting figure can help a customer compare routes or prepare a sustainability report, but it should not be treated as a perfectly precise measurement. Different methodologies may allocate vessel emissions differently, and a longer route is not always less efficient if it uses a larger, more fuel-efficient ship with high utilization.\n\nFor account managers, the practical task is to explain what the number includes, which assumptions were used and how two options differ. A customer choosing between a direct service and a transshipment service may consider carbon, transit time, reliability and cost together. If the customer has a strict delivery deadline, the lowest-emission option may not be operationally acceptable. A useful recommendation therefore makes the trade-offs visible instead of presenting one metric as the only answer.`;
const docsE = `DOCUMENT 1 — Customer request\nPlease change the consignee from Bright Home LLC to Bright Home Distribution Inc. and show “kitchen accessories” as the cargo description.\n\nDOCUMENT 2 — Internal note\nThe commercial invoice states “electric heating components.” The amendment cut-off is 16:00 today. Compliance review is required if the requested description is less specific than the supporting documents.`;

export const englishQuestions: QuizQuestion[] = [
  q("e2-01","Grammar & Usage","The customer requested that the revised schedule ___ before noon.",["send","be sent","is sending","sent"],1,"After ‘requested that’, the passive subjunctive form ‘be sent’ is appropriate."),
  q("e2-02","Grammar & Usage","Neither the shipper nor the consignee ___ approved the amendment.",["have","has","are","were"],1,"The verb agrees with the nearer singular subject ‘consignee’."),
  q("e2-03","Grammar & Usage","The cargo was rolled ___ the vessel had reached its weight limit.",["because","because of","despite","unless"],0,"‘Because’ introduces the full clause ‘the vessel had reached…’."),
  q("e2-04","Grammar & Usage","Please book early to avoid ___ affected by peak-season space constraints.",["be","being","to be","been"],1,"‘Avoid’ is followed by a gerund; the passive form is ‘being affected’."),
  q("e2-05","Grammar & Usage","The new routing is slightly more expensive, ___ it reduces the risk of a stock-out.",["but","unless","because of","therefore of"],0,"‘But’ connects the cost disadvantage with the contrasting operational benefit."),
  q("e2-06","Grammar & Usage","We will confirm the allocation as soon as Operations ___ the forecast.",["review","reviews","will review","reviewed"],1,"A time clause referring to the future uses the present simple: ‘reviews’."),
  q("e2-07","Grammar & Usage","The quotation is valid ___ 5:00 p.m. on Friday.",["until","among","during","beside"],0,"‘Until’ identifies the ending point of validity."),
  q("e2-08","Grammar & Usage","All additional charges must be approved ___ the routing is changed.",["before","although","whereas","despite"],0,"Approval must occur earlier than the change, so ‘before’ is correct."),
  q("e2-09","Grammar & Usage","Had the customer submitted the SI earlier, the amendment fee ___ avoided.",["can be","could have been","will be","has"],1,"This is an inverted third conditional describing an unreal past result."),
  q("e2-10","Grammar & Usage","The account manager explained not only the delay ___ the available recovery options.",["but also","and also was","as well","however"],0,"The correlative structure is ‘not only … but also …’."),

  q("e2-11","Customer Email","What is the customer's main business risk?",["A customs refund","A delayed product launch","A change in container size","A shortage of staff"],1,"The email says missed sailings could delay store deliveries for a product launch.",undefined,emailA),
  q("e2-12","Customer Email","What can the customer provide?",["A four-week rolling forecast","Guaranteed final orders six months ahead","Its own vessel","Free warehouse space"],0,"The customer can provide a four-week rolling forecast, although final POs may arrive later.",undefined,emailA),
  q("e2-13","Customer Email","Which response would best address the request?",["Only quote the lowest rate","Confirm protected space, booking deadline, routing and backup","Promise unlimited space","Ask the customer to stop shipping"],1,"The customer explicitly asks about allocation, directness, booking timing and a backup option.",undefined,emailA),
  q("e2-14","Service Notice","Why will cargo be transferred in Singapore?",["Port Klang is omitted due to congestion","The consignee changed","The cargo is dangerous","The vessel was sold"],0,"The notice directly links the Port Klang omission to severe congestion.",undefined,noticeB),
  q("e2-15","Service Notice","What should customers with urgent cargo do?",["Wait without contacting anyone","Contact the account representative by Thursday noon","Pay all costs immediately","Cancel the purchase order"],1,"They should request an alternative-routing review before the stated deadline.",undefined,noticeB),
  q("e2-16","Service Notice","What has not yet been finalized?",["The estimated delay","The new transshipment hub","Any additional costs","The contact deadline"],2,"The notice says additional costs, if any, will be confirmed before changes are made.",undefined,noticeB),

  q("e2-17","Long Reading","Why did the manufacturer change its tender scorecard?",["It stopped using ocean freight","A disruption created costs beyond the low ocean rate","All carriers charged the same rate","It no longer needed performance data"],1,"A missed connection led to air freight and lost sales, showing that the cheapest rate did not minimize total cost.",undefined,longC),
  q("e2-18","Long Reading","What now carries more combined weight than price?",["Container color and vessel age","Space, reliability, data and recovery response","Only transit time","Port taxes"],1,"Those non-price factors together account for 60 percent, compared with price at 40 percent.",undefined,longC),
  q("e2-19","Long Reading","What condition is attached to the 95 percent allocation?",["A four-week forecast","Payment in cash","Use of air freight","A ten-year contract"],0,"The bidder requires forecasts four weeks in advance.",undefined,longC),
  q("e2-20","Long Reading","Why does the director request a quarterly business review?",["To redesign containers","To identify recurring issues before peak season","To eliminate all KPIs","To replace procurement"],1,"The review is intended to detect patterns early and improve the next peak-season plan.",undefined,longC),
  q("e2-21","Long Reading","What is the main caution about shipment-emissions figures?",["They are always exact","They depend on methodology and assumptions","They cannot compare routes","They only apply to air freight"],1,"The passage emphasizes that allocation methods and assumptions affect the estimate.",undefined,longD),
  q("e2-22","Long Reading","Why might a longer route still be efficient?",["It avoids all documents","It may use a larger efficient vessel with high utilization","Distance never matters","It always costs less"],1,"Vessel efficiency and utilization can partly offset a longer sailing distance.",undefined,longD),
  q("e2-23","Long Reading","What should an account manager explain?",["Only the final number","Scope, assumptions and differences between options","The customer's private strategy","Why carbon is irrelevant"],1,"The account manager should make the methodology and trade-offs understandable.",undefined,longD),
  q("e2-24","Long Reading","What is the passage's recommended decision approach?",["Choose only by carbon","Make carbon, time, reliability and cost trade-offs visible","Always choose transshipment","Ignore delivery deadlines"],1,"A useful recommendation balances multiple business constraints instead of optimizing one metric alone.",undefined,longD),

  q("e2-25","Multiple Documents","What inconsistency requires attention?",["The consignee and vessel name","The requested cargo description and invoice description","The amendment time and date","The port and country"],1,"‘Kitchen accessories’ is less specific and differs from ‘electric heating components.’",undefined,docsE),
  q("e2-26","Multiple Documents","What should happen before the description is changed?",["Compliance review","Automatic approval","Deletion of the invoice","Payment of demurrage"],0,"The internal note explicitly requires compliance review for a less specific description.",undefined,docsE),
  q("e2-27","Multiple Documents","Which detail creates urgency?",["The customer is new","The cut-off is 16:00 today","The cargo is already delivered","The rate expires next year"],1,"The same-day amendment cut-off limits the available response time.",undefined,docsE),
  q("e2-28","Business Response","Which sentence best manages an unconfirmed ETA?",["We guarantee delivery tomorrow.","The current estimate is Friday; we will reconfirm after the connection is secured at 10:00 tomorrow.","There is nothing we can do.","The delay is not our problem."],1,"It distinguishes an estimate from a commitment and provides a concrete next update."),
  q("e2-29","Business Response","Which phrase is most appropriate when declining an unrealistic guarantee?",["Absolutely impossible.","We can commit to the confirmed allocation and update milestones, while arrival remains subject to the published schedule and operational conditions.","Do not ask again.","Everything will be fine."],1,"The sentence protects the commitment boundary while still offering measurable service."),
  q("e2-30","Business Response","Which closing best invites a decision?",["Please advise which option best supports your production deadline, and we will secure the selected space by 3:00 p.m.","Maybe we can do something.","No reply is needed.","The cheapest option is always best."],0,"It links the decision to the customer's priority and states an actionable deadline."),
];
