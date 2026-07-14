"use client";

import { useEffect, useMemo, useState } from "react";

type Section = "dashboard" | "wanhai" | "course" | "scenarios" | "news";

const sections: { id: Section; label: string; index: string }[] = [
  { id: "dashboard", label: "準備艙橋", index: "00" },
  { id: "wanhai", label: "認識萬海", index: "01" },
  { id: "course", label: "國貿速成", index: "02" },
  { id: "scenarios", label: "情境演練", index: "03" },
  { id: "news", label: "時事雷達", index: "04" },
];

const source = (href: string, label = "查看來源") => (
  <a className="source-link" href={href} target="_blank" rel="noreferrer">{label} ↗</a>
);

const modules = [
  { id: "history", title: "萬海歷史與定位", time: "12 min", section: "wanhai" as Section },
  { id: "network", title: "航線、服務與客戶", time: "18 min", section: "wanhai" as Section },
  { id: "tradeflow", title: "一票貨的完整旅程", time: "20 min", section: "course" as Section },
  { id: "incoterms", title: "Incoterms 核心五式", time: "18 min", section: "course" as Section },
  { id: "shipping", title: "航運術語與文件", time: "22 min", section: "course" as Section },
  { id: "cases", title: "GAM 業務情境", time: "20 min", section: "scenarios" as Section },
  { id: "math", title: "基本計算", time: "12 min", section: "scenarios" as Section },
  { id: "radar", title: "今日五則時事", time: "15 min", section: "news" as Section },
];

const terms = [
  ["TEU", "20 呎標準櫃的運量單位；40 呎櫃通常計 2 TEU。"],
  ["FCL / LCL", "整櫃貨 / 併櫃散貨。船公司核心業務以 FCL 為主。"],
  ["ETD / ETA", "預計離港 / 預計抵港；遇異常時要清楚說明這是預估時間。"],
  ["POL / POD", "裝貨港 / 卸貨港，描述一票貨的起訖節點。"],
  ["Transshipment", "轉船。可擴大港口覆蓋，但比直航多一個銜接風險。"],
  ["Blank Sailing", "船公司取消某一航次，常用於調整運能或因應營運中斷。"],
  ["B/L", "提單：收貨證明、運送契約證明，特定形式亦具物權憑證功能。"],
  ["SI", "Shipping Instruction，客戶提供給承運人製作提單的指示。"],
  ["Demurrage", "櫃留在碼頭 / 場內超過免費期產生的費用。"],
  ["Detention", "櫃被提離場站後，超過免費期仍未還櫃的費用。"],
  ["BAF", "燃油附加費；燃油成本波動時，報價可能隨之調整。"],
  ["Rolled Cargo", "原訂貨物未裝上該航次，順延至後續船班。"],
];

