# Section 08 - Let's Build!

## Table of Contents
- [Section 08 - Let's Build!](#section-08---lets-build)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Creating Reusable Blocks](#lecture-creating-reusable-blocks)
    - [Wrapper](#wrapper)
    - [Border Bottom and Inline Element](#border-bottom-and-inline-element)
  - [[Lecture] Headline Block](#lecture-headline-block)
  - [[Lecture] Column Layout Block](#lecture-column-layout-block)
  - [[Lecture] Attention to Detail (Part 1)](#lecture-attention-to-detail-part-1)
  - [[Lecture] Attention to Detail (Part 2)](#lecture-attention-to-detail-part-2)

## [Lecture] Creating Reusable Blocks

### Wrapper

從項目的設計稿可以看到頁面被切成了許多區塊，我們要構建這些可以被重複使用的區塊。在現代許多頁面設計中會建構一個 `wrapper` 類別來封裝頁面中的其他可視元素，通常我們會在這個類別的樣式中設定與邊緣的留白。首先在 `./app/assets/styles/modules/` 下創建 `_wrapper.css` 樣式表並在 `styles.css` 中引入，記得替相對應的 HTML 元素設定類別：

```css
.wrapper {
  padding-left: 18px;
  padding-right: 18px;
}
```

關於如何在 CSS 中實現 `wrapper` 可以參考這篇 [眾成翻譯 | 在 CSS 中實現 "Wrapper" 最好的方式](https://www.zcfy.cc/article/the-best-way-to-implement-a-quot-wrapper-quot-in-css-css-tricks)

### Border Bottom and Inline Element

接著替 `large-hero` 區塊加上底邊，注意在這裡還要考慮到 `<img>` 元素的樣式 `display` 預設值是 `inline`，這會使得圖片下方多了一條底線，要設定為 `block`：

```css
.large-hero {
  border-bottom: 10px solid $mainBlue;
  position: relative;

  &__image {
    display: block;
  }
}
```

## [Lecture] Headline Block

略，詳見項目頁面。

## [Lecture] Column Layout Block

略，詳見項目頁面。

## [Lecture] Attention to Detail (Part 1)

略，詳見項目頁面。

## [Lecture] Attention to Detail (Part 2)

略，詳見項目頁面。
