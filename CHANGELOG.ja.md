# 開発履歴

---

## ・今後実装予定のやつ

-   Chromium145系にアップデートする。苦労して下部ツールバー機能を実装したのにまさかの本家でも直後に実装。ひどすぎる
    -  しかし、色々な部分でUIが変わっており144系が好きな人も多そうなので、取り敢えず144もバグなどが見つかったら個別に修正しようと思っている
-   新規タブページに壁紙を設定できるようにする機能追加(ショートカットアイコン長押しのメニュー内に実装)
-   スピードダイアルのショートカットに別タブで開くオプション追加
-   ブラウザの言語設定によってキーボードの使える言語が勝手に変わるChromium標準機能を停止
<br><br/>

---

## ・実装済み機能

## [1.0.0]

-   **拡張機能の実装**
-   拡張機能の設定ポップアップの実装(変な位置に出て操作出来ない物もあるっぽいが、自分で使うやつは大丈夫だったので後回し)
    -   MV2拡張機能(uBlockOriginなど)も動くようにしたかったが、丸一日掛けても駄目だったので諦めた
<br><br/>
-   **戻るジェスチャーで戻る場所が無かった(タブの最初まで戻ってきた)場合でも、ホームに戻らずタブを閉じて隣のタブに移動するように変更(全ブラウザこの仕様にしてほしい)**
    -   なお閉じたタブが最後に残った唯一のタブだった場合、即座に新規タブを開きつつ、そこで初めてホームに戻る動作に変更している(デフォルトでは最後のタブを閉じるとタブ一覧が表示されていた)
    -   稀に他にタブがあるのにホームに戻ってしまう時がある。原因不明。落ちている訳ではないが気になる。他のタブに一度手動で遷移すれば治る。思ったより発生頻度が高いので要調査
        -    謎解明。初期化が不完全or既に閉じつつある、要するになにかしら異常なタブで戻るジェスチャを行った時、何もせずホームに戻る判定がデフォルトで行われていた。
        -    異常なタブでも問答無用でタブを閉じるようにしたところ、確実に動くようになった。
        -    非常にお行儀が悪い気がするが、特にクラッシュする事も無さそうなのでこのまま様子を見る
<br><br/>
-   **タブレットUI(タブバー表示)の強制機能実装**(ユーザー補助機能内で切り替え可。デフォルトはON)
-   タブレットUIがONの時、常にタブバーを表示させる(デフォルトだと何かの拍子に結構消える)
<br><br/>  
-   タブのファビコン開始位置を左寄せに
-   タブタイトルフォントのサイズをデフォルトより少し小さめに(自分用メモ：TitleBitmapFactory内でサイズ設定可能だった。dimens.xmlは見に行ってないor上書きされてるっぽい)
<br><br/>
-   **ボトムツールバーモードを実装。ユーザー補助機能で切り替え可能**
-   ボトムツールバーモード時、プログレスバーをヘアラインの位置に移動
-   タブ遷移時にボトムツールバーと画面最下部との間に隙間が出来ないように、厳密にヘアラインのVisibilityを制御。
-   ボトムツールバーモード時、タブバーがONの場合は下部に移動(もう気が狂うほど、面倒くさかったんじゃ)
<br><br/>
-   要らないツールバーアイコンの削除(visiblity=goneじゃ消えない事が多かったので、サイズを0にする事で消している)
-   タブ一覧ボタンのみ、ForceTabletUIがオフの場合は表示される(無いと詰む。と思ったけどURLバーを上にスワイプでタブ一覧出せるから要らないかも)
<br><br/>
-   ステータスバー、ツールバー、URLバー、タブバーの色味を変更
<br><br/>
-   新規タブ画面の要素を全て削除し、スピードダイアル機能を実装
-   ショートカットアイコンのファビコン取得はどうもGoogleだと挙動が不安定だったのでDuckDuckGo経由もするように変更
-   ショートカットアイコンのファビコンは、URL指定でユーザー側からも変更できるようにした(たまに物凄く画質の荒いのが出てくるので)
-   ショートカットアイコンの1行の数を画面サイズに合わせて動的に変化させるように設定(実装に2日掛かった。二度と触りたくない)
-   新規タブ画面のスクロールが勝手に動かされる問題を解消(信じられないくらい面倒くさかった)
-   新規タブ画面のめちゃ鬱陶しいヒント機能を消した
<br><br/>
-   Googleサインイン機能のオフ(使えないっぽかったので)
-   自動入力を常にAndroid本体設定の物に委ねる
-   自動入力関連を設定メニューから削除
<br><br/>
-   検索エンジンがGoogleであっても、ブラウザ本体にはGoogleじゃないですよと嘘を付くように変更(余計なアイコンや機能がこれで消える。あくまでも内部のあれなので、サイト側には影響ない)