// DAILY_NEWS_START — 每日 08:00 自動化只更新此區塊。
const dailyNews = [
  {
    date: "2026.07.14", sourceName: "Maersk", tag: "市場動態", title: "拉丁美洲港口維持穩定，亞洲出口旺季延續",
    body: "Maersk 7 月市場更新顯示，中美洲、加勒比海主要港口運作大致正常；亞洲至南美東岸的季節性貨量仍支撐穩定班次。",
    impact: "亞洲旺季貨流維持 → 班次需求穩定 → 訂艙時仍需預留旺季艙位與轉運緩衝。",
    href: "https://www.maersk.com/news/articles/2026/07/14/latin-america-market-update-july",
  },
  {
    date: "2026.07.13", sourceName: "IMO", tag: "關鍵水道", title: "IMO 重申國際航道的通行權與安全標準",
    body: "IMO 理事會重申，沿岸國對重要航道採取的交通管理措施，應符合《海上人命安全公約》等國際規範。",
    impact: "航道管制變動 → 船期與保險不確定性上升 → 航商需要更快調整路線與客戶通知。",
    href: "https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-council-reaffirms-commitment-to-protecting-vital-shipping-lanes.aspx",
  },
  {
    date: "2026.07.13", sourceName: "IMO", tag: "黑海安全", title: "黑海與亞速海商船攻擊事件再起",
    body: "IMO 譴責近期針對民用商船的攻擊，並呼籲各方保障船員、船舶與國際航運安全。",
    impact: "區域安全惡化 → 繞航、戰爭險與港口風險增加 → 交期與報價需加入更大安全係數。",
    href: "https://www.imo.org/en/mediacentre/pressbriefings/pages/statement-on-attacks-in-black-sea-and-sea-of-azov.aspx",
  },
  {
    date: "2026.07.13", sourceName: "Le Monde", tag: "荷姆茲海峽", title: "荷姆茲海峽通行量再受政策與安全風險擠壓",
    body: "航跡資料顯示海峽通行船數偏低；美國宣布新的封鎖與航運收費措施後，油價與區域物流風險再度升溫。",
    impact: "海峽風險升高 → 油價、保險與燃油成本上升 → 運價與附加費面臨調整壓力。",
    href: "https://www.lemonde.fr/en/international/article/2026/07/13/trump-imposes-maritime-toll-in-strait-of-hormuz-as-ship-traffic-collapses_6755446_4.html",
  },
  {
    date: "2026.07.01", sourceName: "IMO", tag: "自動航運", title: "首套全球自主船舶安全準則開始適用",
    body: "IMO 的非強制性 MASS Code 於 7 月 1 日生效，為自主貨船的操作、安全與監管建立共同框架。",
    impact: "自動化標準成形 → 船舶資料與遠端操作需求增加 → 航運服務競爭延伸至科技與風險管理。",
    href: "https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-adopts-mass-code.aspx",
  },
];
// DAILY_NEWS_END

