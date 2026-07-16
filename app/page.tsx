"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { aptitudeQuestions, englishQuestions, professionalQuestions, shippingVocabulary, type QuizQuestion } from "./quiz-data";
import { extraVocabulary, fiveYearEvents, incoterms, scenarios, shippingKnowledge, shippingStakeholders, taiwanCarrierComparison, topCarriers, tradeFlow, tradeTerms, wanhaiRoutes } from "./content-data";

type Section = "dashboard" | "wanhai" | "trade" | "shipping" | "scenarios" | "news" | "aptitude" | "professional" | "english" | "rapid";
type QuizSummary = { score: number; total: number; percent: number; seconds: number; categories: Record<string, { correct: number; total: number }>; reasons: Record<string, number>; completedAt: string };

const sections: { id: Section; label: string; index: string }[] = [
  { id: "dashboard", label: "準備艙橋", index: "00" }, { id: "wanhai", label: "認識萬海", index: "01" },
  { id: "trade", label: "國貿基礎", index: "02" }, { id: "shipping", label: "航運基礎", index: "03" },
  { id: "scenarios", label: "情境演練", index: "04" }, { id: "news", label: "時事雷達", index: "05" },
  { id: "aptitude", label: "適職衝刺", index: "06" }, { id: "professional", label: "專業題庫", index: "07" },
  { id: "english", label: "English Check", index: "08" },
];

const modules = [
  ["wanhai-profile","萬海定位與比較","wanhai"],["wanhai-routes","萬海航線與服務","wanhai"],
  ["trade-basics","交易結構與術語","trade"],["trade-flow","一票貨完整流程","trade"],["trade-incoterms","Incoterms","trade"],["trade-payment","付款、文件與通關","trade"],
  ["shipping-stakeholders","航運利害關係人","shipping"],["shipping-network","航運專業知識","shipping"],["shipping-carriers","全球十大航商","shipping"],
  ["cases","三題GAM情境","scenarios"],["radar","時事雷達","news"],["news-five-year","近五年航運大事","news"],
  ["aptitude","適職50題","aptitude"],["professional","專業50題","professional"],["english","English Check","english"],
] as const;

const chapterRoutes: Record<string, Section> = {
  "wanhai-profile":"wanhai","wanhai-routes":"wanhai","wanhai-compare":"wanhai",
  "trade-basics":"trade","trade-flow":"trade","trade-incoterms":"trade","trade-payment":"trade","trade-docs":"trade","trade-customs":"trade",
  "shipping-stakeholders":"shipping","shipping-network":"shipping","shipping-equipment":"shipping","shipping-pricing":"shipping","shipping-operations":"shipping","shipping-freetime":"shipping","shipping-docs":"shipping","shipping-compliance":"shipping","shipping-carriers":"shipping",
  "case-peak":"scenarios","case-docs":"scenarios","case-tender":"scenarios","news-five-year":"news",
};

const source = (href: string, label = "查看來源") => <a className="source-link" href={href} target="_blank" rel="noreferrer">{label} ↗</a>;
const formatTime = (seconds: number) => `${Math.floor(seconds / 60).toString().padStart(2,"0")}:${(seconds % 60).toString().padStart(2,"0")}`;

