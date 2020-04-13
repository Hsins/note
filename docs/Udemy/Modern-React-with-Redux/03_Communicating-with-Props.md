# Section 03 - Communicating with Props

## [Lecture] Three Tenets of Components

在構建 React 構建時，有三個主要的原則：

- **嵌套性（Nesting）**：A component can be shown inside of another
- **複用性（Resuability）**：We want to make components that can be easily reused through out application
- **自訂性（Configuration）**: We should be able to configure a component when it is created

## [Lecture] Application Overview

在這一單元我們將要透過 React 構件來建置一個用戶表單，下面是他的 **實物模型（Mockups）**：

<div align="center">
  <img src="https://i.imgur.com/nOCJ3jp.png">
</div>

## [Lecture] Getting Some Free Styling

由於這門課的著重點並不是在於 CSS 樣式，因此我們將使用 [Semantic UI](https://semantic-ui.com/) 來進行組件的樣式設定，在並不複雜的專案中可以使用 CDN 的方式將 css 檔案於 `public/index.html` 中引入：

```html
<head>
  ...
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
  ...
</head>
```

## [Lecture] Naive Component Approach

首先，先使用 HTML 代碼刻劃一個完整構建要具備的框架，我們將在接下來的單元中將各個部分拆分為一個個的 React 構件：

```jsx
const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam  
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog Post!</div>
        </div>
      </div>
    </div>
  )
};
```

## [Lecture] Specifying Images in JSX

在建置好基礎的 HTML 架構之後，使用者頭像的部分和使用者名稱部分如果在測試與開發時需要自行撰寫著實是件浪費時間且沒有意義的事，關於假資料的生成可以使用 [Faker.js](https://github.com/marak/Faker.js/) 來完成，首先透過 npm 工具安裝：

```bash
# Install faker to local project with npm
$ npm install --save faker
```

接著直接在代碼中使用：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam  
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice blog Post!</div>
        </div>
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
```

## [Lecture] Duplicating a Single Component

在這一小節的內容，講師演示了一下如果沒有將 React 組件包裝以適當的複用性，會在撰寫過程中遇到的難處。

## [Lecture] Extracting JSX to New Components

### The Steps to create a Reusable and Configurable component

1. Identify the JSX that appears to be duplicated
2. What is the purpose of that block of JSX? Think of a decriptive name for what it does.
3. Create a new file to house this new component - it should have the same name as the component
4. Create a new component in the new file, paste the JSX into it
5. Make the new component configurable by using React's `props` system

### Implement the `CommentDetail` Component

在 `src/` 目錄下創建 `CommentDetail.js`，並在其中宣告一個組件，注意：

- 使用到的 `faker` 必須在開頭引入
  ```javascript
  import faker from 'faker';
  ```
- 為了在 `index.js` 中複用組件，必須將組件進行導出
  ```javascript
  export default CommentDetail;
  ```

完整代碼如下：

```javascript
import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam  
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog Post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
```

## [Lecture] Component Nesting

導出後的 `CommentDetail` 只要透過路徑引入後就可以在組件中進行複用：

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
```

## [Lecture] React's Props System

> A Props system in React is a system for passing data from a parent component to a child component. Its goal is to customize or configuare a child component.

在前面的小節中，我們在 `App` 組件中添加了數個 `CommentDetail` 組件，其中 `App` 組件稱為這些組件的父組件（parent component），而 `CommentDetail` 則稱為其子組件（child component）。在 React 中透過 **屬性系統（Props System）** 來將資料從父組件傳遞給子組件，以當前的專案來說，我們可以透過父組件傳遞如：作者、時間與評論內容…等資料給子組件。

## [Lecture] Passing and Receiving Props

由父組件傳遞屬性到子組件，在父組件的部分必須給定傳遞的屬性名稱與其值，比如：

```jsx
<div className="ui container comments">
  <CommentDetail author="Sam"/>
  <CommentDetail author="Alex"/>
  <CommentDetail author="Jane"/>
</div>
```

父組件會將屬性以名為 `props` 的物件傳遞到子組件：

```jsx
const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice blog Post!</div>
      </div>
    </div>
  );
};
```

## [Lecture] Passing Multiple Props

父組件可以傳遞多個屬性給子組件，比如：

```jsx
<div className="ui container comments">
  <CommentDetail author="Sam" timeAgo="Today at 4:45PM" />
  <CommentDetail author="Alex" timeAgo="Today at 2:00AM" />
  <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" />
</div>
```

## [Lecture] Passing Props - Solutions

**index.js**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        content="I like the subject"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="I like the writing"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
```

**CommenDetail.js**

```jsx
import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
```

## [Lecture] Component Reuse

想像一個情境，對於評論區的留言中可能會有垃圾訊息必須在後台進行刪除或是限制顯示與否，對於後臺要呈現的頁面可能必須在每一則評論下增添兩個按鈕。我們可以透過組件重用來實現，有別於直接在當前的組件下增添按鈕，我們可以構建一個新的組件包含當前的評論內容並增添按鈕元素：

<div align="center">
  <img src="https://i.imgur.com/q6AKuEE.png">
</div>

## [Lecture] Implementing an Approval Card

創建一個 `ApprovalCard` 組件的雛型：

```jsx
import React from "react";

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">Are you sure?</div>
      <div className="extra content">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  );
};

