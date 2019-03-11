# Section 16 - Advanced DOM Manipulation

## 185, Introduction to Events

如果要讓網頁具有與使用者互動的功能，就必須透過 JavaScript 來操作 DOM，其中非常重要的就是 **事件 (event)**，比如：

- Clicking on a button
- Hovering over a link
- Dragging and Dropping
- Pressing the Enter key

對於事件的處理，我們會先透過對指定元素添加事件的 **監聽器（listener）** 來監聽事件：

```javascript
// SELECT
var button = document.querySelector("button");

// Add listener
button.addEventListener("click", function() {
  console.log("SOMEONE CLICKED THE BUTTON!");
});
```

在監聽事件中呼叫函數可以採用 **匿名函數（anonymous function）** 或 **命名函數（name function）**，對於執行的結果並沒有太大差異。但通常若是函數並沒有要重複使用時，建議使用匿名函數即可：

**命名函數（name function）**

```javascript
// SELECT
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// Add listener
button.addEventListener("click", changeText);

// Declare the "changeText" function
function changeText() {
  paragraph.textContent = "Someone Clicked the Button!";
}
```

**匿名函數（anonymous function）**

```javascript
// SELECT
var button = document.querySelector("button");
var paragraph = document.querySelector("p");

// Add listener
button.addEventListener("click", function() {
  paragraph.textContent = "Someone Clicked the Button!";
});
```

## 186, Color Toggle Exercise

### Demand

Toggle the body's background color between purple and white, when a button is clicked.

### Solution

- [CodePen | Color Toggle](https://codepen.io/Hsins/pen/bvXLKR)

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Color Toggle</title>
</head>
<body>
  <button>CLICK ME!</button>
</body>
</html>
```

**CSS**

```css
.purple {
  background: purple;
}
```

**JavaScript**

```javascript
// SELECT element "button
var button = document.querySelector("button");

// Add listener
button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});
```

## 187, Score Keeper Project Part 1

## 188, Note about Score Keeper Project Part 2

- [What is the difference between “change” and “input” event for an INPUT element
](https://stackoverflow.com/questions/17047497/what-is-the-difference-between-change-and-input-event-for-an-input-element/17047607#17047607)

## 189, Score Keeper Project Part 2

- [CodePen | Score Keeper](https://codepen.io/Hsins/pen/XEvEYb)

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Score Keeper</title>
</head>
<body>
  <h1><span id="p1Display">0</span> to <span id="p2Display">0</span></h1>
  <p>Playing to: <span>5</span></p>
  
  <input type="number">
  <button id="p1">Player One</button>
  <button id="p2">Player Two</button>
  <button id="reset">Reset</button>
</body>
</html>
```

**CSS**

```css
.winner {
  color: green;
}
```

**JavaScript**

```javascript
// Declare the score
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

// Select the element
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

// Add listener
p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;    
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
```

## 190, Other Types of Events: Todo List

我們可以在 MDN 的 [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) 中找到許多事件監聽，在這個單元中將會利用 `mouseover` 和 `mouseout` 監聽器來創建一個簡易的代辦清單：

- [CodePen | To-do List Demo](https://codepen.io/Hsins/pen/odvWxJ)

**HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>To-Do List Demo</title>
</head>
<body>
  <ul>
    <li>Wash Cat</li>
    <li>Feed Cat</li>
    <li>Feed Cat to Dog</li>
  </ul>
</body>
</html>
```

**CSS**

```css
.done {
  text-decoration: line-through;
  opacity: 0.5;
}

.selected {
  color: green;
}
```

**JavaScript**

```javascript
// Select all the element with tag "li"
var lis = document.querySelectorAll("li");

// loop through to listen event
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function() {
    this.classList.add("selected");
  });

  lis[i].addEventListener("mouseout", function() {
    this.classList.remove("selected");
  });

  lis[i].addEventListener("click", function() {
    this.classList.toggle("done");
  });
}
```

## 191, Note regarding counting events exercise

## 192, Counting Events Exercise

透過開發者工具的控制台，我們可以透過以下一小段的代碼來計算 [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) 頁面中的事件數量：

```javascript
numOftable = document.querySelectorAll("table").length;
numOftr = document.querySelectorAll("tr").length;
numOfevent = numOftr - numOftable;
```