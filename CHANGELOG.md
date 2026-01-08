# History

---

## ・Upcoming Features

-   Update to Chromium 145 series. Talk about bad timing—just as I finished the grueling task of implementing the bottom toolbar, the official version went and added it. Fate is cruel.
    -  However, the UI has changed in many places, and I suspect many people will still prefer the 144 series, so I'll continue to fix 144-specific bugs if any are found.
-   Add functionality to set wallpapers on the New Tab Page (to be implemented within the shortcut icon long-press menu).
-   Add an option to open Speed Dial shortcuts in a new tab.
-   Disable the automatic keyboard language switching based on the browser's language setting.
<br><br/>

---

## ・Implemented Features

## [1.0.0]

-   **Implementation of Extensions**
-   Implemented extension settings popups (some seem to appear in weird positions and can't be operated, but the ones I use were fine, so I'll deal with this later).
    -   I wanted to make MV2 extensions (like uBlock Origin) work too, but I couldn't get it done even after spending a whole day, so I gave up.
<br><br/>
-   **Changed back gesture behavior: When there is no more history to go back to (returned to the start of the tab), the tab now closes and moves to the adjacent tab instead of returning Home. (Every browser should have this spec by default).**
    -   Note: If the closed tab was the last remaining one, it now immediately opens a new tab and *then* returns to Home. (By default, closing the last tab would show the tab switcher).
    -   Rarely, it returns Home even when other tabs are open. Cause unknown. It doesn't crash, but it's annoying. It fixes itself if you manually switch to another tab once. Occurs more often than expected, needs investigation.
        -    Mystery solved: When a back gesture was performed on an "abnormal" tab (incomplete initialization, already closing, etc.), the default logic judged it should return Home.
        -    By forcing the tab to close no matter how abnormal it is, it now works reliably.
        -    It feels like very "bad manners" in terms of coding, but it doesn't seem to crash, so I'll see how it goes.