export default function Home() {
  const [active, setActive] = useState<Section>("dashboard");
  const [done, setDone] = useState<string[]>([]);
  const [openTerm, setOpenTerm] = useState<number | null>(null);
  const [scenarioAnswer, setScenarioAnswer] = useState<string | null>(null);
  const [containers, setContainers] = useState(20);
  const [target, setTarget] = useState(500);
  const [actual, setActual] = useState(425);

  useEffect(() => {
    const saved = localStorage.getItem("wanhai-progress");
    if (saved) setDone(JSON.parse(saved));
  }, []);

  const toggleDone = (id: string) => {
    const next = done.includes(id) ? done.filter((item) => item !== id) : [...done, id];
    setDone(next);
    localStorage.setItem("wanhai-progress", JSON.stringify(next));
  };

  const progress = Math.round((done.length / modules.length) * 100);
  const daysLeft = useMemo(() => Math.max(0, Math.ceil((new Date("2026-07-17T09:00:00+08:00").getTime() - Date.now()) / 86400000)), []);
  const go = (id: Section) => { setActive(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const completeButton = (id: string) => (
    <button className={`complete ${done.includes(id) ? "is-done" : ""}`} onClick={() => toggleDone(id)}>
      <span>{done.includes(id) ? "✓" : ""}</span>{done.includes(id) ? "已完成" : "標記完成"}
    </button>
  );

  return (
    <main>
      <header className="topbar">
        <button className="brand" onClick={() => go("dashboard")} aria-label="回到首頁">
          <span className="brand-mark">WH</span><span>DECK <i>/ GAM PREP</i></span>
        </button>
        <nav>
          {sections.map((item) => (
            <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => go(item.id)}>
              <small>{item.index}</small>{item.label}
            </button>
          ))}
        </nav>
        <div className="progress-pill"><span style={{ width: `${progress}%` }} />{progress}%</div>
      </header>

      {active === "dashboard" && (
        <div className="page dashboard-page">
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">顏文龍的面試準備艙橋 · UPDATED 2026.07.14</p>
              <h1>把你的溝通力，<br /><em>轉成航運商業力。</em></h1>
              <p className="lead">一套為 7 月 17 日設計的閱讀路徑：先建立產業骨架，再練習把航運資訊轉譯成客戶可採取的下一步。</p>
              <div className="hero-actions">
                <button className="primary" onClick={() => go("course")}>開始 90 分鐘速成課 <b>→</b></button>
                <button className="text-button" onClick={() => go("news")}>先看考前時事</button>
              </div>
            </div>
            <div className="countdown-card">
              <div><span>{daysLeft}</span><small>DAYS</small></div>
              <p>距離 7 / 17 面試</p>
              <hr />
              <strong>今日航向</strong>
              <ol><li>完成國貿速成</li><li>練 3 題客訴情境</li><li>記住 5 條時事因果鏈</li></ol>
            </div>
          </section>

          <section className="dashboard-grid">
            <div className="panel study-plan">
              <div className="section-head"><div><p className="eyebrow">MISSION CONTROL</p><h2>學習進度</h2></div><span>{done.length} / {modules.length}</span></div>
              <div className="big-progress"><i style={{ width: `${progress}%` }} /></div>
              <div className="module-list">
                {modules.map((item) => (
                  <button key={item.id} onClick={() => go(item.section)} className={done.includes(item.id) ? "done" : ""}>
                    <span>{done.includes(item.id) ? "✓" : modules.indexOf(item) + 1}</span>
                    <div><strong>{item.title}</strong><small>{item.time}</small></div><b>›</b>
                  </button>
                ))}
              </div>
            </div>
            <aside className="panel fit-card">
              <p className="eyebrow">YOUR EDGE</p><h2>你的經歷，怎麼對上 GAM</h2>
              <div className="fit-item"><span>01</span><div><strong>AIESEC</strong><p>12 國跨文化協作 → 跨部門與跨國溝通</p></div></div>
              <div className="fit-item"><span>02</span><div><strong>富邦人壽</strong><p>需求分析與顧問式溝通 → Account development</p></div></div>
              <div className="fit-item"><span>03</span><div><strong>星巴克黑圍裙</strong><p>長期顧客經營與區組業績第一 → Relationship + target</p></div></div>
              <div className="editorial-note"><span>POSITIONING</span><p>既有優勢不是航運術語，而是客戶經營。準備重點，是讓這項能力在國際物流場景中清楚可見。</p></div>
            </aside>
          </section>
        </div>
      )}

      {active === "wanhai" && (
        <div className="page content-page">
          <PageIntro no="01" kicker="COMPANY INTELLIGENCE" title="從公司沿革，讀懂航線策略" desc="時間軸、服務網路與客戶結構收在同一個視角，方便快速建立萬海的商業輪廓。" />
          <section className="chapter" id="history">
            <div className="chapter-title"><div><p className="eyebrow">01 — ORIGIN</p><h2>從原木船到全球貨櫃網路</h2></div>{completeButton("history")}</div>
            <div className="timeline">
              <Timeline year="1965" title="公司成立" text="2 月 24 日成立，初期經營台灣、日本與東南亞間原木運輸。" />
              <Timeline year="1976" title="貨櫃化轉折" text="購入首艘全貨櫃輪「明春輪」，開啟台灣—日本貨櫃運輸。" />
              <Timeline year="1987" title="碼頭能力" text="承租高雄港第一座專用碼頭，後續延伸至台中、台北及海外節點。" />
              <Timeline year="1996" title="股票上市" text="於臺灣證券交易所第一類股掛牌，進入規模化與資本市場階段。" />
              <Timeline year="NOW" title="亞洲根基，遠洋延伸" text="核心仍是密集亞洲近洋網路，同時布局印度、中東、地中海、北美與南美。" />
            </div>
            <div className="source-row">
              {source("https://esg.wanhai.com/wanhai/public/uploads/files/d7794c290ddd70acd0ab41fc0f0e578f.pdf", "萬海永續報告")}
              {source("https://esg.wanhai.com/wanhai/news/1631136175649a71ffec4fe/list", "萬海官方公司影片")}
            </div>
          </section>

          <section className="chapter dark-chapter" id="network">
            <div className="chapter-title"><div><p className="eyebrow">02 — BUSINESS MAP</p><h2>萬海賣的是「可靠的連結」</h2></div>{completeButton("network")}</div>
            <div className="route-visual">
              <div className="route-copy"><strong>核心飛輪</strong><h3>亞洲密度<br />支撐遠洋深度</h3><p>密集班次與區域港口覆蓋，能將各地貨源集結到轉運樞紐，再接上中東、歐美等長程航線。</p></div>
              <div className="orbit">
                <span className="hub">ASIA<br /><small>CORE</small></span>
                <i className="dot d1">日本・韓國</i><i className="dot d2">中國・港台</i><i className="dot d3">東南亞</i><i className="dot d4">印度・中東</i><i className="dot d5">美洲</i><i className="dot d6">歐洲・地中海</i>
              </div>
            </div>
            <div className="three-cols">
              <InfoCard n="A" title="核心服務" text="定期貨櫃航運、船期與訂艙、提單文件、貨況追蹤、碼頭與貨櫃場服務。" />
              <InfoCard n="B" title="主要客戶" text="出口商、進口商、製造業、品牌商、貨運承攬業者，以及冷鏈與特殊櫃需求客戶。" />
              <InfoCard n="C" title="GAM 的任務" text="開發與維護貨量、報價、預測需求、協調艙位，並串接客服、文件、運務與財務處理異常。" />
            </div>
            <div className="fact-strip"><div><b>4.77M</b><span>2024 年營運量 / TEU</span></div><div><b>6</b><span>2024 新增航線</span></div><div><b>7</b><span>2024 優化航線</span></div><div><b>80%+</b><span>全球商品貿易量由海運承載</span></div></div>
            <p className="fineprint">前 3 項為萬海 2024 永續資訊；全球占比為 UNCTAD 統計。{source("https://esg.wanhai.com/wanhai/SustainabilityRoadmap/188256290764910bc7da960", "數據來源")}</p>
          </section>
          <InterviewBox question="為什麼選萬海，而不是其他航商？" answer="我認為萬海最吸引我的，是它以亞洲密集航線為基礎，同時持續延伸印度、中東、地中海與北美市場。這代表 GAM 既要理解區域客戶的細緻需求，也要具備跨國協調的視野。我的跨文化團隊、需求分析與顧客經營經驗，正好能在這種高互動、重視長期關係的環境發揮。" />
        </div>
      )}

      {active === "course" && (
        <div className="page content-page">
          <PageIntro no="02" kicker="ZERO-TO-SHIPPING CRASH COURSE" title="90 分鐘，建立海運商業骨架" desc="內容依貨物流向編排：角色、流程、責任與文件逐層展開，術語自然落在實際情境裡。" />
          <section className="chapter">
            <div className="chapter-title"><div><p className="eyebrow">MODULE 01 · 20 MIN</p><h2>一票出口貨，怎麼走到目的地？</h2></div>{completeButton("tradeflow")}</div>
            <div className="flow">
              {[['01','成交','買賣雙方確認品項、價格、Incoterm 與付款條件'],['02','訂艙','貨主或貨代向船公司確認航線、運價與艙位'],['03','備貨進櫃','提空櫃、裝貨、報關，並在 CY cut-off 前進場'],['04','文件與裝船','提交 SI、製作 B/L，貨櫃依計畫裝上船'],['05','海上運送','直航或轉船；持續追蹤 ETA、延誤與異常'],['06','到港交付','到貨通知、清關、提櫃，最後還空櫃']].map(([n,t,x]) => <div key={n}><span>{n}</span><strong>{t}</strong><p>{x}</p></div>)}
            </div>
            <div className="role-grid">
              <InfoCard n="S" title="Shipper / 出口商" text="提供貨物與正確文件，依條件安排出口端作業。" />
              <InfoCard n="F" title="Forwarder / 貨代" text="整合訂艙、文件、報關與陸運，也可能以 NVOCC 身分承運。" />
              <InfoCard n="C" title="Carrier / 船公司" text="提供船舶艙位、航線與運送服務；萬海就是 Carrier。" />
              <InfoCard n="R" title="Consignee / 進口商" text="接收貨物、辦理進口清關與目的地端提領。" />
            </div>
            <div className="video-card"><div><span>WATCH · 05:07</span><h3>B/L 的角色與貨物交付流程</h3><p>閱讀焦點：提單如何連結收貨證明、運送關係與貨物交付。</p></div>{source("https://forwarder-university.com/role-bl-revised-ver/", "觀看影片＋文章")}</div>
          </section>

          <section className="chapter split-chapter">
            <div>
              <div className="chapter-title"><div><p className="eyebrow">MODULE 02 · 18 MIN</p><h2>Incoterms 核心五式</h2></div>{completeButton("incoterms")}</div>
              <p className="note">先記一件事：Incoterms 分配的是買賣雙方的任務、成本與風險；它不決定貨物所有權，也不自動決定付款方式。</p>
              <div className="inco-list">
                <Inco code="EXW" seller="最低" risk="工廠交貨" text="賣方在自家場所備妥貨物；買方承擔大部分運輸與出口安排。" />
                <Inco code="FOB" seller="中" risk="裝船完成" text="賣方負責貨物裝上指定船舶；主海運通常由買方安排。僅適用海運。" />
                <Inco code="CFR" seller="中高" risk="裝船完成" text="賣方付海運費到目的港，但風險在裝船時就移轉。費用點 ≠ 風險點。" />
                <Inco code="CIF" seller="中高＋保險" risk="裝船完成" text="與 CFR 相似，但賣方還須安排最低限度海運保險。僅適用海運。" />
                <Inco code="DDP" seller="最高" risk="目的地交付" text="賣方負擔多數運輸與進口責任，直到指定目的地交貨。" />
              </div>
              <div className="source-row">{source("https://www.tradefinanceglobal.com/posts/video-incoterms-2020-letters-of-credit/", "Incoterms 影片")}{source("https://www.youtube.com/watch?v=7g7IC4IzjDM", "11 種條件動畫總覽")}</div>
            </div>
            <aside className="memory-aid"><p className="eyebrow">MEMORY AID</p><h3>用「誰訂主海運？」先切</h3><div><b>買方主導</b><span>EXW → FOB</span></div><div><b>賣方付主運費</b><span>CFR / CIF → DDP</span></div><p>最常見陷阱：CFR / CIF 雖由賣方支付海運費，但風險通常在貨物裝船時就移轉。</p></aside>
          </section>

          <section className="chapter">
            <div className="chapter-title"><div><p className="eyebrow">MODULE 03 · 22 MIN</p><h2>航運術語：點一下，先猜再看</h2></div>{completeButton("shipping")}</div>
            <div className="term-grid">
              {terms.map(([term, desc], i) => <button key={term} onClick={() => setOpenTerm(openTerm === i ? null : i)} className={openTerm === i ? "open" : ""}><strong>{term}</strong><span>{openTerm === i ? desc : "點擊顯示定義"}</span><b>{openTerm === i ? "−" : "+"}</b></button>)}
            </div>
            <div className="video-row"><a href="https://www.youtube.com/watch?v=2JcHMhtH6_s" target="_blank" rel="noreferrer"><span>VIDEO 01</span><strong>How Container Ports Work</strong><small>理解碼頭、橋式起重機與貨櫃場</small></a><a href="https://www.youtube.com/watch?v=JqQSfEzUqxo" target="_blank" rel="noreferrer"><span>VIDEO 02</span><strong>International Trade Vocabulary</strong><small>用英文快速複習貿易文件與流程</small></a></div>
          </section>
        </div>
      )}

      {active === "scenarios" && (
        <div className="page content-page">
          <PageIntro no="03" kicker="ACCOUNT MANAGER SIMULATOR" title="先定義問題，再選擇回應" desc="每個案例拆成資訊、影響、選項與回覆節點，讓判斷順序一眼可讀。" />
          <section className="chapter scenario-section">
            <div className="chapter-title"><div><p className="eyebrow">CASE 01 · SERVICE RECOVERY</p><h2>船期延誤，客戶在電話裡非常生氣</h2></div>{completeButton("cases")}</div>
            <div className="case-layout">
              <div className="case-brief"><span>INCOMING CALL</span><blockquote>「這批零件晚到，我們客戶的產線可能停擺。你現在就告訴我，萬海要怎麼賠？」</blockquote><p>目前你只知道原船 ETA 延後 4 天，尚未確認延誤原因與可行替代方案。</p></div>
              <div className="choices">
                {[['a','先道歉並承諾全額賠償，讓客戶冷靜。'],['b','先確認提單、貨況與實際衝擊，承諾一個明確回覆時間，同步查替代方案。'],['c','說明延誤是運務問題，請客戶直接找客服。']].map(([id,text]) => <button key={id} onClick={() => setScenarioAnswer(id)} className={scenarioAnswer === id ? (id === 'b' ? 'correct' : 'wrong') : ''}><span>{id.toUpperCase()}</span>{text}</button>)}
                {scenarioAnswer && <div className={`feedback ${scenarioAnswer === 'b' ? 'good' : ''}`}><strong>{scenarioAnswer === 'b' ? '建議路徑：先掌握事實與影響' : '此路徑風險較高'}</strong><p>{scenarioAnswer === 'b' ? '建立單一窗口，確認可行方案，再用明確時間點管理下一次更新。' : '過早承諾可能超出權限；直接轉介則會讓資訊與責任斷線。'}</p></div>}
              </div>
            </div>
            <div className="answer-framework"><div><b>1</b><strong>Listen</strong><span>承接情緒，確認真正損失</span></div><div><b>2</b><strong>Verify</strong><span>貨況、船期、原因與責任</span></div><div><b>3</b><strong>Coordinate</strong><span>找替代船期、轉運或其他選項</span></div><div><b>4</b><strong>Commit</strong><span>只承諾可做到的更新時間</span></div><div><b>5</b><strong>Close</strong><span>持續追蹤到案件結束</span></div></div>
          </section>

          <section className="chapter">
            <div className="chapter-title"><div><p className="eyebrow">CASE BANK</p><h2>四種高機率追問</h2></div></div>
            <div className="case-bank">
              <details><summary>客戶要求低於公司底價，否則轉單<span>＋</span></summary><p>先問貨量、航線、頻率、付款與長期潛力，釐清客戶是否只在意價格。評估總體價值後，再與內部爭取可行方案；可用艙位穩定、直航、free time 或服務回應速度創造非價格價值。</p></details>
              <details><summary>旺季艙位不足，兩位大客戶同時要櫃<span>＋</span></summary><p>依合約、既有承諾、貨物急迫性與客戶長期價值透明評估；不要私下超賣。同步尋找後續航次、替代港或拆批方案，並提早溝通。</p></details>
              <details><summary>客戶提供的 SI 資訊與 booking 不一致<span>＋</span></summary><p>先暫停錯誤文件流轉，逐欄核對 shipper、consignee、貨名、件數與港口；請客戶以可追溯方式確認修正，並留意文件 cut-off。</p></details>
              <details><summary>你接手一個長期沒有成長的 account<span>＋</span></summary><p>先做 account review：貨量走勢、航線結構、流失原因、服務痛點與決策關係人。設定 30/60/90 天接觸與提案節奏，而不是一開始就只問「要不要加量」。</p></details>
            </div>
          </section>

          <section className="chapter calc-section">
            <div className="chapter-title"><div><p className="eyebrow">MODULE · BASIC MATH</p><h2>30 秒基本計算</h2></div>{completeButton("math")}</div>
            <div className="calculators">
              <div><label>40 呎櫃數量<input type="number" min="0" value={containers} onChange={(e) => setContainers(Number(e.target.value))} /></label><p>換算運量</p><strong>{containers * 2} <small>TEU</small></strong><span>公式：40&apos; 櫃 × 2</span></div>
              <div><label>目標 TEU<input type="number" min="1" value={target} onChange={(e) => setTarget(Number(e.target.value))} /></label><label>實際 TEU<input type="number" min="0" value={actual} onChange={(e) => setActual(Number(e.target.value))} /></label><p>業績達成率</p><strong>{target ? ((actual / target) * 100).toFixed(1) : 0}<small>%</small></strong><span>公式：實際 ÷ 目標 × 100%</span></div>
            </div>
          </section>
        </div>
      )}

      {active === "news" && (
        <div className="page content-page news-page">
          <PageIntro no="04" kicker="DAILY TRANSPORT NEWSROOM" title="每天五則，掌握航運變化" desc="每天 08:00 更新。編輯範圍涵蓋海運、港口、跨境物流與國際交通，並把事件整理成可掃讀的影響鏈。" />
          <div className="news-tabs update-bar"><span><i /> AUTO UPDATE</span><strong>2026.07.14 · 08:00 TPE</strong><small>5 STORIES</small></div>
          <section className="newsroom">
            <div className="news-lead">
              <p className="eyebrow">EDITOR&apos;S OVERVIEW</p>
              <h2>今日焦點：航道安全重新主導成本預期</h2>
              <p>黑海與荷姆茲海峽的安全訊號同步升高；另一端，亞洲出口旺季與自主船舶規範持續推進。短期看風險成本，長期看網路與技術。</p>
              <div className="causal"><span>事件</span><b>→</b><span>運能 / 成本</span><b>→</b><span>運價 / 船期</span><b>→</b><span>客戶決策</span></div>
            </div>
            <div className="article-list">
              {dailyNews.map((item, i) => <article key={item.title} className={i === 0 ? 'featured' : ''}><div className="article-meta"><time>{item.date}</time><span>{item.tag}</span><em>{item.sourceName}</em></div><h3>{item.title}</h3><p>{item.body}</p><div className="impact"><b>IMPACT CHAIN</b>{item.impact}</div>{source(item.href, "閱讀原文")}</article>)}
            </div>
          </section>
          <section className="chapter briefing">
            <div className="chapter-title"><div><p className="eyebrow">60-SECOND BRIEF</p><h2>今天值得帶進面試的觀點</h2></div>{completeButton("radar")}</div>
            <div className="brief-copy"><span>01</span><p>航道安全不是單一新聞，而是一條成本鏈：通行限制先推高油價與保險，再影響航線配置、附加費與交期。GAM 的角色，是把這條鏈轉成客戶可採取的訂艙與庫存決策。</p></div>
          </section>
          <p className="editor-note">編輯準則：優先採用官方機構、航商公告與具編採制度的國際媒體；相同事件只保留資訊最完整的一則。預測值會明確標示，不與已發生事實混用。</p>
        </div>
      )}

      <footer><div><span className="brand-mark">WH</span><strong>顏文龍 · WAN HAI GAM PREP</strong></div><p>Built for the interview, designed for the career.</p><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>BACK TO TOP ↑</button></footer>
    </main>
  );
}

function PageIntro({ no, kicker, title, desc }: { no: string; kicker: string; title: string; desc: string }) {
  return <section className="page-intro"><span>{no}</span><div><p className="eyebrow">{kicker}</p><h1>{title}</h1><p>{desc}</p></div></section>;
}
function Timeline({ year, title, text }: { year: string; title: string; text: string }) { return <div><span>{year}</span><i /><section><strong>{title}</strong><p>{text}</p></section></div>; }
function InfoCard({ n, title, text }: { n: string; title: string; text: string }) { return <article className="info-card"><span>{n}</span><h3>{title}</h3><p>{text}</p></article>; }
function Inco({ code, seller, risk, text }: { code: string; seller: string; risk: string; text: string }) { return <div><strong>{code}</strong><p>{text}</p><span>賣方負擔：{seller}</span><span>風險移轉：{risk}</span></div>; }
function InterviewBox({ question, answer }: { question: string; answer: string }) { return <section className="interview-box"><p className="eyebrow">ANSWER DRAFT</p><h2>{question}</h2><div><span>回答稿</span><p>{answer}</p></div></section>; }
