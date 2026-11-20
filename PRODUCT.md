# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated：純靜態 HTML / CSS / Vanilla JS，不需建置步驟，部署在 GitHub Pages（規劃書指定）。理由：與 Webber 既有的 LifeOS 同技術、好改好懂；雙語內容集中在單一資料來源，避免兩份頁面分頭維護。

## Users

- **主要讀者一：招募方與面試官**，在評估 Webber 是否值得約談時快速瀏覽，想在一兩分鐘內看懂「這個人是誰、做過什麼、怎麼思考」。
- **主要讀者二：同行 PM / Builder 與一般讀者**，從文章或社群連進來，想看他的觀點、筆記與實作。
- 非技術讀者先看成果；技術讀者可一路點進 GitHub 原始碼。

## Product Purpose

以「Webber 這個人」為核心的長期數位基地（Personal Hub），不是一次性的求職作品集。網站負責介紹、策展與導流，把作品、觀點、學習串成一個入口。成功的樣子：訪客看完知道他的定位，點進至少一個作品或一篇文章，有需要時找得到聯絡方式。

## Positioning

一位會親手把想法做成可運作產品的 PM：網站上展示的是真正做出來、可以點開操作的東西（Build），搭配公開的思考（Think）與學習紀錄（Learn），而不是只有職稱與履歷敘述。品牌綁的是人，不是目前的職稱，職涯換軌時網站仍延續。

## Operating Context

- 四個支柱：**Build · Think · Learn · Explore**。
- 平台分工（Webber 確認：Build 放 GitHub、Think 放 Medium、Learn 放 Substack；各自是 source of truth，網站只連到原文、不重複存全文）：
  - GitHub — Build：原型、AI Workflow、原始碼與 README。
  - Medium — Think：深度文章與產品觀點。
  - Substack — Learn：知識筆記與學習紀錄。
  - LinkedIn / 履歷 — 專業身分。
  - 外部連結統一整理在 Webber 的 portaly.cc 頁面（確切網址待提供）。
- 首頁草圖（規劃書）：定位標語 → 外部連結 → Things I've Built → Things I've Written → Things I've Learned → About → Explore（可選）。導覽：Work | Writing | About。
- 規劃書原文：`C:\Users\11030\OneDrive\文件\personal-hub-plan.md`。

## Capabilities and Constraints

- **中英雙語**，第一版就要支援切換。
- 首頁以手動策展為主（每類最多 3 篇）；另有 Blog 頁（blog.html），每天由 GitHub Actions 執行 `scripts/sync-posts.mjs`，自動同步 Medium 與 Substack 的全部文章到 `posts.json`（Webber 2026-11-14 確認）。
- 長期可擴充：作品、文章增加時只需更新資料，不必改版面。
- Explore（旅行、登山、潛水、Camino）第一版是否上線：未決定，預留位置即可。
- 尚未決定：最終英文定位標語（候選三句見規劃書）、精選哪幾篇 Medium 文章與 Substack 筆記、確切的外部連結網址。

## Brand Commitments

- 名字：Webber Hsu（徐偉博）。
- 定位文案候選：「Building products. Exploring ideas. Learning continuously.」等三句，尚未選定。
- 規劃書明訂的原則：極簡、內容優先，不為動畫與裝飾犧牲實作時間；先展示成果；精選而非全部同步。

## Evidence on Hand

已完成、可公開的作品（Webber 確認）：

- **LifeOS** — 個人目標、OKR 與任務管理工具，純 HTML + Supabase，已部署於 `https://lifeos-phi-one.vercel.app`（原始碼：`../index.html`）。
- **籃球裁判助理** — 用 Claude Code 做的 FIBA 規則問答 agent，含案例筆記與評測集，公開在 github.com/TsuWebber/basketball-referee-assistant。
- **PM Workflow Skills** — 11 個 Claude Code skill 組成的 PM 工作流（規格、審查、Jira 開票、上線），公開在 github.com/TsuWebber/pm-workflow-skills。
- **EchoTrail prototype** — PM 課程小組專案的互動原型（與 Ariel 合作，2026-08-30 Pitch + demo）。

不可捏造：

- 規劃書中的 repo 清單（`cdp-segment-builder`、`pm-ai-workflows` 等）都是構想，不能寫成已完成作品。
- 沒有量化成效數據，不宣稱任何改善百分比或使用者數。
- 沒有推薦語、客戶名單或媒體報導。
- 現職公司的程式碼、PRD、截圖、內部數據未經授權不得公開。

## Product Principles

1. **人比職稱長久**：所有文案與結構都圍繞 Webber 這個人，不鎖死在 PM 這個角色。
2. **做出來的才算數**：作品區只放可點開、可操作的東西，並誠實區分「已完成／實驗中／規劃中」。
3. **網站是入口，不是倉庫**：全文留在原平台，網站負責策展、摘要與導流。
4. **兩種讀者都照顧到**：非技術讀者一眼看懂成果，技術讀者有路徑深入原始碼。
5. **好維護才會持續更新**：新增一篇文章或一個作品，應該只是改一筆資料。

## Accessibility & Inclusion

雙語切換需正確標示 `lang`（`zh-Hant` / `en`），讓螢幕閱讀器與搜尋引擎辨識語言。