-   **翻訳ボタンをメニューに追加**(なんでデフォルトで無いのん？)

-   URLバーでの検索時、検索履歴が妙にツールバーにピッタリ張り付いてて違和感あったので下げた

-   タブバーのタブの並び替えに対応。長押しでドラッグできる。本来は画面分割の処理だったが、多分使わないので並び替えを優先するようにした。元の分割は一旦別ウィンドウで開けば、OS側の機能で可能。

-   メニュー内の「新しいタブをカスタマイズ」を削除

-   設定画面全般にある右上のはてなボタンを削除(Googleヘルプに飛ぶだけなので要らない)
-   設定画面全般にある右上の3点メニューを削除(Googleヘルプに飛ぶだけなので要らない)
<br><br/>
-   設定＞Googleのサービス＞「Googleへのログインを表示する」を削除

-   設定＞プライバシーとセキュリティ＞「常に安全な接続を使用する」をデフォルトでオフに(オンにするとhttpのサイトが真っ白で読み込めない。せめて警告くらい出してくれや！)

-   設定＞「安全チェック」をUIから削除

-   設定＞ホームページを常にOFFにし、UIからも削除

-   設定＞デザイン＞ツールバーショットカットを常にオフにし、UIからも削除

-   設定＞プライバシーとセキュリティ＞プライバシーガイドをUIから消す

-   設定＞プライバシーとセキュリティ＞広告プライバシーをUIから削除(中身はデフォルトで全てオフ)

-   設定＞デザイン＞ブックマークバーをUIから削除(ボトムツールバー時にUIが崩れる。気が向いたら実装しなおす)

-   設定＞DeveloperOptionsをUIから削除

-   設定＞プライバシーとセキュリティ＞「DoNotTrackリクエストを送信する」内の説明文がデフォルトで見切れていたのを修正

-   初回起動時の画面を削除。いきなり新規タブページから始まるように

-   履歴検索の入力がズレているのを直した(ここだけ強制スマホUI)

-   カスタムタブ機能を削除(自動リダイレクトで通常タブに)

-   毎回ファビコンをネット経由で取りに行く無駄な処理を修正

-   ChromeWebStoreに入った時は、常にPC版サイトへ行くように初期設定(変更可)

-   タブレットUI時、新規タブページの右下に出る鉛筆アイコン削除(あらゆる改変の中で最もこれが大変だった。結局正体が突き止められなかったので、毎回動的に検索して消している)

-   タブレットUI時、ツールバーにアカウントアイコンがあるのを削除

-   ツールバーのバックボタンを、フォワードボタンのVisibilityと同期するように変更

-   URLバーにフォーカスを当てた時、中身を消さないようにした(全選択状態で開始)。ユーザー補助機能でON,OFF可能

-   翻訳作業完了
-   全言語でChrome→Elixir、Google Chrome→Elixir Browserに変更
-   デフォルトで描画領域からはみ出ている仕様の一部日本語を改善。これ本家で放置されてるの酷くない？
    -   オリジナルのgrdファイルの本文を編集すると翻訳リンクが途切れてしまう。
    -   その為、オリジナルファイルのみChromeをElixirに置換出来ない。en-GB以外の英語ユーザーが使用すると自動でオリジナルgrdにフォールバックされる為、例えばen-USとかen-CAの環境だとChromeと表示されてしまう
    -   この問題の改善策が分からなかったので、取り敢えずen-GBをen-USとしてコピーしてぶち込んだら、何故かen-CAとかもen-US(元GB)が読み込まれるようになった。よく分からないが動いているのでよし！
    -   という訳で、英語圏ユーザー全員の環境で単語がイギリス仕様になる。CentreとかColourとか。ただし、これが影響するのは設定画面など極一部であり、Webサイトには関係ないので問題はないだろう
