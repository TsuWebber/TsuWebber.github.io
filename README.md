# Webber Hsu · Personal Hub

Webber Hsu（徐偉博）的個人網站，中英雙語：<https://tsuwebber.github.io>

不是一次性的求職作品集，而是長期的個人入口。網站負責介紹、策展與導流，內容分四個支柱：

- **Build**：做出來、可以點開操作的作品，原始碼放在 GitHub
- **Think**：產品觀點與深度文章，原文在 Medium
- **Learn**：知識筆記與學習紀錄，原文在 Substack
- **Explore**：旅行、登山、潛水等生活探索

## 技術

純靜態 HTML、CSS、Vanilla JS，不需要建置，部署在 GitHub Pages。

| 檔案 | 用途 |
|---|---|
| `index.html`、`main.js`、`styles.css` | 首頁 |
| `content.js` | 首頁所有雙語內容（作品、文章、介紹）的單一資料來源 |
| `blog.html`、`blog.js`、`posts.json` | Blog 頁，列出 Medium 與 Substack 的全部文章 |
| `scripts/sync-posts.mjs` | 把 Medium、Substack 的新文章同步進 `posts.json` |
| `scripts/serve.py` | 本機預覽用、不快取的小伺服器 |
| `PRODUCT.md`、`DESIGN.md` | 產品定位與設計系統說明 |

## 本機預覽

```bash
python scripts/serve.py 5173
```

打開 <http://localhost:5173>。

## 同步文章

GitHub Actions 每天台北時間 06:00 會跑一次 `sync-posts.mjs`。不過 Substack 會擋 GitHub Actions 的請求，所以有新的 Substack 筆記時，要在本機手動跑一次再推上來：

```bash
node scripts/sync-posts.mjs
```

## 新增內容

- 新作品、精選文章：改 `content.js`，版面不用動
- 文章英文標題：在 `posts.json` 該篇加上 `title_en`（說明見 `sync-posts.mjs` 開頭註解）
