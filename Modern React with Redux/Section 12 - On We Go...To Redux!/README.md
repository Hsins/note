# Section 12 - On We Go...To Redux!

## Table of Contents

- [Section 12 - On We Go...To Redux!](#section-12---on-we-goto-redux)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Introduction to Redux](#lecture-introduction-to-redux)
  - [[Lecture] Redux by Analogy](#lecture-redux-by-analogy)
  - [[Lecture] A Bit More Analogy](#lecture-a-bit-more-analogy)
  - [[Lecture] Finishing the Analogy](#lecture-finishing-the-analogy)
  - [[Lecture] Mapping the Analogy to Redux](#lecture-mapping-the-analogy-to-redux)
  - [[Lecture] Modeling with Redux](#lecture-modeling-with-redux)
  - [[Lecture] Creating Reducers](#lecture-creating-reducers)
  - [[Lecture] Rules of Reducers](#lecture-rules-of-reducers)
  - [[Lecture] Testing Our Example](#lecture-testing-our-example)
  - [[Lecture] Important Redux Notes](#lecture-important-redux-notes)

## [Lecture] Introduction to Redux

從這一單元開始將介紹狀態管理庫 [Redux](https://redux.js.org/)，首先必須知道的一些特性：

> Redux is a predictable state container for JavaScript apps

- Redux 是狀態管理庫（State Management Library）
- 可以更簡單地創建複雜的應用
- 不需要去創建 React 應用就能夠使用

## [Lecture] Redux by Analogy

首先要介紹的是 Redux Cycle，在查找相關資料不論是官方文件或是部落格文章，會常見到下面的術語：

1. Action Creator
2. Action: 用來描述行為，並存入相應的訊息，是應用程式和 `store` 進行通訊的整合對象
3. Dispatch: 用來觸發動作（action），唯一可以用來修改 store 中 state 的方法
4. Reducers: 由於已經使用了 `action` 來定義發生了什麼，需要透過 `reducer` 來處理 `action`，定義時接收兩個參數：當前狀態和 `action` 並返回更新後的狀態
5. State: 描述一整個應用程式中的全部狀態，所有需要控制的狀態都應設計到 `state` 對象中

## [Lecture] A Bit More Analogy

## [Lecture] Finishing the Analogy

## [Lecture] Mapping the Analogy to Redux

## [Lecture] Modeling with Redux

## [Lecture] Creating Reducers

## [Lecture] Rules of Reducers

## [Lecture] Testing Our Example

## [Lecture] Important Redux Notes