<br><br/>
-   ジェスチャー用に自作ユーザースクリプトの改変と公開(おまけ)

-   下部ツールバーモードONの時、タブバーもONだと間に隙間が出来るのを修正(無理やり下方向に100dpくらいの板を置いて誤魔化している)
-   どうも下部タブバーの追従自体にラグがある様子。幾ら頑張っても直し方が分からないので見なかったことにしておいた
<br><br/>
-   横画面時に下部ツールバーモードONだとプログレスバーの位置がおかしいのを修正(縦だと問題無かったので気付くのが遅れた)

-   タブを閉じた時の邪魔過ぎる復元ボタンとトーストを削除

-   タブを開いた時の邪魔過ぎるトーストを削除

-   下部ツールバーONかつタブバーONの時、タブバーがスクロールで隠れても判定が残ったままになっているという特大の不具合を修正(意外と気付かないもんだねぇ)

-   下部ツールバーがONの時、フルスクリーンモードでツールバーが隠れない不具合を修正(どこで隠す処理をしているのか分からなかったので独自実装)

-   下部ツールバーがジェスチャーナビゲーション用の下部領域を無視して最下部に来てしまう不具合を修正(危うく詰む所だったが何とか事なきを得た)

-   下部ツールバーがON、かつジェスチャーナビゲーションバーが出ている時、URLバーでの検索画面UIが崩れていた問題を修正

-   おすすめ通知という邪魔なものを削除

-   アイコン制作完了。珠玉の出来だと思ったが、協力者にキモいと評されたので変えるかも

-   スピードダイアルをjson形式で出力して保存出来る機能を追加。当然読み込み機能も実装

-   操作から4時間経つと起動時に新規タブに飛ばされる機能をOFF

-   たまにURLバーに文字打ち込んでもページ遷移してくれない問題を解決

-   **戻るジェスチャー時に前のページが見える遷移アニメーションをON,OFF出来る機能を実装(ユーザー補助機能内で切り替え可。デフォルトはON)**

-   ThrottleMainFrameTo60HzをデフォルトでOFFに変更

-   iframe関連でスクロール予測機能が競合し、描画バグが発生するChromium公式の不具合を修正(こんなデカいバグがどうして放置されてるのん？)

-   ページを拡大してスクロールした時、横方向に領域があると慣性スクロールが途中で止まるChromium公式の不具合を修正(こんなデカいバグがどうしてry)

-   自動アップデート通知機能を実装(ユーザー補助機能内で切り替え可。デフォルトはON)

-   メインメニュー内にアップデートチェックボタンを追加
---

## ・改変ファイル一覧

## [1.0.0]

<details>
<summary>Click to expand</summary>
<br>

