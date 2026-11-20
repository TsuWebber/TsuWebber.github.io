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
  Every text value is { en, zh }; table cells may be plain strings.
*/
window.HUB_PROJECTS = {

  "pm-ai-workflows": {
    lead: {
      en: "The Claude Code skills I use every day as a software PM: one entry point per stage, from collecting material and writing specs to review, Jira tickets, release and the weekly report.",
      zh: "我身為軟體 PM 每天實際在用的 Claude Code skill：一個工作階段一個入口，從收素材、寫規格，到審查、開 Jira 票、上線和週報。"
    },
    sections: [
      {
        h: { en: "What it is", zh: "這是什麼" },
        p: {
          en: "One Claude Code plugin, pm-workflow, with 11 skills. Each skill covers one stage of the work and splits into sub-commands, so I only need to know which stage I am in. Specs live in a Git-managed spec repo and move through drafts, pull requests and review, so engineering, QA and design always read the same latest version. Everything it writes is in Traditional Chinese, following how Taiwanese software teams usually split the work.",
          zh: "一個 Claude Code plugin「pm-workflow」，11 個 skill。每個 skill 對應一個工作階段，底下再用子指令區分，只要知道自己在哪個階段就知道要叫哪個。規格寫在 Git 管理的規格庫，用草稿、PR、審查迭代，RD、QA、設計看的永遠是同一份最新版本。全部用繁體中文產出，用語和流程貼近台灣軟體團隊的分工。"
        }
      },
      {
        h: { en: "The flow", zh: "完整流程" },
        figure: {
          src: "../img/projects/pm-skill-map.svg",
          alt: { en: "Map of the 11 pm-workflow skills, from pm-setup at the top down to pm-launch, with pm-review and pm-design looping back to pm-spec.", zh: "pm-workflow 11 個 skill 的關聯圖：由上往下從 pm-setup 到 pm-launch，pm-review 與 pm-design 會回到 pm-spec。" },
          caption: { en: "The main line runs top to bottom. Problems found in review, and accepted design changes, go back to the spec.", zh: "主線由上往下；審查找到的問題、接受的設計修改，都回到規格修改。" }
        }
      },
      {
        h: { en: "Stages", zh: "各階段" },
        steps: [
          { name: "pm-setup", text: { en: "Project background, tools and keeping the spec repo up to date.", zh: "專案背景、工具授權、規格庫更新到最新。" } },
          { name: "pm-intake · pm-discover", text: { en: "Bring in Notion specs, meeting notes and loose material; optionally research how others solve it and whether the pain is real.", zh: "把 Notion 規格、會議記錄、零散素材整理進來；選用的調研：別人怎麼做、這個痛是不是真的。" } },
          { name: "pm-plan", text: { en: "Decide whether to do it and how far, and write a decision document for big changes.", zh: "要不要做、範圍到哪，重大改動寫決策文件。" } },
          { name: "pm-spec", text: { en: "Write the spec with acceptance criteria and metrics, user stories and flows; reverse-engineer current behaviour from code.", zh: "寫規格（AC 與指標一起寫）、User Story、Userflow；從程式碼反推現況規格。" } },
          { name: "pm-review · pm-design", text: { en: "QA, reader, edge-case, impact and consistency checks, plus a full pre-flight review; record designers' changes and prototype.", zh: "QA、讀者、邊界、跨部門、矛盾檢查與送審前預審；記錄設計師的修改、做可操作的 prototype。" } },
          { name: "pm-ship · pm-ticket", text: { en: "Group commits and open the PR; split the spec into front-end and back-end Jira stories, bugs and tasks.", zh: "分組 commit、開 PR；依規格拆前端 / 後端 Jira Story、Bug、Task。" } },
          { name: "pm-launch · pm-report", text: { en: "Release notes for sales, operations and support, archiving and retros; daily and weekly reports.", zh: "給業務、營運、客服看的 release note、封存與回顧；每日與每週回報。" } }
        ]
      },
      {
        h: { en: "In real use", zh: "實際使用" },
        p: { en: "How often I called each one in Claude Code from mid-July to mid-November 2026, not counting scheduled runs. Most of the use is the line from writing the spec to review to tickets.", zh: "2026 年 7 月中到 11 月中，我在 Claude Code 裡叫用的次數（不含排程自動執行）。主力在「寫規格 → 送審 → 開票」這條線。" },
        table: {
          head: [{ en: "Skill", zh: "Skill" }, { en: "Calls", zh: "次數" }],
          rows: [["pm-ticket", "21"], ["pm-ship", "14"], ["pm-spec write", "11"], ["pm-plan scope", "9"], ["pm-setup tools", "7"], ["pm-report weekly", "6"]]
        }
      },
      {
        h: { en: "Design choices", zh: "設計原則" },
        list: [
          { en: "One entry per stage. It started as 24 skills and 13 commands, many doing similar things; grouping by stage brought it to 11.", zh: "一個階段一個入口。原本有 24 個 skill、13 個 command，很多在做相近的事，依工作階段收成 11 個。" },
          { en: "Sub-commands load only when used, so the context never fills up at once.", zh: "子指令按需載入，用到才讀，不會一次塞滿 context。" },
          { en: "One source for specs: the Git spec repo. Notion only receives a one-way copy for presentation.", zh: "規格只有一個來源：Git 規格庫。Notion 只做單向輸出。" },
          { en: "Company details live in a private config file, so the public skills and the ones I use are the same files.", zh: "公司資訊放在私人設定檔，公開的和自己用的是同一份 skill。" },
          { en: "Draft first: before writing to files, Notion, Jira or Git, it lists what it will do and waits for confirmation.", zh: "先給草稿：寫入檔案、Notion、Jira、Git 前一律先列提案，確認後才執行。" },
          { en: "No guessing. Unclear business rules or terms are marked as open questions with a hypothesis.", zh: "不推論。業務規則、名詞不確定時標成待確認並附假說，不自己補。" },
          { en: "The pre-flight review runs in a separate context that cannot see the conversation, so the author's explanations don't sway it.", zh: "送審前預審在獨立 context 執行，看不到前面的對話，避免作者的說明影響審查。" }
        ]
      },
      {
        h: { en: "How it evolved", zh: "迭代紀錄" },
        list: [
          { en: "v1: a single pm skill with 9 sub-commands for decisions, review, tickets and announcements.", zh: "v1：只有一個 pm skill，9 個子指令，負責決策、審查、開票、公告。" },
          { en: "Specs moved from Notion to the Git spec repo; spec writing moved to the team's spec-repo skills.", zh: "規格從 Notion 搬到 Git 規格庫，寫規格改由團隊規格庫的 skill 負責。" },
          { en: "v2: put together with the team's skills, 24 skills and 13 commands. Complete, but too many entry points.", zh: "v2：和團隊規格庫的 skill 放在一起，24 個 skill、13 個 command，完整但入口太多。" },
          { en: "v3: regrouped by stage into the 11 skills here.", zh: "v3：依階段重組成現在的 11 個。" }
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
