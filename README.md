# 株式会社久米技建 Webサイト

Next.js (App Router) で構築した静的サイトです。  
GitHub Pages（`https://tomohiro-hubs.github.io/kumegiken/`）へ GitHub Actions で自動デプロイ、またはビルド成果物をルートディレクトリに配置して管理しています。

## ローカル開発

```bash
npm ci
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認してください。

## ビルドとルート同期 (重要)

このプロジェクトは `output: 'export'` でビルドされますが、ビルド成果物である `out/` の内容をプロジェクトルート（`./`）にコピーして Git 追跡（`index.html` や `404.html` など）しています。
**変更を反映させるには、ビルド後に必ずルートディレクトリへコピー同期を行ってください。**

```bash
# アプリケーションのビルド
npm run build

# ビルド成果物をルートに同期
cp -R out/. .
```

GitHub Pages 向け出力をローカル検証する場合:

```bash
GITHUB_PAGES=true npm run build
cp -R out/. .
```

## デプロイ

- `main` へ push すると GitHub Actions が自動実行されます
- ワークフロー: `.github/workflows/deploy-pages.yml`
- 出力: `out/`
- GitHub Pages の `Source` は **GitHub Actions** を使用、またはルートの静的ファイルを直接配信しています

## 重要な実装ルール

- 画像URLは `assetPath()` を使用する  
  - ファイル: `src/lib/assetPath.js`
- 内部リンクは `routePath()` を使用する  
  - ファイル: `src/lib/routePath.js`
- これにより GitHub Pages の `basePath` (`/kumegiken`) 配下でもリンク切れを防ぎます

## 最近の主な変更履歴

- **2026年6月**
  - お電話番号の変更（`0798-27-5653` → `0120-449-802`）を `siteConfig.js` およびハードコード箇所へ全適用。
  - サービス・下層ページのヒーローセクションへの左右パディング（`20px`）の適用。
  - トップページ「無料建物診断・点検メニュー」の見出しブロックをレスポンシブ表示（768px以下）時に中央揃えにするスタイルを適用。

## GitHub Pages 関連 of トラブルシュート

- CSS/JSが当たらない: Pages の Source が `GitHub Actions` か確認
- 画像が出ない: `src="/images/..."` の直書きが残っていないか確認
- 下層ページが404: `href="/..."` の直書きが残っていないか確認

## 参考

- Next.js Static Export: `node_modules/next/dist/docs/01-app/02-guides/static-exports.md`