<br><br/>
-   **Forced Tablet UI (Tab Bar) implementation** (Toggleable in Accessibility settings. Default is ON).
-   Force the tab bar to always show when Tablet UI is ON. (By default, it disappears quite often for some reason).
<br><br/>  
-   Left-aligned the tab favicon starting position.
-   Made the tab title font size slightly smaller than default. (Note to self: Adjustable in TitleBitmapFactory. dimens.xml is either ignored or overwritten).
<br><br/>
-   **Implemented Bottom Toolbar mode. Toggleable in Accessibility settings.**
-   In Bottom Toolbar mode, moved the progress bar to the hairline position.
-   Strictly controlled Hairline visibility to ensure no gaps appear between the bottom toolbar and the bottom of the screen during tab transitions.
-   When Bottom Toolbar mode is active and the Tab Bar is ON, the tab bar moves to the bottom. (This was so incredibly tedious, it almost drove me crazy).
<br><br/>
-   Removed unnecessary toolbar icons. (visibility=gone often didn't work, so I'm removing them by setting their size to 0).
-   Only the Tab Switcher button is displayed when ForceTabletUI is off. (I thought it was essential, but since you can swipe up on the URL bar to show the tab switcher, maybe I don't need it).
<br><br/>
-   Adjusted the color tones of the status bar, toolbar, URL bar, and tab bar.
<br><br/>
-   Removed all elements from the New Tab Page and implemented a Speed Dial feature.
-   Favicon retrieval for shortcut icons was unstable with Google, so I changed it to also use DuckDuckGo.
-   Shortcut icon favicons can now be manually changed by the user via URL. (Since sometimes incredibly low-res ones appear).
-   Configured the number of shortcut icons per row to change dynamically based on screen size. (Took 2 days to implement. I never want to touch this again).
-   Resolved the issue where the New Tab Page would scroll on its own. (Unbelievably annoying to fix).
-   Removed the extremely irritating "Hints" feature on the New Tab Page.
<br><br/>
-   Disabled Google Sign-in (since it didn't seem to work anyway).
-   Forced Autofill to always rely on the Android system settings.
-   Removed Autofill-related items from the settings menu.
<br><br/>
-   Modified the browser to "lie" to itself, claiming it is *not* Google even if the search engine is Google. (This hides unnecessary icons and features. This is only internal and does not affect the website side).

-   **Added Translate button to the menu.** (Why isn't this there by default?)

-   When searching from the URL bar, the search history felt weirdly stuck too close to the toolbar, so I lowered it.

-   Supported tab reordering in the tab bar. Can be dragged with a long-press. Originally this was for split-screen logic, but since I probably won't use that, I prioritized reordering. Original split-screen is still possible via OS features if you open it in a separate window.

-   Removed "Customize New Tab" from the menu.

-   Removed the help (question mark) button in the top right of various settings screens. (Just points to Google Help, so not needed).
-   Removed the 3-dot menu in the top right of various settings screens. (Just points to Google Help, so not needed).
<br><br/>
-   Settings > Google Services > Removed "Show Google Sign-in".

-   Settings > Privacy and Security > Defaulted "Always use secure connections" to OFF. (When ON, HTTP sites just show a blank page. At least give me a warning!)

-   Settings > Removed "Safety Check" from the UI.

-   Settings > Forced Homepage to OFF and removed it from the UI.

-   Settings > Design > Forced Toolbar Shortcut to OFF and removed it from the UI.

-   Settings > Privacy and Security > Removed "Privacy Guide" from the UI.

-   Settings > Privacy and Security > Removed "Ad Privacy" from the UI (everything inside is OFF by default).

-   Settings > Design > Removed "Bookmark Bar" from the UI. (The UI breaks in Bottom Toolbar mode. Might reimplement if I feel like it).

-   Settings > Removed "DeveloperOptions" from the UI.

-   Settings > Privacy and Security > Fixed a bug where the description in "Send a Do Not Track request" was cut off by default.

-   Removed the first-run screen. Now starts directly on the New Tab Page.

-   Fixed the misalignment of the History search input. (Forced mobile UI here).

-   Removed the Custom Tabs feature. (Automatically redirects to a regular tab).

-   Fixed the wasteful process of fetching the favicon over the net every single time.

-   Initial setting to always go to the desktop site when entering the Chrome Web Store (changeable).

-   When in Tablet UI, removed the pencil icon in the bottom right of the New Tab Page. (This was the hardest of all modifications. I couldn't find its true identity in the end, so I'm dynamically searching and deleting it every time).

-   When in Tablet UI, removed the account icon from the toolbar.

-   Changed the toolbar back button to sync with the visibility of the forward button.

-   When focusing the URL bar, the content is no longer cleared (starts in Select All state). Toggleable in Accessibility settings.
<br><br/>
-   Translation work complete.
-   Replaced Chrome → Elixir and Google Chrome → Elixir Browser in all languages.
-   Improved some Japanese text that was overflowing the drawing area by default. Is it not terrible that this is left unaddressed in the official version?
    -   Editing the body of the original .grd file breaks the translation links.
    -   Because of this, I couldn't replace Chrome with Elixir in the original files only. When English users other than en-GB use it, it automatically falls back to the original grd, so Chrome is displayed in en-US or en-CA environments, for example.
    -   I didn't know how to fix this, so for now, I copied en-GB as en-US and shoved it in, and for some reason en-CA and others started loading en-US (formerly GB). I don't really get why, but it works!
    -   So, the wording will be British for all English-speaking users. "Centre," "Colour," etc. However, this only affects a very small part like the settings screen and doesn't affect websites, so it shouldn't be a problem.
<br><br/>
-   Modified and published my custom UserScript for gestures (Bonus).

-   Fixed the gap that appeared when Bottom Toolbar mode and Tab Bar were both ON. (I cheated by placing a plate of about 100dp downwards to hide it).
-   There seems to be a lag in the bottom tab bar's tracking. No matter how hard I tried, I couldn't figure out how to fix it, so I decided to ignore it.
<br><br/>
-   Fixed the progress bar position being weird when in Landscape and Bottom Toolbar mode is ON. (I didn't notice it sooner because it was fine in Portrait).

-   Removed the incredibly annoying restore button and toast when closing a tab.

-   Removed the incredibly annoying toast when opening a tab.

-   Fixed a huge bug where the Tab Bar's touch detection remained active even after the tab bar was hidden by scrolling when Bottom Toolbar and Tab Bar were both ON. (Surprising how you don't notice these things).

-   Fixed a bug where the toolbar wouldn't hide in fullscreen mode when Bottom Toolbar was ON. (I didn't know where the hiding process was, so I implemented it myself).

-   Fixed a bug where the Bottom Toolbar would ignore the bottom area for gesture navigation and go to the absolute bottom. (Almost got stuck there, but managed to deal with it).

-   Fixed the UI corruption on the URL bar search screen when Bottom Toolbar is ON and the gesture navigation bar is shown.

-   Removed the annoying "Suggested Notifications."

-   Icon production complete. I thought it was a masterpiece, but a collaborator called it creepy, so I might change it.

-   Added functionality to export and save the Speed Dial in JSON format. Naturally, implemented the import function too.

-   Disabled the "Return to Chrome" feature that forced a new tab after 4 hours of inactivity.

-   Resolved an intermittent issue where pressing Enter in the URL bar would fail to initiate navigation.

-   Added an option to toggle Back/Forward transition animations in Accessibility settings (Default: Enabled).

-   Disabled ThrottleMainFrameTo60Hz by default.  

-   Fixed an upstream Chromium bug involving iframes where scroll predictor conflicts caused rendering issues (How is such a massive bug still unfixed?).

-   Fixed an upstream Chromium bug where inertial scrolling stops abruptly when zooming in on pages with horizontal content (How is such a massive bug still...)

-   Implemented automatic update notifications (configurable in Accessibility settings; enabled by default).

-   Added a "Check for updates" button to the main menu.

---

## ・Modified Files

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