- BUILD.gn  
- cc/base/features.cc  
- cc/base/features.h  
- chrome/android/features/tab_ui/java/src/org/chromium/chrome/browser/tasks/tab_management/TabDragHandlerBase.java  
- chrome/android/features/tab_ui/public/android/java/src/org/chromium/chrome/browser/tasks/tab_management/TabUiThemeUtil.java  
- chrome/android/feed/core/java/src/org/chromium/chrome/browser/feed/FeedSurfaceCoordinator.java  
- chrome/android/java/res/layout/incognito_description_layout.xml  
- chrome/android/java/res/layout/new_tab_page_layout.xml  
- chrome/android/java/res/values/dimens.xml  
- chrome/android/java/res/values/ids.xml  
- chrome/android/java/res_base/drawable/ic_launcher_round.xml  
- chrome/android/java/res_chromium_base/mipmap-hdpi/app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-hdpi/layered_app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-hdpi/layered_app_icon_background.png  
- chrome/android/java/res_chromium_base/mipmap-mdpi/app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-mdpi/layered_app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-mdpi/layered_app_icon_background.png  
- chrome/android/java/res_chromium_base/mipmap-xhdpi/app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-xhdpi/layered_app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-xhdpi/layered_app_icon_background.png  
- chrome/android/java/res_chromium_base/mipmap-xxhdpi/app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-xxhdpi/layered_app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-xxhdpi/layered_app_icon_background.png  
- chrome/android/java/res_chromium_base/mipmap-xxxhdpi/app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-xxxhdpi/layered_app_icon.png  
- chrome/android/java/res_chromium_base/mipmap-xxxhdpi/layered_app_icon_background.png  
- chrome/android/java/res_chromium_base/values/channel_constants.xml  
- chrome/android/java/src/org/chromium/chrome/browser/ChromeTabbedActivity.java  
- chrome/android/java/src/org/chromium/chrome/browser/about_settings/AboutChromeSettings.java  
- chrome/android/java/src/org/chromium/chrome/browser/about_settings/LegalInformationSettings.java  
- chrome/android/java/src/org/chromium/chrome/browser/app/ChromeActivity.java  
- chrome/android/java/src/org/chromium/chrome/browser/app/appmenu/AppMenuPropertiesDelegateImpl.java  
- chrome/android/java/src/org/chromium/chrome/browser/appearance/settings/AppearanceSettingsFragment.java  
- chrome/android/java/src/org/chromium/chrome/browser/compositor/layouts/content/TitleBitmapFactory.java  
- chrome/android/java/src/org/chromium/chrome/browser/compositor/overlays/strip/StripLayoutHelperManager.java  
- chrome/android/java/src/org/chromium/chrome/browser/customtabs/CustomTabActivity.java  
- chrome/android/java/src/org/chromium/chrome/browser/firstrun/FirstRunActivity.java  
- chrome/android/java/src/org/chromium/chrome/browser/firstrun/FirstRunFlowSequencer.java  
- chrome/android/java/src/org/chromium/chrome/browser/fullscreen/BrowserControlsManager.java  
- chrome/android/java/src/org/chromium/chrome/browser/history/HistoryManager.java  
- chrome/android/java/src/org/chromium/chrome/browser/homepage/HomepageManager.java  
- chrome/android/java/src/org/chromium/chrome/browser/init/ChromeBrowserInitializer.java  
- chrome/android/java/src/org/chromium/chrome/browser/ntp/IncognitoDescriptionView.java  
- chrome/android/java/src/org/chromium/chrome/browser/ntp/NewTabPage.java  
- chrome/android/java/src/org/chromium/chrome/browser/ntp/NewTabPageLayout.java  
- chrome/android/java/src/org/chromium/chrome/browser/privacy/settings/DoNotTrackSettings.java  
- chrome/android/java/src/org/chromium/chrome/browser/privacy/settings/PrivacySettings.java  
- chrome/android/java/src/org/chromium/chrome/browser/settings/MainSettings.java  
- chrome/android/java/src/org/chromium/chrome/browser/settings/SettingsActivity.java  
- chrome/android/java/src/org/chromium/chrome/browser/signin/SigninManagerImpl.java  
- chrome/android/java/src/org/chromium/chrome/browser/suggestions/tile/MostVisitedTilesMediator.java  
- chrome/android/java/src/org/chromium/chrome/browser/sync/settings/GoogleServicesSettings.java  
- chrome/android/java/src/org/chromium/chrome/browser/tabbed_mode/TabbedAppMenuPropertiesDelegate.java  
- chrome/android/java/src/org/chromium/chrome/browser/tabbed_mode/TabbedNavigationBarColorController.java  
- chrome/android/java/src/org/chromium/chrome/browser/tabbed_mode/TabbedRootUiCoordinator.java  
- chrome/android/java/src/org/chromium/chrome/browser/ui/system/StatusBarColorController.java  
- chrome/android/java/src/org/chromium/chrome/browser/undo_tab_close_snackbar/TabUndoBarController.java  
- chrome/app/theme/chromium/BRANDING  
- chrome/browser/android/compositor/layer/tab_layer.cc  
- chrome/browser/android/compositor/layer/toolbar_layer.cc  
- chrome/browser/android/compositor/layer/toolbar_layer.h  
- chrome/browser/android/compositor/scene_layer/tab_strip_scene_layer.cc  
- chrome/browser/android/compositor/scene_layer/top_toolbar_scene_layer.cc  
- chrome/browser/android/compositor/scene_layer/top_toolbar_scene_layer.h  
- chrome/browser/autofill/android/java/src/org/chromium/chrome/browser/autofill/AutofillClientProviderUtils.java  
- chrome/browser/flags/android/chrome_feature_list.cc  
- chrome/browser/flags/android/chrome_feature_list.h  
- chrome/browser/flags/android/java/src/org/chromium/chrome/browser/flags/ChromeFeatureList.java  
- chrome/browser/metrics/chrome_metrics_service_client.cc  
- chrome/browser/notifications/android/java/src/org/chromium/chrome/browser/notifications/channels/ChromeChannelDefinitions.java  
- chrome/browser/password_manager/android/password_manager_android_util.cc  
- chrome/browser/profiles/profile.cc  
- chrome/browser/safe_browsing/android/java/src/org/chromium/chrome/browser/safe_browsing/settings/EnhancedProtectionSettingsFragment.java  
- chrome/browser/settings/android/java/src/org/chromium/chrome/browser/settings/ChromeBaseSettingsFragment.java  
- chrome/browser/ui/android/edge_to_edge/java/src/org/chromium/chrome/browser/ui/edge_to_edge/EdgeToEdgeUtils.java  
- chrome/browser/ui/android/omnibox/java/src/org/chromium/chrome/browser/omnibox/DeferredIMEWindowInsetApplicationCallback.java  
- chrome/browser/ui/android/omnibox/java/src/org/chromium/chrome/browser/omnibox/LocationBarCoordinator.java  
- chrome/browser/ui/android/omnibox/java/src/org/chromium/chrome/browser/omnibox/LocationBarMediator.java  
- chrome/browser/ui/android/omnibox/java/src/org/chromium/chrome/browser/omnibox/OmniboxSuggestionsDropdownEmbedderImpl.java  
- chrome/browser/ui/android/omnibox/java/src/org/chromium/chrome/browser/omnibox/UrlBar.java  
- chrome/browser/ui/android/omnibox/java/src/org/chromium/chrome/browser/omnibox/suggestions/AutocompleteMediator.java  
- chrome/browser/ui/android/omnibox/java/src/org/chromium/chrome/browser/omnibox/suggestions/OmniboxSuggestionsDropdown.java  
- chrome/browser/ui/android/strings/android_chrome_strings.grd  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_af.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_am.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ar.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_as.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_az.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_be.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_bg.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_bn.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_bs.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ca.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_cs.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_cy.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_da.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_de.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_el.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_en-GB.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_es-419.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_es.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_et.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_eu.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_fa.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_fi.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_fil.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_fr-CA.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_fr.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_gl.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_gu.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_hi.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_hr.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_hu.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_hy.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_id.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_is.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_it.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_iw.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ja.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ka.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_kk.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_km.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_kn.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ko.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ky.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_lo.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_lt.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_lv.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_mk.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ml.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_mn.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_mr.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ms.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_my.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ne.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_nl.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_no.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_or.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_pa.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_pl.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_pt-BR.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_pt-PT.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ro.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ru.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_si.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_sk.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_sl.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_sq.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_sr-Latn.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_sr.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_sv.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_sw.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ta.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_te.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_th.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_tr.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_uk.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_ur.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_uz.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_vi.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_zh-CN.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_zh-HK.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_zh-TW.xtb  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_zu.xtb  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/LocationBarFocusScrimHandler.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/ToolbarProgressBar.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/extensions/ExtensionsMenuCoordinator.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/extensions/ExtensionsMenuItemProperties.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/extensions/ExtensionsMenuItemViewBinder.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/extensions/ExtensionsMenuMediator.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/top/ToolbarControlContainer.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/top/ToolbarLayout.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/top/ToolbarTablet.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/top/TopToolbarSceneLayer.java  
- chrome/browser/ui/android/toolbar/java/src/org/chromium/chrome/browser/toolbar/top/tab_strip/HeightTransitionHandler.java  
- chrome/version.gni  
- components/browser_ui/accessibility/android/java/res/xml/accessibility_preferences.xml  
- components/browser_ui/accessibility/android/java/src/org/chromium/components/browser_ui/accessibility/AccessibilitySettings.java  
- components/browser_ui/site_settings/android/java/src/org/chromium/components/browser_ui/site_settings/BaseSiteSettingsFragment.java  
- components/browser_ui/site_settings/android/java/src/org/chromium/components/browser_ui/site_settings/SingleCategorySettings.java  
- components/browser_ui/strings/android/browser_ui_strings.grd  
- components/browser_ui/strings/android/translations/browser_ui_strings_af.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_am.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ar.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_as.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_az.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_be.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_bg.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_bn.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_bs.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ca.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_cs.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_cy.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_da.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_de.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_el.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_en-GB.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_es-419.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_es.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_et.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_eu.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_fa.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_fi.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_fil.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_fr-CA.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_fr.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_gl.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_gu.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_hi.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_hr.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_hu.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_hy.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_id.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_is.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_it.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_iw.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ja.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ka.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_kk.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_km.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_kn.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ko.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ky.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_lo.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_lt.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_lv.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_mk.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ml.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_mn.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_mr.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ms.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_my.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ne.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_nl.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_no.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_or.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_pa.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_pl.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_pt-BR.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_pt-PT.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ro.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ru.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_si.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_sk.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_sl.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_sq.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_sr-Latn.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_sr.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_sv.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_sw.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ta.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_te.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_th.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_tr.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_uk.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_ur.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_uz.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_vi.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_zh-CN.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_zh-HK.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_zh-TW.xtb  
- components/browser_ui/strings/android/translations/browser_ui_strings_zu.xtb  
- components/components_strings.grd  
- components/feed/feed_feature_list.cc  
- components/search_engines/android/java/src/org/chromium/components/search_engines/TemplateUrlService.java  
- components/strings/components_strings_af.xtb  
- components/strings/components_strings_am.xtb  
- components/strings/components_strings_ar.xtb  
- components/strings/components_strings_as.xtb  
- components/strings/components_strings_az.xtb  
- components/strings/components_strings_be.xtb  
- components/strings/components_strings_bg.xtb  
- components/strings/components_strings_bn.xtb  
- components/strings/components_strings_bs.xtb  
- components/strings/components_strings_ca.xtb  
- components/strings/components_strings_cs.xtb  
- components/strings/components_strings_cy.xtb  
- components/strings/components_strings_da.xtb  
- components/strings/components_strings_de.xtb  
- components/strings/components_strings_el.xtb  
- components/strings/components_strings_en-GB.xtb  
- components/strings/components_strings_es-419.xtb  
- components/strings/components_strings_es.xtb  
- components/strings/components_strings_et.xtb  
- components/strings/components_strings_eu.xtb  
- components/strings/components_strings_fa.xtb  
- components/strings/components_strings_fi.xtb  
- components/strings/components_strings_fil.xtb  
- components/strings/components_strings_fr-CA.xtb  
- components/strings/components_strings_fr.xtb  
- components/strings/components_strings_gl.xtb  
- components/strings/components_strings_gu.xtb  
- components/strings/components_strings_hi.xtb  
- components/strings/components_strings_hr.xtb  
- components/strings/components_strings_hu.xtb  
- components/strings/components_strings_hy.xtb  
- components/strings/components_strings_id.xtb  
- components/strings/components_strings_is.xtb  
- components/strings/components_strings_it.xtb  
- components/strings/components_strings_iw.xtb  
- components/strings/components_strings_ja.xtb  
- components/strings/components_strings_ka.xtb  
- components/strings/components_strings_kk.xtb  
- components/strings/components_strings_km.xtb  
- components/strings/components_strings_kn.xtb  
- components/strings/components_strings_ko.xtb  
- components/strings/components_strings_ky.xtb  
- components/strings/components_strings_lo.xtb  
- components/strings/components_strings_lt.xtb  
- components/strings/components_strings_lv.xtb  
- components/strings/components_strings_mk.xtb  
- components/strings/components_strings_ml.xtb  
- components/strings/components_strings_mn.xtb  
- components/strings/components_strings_mr.xtb  
- components/strings/components_strings_ms.xtb  
- components/strings/components_strings_my.xtb  
- components/strings/components_strings_ne.xtb  
- components/strings/components_strings_nl.xtb  
- components/strings/components_strings_no.xtb  
- components/strings/components_strings_or.xtb  
- components/strings/components_strings_pa.xtb  
- components/strings/components_strings_pl.xtb  
- components/strings/components_strings_pt-BR.xtb  
- components/strings/components_strings_pt-PT.xtb  
- components/strings/components_strings_ro.xtb  
- components/strings/components_strings_ru.xtb  
- components/strings/components_strings_si.xtb  
- components/strings/components_strings_sk.xtb  
- components/strings/components_strings_sl.xtb  
- components/strings/components_strings_sq.xtb  
- components/strings/components_strings_sr-Latn.xtb  
- components/strings/components_strings_sr.xtb  
- components/strings/components_strings_sv.xtb  
- components/strings/components_strings_sw.xtb  
- components/strings/components_strings_ta.xtb  
- components/strings/components_strings_te.xtb  
- components/strings/components_strings_th.xtb  
- components/strings/components_strings_tr.xtb  
- components/strings/components_strings_uk.xtb  
- components/strings/components_strings_ur.xtb  
- components/strings/components_strings_uz.xtb  
- components/strings/components_strings_vi.xtb  
- components/strings/components_strings_zh-CN.xtb  
- components/strings/components_strings_zh-HK.xtb  
- components/strings/components_strings_zh-TW.xtb  
- components/strings/components_strings_zu.xtb  
- components/webapps/browser/android/android_webapps_strings.grd  
- components/webapps/browser/android/translations/android_webapps_strings_af.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_am.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ar.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_as.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_az.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_be.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_bg.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_bn.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_bs.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ca.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_cy.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_da.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_de.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_el.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_en-GB.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_es-419.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_es.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_et.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_eu.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_fa.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_fi.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_fil.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_fr-CA.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_fr.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_gl.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_gu.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_hi.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_hr.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_hu.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_hy.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_id.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_is.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_it.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_iw.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ja.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ka.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_kk.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_km.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_kn.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ko.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ky.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_lo.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_lt.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_lv.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_mk.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ml.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_mn.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_mr.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ms.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_my.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ne.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_nl.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_no.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_or.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_pa.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_pl.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_pt-BR.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_pt-PT.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ro.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ru.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_si.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_sk.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_sq.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_sr-Latn.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_sr.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_sv.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_sw.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ta.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_te.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_th.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_tr.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_uk.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_ur.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_uz.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_vi.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_zh-CN.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_zh-HK.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_zh-TW.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_zu.xtb  
- content/browser/renderer_host/render_widget_host_view_android.cc  
- extensions/shell/BUILD.gn  
- ui/android/java/src/org/chromium/ui/base/DeviceFormFactor.java  
- chrome/browser/ui/android/strings/translations/android_chrome_strings_en-US.xtb  
- components/strings/components_strings_en-US.xtb  
- components/webapps/browser/android/translations/android_webapps_strings_en-US.xtb
- chrome/android/java/src/org/chromium/chrome/browser/toolbar/ToolbarManager.java
- src/testing/variations/fieldtrial_testing_config.json
- src/third_party/blink/renderer/platform/widget/input/elastic_overscroll_controller.cc  

</details>

---
