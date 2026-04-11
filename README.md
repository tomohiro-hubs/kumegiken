# 株式会社久米技建 コーポレートサイト

## プロジェクト概要
株式会社久米技建のコーポレートサイトリニューアルプロジェクト。防水工事・大規模修繕の専門会社として「技術者の顔が見える、都市型建築のパートナー」をコンセプトにしたデザインで構築。

## デザイン方針
- **カラー**: ダークネイビー(#1A2744) × ホワイト × アクセントオレンジ(#E8740C)
- **フォント**: Noto Sans JP + Inter
- **レイアウト**: 余白を活かしたシングルカラム、1セクション1メッセージ
- **差別化**: 「人が見える」建設業サイト

## 完成済み機能・ページ

### トップページ (index.html)
- ファーストビュー（キャッチコピー + CTA）
- 数字で見る久米技建セクション（カウンターアニメーション付き）
- 選ばれる3つの理由セクション
- サービス一覧セクション（6カード）
- 施工事例セクション
- 施工の流れセクション（7ステップ）
- お客様の声セクション
- 代表メッセージセクション
- 対応エリアセクション
- コラムセクション
- CTAセクション
- PC追従フロートボタン / SP追従CTAバー
- 構造化データ（JSON-LD）

### 第1階層ページ
| ページ名 | パス | 状態 |
|---|---|---|
| トップページ | `/index.html` | ✅ 完成 |
| 選ばれる理由 | `/reason/index.html` | ✅ 完成 |
| サービス一覧 | `/service/index.html` | ✅ 完成 |
| 施工事例一覧 | `/works/index.html` | ✅ 完成（フィルタリング機能付き） |
| 施工の流れ | `/flow/index.html` | ✅ 完成 |
| お客様の声 | `/voice/index.html` | ✅ 完成 |
| コラム一覧 | `/column/index.html` | ✅ 完成 |
| 会社概要 | `/company/index.html` | ✅ 完成 |
| 採用情報 | `/recruit/index.html` | ✅ 完成 |
| お問い合わせ | `/contact/index.html` | ✅ 完成（フォームバリデーション付き） |
| 見積もりシミュレーション | `/simulation/index.html` | ✅ 完成（リアルタイム計算） |
| プライバシーポリシー | `/privacy/index.html` | ✅ 完成 |
| 協力会社お問い合わせ | `/partner/index.html` | ✅ 完成 |

### 第2階層：サービス個別ページ
| ページ名 | パス | 状態 |
|---|---|---|
| 大規模修繕工事 | `/service/large-scale-repair/index.html` | ✅ 完成 |
| 防水工事 | `/service/waterproofing/index.html` | ✅ 完成 |
| 外壁塗装 | `/service/painting/index.html` | ✅ 完成 |
| シーリング工事 | `/service/sealing/index.html` | ✅ 完成 |
| 雨漏り調査・補修 | `/service/leak-repair/index.html` | ✅ 完成（緊急CTA付き） |
| 建物診断 | `/service/building-inspection/index.html` | ✅ 完成 |

### 第2階層：施工事例個別ページ
| ページ名 | パス | 状態 |
|---|---|---|
| 西宮市 マンション 屋上防水工事 | `/works/nishinomiya-mansion-waterproofing-01/` | ✅ 完成 |
| 大阪市 ビル 大規模修繕工事 | `/works/osaka-building-large-scale-repair-01/` | ✅ 完成 |
| 神戸市 マンション 外壁塗装 | `/works/kobe-mansion-painting-01/` | ✅ 完成 |
| 尼崎市 店舗 雨漏り補修 | `/works/amagasaki-shop-leak-repair-01/` | ✅ 完成 |

### 第2階層：会社情報配下
| ページ名 | パス | 状態 |
|---|---|---|
| 代表メッセージ | `/company/message/index.html` | ✅ 完成 |
| スタッフ紹介 | `/company/staff/index.html` | ✅ 完成 |
| 対応エリア | `/company/area/index.html` | ✅ 完成 |
| 沿革 | `/company/history/index.html` | ✅ 完成 |

### 第2階層：採用情報配下
| ページ名 | パス | 状態 |
|---|---|---|
| 防水職人 募集要項 | `/recruit/waterproofing-craftsman/index.html` | ✅ 完成 |
| 施工管理 募集要項 | `/recruit/construction-manager/index.html` | ✅ 完成 |

### 第2階層：コラム記事
| ページ名 | パス | 状態 |
|---|---|---|
| 防水工事とは？ | `/column/waterproofing-guide/index.html` | ✅ 完成 |

### 特殊ページ
| ページ名 | パス | 状態 |
|---|---|---|
| 水中点検・調査事業 LP | `/dive-survey/index.html` | ✅ 完成 |

## 共通機能
- **レスポンシブデザイン**: PC / タブレット / スマートフォン対応
- **モバイルメニュー**: ハンバーガーメニュー + オーバーレイ
- **スクロールアニメーション**: IntersectionObserver による reveal アニメーション
- **カウンターアニメーション**: 数字が0からカウントアップ
- **追従CTA**: PC=右下フロートボタン / SP=下部固定バー
- **Back to Top ボタン**: スクロール時に表示
- **施工事例フィルタリング**: カテゴリ別の絞り込み
- **見積もりシミュレーション**: リアルタイム計算機能
- **フォームバリデーション**: クライアントサイド入力チェック

## 技術スタック
- HTML5 + CSS3 + Vanilla JavaScript
- Google Fonts (Noto Sans JP, Inter)
- Font Awesome 6.4.0
- IntersectionObserver API

## プレースホルダー写真（AI生成・全20枚）

サイト全体の雰囲気確認用として、AI生成による仮写真を各ページに配置済み。

### 生成画像一覧
| ファイル名 | 用途 | 使用ページ |
|---|---|---|
| `images/hero-main.jpg` | ヒーロー画像（足場作業全景） | トップページ, 施工事例 |
| `images/waterproofing-hands.jpg` | 防水施工手元アップ | 選ばれる理由, サービス, コラム |
| `images/team-group.jpg` | チーム集合写真 | トップ, 選ばれる理由, 会社, スタッフ, エリア |
| `images/president-suit.jpg` | 代表ポートレート（スーツ） | トップ代表メッセージ, 代表メッセージ |
| `images/president-workwear.jpg` | 代表ポートレート（作業着） | スタッフ紹介 |
| `images/before-after.jpg` | 施工前後比較 | (今後追加用) |
| `images/painting-work.jpg` | 外壁塗装作業風景 | サービス一覧, 外壁塗装, 施工事例, コラム |
| `images/inspection-scene.jpg` | 建物診断シーン | 選ばれる理由, 建物診断, 施工の流れ |
| `images/sealing-work.jpg` | シーリング施工手元 | サービス一覧, シーリング, 施工事例 |
| `images/leak-repair.jpg` | 雨漏り補修作業 | サービス一覧, 雨漏り補修, 施工事例, コラム |
| `images/dive-survey.jpg` | 水中点検シーン | 水中点検LP |
| `images/consultation.jpg` | 顧客相談シーン | 施工の流れ, スタッフ, コラム |
| `images/recruit-training.jpg` | 若手育成シーン | 採用情報 |
| `images/building-completed.jpg` | 改修完了建物外観 | サービス一覧, 施工事例 |
| `images/waterproofing-rooftop.jpg` | 屋上防水施工 | サービス, 施工事例, コラム |
| `images/large-scale-aerial.jpg` | 大規模修繕全景 | サービス一覧, 大規模修繕, 施工事例, コラム |
| `images/team-meeting.jpg` | チーム打ち合わせ | スタッフ紹介 |
| `images/crack-inspection.jpg` | クラック計測 | サービス一覧, 施工事例 |
| `images/deteriorated-building.jpg` | 劣化建物（施工前） | 施工事例詳細（Before） |
| `images/scaffold-install.jpg` | 足場設置作業 | 施工事例, 大規模修繕 |

### 写真スタイル
- **撮影テイスト**: ドキュメンタリーリアリズム
- **照明**: 自然光
- **構図**: クリーンコンポジション
- **カテゴリ**: 現場作業風景（手元アップ・全身ショット・チーム作業）、チーム集合写真、代表ポートレート（作業着＆スーツ）、施工前後比較、診断・調査シーン

## 未実装・今後の開発予定

### 施工事例 追加ページ（目標20件以上）
- `/works/nishinomiya-building-sealing-01/`
- `/works/takarazuka-mansion-waterproofing-01/`
- `/works/osaka-mansion-large-scale-repair-01/`
- `/works/itami-apartment-painting-01/`
- `/works/ashiya-house-waterproofing-01/`
- `/works/suita-factory-waterproofing-01/`
- その他10件以上

### コラム記事 追加ページ（目標15件以上）
- `/column/large-scale-repair-guide/`
- `/column/leak-cause-and-fix/`
- `/column/rooftop-waterproofing-lifespan/`
- `/column/painting-timing/`
- `/column/fire-insurance-leak-repair/`
- `/column/sealing-importance/`
- `/column/building-inspection-guide/`
- `/column/how-to-choose-contractor/`
- `/column/nishinomiya-waterproofing-area/`

### その他今後の対応
1. **オリジナル写真の撮影・差し替え**: 現在AIプレースホルダー写真（生成画像20枚）を全ページに適用済み。プロカメラマンによる実写撮影後に差し替え予定
2. **Google Map 埋め込み**: 会社概要ページのアクセスマップ
3. **LINE公式アカウント連携**: お問い合わせフォームへのLINE導線追加
4. **Google Search Console連携**: インデックス登録・パフォーマンス監視
5. **Google Analytics設置**: アクセス解析
6. **301リダイレクト設定**: 旧URL→新URLの転送設定（サーバー側）
7. **OGP画像設定**: SNSシェア用画像の作成・設定
8. **ファビコン設定**: サイトアイコンの作成・設定
9. **動画ファーストビュー**: 撮影後にヒーローセクションへ動画埋め込み

## 旧URL → 新URL リダイレクト対応（サーバー側で設定が必要）
| 旧URL | 新URL |
|---|---|
| `/tosou/` | `/service/painting/` |
| `/achievements/` | `/works/` |
| `/column/nishinomiya-bousui/` | `/column/waterproofing-guide/` |
| `/column/nishinomiya-seal/` | `/column/sealing-importance/` |
| `/column/nishinomiya-tosou/` | `/column/painting-timing/` |

## ファイル構成
```
index.html                    トップページ
css/style.css                 共通スタイルシート
js/main.js                    共通JavaScript
reason/index.html             選ばれる理由
service/
  ├── index.html              サービス一覧
  ├── large-scale-repair/     大規模修繕工事
  ├── waterproofing/          防水工事
  ├── painting/               外壁塗装
  ├── sealing/                シーリング工事
  ├── leak-repair/            雨漏り調査・補修
  └── building-inspection/    建物診断
works/
  ├── index.html              施工事例一覧
  ├── nishinomiya-mansion-waterproofing-01/
  ├── osaka-building-large-scale-repair-01/
  ├── kobe-mansion-painting-01/
  └── amagasaki-shop-leak-repair-01/
flow/index.html               施工の流れ
voice/index.html              お客様の声
column/
  ├── index.html              コラム一覧
  └── waterproofing-guide/    防水工事ガイド
company/
  ├── index.html              会社概要
  ├── message/                代表メッセージ
  ├── staff/                  スタッフ紹介
  ├── area/                   対応エリア
  └── history/                沿革
recruit/
  ├── index.html              採用情報
  ├── waterproofing-craftsman/ 防水職人
  └── construction-manager/   施工管理
simulation/index.html         見積もりシミュレーション
contact/index.html            お問い合わせ
partner/index.html            協力会社お問い合わせ
privacy/index.html            プライバシーポリシー
dive-survey/index.html        水中点検・調査事業 LP
images/                        プレースホルダー写真（AI生成20枚）
```

## 総ページ数
- 現在実装済み: **約33ページ**（全ページに写真配置済み）
- 初期公開時目標: 44ページ
- 半年後目標: 63ページ以上
