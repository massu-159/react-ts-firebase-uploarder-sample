# react-ts-firebase-uploader-sample
アウトプットとして、reactを使ったアップローダーを作成。

TypeScriptによる型定義。

firebaseのStorageに画像を保存することができる。

urlはこちら
https://github.com/massu-159/react-ts-firebase-uploader-sample

## 目次
1. 環境構築
2. アプリケーションの仕様
3. 環境変数

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install

または

yarn
```

### 1-2. アプリケーション実行

```
npm run dev

または

yarn dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- 画像アップロード

### 2-2. 構成技術
- react : 18.2.0
- react-dom : 18.2.0
- @mui/material : 5.10.12
- firebase : 9.13.0
- typescript : 4.6.4

## 3. 環境変数
.envファイルに環境変数を設定。
```
REACT_APP_apikey=xxxxxxxxxxxx
REACT_APP_authDomain=xxxxxxxxxxxx
REACT_APP_projectId=xxxxxxxxxxxx
REACT_APP_strageBucket=xxxxxxxxxxxx
REACT_APP_messageingSenderId=xxxxxxxxxxxx
REACT_APP_appId=xxxxxxxxxxxx
```