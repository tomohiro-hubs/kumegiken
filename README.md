# 株式会社久米技建 Webサイト

Next.js (App Router) で構築した静的サイトです。  
GitHub Pages（`https://tomohiro-hubs.github.io/kumegiken/`）へ GitHub Actions で自動デプロイします。

## ローカル開発

```bash
npm ci
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認してください。

## ビルド

```bash
npm run build
```

GitHub Pages 向け出力をローカル検証する場合:

```bash
GITHUB_PAGES=true npm run build
```

## デプロイ（自動）

- `main` へ push すると GitHub Actions が自動実行されます
- ワークフロー: `.github/workflows/deploy-pages.yml`
- 出力: `out/`
- GitHub Pages の `Source` は **GitHub Actions** を使用

## 重要な実装ルール

- 画像URLは `assetPath()` を使用する  
  - ファイル: `src/lib/assetPath.js`
- 内部リンクは `routePath()` を使用する  
  - ファイル: `src/lib/routePath.js`
- これにより GitHub Pages の `basePath` (`/kumegiken`) 配下でもリンク切れを防ぎます

## GitHub Pages 関連のトラブルシュート

- CSS/JSが当たらない: Pages の Source が `GitHub Actions` か確認
- 画像が出ない: `src="/images/..."` の直書きが残っていないか確認
- 下層ページが404: `href="/..."` の直書きが残っていないか確認

## 参考

- Next.js Static Export: `node_modules/next/dist/docs/01-app/02-guides/static-exports.md`