// DAILY_NEWS_START — 每日 08:00 自動化只更新此區塊。
const dailyNews = [
  { date:"2026.07.15", sourceName:"Reuters", tag:"美國內航", title:"美國研議延長 Jones Act 豁免，緩解能源運輸壓力", body:"路透引述知情人士指出，美國政府正評估延長《Jones Act》豁免，允許外籍船舶承運美國港口間貨物，以因應伊朗衝突推升的能源價格與供應風險。", impact:"能源供應受壓 → 內航運能規則暫時放寬 → 美國港間運輸選項增加 → 客戶需重估成本、資格與合規期限。", quiz:"延長 Jones Act 豁免最直接改變哪項條件？", quizAnswer:"外籍船舶承運美國港口間貨物的可行性。", href:"https://www.investing.com/news/economy-news/white-house-weighs-extending-jones-act-waivers-as-iran-conflict-raises-price-concerns-4793881" },
  { date:"2026.07.15", sourceName:"Reuters", tag:"荷姆茲海峽", title:"封鎖生效前荷姆茲通行回升，船流仍偏向伊朗貿易", body:"路透依航運數據報導，荷姆茲海峽週二通行量短暫回升，但多數船舶與伊朗貿易相關；美國海上封鎖週三生效後，能源與貨運路徑仍高度不確定。", impact:"封鎖生效 → 可通行船舶與保險條件收緊 → 油價、燃油與繞航成本升高 → 報價與 ETA 需擴大風險緩衝。", quiz:"海峽封鎖對貨櫃客戶最先傳導到哪兩項？", quizAnswer:"燃油／保險成本與船期可靠度。", href:"https://www.investing.com/news/commodities-news/iranlinked-vessels-pass-through-hormuz-ahead-of-us-blockade-4792133" },
  { date:"2026.07.14", sourceName:"Maersk", tag:"市場動態", title:"拉丁美洲港口維持穩定，亞洲出口旺季延續", body:"Maersk 7月市場更新指出，中美洲與加勒比海主要港口整體運作穩定；亞洲至南美東岸旺季需求延續，艙位與轉運安排仍須保留提早量。", impact:"亞洲旺季貨流維持 → 班次需求穩定 → 訂艙時仍需預留旺季艙位與轉運緩衝。", quiz:"亞洲出口旺季延續時，客戶最適合採取哪個行動？", quizAnswer:"提早訂艙並預留轉運緩衝。", href:"https://www.maersk.com/news/articles/2026/07/14/latin-america-market-update-july" },
  { date:"2026.07.13", sourceName:"IMO", tag:"關鍵水道", title:"IMO 重申國際航道的通行權與安全標準", body:"IMO理事會重申，國際航道的通行權不應受威脅或阻礙；沿岸國採取交通管理措施時，仍須符合SOLAS等國際規範並維持商船安全。", impact:"航道管制變動 → 船期與保險不確定性上升 → 航商需要更快調整路線與客戶通知。", quiz:"重要航道管制首先會提高哪類不確定性？", quizAnswer:"船期、路線與保險成本。", href:"https://www.imo.org/en/mediacentre/pressbriefings/pages/imo-council-reaffirms-commitment-to-protecting-vital-shipping-lanes.aspx" },
  { date:"2026.07.13", sourceName:"IMO", tag:"黑海安全", title:"黑海與亞速海商船攻擊事件再起", body:"IMO譴責黑海與亞速海近期針對民用商船的攻擊，要求各方保障船員、船舶與航行安全；區域風險將持續反映在戰爭險費率與替代航路配置。", impact:"區域安全惡化 → 繞航、戰爭險與港口風險增加 → 交期與報價需加入更大安全係數。", quiz:"商船遇襲風險升高，報價最可能加入什麼？", quizAnswer:"戰爭險、繞航與交期安全係數。", href:"https://www.imo.org/en/mediacentre/pressbriefings/pages/statement-on-attacks-in-black-sea-and-sea-of-azov.aspx" },
];
// DAILY_NEWS_END

