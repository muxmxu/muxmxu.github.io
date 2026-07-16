---
title: Reusable Audio Research Tooling
excerpt: Data, training, and evaluation utilities developed to remove recurring friction from audio machine-learning experiments.
locale: en
slug: research-audio-tooling
year: 2024 —
status: maintained
tags: [Research Engineering, PyTorch, Data Pipelines]
featured: true
order: 3
code: https://github.com/LinhMuks-DFox
---

## Infrastructure as research practice

Audio experiments repeatedly need the same unglamorous but essential work: acquiring datasets, validating files, transforming samples, tracking evaluations, and reproducing environments.

I maintain small, reusable tools for these tasks, including utilities for AudioSet and ESC-50, a Docker-based deep-learning template, and plotting and evaluation helpers.

## Principles

- Keep experiment environments reproducible
- Turn one-off scripts into explicit, reusable interfaces
- Make data preparation and evaluation easier to inspect
- Share useful infrastructure with other researchers

This collection evolves with the bottlenecks encountered in active research rather than following a fixed product roadmap.
