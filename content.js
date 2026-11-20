/*
  Personal Hub content: the one file to edit.
  Every text field is { en, zh }. Add a work, essay or note by adding one object.
  A link with an empty url is not rendered. Fill these in:
  TODO(webber): public link for echotrail.
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
      link: "https://medium.com/@webber52543363/%E7%A4%BE%E5%9C%98-%E5%A4%A7%E5%AD%B8%E6%96%B0%E5%89%B5%E5%B9%B3%E5%8F%B0-%E6%B4%BB%E5%8A%9B%E6%BB%BF%E8%BC%89%E7%9A%84%E5%A4%A2%E6%83%B3%E5%AF%A6%E8%B8%90%E5%9C%B0-e1023fcee9c1" },
    { show: true, lane: "interest", from: "2021", to: "ongoing", type: "life", icon: "basketball",
      title: { en: "Basketball Referee", zh: "籃球裁判" } },
    { lane: "side", from: "2022.01", to: "2023.06", type: "program",
      title: { en: "Career Ambassador", zh: "職涯大使" },
      org: { en: "College of Commerce, NCCU", zh: "政大商學院" } },
    { lane: "side", from: "2022.12", to: "2022.12", type: "award",
      title: { en: "Startup Case Competition · 1st of 6", zh: "新創個案競賽・6 隊中第一" },
      org: { en: "NCCU Entrepreneur Association", zh: "政大創聯會" } },
    { lane: "side", from: "2023.01", to: "2023.07", type: "program",
      title: { en: "Project Member", zh: "專案成員" },
      org: { en: "YEF Young Entrepreneur Program, Epoch School", zh: "時代基金會 Epoch School 未來創業人 YEF" },
      note: { en: "Co-founded Emonono, a startup supporting victims of psychological abuse with evidence-recording tools and AI transcription.",
              zh: "共同創辦 Emonono，用蒐證錄音工具與 AI 逐字稿協助心理暴力受害者。" },
      link: "https://medium.com/@webber52543363/dream-big-go-crazy-51f55e775235" },
    { lane: "side", from: "2023.07", to: "2023.09", type: "program",
      title: { en: "Delegate", zh: "參訪團員" },
      org: { en: "Silicon Valley delegation, Epoch Foundation", zh: "時代基金會矽谷參訪團" },
      note: { en: "Selected from 100+ applicants; nine days visiting 4 startups, 3 established companies and 2 universities.",
              zh: "從百位申請者中選出，9 天拜訪 4 間新創、3 間成熟企業與 2 所大學。" },
      link: "https://medium.com/@webber52543363/dream-big-go-crazy-51f55e775235" },
    { lane: "main", from: "2023.07", to: "2023.10", type: "work",
      title: { en: "Expert Development Specialist", zh: "專家開發專員" },
      org: { en: "Takeit", zh: "Takeit 伸手牌" } },
    { lane: "side", from: "2023.08", to: "2024.07", type: "program",
      title: { en: "Trainee", zh: "學員" },
      org: { en: "NKDA Youth Knowledge Training Program", zh: "中華知識生產力協會 知識青年培訓計畫" },
      link: "https://medium.com/@webber52543363/nkda-%E6%AD%B7%E7%A8%8B%E4%B8%8D%E9%87%8D%E8%A6%81-%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E8%83%8C%E5%BE%8C%E7%9A%84%E8%84%88%E7%B5%A1-305ec56056f7" },
    { lane: "side", from: "2023.09", to: "2024.12", type: "program",
      title: { en: "Project Member → Teaching Assistant", zh: "專案成員 → 助教" },
      org: { en: "NCCU Consulting Group", zh: "政大管理顧問社" },
      link: "https://medium.com/@webber52543363/%E6%94%BF%E5%A4%A7%E7%AE%A1%E7%90%86%E9%A1%A7%E5%95%8F%E7%A4%BE-%E8%A7%A3%E6%B1%BA%E5%95%8F%E9%A1%8C%E8%88%87%E9%82%8F%E8%BC%AF%E6%80%9D%E8%80%83%E7%9A%84%E5%AD%B8%E7%BF%92-94d4c9c7907c" },
    { lane: "side", from: "2024.01", to: "2024.06", type: "program",
      title: { en: "PM Mentee", zh: "PM 組學員" },
      org: { en: "XChange College", zh: "XChange 互聯網大學" } },
    { fold: true, lane: "main", from: "2024.01", to: "2024.07", type: "work",
      title: { en: "Startup Accelerator Intern", zh: "新創加速器實習生" },
      org: { en: "TAcc+ (Taiwan Accelerator Plus)", zh: "TAcc+ 加速器" },
      link: "https://medium.com/@webber52543363/%E6%88%91%E5%9C%A8-tacc-%E7%B3%BB%E7%B5%B1%E6%80%A7%E5%8A%A0%E9%80%9F%E7%9A%84%E9%81%8E%E7%A8%8B-9b75d54c09a3" },
    { lane: "side", from: "2024.04", to: "2024.04", type: "award",
      title: { en: "Solana Hackathon · 2nd in Taiwan", zh: "Solana 黑客松・台灣區第二" },
      org: { en: "Gen3", zh: "Gen3" } },
    { fold: true, lane: "main", from: "2024.11", to: "2024.12", type: "work",
      title: { en: "QA & PM Intern", zh: "品質保證與產品實習生" },
      org: { en: "IHH", zh: "桓竑智聯 IHH" },
      link: "https://medium.com/@webber52543363/ihh-%E8%BB%9F%E9%AB%94%E6%96%B0%E5%89%B5%E5%AF%A6%E7%BF%92%E5%88%86%E4%BA%AB-4e40589bf974" },
    { lane: "main", from: "2025.01", to: "2025.06", type: "school",
      title: { en: "MBA Exchange", zh: "MBA 交換" },
      org: { en: "Montpellier Business School, France", zh: "法國蒙彼利埃商學院" } },
    { lane: "interest", from: "2025.03", to: "2025.04", type: "life", icon: "shell",
      title: { en: "Walked the Camino Francés", zh: "走過法國之路" },
      org: { en: "Spain", zh: "西班牙" },
      link: "https://medium.com/@webber52543363/%E6%98%A5%E5%AD%A3%E6%B3%95%E5%9C%8B%E4%B9%8B%E8%B7%AF%E7%B4%80%E5%AF%A6-42b18a20fc7f" },
    { lane: "interest", from: "2025.05", to: "2025.05", type: "life", icon: "dive",
      title: { en: "Advanced Open Water Certification", zh: "考取 AOW 進階潛水證照" },
      org: { en: "Egypt", zh: "埃及" } },
    { lane: "interest", from: "2025.07", to: "2025.07", type: "life", icon: "lotus",
      title: { en: "Ten-Day Vipassana Retreat", zh: "十日內觀" },
      org: { en: "Chiayi, Taiwan", zh: "嘉義" },
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
      orbit: "build", mag: 2,
      name: { en: "EchoTrail", zh: "EchoTrail" },
      status: "built", year: { en: "2026", zh: "2026" },
      summary: {
        en: "A team prototype from a PM programme: defined, vibe-coded and pitched with a live demo inside one sprint week.",
        zh: "PM 課程的小組原型：在一週衝刺內完成定義、用 vibe coding 做出來，並現場 demo 提案。"
      },
      stack: { en: "Prototype · Team of two", zh: "原型 · 兩人小組" },
      links: [{ label: { en: "See prototype", zh: "看原型" }, url: "" }]
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
      id: "mentorship-sailors",
      orbit: "build", mag: 2,
      name: { en: "Mentorship Sailors", zh: "曼陀號水手" },
      status: "live", year: { en: "2026", zh: "2026" },
      summary: {
        en: "A one-file page for The Mentorship closing showcase, shared with a fellow mentee: the audience scans a QR code and lands on our side projects.",
        zh: "曼陀號閉幕分享用的單頁網站，和另一位水手共用：台下掃 QR code 就能看到我們的 side project。"
      },
      stack: { en: "Single HTML file · GitHub Pages", zh: "單一 HTML 檔 · GitHub Pages" },
      links: [
        { label: { en: "Open page", zh: "打開頁面" }, url: "https://tsuwebber.github.io/mentorship-sailors/" },
        { label: { en: "Source on GitHub", zh: "GitHub 原始碼" }, url: "https://github.com/TsuWebber/mentorship-sailors" }
      ]
    },
    {
      id: "piyan-party",
      orbit: "build", mag: 2,
      name: { en: "Home Digital Twin", zh: "屁眼派對數位分身" },
      status: "built", year: { en: "2026", zh: "2026" },
      summary: {
        en: "A digital twin of our home: an editable floor plan with L-shaped rooms, a 3D walkthrough, photos pinned where they were taken, and floor-area totals.",
        zh: "我們家的數位分身：可編輯的平面圖（支援 L 型房間）、3D 全覽、把照片釘在拍攝位置的照片牆，以及全屋坪數計算。"
      },
      stack: { en: "JavaScript · Vercel Blob", zh: "JavaScript · Vercel Blob" },
      links: [{ label: { en: "Source on GitHub", zh: "GitHub 原始碼" }, url: "https://github.com/TsuWebber/piyan-party" }]
    },
    {
      id: "pm-ai-workflows",
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