export default function Home() {
  const [active, setActive] = useState<Section>("dashboard");
  const [done, setDone] = useState<string[]>([]);
  const [openTerm, setOpenTerm] = useState<number | null>(null);
  const [officialDone, setOfficialDone] = useState<Record<string, boolean>>({});
  const [lastChapter, setLastChapter] = useState<string | null>(null);
  const [summaries, setSummaries] = useState<Record<string, QuizSummary>>({});

  const readSummaries = () => {
    const next: Record<string, QuizSummary> = {};
    [["aptitude","wanhai-aptitude-v2"],["professional","wanhai-professional-v2"],["english","wanhai-english-v2"]].forEach(([name,key]) => {
      const raw = localStorage.getItem(key); if (raw) { const value = JSON.parse(raw); if (value.summary) next[name] = value.summary; }
    });
    setSummaries(next);
  };
  useEffect(() => {
    setDone(JSON.parse(localStorage.getItem("wanhai-progress-v2") || "[]"));
    setOfficialDone(JSON.parse(localStorage.getItem("wanhai-official-checklist") || "{}"));
    setLastChapter(localStorage.getItem("wanhai-last-chapter")); readSummaries();
  }, []);
  useEffect(() => { if (active === "dashboard") readSummaries(); }, [active]);

  const go = (id: Section) => { setActive(id); window.scrollTo({ top:0, behavior:"smooth" }); };
  const goChapter = (id: string) => {
    const section = chapterRoutes[id]; if (!section) return;
    setActive(section); setLastChapter(id); localStorage.setItem("wanhai-last-chapter", id);
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" }), 80);
  };
  const toggleDone = (id: string) => {
    const next = done.includes(id) ? done.filter(x => x !== id) : [...done,id]; setDone(next); localStorage.setItem("wanhai-progress-v2", JSON.stringify(next));
  };
  const complete = (id: string) => <button className={`complete ${done.includes(id)?"is-done":""}`} onClick={() => toggleDone(id)}><span>{done.includes(id)?"✓":""}</span>{done.includes(id)?"已完成":"標記完成"}</button>;
  const progress = Math.round(done.length / modules.length * 100);
  const countdown = useMemo(() => { const h = Math.max(0,Math.ceil((new Date("2026-07-17T09:00:00+08:00").getTime()-Date.now())/3600000)); return { days:Math.floor(h/24), hours:h%24 }; },[]);
  const officialItems = ["確認報到時間","確認考試地點","備妥身分證件","準備文具","確認計算機規定","確認英文是否有聽力","確認正式測驗範圍","安排交通與緩衝"];
  const weak = Object.values(summaries).flatMap(s => Object.entries(s.categories).map(([name,v]) => ({ name, rate:v.correct/v.total }))).sort((a,b)=>a.rate-b.rate).slice(0,3);

  return <main>
    <header className="topbar"><button className="brand" onClick={()=>go("dashboard")}><span className="brand-mark">WH</span><span>DECK <i>/ GAM PREP</i></span></button><nav>{sections.map(s=><button key={s.id} className={active===s.id?"active":""} onClick={()=>go(s.id)}><small>{s.index}</small>{s.label}</button>)}</nav><div className="progress-pill"><span style={{width:`${progress}%`}}/>{progress}%</div></header>

    {active === "dashboard" && <div className="page dashboard-page">
      <section className="hero"><div className="hero-copy"><p className="eyebrow">顏文龍的筆試準備艙橋 · UPDATED 2026.07.16</p><h1>先通過筆試，<br/><em>再把知識變成判斷。</em></h1><p className="lead">用基礎章節建立航運語言，再用計時題庫驗證速度。眼前優先順序：適職、專業、英文。</p><div className="hero-actions"><button className="primary" onClick={()=>go("aptitude")}>開始50題適職測驗 <b>→</b></button><button className="text-button" onClick={()=>go("rapid")}>考前30分鐘模式</button>{lastChapter && <button className="text-button" onClick={()=>goChapter(lastChapter)}>繼續上次章節</button>}</div></div><div className="countdown-card"><span>距離 7 / 17 實體筆試</span><strong>{countdown.days}<small>天</small> {countdown.hours}<small>小時</small></strong><p>先完成一回計時測驗，再回教材補弱點。</p></div></section>
      <section className="dashboard-grid"><article className="route-card"><p className="eyebrow">TODAY'S ROUTE</p><h2>今天只做三件事</h2><ol><li><b>01</b>完成一回適職計時測驗</li><li><b>02</b>複習專業科目核心章節</li><li><b>03</b>讀3–5則航運時事</li></ol></article><article className="weak-card"><p className="eyebrow">WEAKNESS DASHBOARD</p><h2>最近測驗</h2><div className="score-strip">{[["aptitude","適職"],["professional","專業"],["english","英文"]].map(([key,label])=><div key={key}><span>{label}</span><strong>{summaries[key]?.percent ?? "—"}{summaries[key]?"%":""}</strong><small>{summaries[key]?`${summaries[key].score}/${summaries[key].total}`:"尚未完成"}</small></div>)}</div><h3>優先補強</h3>{weak.length?<ul>{weak.map(x=><li key={x.name}>{x.name}<b>{Math.round(x.rate*100)}%</b></li>)}</ul>:<p>完成測驗後，這裡會自動列出最弱三個主題。</p>}</article></section>
      <section className="official-card"><div><p className="eyebrow">OFFICIAL BRIEF</p><h2>官方通知確認</h2></div><div className="check-grid">{officialItems.map(item=><label key={item}><input type="checkbox" checked={!!officialDone[item]} onChange={()=>{const n={...officialDone,[item]:!officialDone[item]};setOfficialDone(n);localStorage.setItem("wanhai-official-checklist",JSON.stringify(n));}}/><span>{item}</span></label>)}</div></section>
      <section className="module-list"><div className="section-heading"><p className="eyebrow">LEARNING MAP</p><h2>教材與題庫</h2></div>{modules.map(([id,title,section],i)=><button key={id} onClick={()=>chapterRoutes[id]?goChapter(id):go(section)}><span>{String(i+1).padStart(2,"0")}</span><strong>{title}</strong><small>{section.toUpperCase()}</small><b>{done.includes(id)?"✓":"→"}</b></button>)}</section>
    </div>}

    {active === "wanhai" && <ContentPage no="01" kicker="KNOW WAN HAI" title="理解萬海，不只背成立年份" desc="把公司歷史、亞洲網路、現行航線與台灣同業差異整理成可用於筆試與面試的判斷。">
      <ChapterNav items={[["wanhai-profile","定位與歷史"],["wanhai-routes","現行航線"],["wanhai-compare","同業比較"]]} go={goChapter}/>
      <VersionBar text="公司與航線資料查核：2026.07.15" href="https://tw.wanhai.com/views/Main.xhtml"/>
      <section id="wanhai-profile" className="chapter"><ChapterTitle eyebrow="CHAPTER 01" title="從亞洲近洋，延伸全球服務" action={complete("wanhai-profile")}/><div className="history-timeline"><Timeline year="1965" title="公司成立" text="早期從原木運輸起步，逐步轉向定期貨櫃航運。"/><Timeline year="1976" title="投入貨櫃運輸" text="建立台灣、日本與東南亞航線，形成亞洲區域網路。"/><Timeline year="1987+" title="碼頭與場站能力" text="高雄、台中等碼頭與相關物流資產支撐裝卸、櫃場與服務效率。"/><Timeline year="2020s" title="遠洋與永續延伸" text="以亞洲網路為底盤，拓展印度、中東與美洲，同時投入新船、能效與數位服務。"/></div><div className="info-grid"><InfoCard n="01" title="核心產品" text="定期貨櫃航運、艙位、船期與跨港口網路。"/><InfoCard n="02" title="核心客群" text="製造商、貿易商、零售商、Forwarder與NVOCC。"/><InfoCard n="03" title="GAM價值" text="整合報價、allocation、KPI、文件與異常處理。"/></div></section>
      <section id="wanhai-routes" className="chapter"><ChapterTitle eyebrow="CHAPTER 02" title="現行服務版圖與代表航線" action={complete("wanhai-routes")}/><p className="note">航線會隨聯營與營運調整；下表以萬海官方2026船期與服務查詢為準。「NEW」表示近12個月可確認的新服務。</p><div className="route-table"><div className="table-head"><span>市場</span><span>代表服務</span><span>港口／範圍</span><span>定位</span></div>{wanhaiRoutes.map(r=><div key={r.region}><strong>{r.region}</strong><span>{r.services}</span><span>{r.ports}</span><em className={r.status.startsWith("NEW")?"new-badge":""}>{r.status}</em></div>)}</div><div className="source-row">{source("https://tw.wanhai.com/views/skd/SkdBySvc.xhtml?file_num=64836&parent_id=64834&top_file_num=64735","官方依航線查船期")}{source("https://tw.wanhai.com/views/skd/ServiceRoute.xhtml?file_num=69536&parent_id=64834&top_file_num=64735","官方航線資料查詢")}</div></section>
      <section id="wanhai-compare" className="chapter"><ChapterTitle eyebrow="CHAPTER 03" title="為什麼選萬海：長榮、陽明比較"/><div className="compare-table"><div><b>面向</b><b>萬海</b><b>長榮</b><b>陽明</b></div>{taiwanCarrierComparison.map(row=><div key={row[0]}>{row.map((x,i)=>i===0?<strong key={x}>{x}</strong>:<span key={x}>{x}</span>)}</div>)}</div><div className="answer-box"><strong>面試回答原則</strong><p>不把比較說成誰絕對較好。萬海的差異化是「亞洲密集網路＋區域反應速度＋選擇性遠洋延伸」，對跨亞洲供應鏈客戶尤其有價值。</p></div>{source("https://tw.wanhai.com/views/SiteMap.xhtml?file_num=67237&parent_id=67334&top_file_num=64735","萬海官網完整服務地圖")}</section>
    </ContentPage>}

    {active === "trade" && <ContentPage no="02" kicker="TRADE FOUNDATION" title="國貿基礎：從成交到收款與交付" desc="定義、例子、情境與流程放在同一頁。先看懂交易，再理解船公司位於哪個環節。">
      <ChapterNav items={[["trade-basics","交易術語"],["trade-flow","流程Timeline"],["trade-incoterms","Incoterms"],["trade-payment","付款與通關"]]} go={goChapter}/>
      <section id="trade-basics" className="chapter"><ChapterTitle eyebrow="CHAPTER 01" title="16個交易核心概念" action={complete("trade-basics")}/><div className="definition-grid">{tradeTerms.map((t,i)=><article key={t.term} className={openTerm===i?"open":""}><button onClick={()=>setOpenTerm(openTerm===i?null:i)}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{t.term}</strong><small>{t.zh}</small></div><b>{openTerm===i?"−":"+"}</b></button>{openTerm===i&&<div><p><em>定義</em>{t.definition}</p><p><em>例子</em>{t.example}</p><p><em>情境</em>{t.scenario}</p><p className="trap"><em>易錯點</em>{t.trap}</p></div>}</article>)}</div></section>
      <section id="trade-flow" className="chapter"><ChapterTitle eyebrow="CHAPTER 02" title="一票貨的完整Timeline" action={complete("trade-flow")}/><div className="process-timeline">{tradeFlow.map(([n,title,desc,output])=><article key={n}><span>{n}</span><div><h3>{title}</h3><p>{desc}</p><small>{output}</small></div></article>)}</div></section>
      <section id="trade-incoterms" className="chapter"><ChapterTitle eyebrow="CHAPTER 03" title="Incoterms：成本點不等於風險點" action={complete("trade-incoterms")}/><p className="note">Incoterms分配交貨任務、成本與風險；不決定所有權、付款時間與違約救濟。</p><div className="inco-grid">{incoterms.map(x=><article key={x.code}><strong>{x.code}</strong><p>{x.scope}</p><span>風險：{x.risk}</span><span>例：{x.example}</span><small>{x.note}</small></article>)}</div></section>
      <section id="trade-payment" className="chapter"><ChapterTitle eyebrow="CHAPTER 04" title="付款、文件、海關與風險" action={complete("trade-payment")}/><div className="knowledge-grid"><InfoCard n="01" title="T/T" text="流程快但信用風險取決於付款時點；新客戶常要求訂金或裝船前付款。"/><InfoCard n="02" title="L/C" text="銀行依相符單據付款；單據不符可能拒付，重點是版本與一致性。"/><InfoCard n="03" title="Document Set" text="Invoice、Packing List、B/L、C/O等文件應在品名、數量、重量與當事人資料上互相一致。"/><InfoCard n="04" title="Customs" text="HS Code、原產地、價格與管制決定稅費及能否通關；錯誤會形成延誤與罰則。"/><InfoCard n="05" title="Compliance" text="危險品、制裁、禁運與最終用途需要在訂艙與文件階段前置確認。"/><InfoCard n="06" title="Landed Cost" text="用貨價、運輸、保險、關稅與內陸費用比較方案，不只看海運基本價。"/></div></section>
    </ContentPage>}

    {active === "shipping" && <ContentPage no="03" kicker="SHIPPING FOUNDATION" title="航運基礎：看懂誰在做什麼" desc="從角色、網路、設備、運價、異常到全球航商，建立海運業務需要的共同語言。">
      <ChapterNav items={[["shipping-stakeholders","利害關係人"],["shipping-network","專業知識"],["shipping-carriers","全球十大"]]} go={goChapter}/><VersionBar text="全球航商排名查核：2026.07.14 · 依營運TEU" href="https://alphaliner.axsmarine.com/PublicTop100/"/>
      <section id="shipping-stakeholders" className="chapter"><ChapterTitle eyebrow="CHAPTER 01" title="10個利害關係人" action={complete("shipping-stakeholders")}/><div className="stakeholder-grid">{shippingStakeholders.map(([name,role,desc],i)=><article key={name}><span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><strong>{role}</strong><p>{desc}</p></article>)}</div></section>
      <section id="shipping-network" className="chapter"><ChapterTitle eyebrow="CHAPTER 02" title="航運專業知識地圖" action={complete("shipping-network")}/><div className="knowledge-stack">{shippingKnowledge.map((k,i)=><article id={k.id} key={k.id}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{k.title}</h3><ul>{k.points.map(p=><li key={p}>{p}</li>)}</ul></div></article>)}</div></section>
      <section id="shipping-carriers" className="chapter"><ChapterTitle eyebrow="CHAPTER 03" title="全球前十大貨櫃航商特色" action={complete("shipping-carriers")}/><p className="note">排名依營運船隊TEU，會隨交船、租船與整併變動；特色是面試用辨識點，不代表單一航線的絕對服務高低。</p><div className="carrier-list">{topCarriers.map(([rank,name,trait])=><article key={name}><span>{rank}</span><strong>{name}</strong><p>{trait}</p></article>)}</div>{source("https://alphaliner.axsmarine.com/PublicTop100/","Alphaliner即時Top 100")}</section>
    </ContentPage>}

    {active === "scenarios" && <ContentPage no="04" kicker="GAM CASE LAB" title="三個複雜情境，練商業判斷" desc="先拆客戶風險與可控承諾，再組成方案。兩題中文、一題英文。">
      <section className="case-stack">{scenarios.map((c,i)=><article id={c.id} key={c.id} className="case-study"><div className="case-head"><span>CASE {String(i+1).padStart(2,"0")}</span><em>{c.lang} · {c.level}</em></div><h2>{c.title}</h2><p className="case-brief">{c.brief}</p><div className="case-columns"><div><h3>客戶考量</h3><ul>{c.customer.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>專業線索</h3><div className="chips">{c.knowledge.map(x=><span key={x}>{x}</span>)}</div></div></div><div className="case-task"><strong>你的任務</strong><p>{c.task}</p><textarea aria-label={`${c.title}作答區`} placeholder="先寫：客戶目標 → 資訊缺口 → A/B方案 → 承諾邊界 → 下一次更新時間"/></div><details><summary>查看拆解與示範答案</summary><p>{c.model}</p></details></article>)}</section>{complete("cases")}
    </ContentPage>}

    {active === "news" && <ContentPage no="05" kicker="NEWSROOM" title="時事雷達：現在發生什麼，五年來改變了什麼" desc="上半部追蹤近期決策訊號；下半部建立近五年航運事件的因果脈絡。">
      <ChapterNav items={[["radar","今日五則"],["news-five-year","近五年大事"]]} go={goChapter}/>
      <section id="radar" className="chapter"><ChapterTitle eyebrow="LAST CURATED UPDATE · 2026.07.16 08:00 TPE" title="最近五則高面試價值時事" action={complete("radar")}/><div className="editorial-note"><span>EDITOR'S OVERVIEW</span><p>今日兩條主線：荷姆茲風險正由能源市場傳導至美國內航政策與運輸資格；黑海與國際航道安全則持續推高保險、繞航與 ETA 不確定性。面試時先說事件，再落到報價有效期、替代路徑與下一次更新節點。</p></div><div className="article-list">{dailyNews.map((n,i)=><article key={n.title} className={i===0?"featured":""}><div className="article-meta"><time>{n.date}</time><span>{n.tag}</span><em>{n.sourceName}</em></div><h3>{n.title}</h3><p>{n.body}</p><div className="impact"><b>IMPACT CHAIN</b>{n.impact}</div><details><summary>可能怎麼出題？</summary><p><strong>{n.quiz}</strong><br/>答案：{n.quizAnswer}</p></details>{source(n.href,"閱讀原文")}</article>)}</div></section>
      <section id="news-five-year" className="chapter"><ChapterTitle eyebrow="2021—2026" title="近五年國際航運大事" action={complete("news-five-year")}/><div className="event-timeline">{fiveYearEvents.map(e=><article key={e.year+e.title}><time>{e.year}</time><div><h3>{e.title}</h3><p>{e.summary}</p><div className="impact"><b>事件影響鏈</b>{e.impact}</div>{source(e.href,"官方／權威資料")}</div></article>)}</div></section>
    </ContentPage>}

    {active === "aptitude" && <ContentPage no="06" kicker="APTITUDE SPRINT" title="全新50題適職測驗" desc="五類各10題。練習模式即時解析；模擬考完成前不顯示答案。最後一題作答後自動進入結算。"><QuizDeck title="適職計時測驗" questions={aptitudeQuestions} storageKey="wanhai-aptitude-v2" limitMinutes={50} onComplete={readSummaries}/></ContentPage>}
    {active === "professional" && <ContentPage no="07" kicker="PROFESSIONAL BANK" title="50題專業科目" desc="角色、流程文件、Incoterms、營運術語、萬海產業與法遵。結算頁提供弱點、完整解析與教材捷徑。"><QuizDeck title="專業科目模擬" questions={professionalQuestions} storageKey="wanhai-professional-v2" limitMinutes={50} detailed onOpenChapter={goChapter} onComplete={readSummaries}/></ContentPage>}
    {active === "english" && <ContentPage no="08" kicker="ENGLISH CHECK" title="航運英文與長篇閱讀" desc="保留20個必認字，再加入50個專業詞彙；題庫改為文法、email、notice、長篇與多文件閱讀。">
      <details className="vocab-fold"><summary><span>VOCABULARY 01</span><strong>必認字20</strong><b>展開／收合</b></summary><div className="vocab-grid">{shippingVocabulary.map(([w,m])=><div key={w}><strong>{w}</strong><span>{m}</span></div>)}</div></details>
      <details className="vocab-fold"><summary><span>VOCABULARY 02</span><strong>專業航運詞彙50</strong><b>展開／收合</b></summary><div className="vocab-grid">{extraVocabulary.map(([w,m])=><div key={w}><strong>{w}</strong><span>{m}</span><small>Example: Please confirm the {w} before the stated cut-off.</small></div>)}</div></details>
      <QuizDeck title="English Timed Check" questions={englishQuestions} storageKey="wanhai-english-v2" limitMinutes={35} onComplete={readSummaries}/>
    </ContentPage>}

    {active === "rapid" && <ContentPage no="30" kicker="LAST-MINUTE MODE" title="考前30分鐘" desc="只看弱點、必記詞、萬海定位、公式與應試節奏。"><div className="rapid-grid"><RapidCard n="01" title="你的三個弱點" items={weak.length?weak.map(x=>`${x.name}｜${Math.round(x.rate*100)}%`):["先完成一回測驗，系統會產生弱點"]}/><RapidCard n="02" title="必懂5組" items={["Demurrage vs Detention","FOB vs CFR vs CIF","Shipper vs Consignee vs Forwarder vs Carrier","Direct vs Transshipment","Cost point vs Risk transfer point"]}/><RapidCard n="03" title="萬海5點" items={["1965年成立","亞洲近洋密集網路","碼頭與場站能力","延伸印度、中東與美洲","GAM整合商務、艙位與異常"]}/><RapidCard n="04" title="數學5公式" items={["FEU→TEU：40呎×2","達成率＝實際÷目標","成長率＝(新－舊)÷舊","調漲／折扣＝原價×(1±比率)","總價＝單價×數量×匯率"]}/><RapidCard n="05" title="應試提醒" items={["先看答案卡與作答規則","卡題60–90秒先跳","專業題先排除明顯錯誤","英文閱讀先看題目","最後留5分鐘檢查"]}/></div></ContentPage>}
    <footer><span>WH DECK</span><p>Built for the written test. Sources checked 2026.07.15.</p></footer>
  </main>;
}

function ContentPage({ no,kicker,title,desc,children }:{ no:string;kicker:string;title:string;desc:string;children:ReactNode }) { return <div className="page content-page"><section className="page-intro"><span>{no}</span><div><p className="eyebrow">{kicker}</p><h1>{title}</h1><p>{desc}</p></div></section>{children}</div>; }
function ChapterNav({ items,go }:{ items:string[][];go:(id:string)=>void }) { return <nav className="chapter-nav" aria-label="章節導覽">{items.map(([id,label],i)=><button key={id} onClick={()=>go(id)}><span>{String(i+1).padStart(2,"0")}</span>{label}</button>)}</nav>; }
function VersionBar({ text,href }:{ text:string;href:string }) { return <div className="version-bar"><span>LIVE DATA</span><p>{text}</p>{source(href,"查看官方資料")}</div>; }
function ChapterTitle({ eyebrow,title,action }:{ eyebrow:string;title:string;action?:ReactNode }) { return <div className="chapter-title"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{action}</div>; }
function Timeline({ year,title,text }:{ year:string;title:string;text:string }) { return <div><span>{year}</span><i/><section><strong>{title}</strong><p>{text}</p></section></div>; }
function InfoCard({ n,title,text }:{ n:string;title:string;text:string }) { return <article className="info-card"><span>{n}</span><h3>{title}</h3><p>{text}</p></article>; }
function RapidCard({ n,title,items }:{ n:string;title:string;items:string[] }) { return <section className="rapid-card"><span>{n}</span><h2>{title}</h2><ol>{items.map(x=><li key={x}>{x}</li>)}</ol></section>; }

type QuizAnswer = { selected:number;seconds:number };
function QuizDeck({ title,questions,storageKey,limitMinutes,detailed=false,onOpenChapter,onComplete }:{ title:string;questions:QuizQuestion[];storageKey:string;limitMinutes:number;detailed?:boolean;onOpenChapter?:(id:string)=>void;onComplete?:()=>void }) {
  const [mode,setMode] = useState<"practice"|"mock">("practice"); const [started,setStarted] = useState(false); const [finished,setFinished] = useState(false);
  const [answers,setAnswers] = useState<Record<string,QuizAnswer>>({}); const [reasons,setReasons] = useState<Record<string,string>>({});
  const [queue,setQueue] = useState<string[]>(questions.map(x=>x.id)); const [current,setCurrent] = useState(0); const [questionSeconds,setQuestionSeconds] = useState(0); const [sessionSeconds,setSessionSeconds] = useState(0);
  const list = queue.map(id=>questions.find(q=>q.id===id)).filter(Boolean) as QuizQuestion[]; const item = list[current] || questions[0]; const answer = answers[item.id];
  useEffect(()=>{setQuestionSeconds(0)},[item.id]);
  useEffect(()=>{if(!started||finished)return;const t=window.setInterval(()=>{setSessionSeconds(v=>Math.min(limitMinutes*60,v+1));if(!answer)setQuestionSeconds(v=>v+1)},1000);return()=>window.clearInterval(t)},[started,finished,answer,limitMinutes]);
  const buildSummary = (nextAnswers:Record<string,QuizAnswer>, nextReasons=reasons):QuizSummary => {
    const scope=queue.length===questions.length?questions:list; const categories:QuizSummary["categories"]={}; scope.forEach(x=>{categories[x.category] ||= {correct:0,total:0};categories[x.category].total++;if(nextAnswers[x.id]?.selected===x.answer)categories[x.category].correct++;});
    const reasonCounts:Record<string,number>={};Object.values(nextReasons).forEach(r=>reasonCounts[r]=(reasonCounts[r]||0)+1);const score=scope.filter(x=>nextAnswers[x.id]?.selected===x.answer).length;
    return {score,total:scope.length,percent:Math.round(score/scope.length*100),seconds:sessionSeconds,categories,reasons:reasonCounts,completedAt:new Date().toISOString()};
  };
  const save = (a=answers,r=reasons,summary?:QuizSummary) => { const old=JSON.parse(localStorage.getItem(storageKey)||"{}");localStorage.setItem(storageKey,JSON.stringify({answers:a,reasons:r,summary:summary??old.summary})); };
  const finish = (next:Record<string,QuizAnswer>) => { const summary=buildSummary(next);const isFull=queue.length===questions.length;setFinished(true);save(next,reasons,isFull?summary:undefined);if(isFull)onComplete?.();window.scrollTo({top:0,behavior:"smooth"}); };
  const choose = (selected:number) => {if(answer)return;const next={...answers,[item.id]:{selected,seconds:questionSeconds}};setAnswers(next);save(next);if(current===list.length-1){finish(next)}else if(mode==="mock"){setCurrent(v=>v+1)}};
  const markReason = (id:string,value:string) => {const next={...reasons,[id]:value};setReasons(next);const summary=finished?buildSummary(answers,next):undefined;save(answers,next,summary);};
  const wrong = questions.filter(x=>answers[x.id]&&answers[x.id].selected!==x.answer); const summary=buildSummary(answers); const remaining=Math.max(0,limitMinutes*60-sessionSeconds);
  const start = () => {setStarted(true);setFinished(false);setAnswers({});setReasons({});setQueue(questions.map(x=>x.id));setCurrent(0);setSessionSeconds(0)};
  const retry = () => {setQueue(wrong.map(x=>x.id));setAnswers({});setReasons({});setMode("practice");setCurrent(0);setSessionSeconds(0);setFinished(false);setStarted(true);window.scrollTo({top:0,behavior:"smooth"})};
  if(!started) return <section className="quiz-start"><p className="eyebrow">CHOOSE MODE</p><h2>{title}</h2><p>{questions.length}題 · {limitMinutes}分鐘。題目、選項與解析均為本次新版。</p><div className="mode-grid"><button className={mode==="practice"?"active":""} onClick={()=>setMode("practice")}><strong>練習模式</strong><span>每題作答後立即看解析，再前往下一題。</span></button><button className={mode==="mock"?"active":""} onClick={()=>setMode("mock")}><strong>模擬考模式</strong><span>過程不顯示答案，完成後統一結算。</span></button></div><button className="primary" onClick={start}>開始測驗 →</button></section>;
  if(finished) return <section className="quiz-results"><div className="result-hero"><div><p className="eyebrow">RESULT</p><h2>{summary.percent}<small>分</small></h2><p>{summary.score} / {summary.total} · 用時 {formatTime(sessionSeconds)}</p></div><div className="reason-summary"><span>不會 <b>{Object.values(reasons).filter(x=>x==="不會").length}</b></span><span>粗心 <b>{Object.values(reasons).filter(x=>x==="粗心").length}</b></span><span>時間不足 <b>{Object.values(reasons).filter(x=>x==="時間不足").length}</b></span></div></div><div className="category-results">{Object.entries(summary.categories).map(([name,v])=><div key={name}><span>{name}</span><strong>{v.correct}/{v.total}</strong><i><b style={{width:`${v.correct/v.total*100}%`}}/></i></div>)}</div><div className="wrong-review"><div className="chapter-title"><div><p className="eyebrow">ERROR REVIEW</p><h2>{wrong.length?`錯題 ${wrong.length} 題`:"全對，完成！"}</h2></div></div>{wrong.map((w,i)=><article key={w.id}><span>{String(i+1).padStart(2,"0")}</span><div><h3>{w.prompt}</h3><p><b>你的答案：</b>{w.options[answers[w.id].selected]}<br/><b>正確答案：</b>{w.options[w.answer]}</p><div className="full-explanation"><strong>完整解析</strong><p>{w.explanation}</p>{detailed&&w.optionNotes&&<ul>{w.optionNotes.map(n=><li key={n}>{n}</li>)}</ul>}</div><div className="reason-tags"><small>錯誤原因</small>{["不會","粗心","時間不足"].map(r=><button key={r} className={reasons[w.id]===r?"active":""} onClick={()=>markReason(w.id,r)}>{r}</button>)}</div>{w.relatedSection&&onOpenChapter&&<button className="review-link" onClick={()=>onOpenChapter(w.relatedSection!)}>回到相關內容 →</button>}</div></article>)}</div><div className="result-actions">{wrong.length>0&&<button className="primary" onClick={retry}>重做錯題 ({wrong.length})</button>}<button onClick={start}>重新做完整題庫</button></div></section>;
  return <section className="quiz-deck"><div className="quiz-summary"><div><p className="eyebrow">{mode==="practice"?"PRACTICE MODE":"MOCK EXAM"}</p><h2>{title}</h2></div><div><span>倒數 <b>{formatTime(remaining)}</b></span><span>進度 <b>{Object.keys(answers).length}/{list.length}</b></span></div></div><div className="quiz-progress"><i style={{width:`${Object.keys(answers).filter(id=>queue.includes(id)).length/list.length*100}%`}}/></div><div className="quiz-card"><div className="quiz-meta"><span>{item.category}</span><b>{current+1}/{list.length}</b><time>本題 {formatTime(answer?.seconds??questionSeconds)}</time></div>{item.passage&&<blockquote>{item.passage}</blockquote>}<h3>{item.prompt}</h3><div className="quiz-options">{item.options.map((o,i)=><button key={o} onClick={()=>choose(i)} className={mode==="practice"&&answer?(i===item.answer?"correct":answer.selected===i?"wrong":"muted"):answer?.selected===i?"selected":""}><span>{String.fromCharCode(65+i)}</span>{o}</button>)}</div>{mode==="practice"&&answer&&<div className={`quiz-explanation ${answer.selected===item.answer?"good":"bad"}`}><strong>{answer.selected===item.answer?"答對了":`正解：${String.fromCharCode(65+item.answer)}`}</strong><p>{item.explanation}</p>{detailed&&item.optionNotes&&<ul>{item.optionNotes.map(n=><li key={n}>{n}</li>)}</ul>}</div>}<div className="quiz-actions"><button disabled={current===0} onClick={()=>setCurrent(v=>Math.max(0,v-1))}>← 上一題</button>{current<list.length-1&&<button disabled={!answer} onClick={()=>setCurrent(v=>v+1)}>下一題 →</button>}</div></div></section>;
}
