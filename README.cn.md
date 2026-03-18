<p align="center">
  <img src="./assets/Elixir-icon.png" alt="Elixir Browser Logo" width="256" height="256"/>
</p>

<p align="center">
  <a href="https://github.com/SF-FLAM/ElixirBrowser/releases/latest"><img src="https://img.shields.io/badge/下载-最新版本-brightgreen?style=for-the-badge"></a>
  <a href="https://github.com/sponsors/SF-FLAM"><img src="https://img.shields.io/badge/GitHub-赞助-EA4AAA?style=for-the-badge&logo=githubsponsors"></a>
  <a href="https://buymeacoffee.com/sf_flam"><img src="https://img.shields.io/badge/请我喝杯咖啡-FFDD00?style=for-the-badge&logo=buymeacoffee&logoColor=black"></a>
</p>

# Elixir Browser

> **[English](README.md) | [Русский (Russian)](README.ru.md) | [简体中文 (Chinese)](README.cn.md) | [日本語 (Japanese)](README.ja.md)**

<br>

Elixir 是一款基于 Chromium 的 Android 浏览器，完美支持各类扩展程序。  
本项目深受 Kiwi Browser 启发，致力于提供出色的扩展兼容性、独特的 UI 改进以及对低效交互行为的深度优化。

**注意：** 本项目与 Kiwi Browser 的开发者或团队无任何关联。  
Elixir 是直接基于 Chromium 官方源码构建的独立分支（Fork）。本项目没有复用任何来自其他浏览器（如 Kiwi）的代码或二进制文件。

为了阻止不必要的通信，大多数依赖 Google 的服务已被移除。  
然而，考虑到用户便利性，诸如谷歌翻译（Google Translate）和搜索建议（Search Suggestions）等高实用性功能仍保留为可选开关。

<br>

<p align="center">
  <img src="./assets/Screenshot_0_Elixir_Browser.png" alt="screenshot0" width="32%">
  <img src="./assets/Screenshot_1_Elixir_Browser.png" alt="screenshot1" width="32%">
  <img src="./assets/Screenshot_2_Elixir_Browser.png" alt="screenshot2" width="32%">
</p>

<br>

## 核心特性

* **扩展支持**：
    * 支持直接从 Chrome 应用商店安装并使用与桌面版 Chrome 相同的扩展程序。

* **增强型 UI**：
    * **常驻标签栏（Tab Bar）选项**
    * **底部工具栏选项**
    * **移除冗余 UI 元素**
    * **主菜单新增谷歌翻译按钮**
    * **自定义快速访问（Speed Dial）实现**
    * **以及更多...**

* **自定义手势**：
    * 可自由将各种操作映射到手势，实现极致的操控体验和浏览舒适度。

* **行为优化**：
    * **通过返回手势关闭标签页**：当没有可后退的历史记录时，返回手势将直接关闭标签页，而非返回主页/新标签页。
    * **以及更多...**

* **隐私保护**：
    * 拦截了原生 Chromium 中发现的多处数据传输。

* **长期开发维护**：
    * 定期跟进最新的 Chromium 版本，并提供尽力而为的维护支持。

<br>

## 支持与郑重承诺

Elixir Browser 是一个由个人独立开发的项目。  
**它完全是非营利性质的。我郑重宣誓：本应用现在不会、将来也绝不包含任何广告联盟、个人数据收集或付费买断内容。**

即便如此，个人的支持依然备受感激！ 🤑

修改和维护 Chromium 是一项极其艰巨的任务。  
坦白说，对于独立开发者而言这相当吃力。为了确保项目的长期可持续性，请考虑支持一下我（这名贫穷的开发者）。  
↓↓↓  
  
<<**[❤️ GitHub Sponsors 赞助](https://github.com/sponsors/SF-FLAM)**>>

<<**[☕ 请我喝杯咖啡](https://buymeacoffee.com/sf_flam)**>>  

<br>

## 下载

您可以通过以下链接获取最新的 APK 版本：

<<**[最新版本发布页](https://github.com/SF-FLAM/ElixirBrowser/releases/latest)**>>

<br>

## 历史与路线图

详细的开发历史和计划中的未来功能可以在此处找到。  
由于我最初构建它是为了替代我个人使用的 Kiwi，因此功能的筛选反映了我个人的偏好。

**所有修改及新增的文件名均列在“Modified Files”部分。任何不在该列表中的文件均为原生（Vanilla）Chromium 代码。**

大多数不必要的 Google 通信已在组件层面被移除。  
这与其说是出于“隐私激进主义”，不如说是为了追求轻量化体验而进行的激进优化。  
因此，保留了部分功能是因为移除它们可能会破坏核心浏览功能。这些功能计划在经过严格测试后在未来更新中移除。

<<**[更新日志](./CHANGELOG.md)**>>

<br>

## 错误报告

如果您遇到任何问题，请通过 GitHub Issues 进行反馈。我会尽力改进应用。  
注意：我主要在 **开启标签栏且使用顶部工具栏** 的模式下使用此应用。在其他 UI 配置下出现的 Bug 可能会被漏掉。
    
<<**[问题反馈](https://github.com/SF-FLAM/ElixirBrowser/issues)**>>

<br>

## 常见问题 (Q & A)

**Q：系统要求是什么？** A：遵循 Chromium 的基本规格。需要 **Android 10+ (ARM64)**。目前不提供 32 位版本。

**Q：为什么还没有开源？我想看代码！** A：我的目标是在未来实现开源。  
由于目前所有的代码注释都是用日语写的，我想在发布前先将它们翻译成英文。  
目前我的首要任务是功能更新，暂时没有多余的精力进行代码管理，因此计划缓慢推进。

**Q：内置密码管理器了吗？** A：没有。它使用您 Android 系统设置中指定的密码管理器。  
虽然 Google 密码管理器是标准配置，但在非主流浏览器（如 Kiwi 或 Elixir）上，取决于 Android 版本，可能会出现警告。不过，密码输入本身是可以正常工作的。  
个人建议使用 **Bitwarden**（独立 App，而非扩展版）。我已经确认 Passkey（通行密钥）可以完美配合使用。

**Q：快速访问默认有两个广告拦截器，推荐哪一个？** A：请根据您的喜好选择。我个人使用的是 **AdGuard**。

* **uBlock Origin Lite**
    * 截至 2026 年 1 月，虽然在自定义过滤规则部分加载外部规则在技术上是可行的，但加载后感觉它们并没有正常工作。
    * 与 AdGuard 相比，即使使用相同的过滤器，某些广告仍无法拦截。
    * 扩展弹出框功能完美，通过元素选择进行手动拦截非常方便。

* **AdGuard AdBlocker**
    * 完美支持添加外部规则，给人一种无缝拦截的感觉。
    * 元素选择拦截功能较难使用。应用更改时还存在一种奇怪的延迟。
    * 浏览器重启后需要一段时间才能生效。总体感觉运行较慢。