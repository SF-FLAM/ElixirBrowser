<p align="center">
  <img src="./assets/Elixir-icon.png" alt="Elixir Browser Logo" width="256"/>
</p>

<p align="center">
  <a href="https://github.com/SF-FLAM/ElixirBrowser/releases/latest"><img src="https://img.shields.io/badge/Download-Latest-brightgreen?style=for-the-badge"></a>
  <a href="https://buymeacoffee.com/sf_flam"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black"></a>
</p>

# Elixir Browser

> **[English](README.md) | [日本語 (Japanese)](README.ja.md)**

<br>

ElixirはChromiumベースの拡張機能対応ブラウザです。  
Kiwi Browserにインスパイアされ、拡張機能サポートと、独自のUI改善、非効率な挙動の変更を目的としています。  
  
ただし、Kiwiの開発者およびチームとは一切関係はありません。  
本プロジェクトはChromium公式ソースから独自にフォークしたものであり、既存の他ブラウザ（Kiwi等）からのソースコードやバイナリの流用も行っていません。  
  
また、殆どのGoogle依存機能を排除し、同時に不要な通信を遮断しています。  
翻訳機能や検索候補の表示など、利便性に強く関わる部分はユーザーが任意で切り替え可能です。

<br>

<p align="center">
  <img src="./assets/Screenshot_0_Elixir_Browser.png" alt="screenshot0" width="32%">
  <img src="./assets/Screenshot_1_Elixir_Browser.png" alt="screenshot1" width="32%">
  <img src="./assets/Screenshot_2_Elixir_Browser.png" alt="screenshot2" width="32%">
</p>

<br>

## 主な機能

*   **拡張機能サポート**
    * Chromeウェブストアから、デスクトップ版Chromeと同じ拡張機能をインストールして使用できます。

*   **強化されたUI**:
    *   **常時表示タブバーオプション**
    *   **下部ツールバーオプション**
    *   **不要なUIの削除**
    *   **翻訳ボタンをメニューに追加**
    *   **独自のスピードダイアルの実装**
    *   **etc...**

*   **一部挙動の変更**:
    *   **戻る履歴が無いタブで戻るジェスチャーを行った場合、ホームに戻らずタブを閉じる**
    *   **etc...**

*   **プライバシー保護**:
    * オリジナルのChromiumに存在する複数の情報送信を遮断しています。

*   **継続した長期開発**:
    * 定期的に最新のChromiumバージョンに追従し、可能な限り保守を行います。

<br>

## 支援 & 宣誓

Elixir Browserは個人によって開発されているプロジェクトです。  
**完全に非営利であり、開発者は当アプリにおいて、アフェリエイト、個人情報収集、課金コンテンツの搭載等による一切の収益化を行っておらず、また今後も恒久的に行わない事を誓います。**  

ただし、個人的な支援は大歓迎です🤑  
  
Chromiumの改変とその保守は非常に過酷な作業です。  
正直めちゃ大変なので、長期的な継続の為、どうか応援のほどよろしくお願い致します(貧民)  
↓↓↓
  
<<**[☕ Buy Me A Coffee](https://buymeacoffee.com/sf_flam)**>>  

<br>

## ダウンロード

最新バージョンのAPKは、以下のリンクからダウンロードできます。  


<<**[Latest Releases](https://github.com/SF-FLAM/ElixirBrowser/releases/latest)**>>

<br>

## 開発履歴 ＆ 今後実装予定の機能

詳細な開発の履歴に加えて、今後実装するかもしれない機能について記載しています。  
基本的にKiwiの代替として自分用に作ったものなので、機能の取捨選択もそのような傾向があります。  
  
**改変、新規追加したファイルは"改変ファイル一覧"に記載されているものが全てであり、それ以外は全て素のChromiumです。**  

なお、Googleへの不要な通信は概ね機能自体を根本から削除しています。  
プライバシー保護重視というよりは、軽量化の結果そうなったという感じです。  
その為、削除するとブラウジングそのものに影響が出そうな機能は幾つか残っています。これは、今後のアップデートで慎重にテストを重ねて削除を進めていく予定です。  
  
<<**[History](./CHANGELOG.ja.md)**>>

<br>

## 不具合報告

何か問題を見つけた場合は、GitHubの Issues までお寄せください。可能な限り改善に努めます。  
基本的にタブバー表示かつ上部ツールバーモードで普段使いしているので、それ以外の状態だと見逃しているバグがあるかもしれません。
    
<<**[Issues](https://github.com/SF-FLAM/ElixirBrowser/issues)**>>

<br>

## Q & A

Q : **対応している動作環境は？**  
A : ベースとなっているChromiumに準拠します。現在は『Android 10+ (ARM64)』が条件です。32bit版はありません。  
<br>
Q : **どうしてオープンソースじゃないの？中身見せろ！**  
A : 将来的にはOSS化を目指しています。現時点ではコメントを全て日本語で書いているので、公開するなら英語に直したい所です。  
アップデートの方を優先しており、コードの管理まで手が回らないので、ゆっくり進めていこうと思います。  
<br>
Q : **パスワードマネージャは無いの？**  
A : ありません。Androidの本体設定で指定されているパスワードマネージャを使うようになっています。  
標準だとGoogleパスワードマネージャが使われていると思いますが、AndroidのバージョンによってはKiwiやElixirなどの非大手ブラウザで警告が出るようです。パスワード入力自体は問題無く出来ます。  
個人的にはBitwarden(拡張機能ではなくアプリの方)の使用を推奨しています。こちらだとパスキーも問題なく使える事が確認出来ています。  
<br>
Q : **スピードダイアルのデフォルトに広告ブロック系が2つもあるけど推奨はどっち？**  
A : 好きな方を使ってください。個人的にはAdGuardの方を使っています。  

- uBlockOriginLite
  - 2026年1月現在、カスタムフィルタの欄で外部フィルタの読み込みも一応できるが、外部フィルタを読み込んだ場合は正常に動作していないような気がする。
  - AdGuardに比べて同じフィルタでも消えない物がある。
  - 拡張機能のポップアップは完全に機能しており、要素選択による手動ブロックも容易。
  - 現在のサイトだけ一時的にOFFが簡単に出来る。

- AdGuard AdBlocker
  - 外部フィルタの追加に完全に対応しており、漏れが無い印象。
  - 要素選択によるブロックがやりづらい。反映にも妙に間がある。
  - ブラウザ再起動後に中々動き出してくれない。全体的に動きが遅い気がする。
  - ポップアップが全く機能していない(PCでもクルクル回ってるだけなので仕様？)
  - 現在のサイトで一時的にOFFにする、という事が出来ないっぽい。  

<br>

## おまけ

自作のモバイルジェスチャー用ユーザースクリプト『SMG - Simple Mobile Gestures』をおまけとして置いておきます。  
Webページでの不具合を避け、軽量かつ確実に動作する事に重きを置いた設計となっています。  
ユーザーが自ら改変して使う前提であり、デフォルトでは最低限の機能しかありません。  
なおセキュリティ上の理由から、**タブが1枚しかない場合には「タブを閉じる」ジェスチャーは機能しない**ようになっています。  
  
＊今後ブラウザ自体にジェスチャー機能を実装する可能性がある為、このスクリプトは不要になるかもしれません。  

<<**[Install UserScript](https://github.com/SF-FLAM/ElixirBrowser/raw/refs/heads/main/userscripts/SMG_SimpleMobileGestures.user.js)**>>

