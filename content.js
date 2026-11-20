/*
  Personal Hub content: the one file to edit.
  Every text field is { en, zh }. Add a work, essay or note by adding one object.
  A link with an empty url is not rendered.
*/
window.HUB = {
  // Shown in this order in the footer.
  links: {
    github: "https://github.com/TsuWebber",
    medium: "https://medium.com/@webber52543363",
    substack: "https://xuexiweibo.substack.com/",
    linkedin: "https://www.linkedin.com/in/webber-wei-bo-hsu/",
    facebook: "https://www.facebook.com/profile.php?id=100003396676319",
    heptabase: "https://join.heptabase.com/?invite-acc-id=ba713a94-b8b1-46fe-ba8a-804439a0a2d1"   // referral invite
  },

  // Hashtags under the name in the first screen.
  // icon: one of the drawn icons in main.js; at: "above" | "below"; x: nudge in px; tilt: degrees.
  tags: [
    { en: "Product",     zh: "產品",   icon: "product",    at: "above", x: -22, tilt: -12 },
    { en: "Workflow",    zh: "工作流", icon: "workflow",   at: "below", x: 26,  tilt: 10 },
    { en: "Exploration", zh: "探索",   icon: "compass",    at: "above", x: 30,  tilt: 16 },
    { en: "Basketball",  zh: "籃球",   icon: "basketball", at: "below", x: -18, tilt: -14 },
    { en: "TrailRun",    zh: "越野跑", icon: "trail",      at: "above", x: 14,  tilt: 6 }
  ],

  // Experience timeline, shown left to right in this order (oldest first).
  // lane: "main" (school and work), "side" (programmes and clubs), "interest" (things done for their own sake). type: work | school | program | award | life. "now" marks the current role.
  // Phones show education and work in full and fold the rest; fold: true folds a main-line entry, show: true keeps another one out.
  // Dates come from the CV and the Medium posts. The current employer is deliberately not named.
  timeline: [
    { lane: "main", from: "2021.09", to: "2025.06", type: "school",
      title: { en: "BBA, Statistics", zh: "統計學系 學士" },
      org: { en: "National Chengchi University, Taipei", zh: "國立政治大學" } },
    { lane: "side", from: "2021.09", to: "2023.01", type: "program",
      title: { en: "Head of Academics → Vice President", zh: "學術部部長 → 副社長" },
      org: { en: "Maker In College", zh: "大學新創平台" },
      cover: "img/covers/maker.webp",
      link: "https://medium.com/@webber52543363/%E7%A4%BE%E5%9C%98-%E5%A4%A7%E5%AD%B8%E6%96%B0%E5%89%B5%E5%B9%B3%E5%8F%B0-%E6%B4%BB%E5%8A%9B%E6%BB%BF%E8%BC%89%E7%9A%84%E5%A4%A2%E6%83%B3%E5%AF%A6%E8%B8%90%E5%9C%B0-e1023fcee9c1" },
    { show: true, lane: "interest", from: "2021", to: "ongoing", type: "life", icon: "basketball",
      title: { en: "Basketball Referee", zh: "籃球裁判" } },
    { lane: "side", from: "2022.01", to: "2023.06", type: "program",
      title: { en: "Career Ambassador", zh: "職涯大使" },
      org: { en: "College of Commerce, NCCU", zh: "政大商學院" } },
    { lane: "side", from: "2022.12", to: "2022.12", type: "award",
      title: { en: "STCC Startup Case Competition · 1st of 4", zh: "STCC 新創個案競賽・4 組中第一" },
      org: { en: "NCCU Entrepreneur Association", zh: "政大創聯會" } },
    { lane: "side", from: "2023.01", to: "2023.07", type: "program",
      title: { en: "Project Member", zh: "專案成員" },
      org: { en: "YEF Young Entrepreneur Program, Epoch School", zh: "時代基金會 Epoch School 未來創業人 YEF" },
      note: { en: "Co-founded Emonono, a startup supporting victims of psychological abuse with evidence-recording tools and AI transcription.",
              zh: "共同創辦 Emonono，用蒐證錄音工具與 AI 逐字稿協助心理暴力受害者。" },
      cover: "img/covers/yef.webp",
      link: "https://medium.com/@webber52543363/%E8%BF%B7%E6%83%98%E4%B8%AD%E7%A9%8D%E6%A5%B5-%E6%B7%B7%E4%BA%82%E4%B8%AD%E6%88%90%E9%95%B7-b1c047e911fe" },
    { lane: "side", from: "2023.07", to: "2023.09", type: "program",
      title: { en: "Delegate", zh: "參訪團員" },
      org: { en: "Silicon Valley delegation, Epoch Foundation", zh: "時代基金會矽谷參訪團" },
      note: { en: "Selected from 100+ applicants; nine days visiting 4 startups, 3 established companies and 2 universities.",
              zh: "從百位申請者中選出，9 天拜訪 4 間新創、3 間成熟企業與 2 所大學。" },
      cover: "img/covers/dream-big.webp",
      link: "https://medium.com/@webber52543363/dream-big-go-crazy-51f55e775235" },
    { lane: "main", from: "2023.07", to: "2023.10", type: "work",
      title: { en: "Expert Development Specialist", zh: "專家開發專員" },
      org: { en: "Takeit", zh: "Takeit 伸手牌" } },
    { lane: "side", from: "2023.08", to: "2024.07", type: "program",
      title: { en: "Trainee", zh: "學員" },
      org: { en: "NKDA Youth Knowledge Training Program", zh: "中華知識生產力協會 知識青年培訓計畫" },
      cover: "img/covers/nkda.webp",
      link: "https://medium.com/@webber52543363/nkda-%E6%AD%B7%E7%A8%8B%E4%B8%8D%E9%87%8D%E8%A6%81-%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E8%83%8C%E5%BE%8C%E7%9A%84%E8%84%88%E7%B5%A1-305ec56056f7" },
    { lane: "side", from: "2023.09", to: "2024.12", type: "program",
      title: { en: "Project Member → Teaching Assistant", zh: "專案成員 → 助教" },
      org: { en: "NCCU Consulting Group", zh: "政大管理顧問社" },
      cover: "img/covers/nccucg.webp",
      link: "https://medium.com/@webber52543363/%E6%94%BF%E5%A4%A7%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E7%A4%BE-%E8%A7%A3%E6%B1%BA%E5%95%8F%E9%A1%8C%E8%88%87%E9%82%8F%E8%BC%AF%E6%80%9D%E8%80%83%E7%9A%84%E5%AD%B8%E7%BF%92-94d4c9c7907c" },
    { lane: "side", from: "2024.01", to: "2024.06", type: "program",
      title: { en: "PM Mentee", zh: "PM 組學員" },
      org: { en: "XChange College", zh: "XChange 互聯網大學" } },
    { fold: true, lane: "main", from: "2024.01", to: "2024.07", type: "work",
      title: { en: "Startup Accelerator Intern", zh: "新創加速器實習生" },
      org: { en: "TAcc+ (Taiwan Accelerator Plus)", zh: "TAcc+ 加速器" },
      cover: "img/covers/tacc.webp",
      link: "https://medium.com/@webber52543363/%E6%88%91%E5%9C%A8-tacc-%E7%B3%BB%E7%B5%B1%E6%80%A7%E5%8A%A0%E9%80%9F%E7%9A%84%E9%81%8E%E7%A8%8B-9b75d54c09a3" },
    { lane: "side", from: "2024.04", to: "2024.04", type: "award",
      title: { en: "Solana Hackathon · 2nd in Taiwan", zh: "Solana 黑客松・台灣區第二" },
      org: { en: "Gen3", zh: "Gen3" } },
    { fold: true, lane: "main", from: "2024.11", to: "2024.12", type: "work",
      title: { en: "QA & PM Intern", zh: "品質保證與產品實習生" },
      org: { en: "IHH", zh: "桓竑智聯 IHH" },
      cover: "img/covers/ihh.webp",
      link: "https://medium.com/@webber52543363/ihh-%E8%BB%9F%E9%AB%94%E6%96%B0%E5%89%B5%E5%AF%A6%E7%BF%92%E5%88%86%E4%BA%AB-4e40589bf974" },
    { lane: "main", from: "2025.01", to: "2025.06", type: "school",
      title: { en: "MBA Exchange", zh: "MBA 交換" },
      org: { en: "Montpellier Business School, France", zh: "法國蒙彼利埃商學院" } },
    { lane: "interest", from: "2025.03", to: "2025.04", type: "life", icon: "shell",
      title: { en: "Walked the Camino Francés", zh: "走過法國之路" },
      org: { en: "Spain", zh: "西班牙" },
      cover: "img/covers/camino.webp",
      link: "https://medium.com/@webber52543363/%E6%98%A5%E5%AD%A3%E6%B3%95%E5%9C%8B%E4%B9%8B%E8%B7%AF%E7%B4%80%E5%AF%A6-42b18a20fc7f" },
    { lane: "interest", from: "2025.05", to: "2025.05", type: "life", icon: "dive",
      title: { en: "Advanced Open Water Certification", zh: "考取 AOW 進階潛水證照" },
      org: { en: "Egypt", zh: "埃及" } },
    { lane: "interest", from: "2025.07", to: "2025.07", type: "life", icon: "lotus",
      title: { en: "Ten-Day Vipassana Retreat", zh: "十日內觀" },
      org: { en: "Chiayi, Taiwan", zh: "嘉義" },
      cover: "img/covers/vipassana.webp",
      link: "https://medium.com/@webber52543363/%E5%8D%81%E6%97%A5%E5%85%A7%E8%A7%80-%E4%B8%80%E5%A0%B4%E7%9B%B4%E8%A6%96%E8%BA%AB%E5%BF%83%E7%9A%84%E5%BF%83%E9%9D%88%E6%89%8B%E8%A1%93-2569bee86789" },
    { lane: "interest", from: "2025.12", to: "2025.12", type: "life", icon: "crow",
      title: { en: "Walked the Kumano Kodo", zh: "走過熊野古道" },
      org: { en: "Japan", zh: "日本" } },
    { lane: "main", from: "2026.01", to: "now", type: "work",
      title: { en: "Software Product Manager", zh: "軟體產品經理" },
      org: { en: "A leading pet-brand group, Taipei", zh: "寵物品牌集團，台北" },
      note: { en: "Sole owner of the OMS, lead on the IMS and CDP, and a collaborator on the CMS, the consumer website and the retailer site.",
              zh: "獨立負責 OMS，主責 IMS 與 CDP，並協作 CMS、2C 官網與 2R（零售）專站。" } },
    { lane: "side", from: "2026.05", to: "2026.11", type: "program",
      title: { en: "PM Mentee", zh: "PM 組學員" },
      org: { en: "The Mentorship, Cohort 8", zh: "曼陀號第 8 屆" },
      cover: "img/covers/mentorship.webp",
      link: "https://medium.com/@webber52543363/%E6%9B%BC%E9%99%80%E8%99%9F%E7%AC%AC-8-%E5%B1%86-pm-%E7%B5%84-%E5%8D%8A%E5%B9%B4%E8%88%AA%E7%A8%8B%E8%A8%98%E9%8C%84-27dcf4cc1c28" },
    { lane: "interest", from: "2026.01", to: "ongoing", type: "life", icon: "trail",
      title: { en: "Trail Running", zh: "越野跑" } }
  ],

  // Names of the three parts (used in the header, dial and work metadata).
  orbits: [
    { id: "build",   name: { en: "Build",   zh: "實作" } },
    { id: "think",   name: { en: "Think",   zh: "思考" } },
    { id: "learn",   name: { en: "Learn",   zh: "學習" } },
    { id: "explore", name: { en: "Planned", zh: "規劃中" } }   // outer track: planned work only
  ],

  // The homepage shows at most 3 per category: items with featured: true (or the first 3).
  // Everything else is still reached through the category's "Everything on GitHub / Medium / Substack" link.
  // status: "live" | "built" | "planned". Planned work always sits on the outer dashed track.
  works: [
    {
      id: "lifeos",
      featured: true,
      orbit: "build", mag: 1,
      name: { en: "LifeOS", zh: "LifeOS" },
      status: "live", year: { en: "2026", zh: "2026" },
      summary: {
        en: "An OKR dashboard I built for myself: one set of objectives and key results for each of eight areas of my life, including learning, work, health, money and relationships.",
        zh: "我替自己做的 OKR 儀表板：學習、工作、健康、金錢、人際等八個生活面向，各有一組目標與關鍵結果。"
      },
      stack: { en: "HTML · Supabase · Vercel", zh: "HTML · Supabase · Vercel" },
      links: [{ label: { en: "Open live app", zh: "打開線上版" }, url: "https://lifeos.cards/welcome" }]
    },
    {
      id: "referee",
      page: "works/referee-aide.html",
      featured: true,
      orbit: "build", mag: 2,
      name: { en: "Referee Aide", zh: "籃球裁判助理" },
      status: "built", year: { en: "2026", zh: "2026" },
      summary: {
        en: "A Claude Code agent for FIBA rules, official interpretations and 2PO/3PO mechanics. Every answer cites the article and source, tested on a 66-question eval set.",
        zh: "用 Claude Code 打造的 agent，涵蓋 FIBA 規則、官方解釋與 2PO／3PO 裁判法。每個答案都附條號與出處，並用 66 題評測集測過。"
      },
      stack: { en: "Claude Code · Eval set", zh: "Claude Code · 評測集" },
      links: [{ label: { en: "Source on GitHub", zh: "GitHub 原始碼" }, url: "https://github.com/TsuWebber/basketball-referee-assistant" }]
    },
    {
      id: "echotrail",
      page: "works/echotrail.html",
      orbit: "build", mag: 2,
      name: { en: "EchoTrail", zh: "EchoTrail" },
      status: "built", year: { en: "2026", zh: "2026" },
      summary: {
        en: "A career-reflection product from The Mentorship's PM × engineering project: an AI coach draws out your career story, sets it against your record to show where things feel off, and builds a self-portrait over time. I co-wrote and kept the MVP spec in Git with another PM, for two engineers and two mentors.",
        zh: "曼陀號 PM × 工程師合作專案的職涯反思產品：AI 教練一問一答引導你講出職涯經歷，和客觀紀錄交叉比對找出落差，並隨時間累積成一份自我畫像。我和另一位 PM 一起撰寫並維護放在 Git 的 MVP 規格，給兩位工程師和兩位 mentor 使用。"
      },
      stack: { en: "MVP spec in Git · 2 PMs, 2 engineers", zh: "Git 規格庫 · 2 PM、2 工程師" },
      links: [
        { label: { en: "Try the prototype", zh: "試用原型" }, url: "https://echotrail-dev-508500-k6.web.app/" },
        { label: { en: "Spec repo on GitHub", zh: "GitHub 規格庫" }, url: "https://github.com/ZeYuanDuan/echotrail-project-management" }
      ]
    },
    {
      id: "flexbox-rpg",
      orbit: "build", mag: 2,
      name: { en: "Flexbox RPG", zh: "Flexbox 勇者傳說" },
      status: "live", year: { en: "2026", zh: "2026" },
      summary: {
        en: "A browser game for learning CSS Flexbox: four monsters cast scrambled layouts, and you break each spell with the right justify-content and align-items before the timer runs out, by clicking or by typing.",
        zh: "學 CSS Flexbox 的網頁遊戲：四隻怪物用排版施法，你要在倒數結束前答出正確的 justify-content 和 align-items 破解它，可以點選也可以打字。"
      },
      stack: { en: "HTML · CSS · GitHub Pages", zh: "HTML · CSS · GitHub Pages" },
      links: [
        { label: { en: "Play it", zh: "開始玩" }, url: "https://tsuwebber.github.io/flexbox-rpg/" },
        { label: { en: "Source on GitHub", zh: "GitHub 原始碼" }, url: "https://github.com/TsuWebber/flexbox-rpg" }
      ]
    },
    {
      id: "pm-ai-workflows",
      page: "works/pm-workflow-skills.html",
      featured: true,
      orbit: "build", mag: 2,
      name: { en: "PM Workflow Skills", zh: "PM 工作流 Skills" },
      status: "built", year: { en: "2026", zh: "2026" },
      summary: {
        en: "The 11 Claude Code skills I use every day as a software PM, from specs in Git through review, Jira tickets and release, all in Traditional Chinese.",
        zh: "我身為軟體 PM 每天在用的 11 個 Claude Code skill：從寫規格、審查、開 Jira 票到上線，規格放在 Git 裡用 PR 迭代。"
      },
      stack: { en: "Claude Code plugin · 11 skills", zh: "Claude Code plugin · 11 個 skill" },
      links: [{ label: { en: "Source on GitHub", zh: "GitHub 原始碼" }, url: "https://github.com/TsuWebber/pm-workflow-skills" }]
    }
  ],

  // Past projects for the Projects page (school, programme, competition and team work), newest first.
  // Written only from his Notion project log, Medium posts and LinkedIn. deck: a publicly shared deck or poster.
  past: [
    {
      id: "stormplay",
      name: { en: "StormPlay Launch Strategy", zh: "StormPlay 雲端遊戲平台上市策略" },
      year: "2024",
      context: { en: "NCCU Consulting Group · client project with Cooler Master · team of 6", zh: "政大管理顧問社・Cooler Master 實體業主專案・6 人團隊" },
      summary: {
        en: "Segmented the gaming market, defined StormPlay's target users and found where the cloud gaming platform could make money, with recommendations on direct revenue and the indirect value it could bring to Cooler Master's hardware business.",
        zh: "釐清遊戲產業的市場區隔，定義 StormPlay 的目標客群並找出商業機會，對 Cooler Master 提出直接獲利與帶給硬體本業間接價值的策略建議。"
      },
      deck: "https://drive.google.com/drive/folders/1EOtbtJvkDzB1RR6YA1nSFJEUqeKaVpR_?usp=sharing",
      link: "https://medium.com/@webber52543363/%E6%94%BF%E5%A4%A7%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E7%A4%BE-%E8%A7%A3%E6%B1%BA%E5%95%8F%E9%A1%8C%E8%88%87%E9%82%8F%E8%BC%AF%E6%80%9D%E8%80%83%E7%9A%84%E5%AD%B8%E7%BF%92-94d4c9c7907c"
    },
    {
      id: "realitysync",
      name: { en: "RealitySync", zh: "RealitySync" },
      year: "2024",
      context: { en: "Solana Hackathon · PM · 2nd in Taiwan", zh: "Solana 黑客松・PM・台灣區第 2 名" },
      summary: {
        en: "An optimistic oracle on Solana. In a team of two PMs and three engineers I drove the idea, market research, business model and go-to-market, drew the flowcharts and wrote the product requirements the prototype was built from.",
        zh: "Solana 鏈上的樂觀預言機。在 2 位 PM、3 位工程師的團隊裡，我負責項目發想、市場研究、商業模式與 Go-To-Market，繪製 Flowchart，並寫出工程師據以實作 Prototype 的產品需求。"
      },
      deck: "https://drive.google.com/file/d/1VjXsTRKSJbG0Gzf8r81gSEBbbPwWUkj-/view?usp=sharing"
    },
    {
      id: "takeit-forum",
      name: { en: "Takeit Career Forum", zh: "Takeit 伸手牌職涯論壇" },
      year: "2024",
      context: { en: "Online content product strategy course · solo", zh: "網路內容產品策略與規劃課程・個人作業" },
      summary: {
        en: "A full product proposal for the career platform I was working on outside school: interviews, a customer journey, user stories and an MRD.",
        zh: "替我在校外實際參與運營的職涯平台，做出完整的產品提案：質化訪談、Customer Journey、User Story 與 MRD 產品文件。"
      },
      deck: "https://drive.google.com/drive/folders/1TEVl0v4Y06qt4By2nI9jES7Q6huvma8H?usp=sharing"
    },
    {
      id: "venus",
      name: { en: "Venus Razor: Taiwan Market Entry", zh: "Venus 女性除毛刀台灣市場進入策略" },
      year: "2023",
      context: { en: "NCCU Consulting Group · team of 7 · 1st of 5", zh: "政大管理顧問社・7 人團隊・5 組中第 1 名" },
      summary: {
        en: "A Taiwan entry plan aiming for a 20% market share: market size and growth, competitors across product, packaging, pricing, retail, marketing and customer value, then media, channel and campaign strategy.",
        zh: "以 20% 市占為目標的台灣市場進入策略：市場規模與成長率、從產品、包裝、定價、零售、行銷溝通與客戶價值六個面向做競爭分析，再設計媒體、通路與檔期策略。"
      },
      deck: "https://drive.google.com/file/d/1plsDZhcZDiPehQuD8tmTn_9BQAAosEkM/view?usp=sharing",
      link: "https://medium.com/@webber52543363/%E6%94%BF%E5%A4%A7%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E7%A4%BE-%E8%A7%A3%E6%B1%BA%E5%95%8F%E9%A1%8C%E8%88%87%E9%82%8F%E8%BC%AF%E6%80%9D%E8%80%83%E7%9A%84%E5%AD%B8%E7%BF%92-94d4c9c7907c"
    },
    {
      id: "ren",
      name: { en: "REN: Japan Market Entry", zh: "韌REN 無鋼圈內衣日本市場進入策略" },
      year: "2023",
      context: { en: "NKDA course project · lead · 2nd of 5", zh: "中華知識生產力協會課程專案・主責・5 組中第 2 名" },
      summary: {
        en: "Japan market entry for a wire-free bra: market research, target customers, channels and pricing, and marketing. With little access to users, I reached two Japanese women through my own network for interviews.",
        zh: "無鋼圈內衣的日本市場進入策略：市場研究、目標客群、通路與定價、行銷策略。使用者研究不易，我透過個人人脈訪談了兩位日本女性。"
      }
    },
    {
      id: "daonan",
      name: { en: "Daonan Village Revitalization", zh: "道南新村空間再造" },
      year: "2023",
      context: { en: "USR international PBL course · NCCU with Chiba University", zh: "大學社會責任國際 PBL 課程・政大與日本千葉大學" },
      summary: {
        en: "A space revitalization proposal for Daonan Village, gathering stakeholders' views through design thinking and the KJ method, in a team of three Taiwanese and two Japanese students.",
        zh: "道南新村空間再造提案，用設計思考與 KJ 法蒐集利害關係人的觀點，團隊由 3 位政大學生和 2 位千葉大學學生組成。"
      },
      deck: "https://drive.google.com/drive/folders/10lCziJS1l9BWjYlXn73qAfov3xHdhPp3?usp=sharing",
      deckLabel: { en: "Poster", zh: "海報" }
    },
    {
      id: "emonono",
      name: { en: "Emonono", zh: "Emonono" },
      year: "2023",
      context: { en: "YEF Young Entrepreneur Program · project lead · 2nd of 7", zh: "未來創業人 YEF・專案主責・7 組中第 2 名" },
      summary: {
        en: "An app to help victims of psychological abuse before, during and after: education, recording guides and a discreet recording feature for evidence, then transcription and an AI score for how closely it matches court rulings on psychological abuse. I ran project management, customer and pain analysis, and the business model.",
        zh: "協助精神暴力受害者的 App：事件發生前的教育、發生當下的錄音教學與秘密錄音蒐證、發生後的逐字稿與 AI 比對司法院裁判書的精神暴力符合率。我主責專案管理、目標客群與痛點分析、商業模式。"
      },
      deck: "https://drive.google.com/drive/folders/1WmiZZXgFW0U1TLbe3YhTYMfbw3Z7IZ9F?usp=sharing",
      link: "https://medium.com/@webber52543363/%E8%BF%B7%E6%83%98%E4%B8%AD%E7%A9%8D%E6%A5%B5-%E6%B7%B7%E4%BA%82%E4%B8%AD%E6%88%90%E9%95%B7-b1c047e911fe"
    },
    {
      id: "ziyouzhiqiu",
      name: { en: "Ziyouzhiqiu: User Research and Website", zh: "自由之丘使用者研究與網站" },
      year: "2023",
      context: { en: "New media course · team of 6 · 2nd of 6", zh: "新媒體創藝行動家・6 人團隊・6 組中第 2 名" },
      summary: {
        en: "User research and a website for a restaurant. I led the user research and impact assessment, and learned Figma and UI/UX design along the way.",
        zh: "替餐廳做使用者研究與網站。我主要負責使用者研究與效益評估，也在過程中學了 Figma 與 UI/UX 設計。"
      }
    },
    {
      id: "netflix-case",
      name: { en: "Netflix Subscription Case", zh: "NETFLIX 訂閱制商模個案分析" },
      year: "2022",
      context: { en: "STCC Startup Case Competition · team lead · 1st of 4", zh: "STCC 新創個案競賽・組長・4 組中第 1 名" },
      summary: {
        en: "Two weeks reading Netflix's financials and breaking down subscription metrics, proposing better membership tiers to lift revenue and stronger IP content to cut churn. I led a team formed on the day, planned the schedule and brought in mentors.",
        zh: "兩週內判讀財報、拆解訂閱制關鍵指標，提出改善會員分級以提升營收、強化高品質 IP 內容以降低流失。我擔任組長，負責現場組成團隊的分工、排程與業師安排。"
      },
      deck: "https://drive.google.com/drive/folders/1PhbDOPJ-_mFQNrMy1qVpUf5-lXYRT-OW?usp=sharing"
    },
    {
      id: "sanfang",
      name: { en: "Sanfang Oil Shop: Online Marketing", zh: "三芳油行線上行銷" },
      year: "2022",
      context: { en: "Maker In College course · project lead · 2nd of 7", zh: "大學新創行動家課程・專案主責・7 組中第 2 名" },
      summary: {
        en: "Worked with a traditional oil shop near NCCU on its brand: hand-drawn recipes for its Facebook page, a brand site and SEO. My first time leading a project; the work was carried out with the owner.",
        zh: "與政大附近的傳統商家三芳油行合作，用手繪食譜經營 FB 粉專、建立品牌網頁並做 SEO。這是我第一次擔任專案主責，成果也實際與業主合作落地。"
      }
    }
  ],

  // Selected essays (Medium) and notes (Substack). Titles are { en, zh }; the pieces themselves are written in Chinese.
  // The English titles were translated by AI, and the page labels them so.
  // Shape: { title: { en, zh }, url, date: "YYYY-MM", orbit: "think" | "learn" }
  writing: [
    { title: { en: "The Mentorship, Cohort 8 PM Track: A Six-Month Voyage Log", zh: "曼陀號第 8 屆 PM 組－半年航程記錄" }, date: "2026-11", orbit: "think",
      url: "https://medium.com/@webber52543363/%E6%9B%BC%E9%99%80%E8%99%9F%E7%AC%AC-8-%E5%B1%86-pm-%E7%B5%84-%E5%8D%8A%E5%B9%B4%E8%88%AA%E7%A8%8B%E8%A8%98%E9%8C%84-27dcf4cc1c28" },
    { title: { en: "Camino Francés in Spring", zh: "春季法國之路紀實" }, date: "2025-06", orbit: "think",
      url: "https://medium.com/@webber52543363/%E6%98%A5%E5%AD%A3%E6%B3%95%E5%9C%8B%E4%B9%8B%E8%B7%AF%E7%B4%80%E5%AF%A6-42b18a20fc7f" },
    { title: { en: "NCCU Consulting Group: Learning to Solve Problems and Think Logically", zh: "政大管理顧問社－解決問題與邏輯思考的學習" }, date: "2024-10", orbit: "think",
      url: "https://medium.com/@webber52543363/%E6%94%BF%E5%A4%A7%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E7%A4%BE-%E8%A7%A3%E6%B1%BA%E5%95%8F%E9%A1%8C%E8%88%87%E9%82%8F%E8%BC%AF%E6%80%9D%E8%80%83%E7%9A%84%E5%AD%B8%E7%BF%92-94d4c9c7907c" }
  ],
  notes: [
    { title: { en: "Reading Notes: How to Become a Peak Product Manager", zh: "〈如何成為頂尖產品經理〉閱讀筆記" }, date: "2025-08", orbit: "learn", url: "https://xuexiweibo.substack.com/p/044" },
    { title: { en: "Reading Notes: Think Like a Monk", zh: "《僧人心態》閱讀筆記" }, date: "2025-07", orbit: "learn", url: "https://xuexiweibo.substack.com/p/238" },
    { title: { en: "Building a Lean Canvas, Step by Step", zh: "逐步打造精實畫布" }, date: "2024-07", orbit: "learn", url: "https://xuexiweibo.substack.com/p/35b" }
  ]
};
