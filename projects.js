/*
  Project pages (works/<id>.html). One entry per page; the card data (name, year, status, stack, links)
  comes from HUB.works in content.js, matched by id. Everything here is written from the project's own
  README and files on GitHub; nothing is added that the repo does not say.

  Section shapes:
    { h, p }               a paragraph
    { h, list: [...] }     a bullet list
    { h, steps: [...] }    a numbered flow; each step is { name, text }
    { h, table: { head: [...], rows: [[...], ...] } }
    { h, figure: { src, alt, caption } }
    { h, wide: true, flow: { stages, loop, base, side } }
    { h, wide: true, layers: { rows, foot } }   stacked layers, top (application) to bottom (foundation)   a left-to-right process map in the site's own style
  Every text value is { en, zh }; table cells may be plain strings.
*/
window.HUB_PROJECTS = {

  "lifeos": {
    lead: {
      en: "A life dashboard that puts your past, present and future in one place: look back at the road you've walked, run this quarter's goals day to day, and imagine three possible futures.",
      zh: "把過去、現在、未來放在同一個地方的人生儀表板：回顧走過的路、管理這一季的目標，並展望三種可能的人生。"
    },
    sections: [
      {
        h: { en: "The problem", zh: "要解決的問題" },
        list: [
          { en: "Plenty of experience that never joins up: several jobs and projects, interests you can't let go of, and no clear sense of what you're good at or truly care about.", zh: "經歷很多，卻連不成一條線：換過幾份工作、做過不少專案，也有放不下的興趣，卻說不出自己擅長什麼、真正熱衷什麼。" },
          { en: "Busy every day, unsure where it's heading: goals set at the start of the year never line up with daily work, and health, family and interests get pushed aside.", zh: "每天都很忙，卻不確定在往哪走：年初訂的目標和每天在做的事對不上，健康、家人和興趣總被擱在一旁。" },
          { en: "Only a vague picture of the future, and little thought about any path other than the current one.", zh: "對未來只有模糊的想像，也很少想過眼前這條路以外的可能。" },
          { en: "Reflection lives in a diary, goals in a to-do app and the future in your head, so the whole picture never comes together.", zh: "回顧寫在日記、目標放在待辦、未來留在腦海裡，人生被拆在不同地方，就拼不出完整的自己。" }
        ]
      },
      {
        h: { en: "Past, present, future", zh: "過去、現在、未來" },
        wide: true,
        flow: {
          stages: [
            { n: { en: "Past", zh: "過去" }, title: "Wayfinding Map", text: { en: "Work, relationships and learning on one timeline, to see what keeps drawing you in and which choices turned things.", zh: "把工作、感情、學習的經歷放上同一條時間軸，看出哪些事讓你一再投入、哪些決定牽動了後來的轉折。" }, skills: [{ name: { en: "Look back", zh: "回顧" }, subs: [{ en: "timeline", zh: "時間軸" }, { en: "turning points", zh: "轉折點" }] }] },
            { n: { en: "Present", zh: "現在" }, title: "Goals", text: { en: "OKRs break the year into measurable results for this quarter, then into what to move each week and day.", zh: "用 OKR 把年度目標拆成這一季可衡量的關鍵結果，再拆到每週、每天要推進的行動。" }, skills: [{ name: "OKR", subs: [{ en: "year", zh: "年" }, { en: "quarter", zh: "季" }, { en: "month", zh: "月" }, { en: "week", zh: "週" }, { en: "day", zh: "日" }] }] },
            { n: { en: "Future · coming soon", zh: "未來・即將推出" }, title: "Odyssey Plan", text: { en: "Three possible five-year lives side by side: the current path, a backup if it disappears, and one with no limits at all.", zh: "同時想像三種五年人生：現在這條路、這條路消失時的備案、不考慮任何現實限制的狂想。" }, skills: [{ name: { en: "Three paths", zh: "三條路" }, subs: [{ en: "current", zh: "現在" }, { en: "backup", zh: "備案" }, { en: "wild card", zh: "狂想" }] }] }
          ],
          base: { name: { en: "8 areas of life", zh: "八個人生面向" }, text: { en: "Learning, interests, work, fulfilment, quality of life, health, money and relationships: work is only one of them", zh: "學習成長、個人興趣、工作職涯、自我實現、生活品質、身心健康、財富累積、人際關係：工作只是其中之一" } }
        }
      },
      {
        h: { en: "Built on proven methods", zh: "背後的方法" },
        list: [
          { en: "Wayfinding and the Odyssey Plan come from Designing Your Life by Bill Burnett and Dave Evans, and Stanford's Life Design Lab.", zh: "人生尋路地圖與奧德賽計畫，來自 Bill Burnett 與 Dave Evans 的《做自己的生命設計師》與 Stanford 生命設計課程。" },
          { en: "Goals follow OKRs from John Doerr's Measure What Matters, with the Mandal-Art method and eight dimensions of life goals.", zh: "目標管理採用 John Doerr《OKR：做最重要的事》，搭配曼陀羅思考法與人生目標的八大向度。" }
        ]
      },
      {
        h: { en: "Where it stands", zh: "目前狀態" },
        p: {
          en: "Live and in small-scale testing. New people join through a waitlist and get an invite link in order. Built with HTML, Supabase and Vercel.",
          zh: "已上線，目前小規模測試中，新使用者透過等候名單依序收到邀請連結。用 HTML、Supabase 與 Vercel 打造。"
        }
      }
    ]
  },

  "flexbox-rpg": {
    lead: {
      en: "A small browser game for learning CSS Flexbox: a monster attacks with a scrambled layout, and you break the spell by typing the right Flexbox values before time runs out.",
      zh: "打怪學 CSS Flexbox 的網頁小遊戲：怪物用一段亂掉的排版施法攻擊你，在時間內輸入正確的 Flexbox 屬性值破解它，就能反擊。"
    },
    sections: [
      {
        h: { en: "How a round works", zh: "一回合怎麼進行" },
        steps: [
          { name: { en: "The monster casts", zh: "怪物施法" }, text: { en: "It throws a layout that's out of place.", zh: "出一題排亂的版面。" } },
          { name: { en: "You answer", zh: "你作答" }, text: { en: "Put it back with the right values for justify-content, align-items, flex-direction or flex-wrap.", zh: "用對 justify-content、align-items、flex-direction、flex-wrap 的值把它排回來。" } },
          { name: { en: "Hit or get hit", zh: "反擊或被打" }, text: { en: "A right answer deals damage, with a bonus for speed; a wrong answer or running out of time costs you health.", zh: "答對造成傷害，答得快有速攻加成；答錯或超時就會被打。" } },
          { name: { en: "Hints", zh: "提示" }, text: { en: "Stuck? Ask for a hint, but it's noted in the final score.", zh: "卡住可以按提示，但結算時會被記下來。" } }
        ]
      },
      {
        h: { en: "Four monsters", zh: "四隻怪物" },
        wide: true,
        flow: {
          stages: [
            { n: "Lv.1", title: { en: "Confused Slime", zh: "困惑史萊姆" }, text: { en: "Easy", zh: "簡單" }, skills: [] },
            { n: "Lv.2", title: { en: "Mischief Goblin", zh: "搗亂哥布林" }, text: { en: "Normal", zh: "普通" }, skills: [] },
            { n: "Lv.3", title: { en: "Dark Mage", zh: "黑暗法師" }, text: { en: "Hard", zh: "困難" }, skills: [] },
            { n: "Lv.4", title: { en: "Chaos Dragon", zh: "混沌巨龍" }, text: { en: "Boss: only 9 seconds to answer", zh: "Boss：只有 9 秒作答" }, skills: [] }
          ],
          base: { name: { en: "Further in", zh: "越往後" }, text: { en: "More health, harder hits and less time to answer", zh: "血越厚、攻擊越痛、作答時間越短" } }
        }
      },
      {
        h: { en: "Two ways to play", zh: "兩種操作方式" },
        table: {
          head: [{ en: "Mode", zh: "模式" }, { en: "For", zh: "適合" }, { en: "How you answer", zh: "怎麼答題" }],
          rows: [
            [{ en: "Click", zh: "點擊模式" }, { en: "New to Flexbox", zh: "剛開始學 Flexbox" }, { en: "Pick CSS values from buttons", zh: "從按鈕裡選 CSS 值" }],
            [{ en: "Type", zh: "打字模式" }, { en: "Up for a challenge", zh: "想挑戰自己" }, { en: "Type the CSS yourself", zh: "直接輸入 CSS" }]
          ]
        }
      },
      {
        h: { en: "How it's built", zh: "技術" },
        p: {
          en: "A single index.html in plain HTML, CSS and JavaScript, with nothing to install or build, deployed on GitHub Pages. To play offline, open the file in a browser.",
          zh: "單一個 index.html，純 HTML、CSS、JavaScript，不需要安裝或建置，部署在 GitHub Pages。本機直接用瀏覽器打開就能玩。"
        }
      }
    ]
  },

  "pm-ai-workflows": {
    lead: {
      en: "Every sprint, a PM does much the same work again, just for a different problem. I turned that repeated work into Claude Code skills: the AI runs the process, and the judgement calls stay with me.",
      zh: "PM 每跑一次 Sprint，幾乎都在重做同樣的事，只是解決的問題不同。我把這些重複的流程做成 Claude Code skill：流程交給 AI 跑，判斷和拍板留在我手上。"
    },
    sections: [
      {
        h: { en: "Why it exists", zh: "為什麼做這套" },
        list: [
          { en: "Every sprint means turning meeting notes into decisions, writing the spec, splitting front-end and back-end tickets, the release note, the daily and weekly reports, each time from scratch. Tedious, time-consuming work that can be automated.", zh: "每個 Sprint 都要整理會議記錄、寫規格、拆前後端票、寫 release note、日報週報，每次都從頭來。這些繁瑣又花時間的流程，完全可以自動化。" },
          { en: "Specs and tickets drift apart: the spec changes and the ticket doesn't, so engineering, QA and design end up reading different versions.", zh: "規格和票對不上：規格改了、票沒跟著改，RD、QA、設計看的不是同一版。" },
          { en: "Ready-made PM skills don't know how my team works, so I built one around how we actually work: specs in a Git spec repo, tickets in our Jira formats, everything in Traditional Chinese.", zh: "現成的 PM skill 不知道我們團隊怎麼做事，所以我照團隊的實際做法自己做一套：規格放 Git 規格庫、照 Jira 的票型開票、全部用繁體中文。" }
        ]
      },
      {
        h: { en: "What it is", zh: "這是什麼" },
        p: {
          en: "One Claude Code plugin, pm-workflow: 11 skills, one entry point per stage of the work. I rarely call them by name: I just say what I'm doing, like pasting meeting notes or asking for tickets, and Claude works out from that which skill fits. Specs live in a Git spec repo and change through pull requests, so engineering, QA and design always read the same version.",
          zh: "一個 Claude Code plugin「pm-workflow」：11 個 skill，一個工作階段一個入口。平常我很少直接呼叫：照平常的方式講要做的事，例如貼上會議記錄、說要開票，Claude 會從內容判斷該用哪個 skill。規格寫在 Git 規格庫、用 PR 修改，RD、QA、設計看的永遠是同一版。"
        }
      },
      {
        h: { en: "One request, start to finish: partial refunds", zh: "一個需求怎麼走完：以部分退款為例" },
        wide: true,
        intro: {
          en: "How a request actually moves for me, laid on the Scrum cycle, with the skill behind each step. The request is made up: orders can only be refunded in full, and support wants to refund part of one.",
          zh: "一個需求在我手上實際怎麼走，對照 Scrum 的各個階段，以及每一步背後的 skill。需求是假想的：訂單目前只能整筆退款，客服希望能只退一部分。"
        },
        flow: {
          stages: [
            { n: "Product Backlog", title: { en: "Research", zh: "收需求、做研究" }, text: { en: "Material, interviews, how others do it", zh: "整理素材、訪談、看別人怎麼做" }, skills: [{ name: "pm-intake", subs: ["material", "meeting"] }, { name: "pm-discover", subs: ["pains", "cases"] }] },
            { n: "Product Backlog", title: { en: "First plan", zh: "初步規劃" }, text: { en: "Hypotheses first, phases if needed", zh: "寫下假設，必要時切階段" }, skills: [{ name: "pm-plan", subs: ["scope", "decide"] }] },
            { n: "Refinement", title: { en: "Write the spec", zh: "寫成規格" }, text: { en: "Once the direction is roughly agreed", zh: "方向大致確認後才動筆" }, skills: [{ name: "pm-spec", subs: ["write"] }] },
            { n: "Refinement", title: { en: "Prototype", zh: "做 Prototype" }, text: { en: "The spec as a clickable prototype", zh: "把規格做成可以點的原型" }, skills: [{ name: "pm-design", subs: ["prototype"] }] },
            { n: "Refinement", ring: {
              size: 380, node: 124,
              center: { name: { en: "Design comes in", zh: "設計進場" }, text: { en: "PM and designer revise design and spec together", zh: "PM 和 PD 一起修設計和規格" } },
              nodes: [
                { who: { en: "Designer", zh: "PD" }, title: { en: "Design", zh: "出設計" } },
                { who: "PM", pm: true, title: { en: "Reply to changes", zh: "回覆設計修改" }, skill: { name: "pm-design", subs: ["dr"] } },
                { who: "PM", pm: true, title: { en: "Adjust the spec", zh: "調整規格" }, skill: { name: "pm-spec", subs: ["write"] } }
              ]
            } },
            { n: "Sprint Planning", title: "Sprint Backlog", text: { en: "Every expected story opened beforehand", zh: "開工前把預期的 Story 都開好" }, skills: [{ name: "pm-ticket", subs: ["spec"] }] },
            { n: "Sprint", ring: {center: { name: { en: "Engineering comes in", zh: "工程進場" }, text: { en: "A daily report for the Daily Scrum", zh: "每天的 Daily Scrum 日報" }, skill: { name: "pm-report", subs: ["daily"] } },
          nodes: [
            { who: { en: "Engineers", zh: "工程師" }, title: { en: "Build", zh: "實作" } },
            { who: "PM", pm: true, title: { en: "Talk it through", zh: "和工程師討論" } },
            { who: "PM", pm: true, title: { en: "Adjust the spec", zh: "調整規格" }, skill: { name: "pm-spec", subs: ["write"] } },
            { who: { en: "Designer", zh: "PD" }, title: { en: "Adjust the design", zh: "調整設計" } },
            { who: "PM", pm: true, title: { en: "Open extra or bug tickets", zh: "開增補票或 bug 票" }, skill: { name: "pm-ticket", subs: ["task", "sprint-bug"] } }
          ]
            } },
            { n: "Sprint Review", title: { en: "Launch", zh: "上線" }, text: { en: "A release note for the teams who use it", zh: "給使用單位的 release note" }, skills: [{ name: "pm-launch", subs: ["release"] }] },
            { n: "Retrospective", title: { en: "Look back", zh: "回顧" }, text: { en: "The record, narrowed to conclusions", zh: "把紀錄收斂成結論" }, skills: [{ name: "pm-launch", subs: ["retro"] }] }
          ],
          base: { name: { en: "Next sprint", zh: "下一個 Sprint" }, text: { en: "Retro fixes, the next phase and unfinished work go back to the Product Backlog", zh: "回顧的改進、下一階段、沒做完的，回到 Product Backlog" } },
          side: { name: "pm-report", subs: ["weekly"], text: { en: "A weekly report across every sprint", zh: "跨 Sprint 的每週回報" } }
        },
        stepsFold: { en: "Step by step", zh: "逐步說明" },
        steps: [
          { name: "pm-intake · pm-discover", text: { en: "Support's complaints and notes go in as they are. Interviews become pain evidence with people's own words, and other products' refund flows show what's conventional and where we can do better.", zh: "客服的抱怨和紀錄原樣收進來；訪談整理成有原話可查的痛點證據；再看其他產品怎麼做退款，找出慣例和能做得更好的地方。" } },
          { name: "pm-plan scope · decide", text: { en: "Hypotheses written down, split into phases if needed: say, partial refunds on a single item first, with shipping and discount splits later.", zh: "寫下假設，必要時切階段：例如先做單一商品的部分退款，運費和折扣分攤留到下一階段。" } },
          { name: "pm-spec write", text: { en: "Once the direction is roughly agreed, it becomes spec.md: background and goal, metrics, scope, stories and acceptance criteria. Anything unsettled stays an open question.", zh: "方向大致確認後才寫成 spec.md：背景與目標、指標、範圍、Story 與驗收條件。還沒定案的留在待確認。" } },
          { name: "pm-design prototype", text: { en: "Before design comes in, I turn the spec into a prototype that runs in the browser, to check screens and flow. It isn't wired to a back end.", zh: "設計進場前，先把規格做成瀏覽器就能看的 prototype，驗證畫面和流程，不串後端。" } },
          { name: "pm-design dr · pm-spec write", text: { en: "Once the designer comes in, each change is logged on its own and I reply to each; accepted ones adjust the spec, until design and spec are settled.", zh: "PD 進場後，每個設計修改各記一條，我逐條回覆；接受的就調整規格，直到設計和規格都定案。" } },
          { name: "pm-ticket spec", text: { en: "Before the sprint, every expected story is opened in Jira, split into front end and back end.", zh: "Sprint 開始前，把預期的 Story 都開好，拆成前端、後端。" } },
          { name: "Kickoff", text: { en: "The sprint opens by going through the spec and stories with the engineers.", zh: "和工程師一起過規格與 Story。" } },
          { name: "pm-spec write", text: { en: "Questions come up during the build, and the spec changes with them; every change is logged with a new version.", zh: "實作中和工程師討論，規格跟著調整，每次改動都記下版本與異動。" } },
          { name: "pm-ticket task · sprint-bug", text: { en: "Extra tickets for what the discussion adds, bug tickets for what testing finds.", zh: "討論後要補的開增補票，測試發現的開 bug 票。" } },
          { name: "pm-report daily", text: { en: "Each day's tasks and calendar, put together for the Daily Scrum.", zh: "每天把待辦和行事曆整理成 Daily Scrum 用的日報。" } },
          { name: "pm-launch release", text: { en: "A release note for the teams who use it, like support and finance: what changed, how to use it and what it means for them.", zh: "寫給客服、財務等使用單位的 release note：上了什麼、怎麼用、對他們有什麼影響。" } },
          { name: "pm-launch retro", text: { en: "The record from kickoff to launch becomes a retro: a full draft first, then conclusions narrowed one by one with multiple-choice questions.", zh: "把從 kickoff 到上線的紀錄整理成回顧文件：先出完整草稿，再用選擇題逐條收斂結論。" } }
        ]
      },
      {
        h: { en: "In real use", zh: "實際使用" },
        p: { en: "How often each one ran in my Claude Code sessions from mid-July to mid-November 2026, not counting scheduled runs. Most of the use is the line from writing the spec to review to tickets.", zh: "2026 年 7 月中到 11 月中，各 skill 在我的 Claude Code 裡執行的次數（不含排程自動執行）。主力在「寫規格 → 送審 → 開票」這條線。" },
        table: {
          head: [{ en: "Skill", zh: "Skill" }, { en: "Calls", zh: "次數" }],
          rows: [["pm-ticket", "21"], ["pm-ship", "14"], ["pm-spec write", "11"], ["pm-plan scope", "9"], ["pm-setup tools", "7"], ["pm-report weekly", "6"]]
        }
      },
      {
        h: { en: "The AI runs it, I make the calls", zh: "AI 跑流程，PM 做判斷" },
        list: [
          { en: "Draft first: before writing to files, Notion, Jira or Git, it lists what it will do and waits for my go-ahead.", zh: "先給草稿：寫入檔案、Notion、Jira、Git 前，一律先列出要做的事，我確認後才執行。" },
          { en: "No guessing: unclear business rules or terms are marked as open questions with a hypothesis, never filled in.", zh: "不推論：業務規則、名詞不確定時，標成待確認並附上假說，不自己補。" },
          { en: "An independent check: the pre-flight review runs in a separate context that can't see our conversation, so my explanations can't sway it.", zh: "獨立審查：送審前的預審在獨立 context 執行，看不到前面的對話，我的解釋影響不了它。" },
          { en: "One source of truth: specs live only in the Git spec repo; Notion just receives a one-way copy.", zh: "規格只有一個來源：Git 規格庫。Notion 只做單向輸出。" }
        ]
      },
      {
        h: { en: "All 11 skills", zh: "全部 11 個 skill" },
        wide: true,
        flow: {
          stages: [
            { n: "0", title: { en: "Prepare", zh: "準備" }, skills: [{ name: "pm-setup", subs: ["init", "tools", "sync"] }] },
            { n: "1", title: { en: "Collect", zh: "收素材" }, skills: [{ name: "pm-intake", subs: ["notion", "meeting", "material"] }, { name: "pm-discover", optional: true, subs: ["cases", "pains"] }] },
            { n: "1", title: { en: "Decide", zh: "定方向" }, skills: [{ name: "pm-plan", subs: ["scope", "decide"] }] },
            { n: "2", title: { en: "Write the spec", zh: "寫規格" }, skills: [{ name: "pm-spec", subs: ["write", "story / flow", "reverse", "search"] }], loopTo: true },
            { n: "3-5", title: { en: "Review & design", zh: "審查與設計" }, skills: [{ name: "pm-review", subs: ["qa", "readers", "edge", "impact", "consistency", "polish", "preflight"] }, { name: "pm-design", subs: ["dr", "prototype"] }], loopFrom: true },
            { n: "6", title: { en: "Ship", zh: "送審" }, skills: [{ name: "pm-ship", subs: ["PR", "suggest / apply", "wrap", "notion"] }] },
            { n: "7", title: { en: "Tickets", zh: "開票" }, skills: [{ name: "pm-ticket", subs: ["spec", "bug", "sprint-bug", "task", "more"] }] },
            { n: "8", title: { en: "After launch", zh: "上線後" }, skills: [{ name: "pm-launch", subs: ["release", "archive", "sync-code", "retro"] }] }
          ],
          loop: { en: "Problems found in review, and accepted design changes, go back to the spec", zh: "審查找到的問題、接受的設計修改，都回到規格修改" },
          base: { name: "shared/ · pm-config", text: { en: "Every skill reads the shared writing rules and your private config first", zh: "所有 skill 執行前都先讀共用規則與私人設定" } },
          side: { name: "pm-report", subs: ["digest", "daily", "weekly"], text: { en: "Every day and every week, outside any single feature", zh: "每天、每週的例行回報，不屬於單一需求" } }
        }
      },
      {
        h: { en: "How it evolved", zh: "迭代紀錄" },
        list: [
          { en: "v1: a single pm skill with 9 sub-commands for decisions, review, tickets and announcements.", zh: "v1：只有一個 pm skill，9 個子指令，負責決策、審查、開票、公告。" },
          { en: "Specs moved from Notion to the Git spec repo; spec writing moved to the team's spec-repo skills.", zh: "規格從 Notion 搬到 Git 規格庫，寫規格改由團隊規格庫的 skill 負責。" },
          { en: "v2: put together with the team's skills, 24 skills and 13 commands. Complete, but too many entry points.", zh: "v2：和團隊規格庫的 skill 放在一起，24 個 skill、13 個 command，完整但入口太多。" },
          { en: "v3: regrouped by stage into the 11 here, one entry point per stage. Sub-commands load only when used, so the context never fills up at once.", zh: "v3：依階段重組成現在的 11 個，一個階段一個入口；子指令用到才載入，不會一次塞滿 context。" },
          { en: "To publish it, company details moved to a private config file, so the public skills and the ones I use are the same files.", zh: "為了公開，公司資訊移到私人設定檔，公開的和自己用的是同一份 skill。" }
        ]
      },
      {
        h: { en: "Credits", zh: "來源" },
        p: {
          en: "I wrote the overall v3 structure, plus pm-plan decide, the reader, edge, impact, consistency and polish reviews, the general ticket types, release notes and retros, pm-report and project setup. The other sub-commands are adapted from my team's shared spec repo; their authors are teammates, and they are published de-identified with their consent. Company names, internal systems, people and IDs are replaced with placeholders. MIT licensed.",
          zh: "v3 的整體結構，以及 pm-plan decide、讀者 / 邊界 / 影響 / 矛盾 / 精簡審查、一般票型、release note 與回顧、pm-report、專案初始化由我撰寫。其他子指令改寫自團隊共用的規格庫，原作者為團隊成員，經同意以去識別形式公開。公司名稱、內部系統、人名、ID 都已換成佔位符。MIT 授權。"
        }
      }
    ]
  },

  "echotrail": {
    lead: {
      en: "A career-reflection product we specified in The Mentorship's PM × engineering project, for people who feel stuck in their career but can't say where. Two PMs wrote the spec in a Git repo; two engineers built from it, with a PM mentor and an engineering mentor reviewing.",
      zh: "曼陀號 PM × 工程師合作專案裡一起定義的職涯反思產品，給職涯卡關、卻說不清楚卡在哪裡的人。兩位 PM 在 Git repo 寫規格，兩位工程師照著實作，PM 與工程 mentor 各一位協助審閱。"
    },
    sections: [
      {
        h: { en: "The problem", zh: "要解決的問題" },
        list: [
          { en: "What happened in your career and how you felt about it live apart, so nobody compares them to see where \"everything looks fine\" and \"something feels off\" diverge.", zh: "客觀的職涯紀錄和真實的主觀感受分開存在，沒有人把兩者放在一起比對，看不出「客觀上一切正常」和「主觀上不對勁」之間的落差。" },
          { en: "Most people can't tune prompts, so chatting with a general AI rarely produces a structured picture that fits them; they need a coach that asks one question at a time.", zh: "多數人不會調 prompt，自己跟生成式 AI 聊很難得到結構化、貼近自己的輸出，需要有人一問一答地引導。" },
          { en: "Events pile up without being summed up. Generic tests like RIASEC or DISC give abstract labels that don't connect to what actually happened.", zh: "累積的事件沒有被歸納。RIASEC、DISC 這類通用測驗給的是抽象標籤，連不回真實發生過的經歷。" }
        ]
      },
      {
        h: { en: "What the MVP tests", zh: "MVP 要驗證的事" },
        p: {
          en: "Whether pulling in your career record, collecting how you felt through conversation, cross-checking the two and presenting them in structure gives insight you can't get by chatting with an AI yourself; and whether those events add up to a self-portrait you agree with, closer to your real experience than a generic test. The answer decides whether to build a full engine; the MVP uses a single lightweight prompt to an existing model.",
          zh: "「拉取客觀職涯紀錄＋對話收集主觀感受＋交叉比對＋結構化呈現」這套流程，能不能產出自己跟 AI 聊天達不到的洞察；累積的事件能不能組成一份使用者認同、比通用測驗更貼近真實經歷的自我畫像。結果決定要不要投入完整的自動化引擎；MVP 先用單一 prompt 呼叫既有的模型。"
        }
      },
      {
        h: { en: "Three parts", zh: "三個核心功能" },
        wide: true,
        flow: {
          stages: [
            {
              n: "A", title: { en: "Conversation and input", zh: "對話與輸入" },
              text: { en: "An AI coach asks one question at a time, so you don't need to know how to prompt.", zh: "AI 教練一問一答引導，不需要會調 prompt。" },
              skills: [{ name: { en: "Start", zh: "開始" }, subs: [{ en: "text", zh: "文字" }, { en: "CV or quick import", zh: "履歷或快速匯入" }] },
                       { name: { en: "Conversation", zh: "多輪對話" }, subs: [{ en: "asks for what's missing", zh: "追問還缺的資訊" }, { en: "Generate insight", zh: "產生洞察" }] }]
            },
            {
              n: "B", title: { en: "Timeline and insight", zh: "時間軸與洞察" },
              text: { en: "Each event sets your record against how you felt, to show where they diverge.", zh: "每個事件把客觀紀錄和主觀感受放在一起，看出落差在哪。" },
              skills: [{ name: "Echo Card", subs: [{ en: "one card per event", zh: "每個事件一張" }, { en: "edit or go back to the chat", zh: "可編輯或回到對話補充" }] }]
            },
            {
              n: "C", title: { en: "Dashboard", zh: "儀表板" },
              text: { en: "Events add up to a self-portrait tied to what actually happened, updated as more come in.", zh: "累積的事件組成一份連得回真實經歷的自我畫像，隨新事件增量更新。" },
              skills: [{ name: { en: "Self-portrait", zh: "自我畫像" }, subs: [{ en: "persona", zh: "Persona" }, { en: "what drives you", zh: "驅動因素" }, { en: "word cloud", zh: "文字雲" }, { en: "behaviour patterns", zh: "行為模式" }] },
                       { name: { en: "Career frameworks", zh: "職涯測評" }, subs: [{ en: "career anchors", zh: "職涯錨點" }, "RIASEC", "DISC"] }]
            }
          ],
          base: { name: { en: "MVP", zh: "MVP" }, text: { en: "One lightweight prompt to an existing model, before deciding whether to build a full engine", zh: "先用單一 prompt 呼叫既有模型，再決定要不要投入完整的自動化引擎" } }
        }
      },
      {
        h: { en: "How we worked", zh: "協作方式" },
        list: [
          { en: "The repo is the single source of truth: the spec says what it is now, a decisions file says why and what is still open, and a changelog gives one line per change.", zh: "repo 是規格的單一真實來源：SPEC 寫「現在是什麼」，DECISIONS 寫「為什麼這樣定、還有什麼沒決定」，CHANGELOG 每次改動一句話。" },
          { en: "Small changes go straight to main; bigger ones go through a pull request reviewed by the other PM, never merged by their own author.", zh: "小改動直接推 main；較大的改動開 PR 給另一位 PM 審，不 merge 自己的 PR。" },
          { en: "Engineers raise unclear or unworkable spec as Issues; once settled, the answer goes back into the decisions file.", zh: "工程師發現規格講不清楚或做不到，就開 Issue；有結論後寫回決策紀錄。" },
          { en: "Three Claude Code skills in the repo push the spec, log decisions and log the changelog, so every spec change records its reason.", zh: "repo 裡有三個 Claude Code skill：推 spec、記 decision、記 changelog，讓每次改規格都留下原因。" }
        ]
      },
      {
        h: { en: "What I did", zh: "我做的事" },
        list: [
          { en: "Co-wrote and maintained the MVP spec and decision log with the other PM.", zh: "和另一位 PM 一起撰寫並維護 MVP 規格與決策紀錄。" },
          { en: "Upgraded the coach's system prompt, including a care-first policy for statements about self-harm.", zh: "升級 AI 教練的 System Prompt，包含遇到自傷或極端負面語句時的關懷提示政策。" },
          { en: "Added a grounding table that defines what evidence each Echo Card field needs, so the model doesn't make things up.", zh: "新增 Echo Card 欄位的 Grounding 查核表：每個欄位需要什麼證據才能生成，避免模型幻覺。" },
          { en: "Trimmed the spec of numbers and UI details the team had never agreed on, so engineers wouldn't read them as hard requirements.", zh: "把 team 沒拍板過的數字和 UI 細節從規格刪掉，避免工程師照字面當成硬性規格。" }
        ]
      }
    ]
  },

  "referee": {
    lead: {
      en: "A Claude Code agent I use as a basketball referee: it answers rules and mechanics questions from the FIBA rules, official interpretations and the 2PO / 3PO manuals, and says where each answer comes from.",
      zh: "我當籃球裁判時自己用的 Claude Code agent：從 FIBA 規則、官方解釋和二人 / 三人裁判法手冊回答規則與執法問題，並說明每個答案的出處。"
    },
    sections: [
      {
        h: { en: "What it is", zh: "這是什麼" },
        p: {
          en: "A study aid for refereeing. Ask it whether a play is a violation, how to administer a throw-in after a late time-out, or where to stand in three-person mechanics, and it looks the answer up instead of answering from memory. Every answer carries the article number, the rule version and what kind of source it is: rule text, official interpretation or officiating practice. It also keeps notes of real cases from my games, and has an eval set to measure how accurate it is.",
          zh: "裁判學習工具。問它某個情況算不算違例、最後兩分鐘暫停後前場發球的程序、三人裁判法該怎麼站位，它會去查資料而不是憑記憶回答。每個答案都附條號、規則版本，以及來源性質：規則條文、官方解釋或執法慣例。它也收了我實際執法遇到的案例筆記，並有一套評測集量測準確度。"
        }
      },
      {
        h: { en: "How the knowledge fits", zh: "知識架構" },
        wide: true,
        layers: {
          rows: [
            {
              role: { en: "Application", zh: "執法應用" },
              note: { en: "Who stands where, and how the call gets made on court", zh: "誰站哪裡、場上怎麼做出判決" },
              cells: [
                { name: "IOT", title: { en: "Individual officiating technique", zh: "個人執法技巧" }, text: { en: "Positioning, where to look, signals and focus, for every referee whatever the crew size", zh: "站姿、視線、手勢與專注力，不分裁判人數都要具備" } },
                { name: "2PO", title: { en: "Two-person mechanics", zh: "二人裁判法" }, text: { en: "How two referees split coverage, rotate and switch", zh: "兩位裁判怎麼分責任區、輪轉與換位" } },
                { name: "3PO", title: { en: "Three-person mechanics", zh: "三人裁判法" }, text: { en: "Positions, rotation and areas of responsibility for a crew of three, basic and advanced", zh: "三人制的站位、輪轉與責任區，分基礎版與進階版" } }
              ]
            },
            {
              role: { en: "Support", zh: "輔助" },
              note: { en: "How a rule applies in real game situations", zh: "條文在真實比賽情境怎麼適用" },
              cells: [
                { name: "OBRI", title: { en: "Official interpretations", zh: "官方解釋（判例）" }, text: { en: "FIBA's worked cases for each article, used to settle disputed situations", zh: "FIBA 針對各條文的實務判例，用來判斷爭議情境" } }
              ]
            },
            {
              role: { en: "Foundation", zh: "基礎" },
              note: { en: "What the call is", zh: "判什麼" },
              base: true,
              cells: [
                { name: "FIBA 2024", title: { en: "Official Basketball Rules", zh: "國際籃球規則" }, text: { en: "The 2024 v1.0 English rules decide; the 2022 Chinese edition is for reading in Chinese", zh: "以 2024 v1.0 英文版為準；2022 中文版用來查中文條文" } }
              ]
            }
          ],
          foot: { en: "A question about a call starts from the rules, then the interpretations. A question that mixes a call with positioning reads the rules and the mechanics together.", zh: "判決問題先查規則，再看官方解釋；同時涉及判決與站位的問題，規則和執法手冊一起查。" }
        }
      },
      {
        h: { en: "How it answers", zh: "怎麼回答" },
        steps: [
          { name: { en: "Classify", zh: "分類" }, text: { en: "Decide what kind of question it is: a rule or interpretation, individual technique (IOT), two-person (2PO) or three-person (3PO) mechanics, or a past case.", zh: "先判斷問題類型：規則與判例、個人執法技巧（IOT）、二人裁判法（2PO）、三人裁判法（3PO），或過去的案例。" } },
          { name: { en: "Look it up", zh: "查資料" }, text: { en: "Read the matching documents in a fixed order. Questions that mix a call with positioning read both.", zh: "依固定順序查對應的文件。同時涉及判決和站位的問題，兩邊都查。" } },
          { name: { en: "Cite", zh: "附出處" }, text: { en: "Answer with the article, page and version. Where the 2022 Chinese and 2024 English rules differ, the 2024 English text wins.", zh: "回答附條號、頁碼與版本。2022 中文版和 2024 英文版有出入時，以 2024 英文版為準。" } },
          { name: { en: "Say when unsure", zh: "不確定就說" }, text: { en: "If it cannot confirm something, it says so rather than guessing.", zh: "查不到或不確定時直接說，不猜。" } }
        ]
      },
      {
        h: { en: "What's inside", zh: "內容" },
        list: [
          { en: "Rules and interpretations: FIBA Official Basketball Rules 2024 v1.0 and the official interpretations, plus the 2022 Chinese edition.", zh: "規則與判例：FIBA 2024 v1.0 官方規則與官方解釋，以及 2022 中文版。" },
          { en: "Officiating manuals: individual technique (IOT), two-person (2PO) and three-person (3PO) mechanics.", zh: "執法手冊：個人執法技巧（IOT）、二人裁判法（2PO）、三人裁判法（3PO）。" },
          { en: "Case notes from my own games: situation, what went wrong, the correct mechanic and what to review.", zh: "我自己的執法案例筆記：情境、問題點、正確機制與複習重點。" },
          { en: "An eval set of 66 questions with expected answers and scoring points.", zh: "66 題評測集，含標準答案與評分要點。" },
          { en: "The rule PDFs are not in the repo for copyright reasons; the README lists where to get them, and a script turns the Chinese PDFs into searchable text.", zh: "規則 PDF 因版權不放在 repo 裡；README 列出取得方式，並附把中文 PDF 轉成可搜尋文字的 OCR 工具。" }
        ]
      },
      {
        h: { en: "Testing it", zh: "評測" },
        table: {
          head: [{ en: "Round", zh: "輪次" }, { en: "Questions", zh: "題目" }, { en: "Result", zh: "結果" }],
          rows: [
            [{ en: "Baseline, 2026-11-14", zh: "基準線，2026-11-14" }, { en: "51 rules, mechanics and trap questions", zh: "51 題：規則、執法機制、陷阱題" }, { en: "51 pass; 8 cited the wrong sub-article", zh: "51 題通過；8 題子條號引錯" }],
            [{ en: "Round 2, 2026-11-15", zh: "第二輪，2026-11-15" }, { en: "15 hard questions", zh: "15 題難題" }, { en: "14 pass, 1 partial", zh: "14 題通過、1 題部分正確" }]
          ]
        },
        p: {
          en: "These numbers are easy to over-read: the questions are still on the easy side, each round ran once, the hard questions' answers are not yet human-reviewed, and the agent can see the case notes. After the first round I added a rule to the agent's instructions about verifying sub-article numbers, which fixed most of those citations.",
          zh: "這些數字不要過度解讀：題目仍偏容易、每輪只跑一次、難題的標準答案還沒經人工審核，而且 agent 看得到案例筆記。第一輪後我在 agent 的規則裡加上「引用第三層條號前要先核對」，大部分條號錯誤因此修正。"
        }
      },
      {
        h: { en: "Known limits", zh: "已知限制" },
        list: [
          { en: "It sometimes says the 2022 and 2024 rules are the same where they differ.", zh: "2022 與 2024 版內容不同時，偶爾會說兩版「相同」。" },
          { en: "Third-level sub-articles (such as 25.2.1) are occasionally cited wrong, though the conclusion is usually right.", zh: "第三層子條號（如 25.2.1）偶爾引錯，結論通常正確。" },
          { en: "When a question leaves out the foul type or possession, it sometimes answers instead of asking.", zh: "題目缺少犯規種類、球權等條件時，偶爾直接下結論而不追問。" }
        ]
      },
      {
        h: { en: "Note", zh: "聲明" },
        p: {
          en: "A personal study tool, not an official resource, and its answers can be wrong. On court and in exams, the FIBA rules and the referee authority's instructions decide. My own content (instructions, case notes, eval set, tools) is MIT licensed.",
          zh: "這是個人學習工具，不是官方資源，答案可能有誤。場上判決與考試請以 FIBA 官方規則及裁判主管單位的指示為準。我自己撰寫的內容（指令、案例筆記、評測集、工具）以 MIT 授權釋出。"
        }
      }
    ]
  }
};
