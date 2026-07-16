---
title: Blinkyによる音響イベント分類
excerpt: 事前学習済みAutoencoderで音を光領域の信号へ変換し、音響イベントを分類する研究です。
locale: ja
slug: blinky-audio-classification
year: 2024 — 2025
status: published
tags: [音響イベント, Autoencoder, 音光変換]
featured: true
order: 2
code: https://github.com/LinhMuks-DFox/mutil-ae-ace
---

## 音から光へ

本研究では、事前学習済みAutoencoderを用いて音響表現を光領域の信号に変換し、**Blinky**を介した音響イベント分類を検討しました。

2024年の電子情報通信学会総合大会で発表した音光変換の検討から始まり、APSIPA ASC 2025で発表した事前学習手法へと発展しました。

## 研究の流れ

- 事前学習済みAutoencoderによる音光変換
- 変換表現を用いた音響イベント分類
- 継続的な実験を可能にする再現可能な実装

リンク先のリポジトリで研究コードを公開しています。将来のWebデモでは、原音、変換表現、分類出力を同一タイムライン上で比較できるようにします。
