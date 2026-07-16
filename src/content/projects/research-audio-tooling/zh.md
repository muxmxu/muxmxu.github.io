---
title: 可复用的音频研究工具
excerpt: 为减少音频机器学习实验中的重复负担而开发的数据、训练与评估工具。
locale: zh
slug: research-audio-tooling
year: 2024 —
status: maintained
tags: [研究工程, PyTorch, 数据流水线]
featured: true
order: 3
code: https://github.com/LinhMuks-DFox
---

## 将基础设施视为研究实践

音频实验不断需要完成一些不显眼但不可缺少的工作：获取数据集、验证文件、转换样本、记录评估以及复现实验环境。

我为这些任务维护了一组小型可复用工具，包括AudioSet与ESC-50工具、基于Docker的深度学习模板，以及绘图和评估辅助代码。

## 原则

- 保持实验环境可复现
- 将一次性脚本整理为明确、可复用的接口
- 让数据准备与评估过程更容易检查
- 与其他研究者共享有价值的基础设施

这些工具没有固定的产品路线，而是根据实际研究中遇到的瓶颈持续演化。