export default ApprovalCard;
```

## [Lecture] Showing Custom Children

在 `ApprovalCard` 組件中的內容部分，如果想要將一個組件傳遞進去，在父組件的部分必須將子組件放在父組件中：

```jsx
<ApprovalCard>
  <CommentDetail
    author="Sam"
    timeAgo="Today at 4:45PM"
    content="Nice blog post"
    avatar={faker.image.avatar()}
  />
</ApprovalCard>
```

此時在進行屬性傳遞時，子組件被放置在 `props.children` 下，必須寫成：

```jsx
import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  );
};

export default ApprovalCard;
```

## [Lecture] Component Reuse

略。

## [Lecture] Exercise - Props

略。

## [Exercise] Test Your Knowledge: Props

Check out the code below. Right now it contains two components: the `App` and the `Message`. The code works, but notice that the `Message` component has a hard-coded header of `Changes in Service` and hard-coded message of `We just updated...`.

As it stands, the `Message` component can't be reused to show any other message!

**Your Goal**:

- Refactor the `Message` component so that it receives its props from the parent component (the `App`).
- The `Message` should receive a prop of `header` and `text`.
- The `Message` show the `header` prop inside of the `div` with className `header` and the `text` prop inside of the paragraph tag.

```jsx
<script type="text/babel" data-presets="env,react">
  const App = () => {
    return (
      <div>
        <Message />
      </div>
    );
  }
  
  const Message = (props) => {
    return (
      <div className="ui message">
        <div className="header">Changes in Service</div>
        <p>We just updated our privacy policy here to better service our customers.</p>
      </div>
    );
  }
  
  // Renders the App component into a div with id 'root'
  ReactDOM.render(<App />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```

## [Lecture] Props Exercise Solution

```jsx
<script type="text/babel" data-presets="env,react">
  const App = () => {
    return (
      <div>
        <Message header="Changes in Service" text="We just updated our privacy policy here to better service our customers."/>
      </div>
    );
  }
  
  const Message = (props) => {
    return (
      <div className="ui message">
        <div className="header">{props.header}</div>
        <p>{props.text}</p>
      </div>
    );
  }
  
  // Renders the App component into a div with id 'root'
  ReactDOM.render(<App />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```

## [Lecture] Exercise - Children

略。

## [Exercise] Test Your Knowledge: Children Through Props

Take a look at the code below. The `App` is showing two separate groups of elements. Notice how there is one element that is giving both these groups the nice grey background - it is the `<div className="ui placeholder segment"></div>`

**Your Goal**:

- Create a new reusable component call `Segment` that takes some child elements and shows them inside of a `div` with classNames of `ui placeholder segment`.
- Refactor the `App` to use this new `Segment` component.

```jsx
<script type="text/babel" data-presets="env,react">
  const App = () => {
    return (
      <div>
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
              No documents are listed for this customer.
          </div>
          <div className="ui primary button">Add Document</div>
        </div>
        <div className="ui placeholder segment">
          <h4 class="ui header">For Your Information</h4>
          <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
        </div>
      </div>
    );
  }
  
  // Renders the App component into a div with id 'root'
  ReactDOM.render(<App />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```

## [Lecture] Children Exercise Solution

```jsx
<script type="text/babel" data-presets="env,react">
  const App = () => {
    return (
      <div>
        <Segment>
          <div className="ui icon header">
            <i className="pdf file outline icon"></i>
              No documents are listed for this customer.
          </div>
          <div className="ui primary button">Add Document</div>
        </Segment>
        <Segment>
          <h4 class="ui header">For Your Information</h4>
          <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
        </Segment>
      </div>
    );
  }

  const Segment = (props) => {
    return <div className="ui placeholder segment">{props.children}</div>
  };
  
  // Renders the App component into a div with id 'root'
  ReactDOM.render(<App />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```