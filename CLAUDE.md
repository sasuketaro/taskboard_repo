# taskboard

Reactで作成するタスクボードアプリ。

## リポジトリ

https://github.com/sasuketaro/taskboard_repo.git

## 技術スタック

- React（Create React App）
- CSS（モジュールなし、通常のCSS）
- JavaScript（ES6+）

## ディレクトリ構成

```
taskboard/
├── CLAUDE.md
├── public/
│   └── index.html
└── src/
    ├── index.js        # エントリーポイント
    ├── index.css       # グローバルスタイル
    ├── App.js          # ルートコンポーネント
    └── App.css         # アプリスタイル
```

## 開発方針

- Create React Appのデフォルト構成を維持する
- ブラウザで `npm start` を使って動作確認する
- モバイル対応（レスポンシブデザイン）

## 機能概要

- テキスト入力でタスクを追加できる
- チェックボックスで完了・未完了を切り替えられる
- タスクを削除できる
- 完了済みのタスクはグレーで表示する

## コーディング規約

- インデントはスペース2つ
- 変数・関数名はキャメルケース（例: `addTask`）
- CSSクラス名はケバブケース（例: `.task-item`）
- コンポーネント名はパスカルケース（例: `TaskItem`）
- コメントは必要最小限（なぜそうしているか、が自明でない場合のみ）

## Git運用ルール

- コードを変更するたびに、必ずコミットしてGitHubにプッシュする
- コミットメッセージは変更内容を簡潔に日本語で記述する
- プッシュ先: `https://github.com/sasuketaro/taskboard_repo.git`（mainブランチ）
- 作業単位でこまめにコミット・プッシュを行い、リモートと常に同期を保つ

## 開発コマンド

```bash
# 開発サーバー起動
npm start

# ビルド
npm run build

# テスト
npm test
```
