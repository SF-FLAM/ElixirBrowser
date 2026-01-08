// ==UserScript==
// @name         SMG - Simple Mobile Gestures
// @namespace    https://github.com/SF-FLAM/
// @version      1.0.0
// @description  スマートフォンのブラウザでジェスチャー操作（閉じる、履歴、進む、更新）を可能にします。軽量かつブラウザ依存の少ない設計です。
// @description:en Enable touch gestures (Swipe to close, Open History, Forward, Reload) on mobile browsers. Lightweight and designed for compatibility.
// @author       SF-FLAM
// @match        *://*/*
// @grant        window.close
// @grant        GM_openInTab
// @run-at       document-start
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    /* --- 設定 (Settings) --- */
    const CONFIG = {
        SENSITIVITY: 150,    // 感度 (px)　高いほど鈍くなる
        TIMEOUT: 100        // ジェスチャー完了判定の待ち時間 (ms)
    };

    /* --- ジェスチャー定義 (Gesture Definitions) --- */
    // 矢印は指の動く方向を表します
    const GESTURES = {
        '↓→':   'Close page',   // 下右：タブを閉じる
        '↓←':   'Open History', // 下左：履歴ページを開く
        '↑→':   'Go forward',   // 上右：履歴を進む
        '↑→↓←': 'Reload page'   // 四角：ページ更新
    };

    /* --- ブラックリスト (Blacklist) --- */
    // このリストに含まれるドメインではスクリプトが動作しません
    const BLACKLIST = [
        'www.google.com/maps'
    ];

    /* --- 変数定義 --- */
    let startX = 0, startY = 0;
    let path = '';
    let isTracking = false;
    let gestureTimer = null;

    /* --- アクション定義 --- */
    const ACTIONS = {
        'Reload page': () => location.reload(),
        'Go forward': () => history.forward(),

        'Close page': () => {
            window.close();
            if (window.top !== window.self) window.top.close();
        },

        'Open History': () => {
            GM_openInTab("chrome-native://history", { active: true });
        }
    };

    /* --- タッチイベント処理 (Touch Handlers) --- */
    function onTouchStart(e) {
        // マルチタッチ（ピンチ操作など）の場合は無効化
        if (e.touches.length > 1) { isTracking = false; return; }
        
        const touch = e.changedTouches[0];
        startX = touch.screenX;
        startY = touch.screenY;
        path = '';
        isTracking = true;
        
        if (gestureTimer) clearTimeout(gestureTimer);
    }

    function onTouchMove(e) {
        if (!isTracking) return;
        
        const touch = e.changedTouches[0];
        const diffX = touch.screenX - startX;
        const diffY = touch.screenY - startY;
        const absX = Math.abs(diffX);
        const absY = Math.abs(diffY);

        // 設定した感度を超えた場合のみ方向を判定
        if (absX > CONFIG.SENSITIVITY || absY > CONFIG.SENSITIVITY) {
            let direction = absX > absY ? (diffX > 0 ? '→' : '←') : (diffY > 0 ? '↓' : '↑');
            
            // 同じ方向が連続して記録されないようにする
            if (path.slice(-1) !== direction) {
                path += direction;
            }
            
            // 基準点を更新（連続的な動きに対応）
            startX = touch.screenX;
            startY = touch.screenY;
        }
    }

    function onTouchEnd(e) {
        if (!isTracking || path === '') { isTracking = false; return; }
        isTracking = false;

        // ジェスチャー完了判定
        gestureTimer = setTimeout(() => {
            if (GESTURES[path] && ACTIONS[GESTURES[path]]) {
                ACTIONS[GESTURES[path]]();
            }
            // デバッグ用: 認識されたパスをコンソールに表示
            // console.log('Gesture Path:', path); 
        }, CONFIG.TIMEOUT);
    }

    /* --- 初期化 (Initialization) --- */
    function init() {
        // ブラックリストに含まれるサイトでは何もしない
        for (const domain of BLACKLIST) {
            if (window.location.href.includes(domain)) {
                // デバッグ用: console.log('SMG: Disabled on this site.');
                return;
            }
        }
        // passive: true でスクロール性能への影響を最小限に抑える
        const options = { capture: true, passive: true };
        window.addEventListener('touchstart', onTouchStart, options);
        window.addEventListener('touchmove', onTouchMove, options);
        window.addEventListener('touchend', onTouchEnd, options);
    }

    init();
})();
