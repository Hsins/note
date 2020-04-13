# Section 04 - React Components

## Section Intro: React Components

在這一小節將介紹 **React 組件（Components）**，透過將頁面上所使用到的各個部分拆解成可重複使用的構件，是 React 很重要的特性。

## Thinking in React

React 開發時，我們會將頁面拆分成分成各個獨立的 **組件（Components）**，這些組件可能由可重複使用用的子組件構成。首先我們來嘗試將 Tweet 的頁面拆分成組件：

![](https://i.imgur.com/p0TH35y.png)

同樣地，我們可以將要實作的應用拆分成如下的組件：

![](https://i.imgur.com/ct8Lapw.png)

## ES6 Classes: Part I

在 React 中廣泛使用 **類別（class）** 來創建組件，這一小節和下一小節將介紹 ES6 中關於類別的創建與使用方式：

```javascript
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    // return 'Hi, I am ' + this.name + '!';
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('Sean', 25);
console.log(me.getDescription());
```

- 在使用 React 框架進行開發，組件名稱建議開頭使用大寫字母來跟 HTML 中類別作區分。
- 透過關鍵字 `new` 來創建某一類別的 **實例（instance）**。
- 類別中所定義 **建構函數（constructor function）** 會在實例被創建時呼叫，其餘函數則為該物件的 **方法（method）**。

## ES6 Classes: Part II

在上一小節我們宣告了 `Person` 類別，如果要複用 `Person` 類別的屬性和方法來構建其他類別時，我們必須透過 `extends` 來完成：

```javascript
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.major()) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}
```

- 子類別中透過 `super()` 來存取父類別所定義的屬性和方法。
- 如果要覆蓋父類別中的方法時，直接在子類別中定義同樣名稱的方法即可。

## Creating a React Component

有了類別的概念，接著我們來看看 React 組件。實際上每一個我們所創建的 React 組件都是 `React.Component` 這個類別的子類別：

```jsx
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
```

- 每一個 React 組件都是 `React.Component` 這個類別的子類別。除此之外，我們必須替每個組件撰寫各自的渲染方法 `render()`。
- 在 JSX 語法中我們透過類似 HTML 標籤 `<ClassName />` 來呼叫組件。由於原始的 HTML 標籤都是小寫的，所以慣例上我們在創建 React 類別時使用開頭大寫的名稱來作區別。

## Nesting Components

讓我們回顧一下在 [023, Thinking in React](https://hackmd.io/s/B1IJ1EDAX#023-Thinking-in-React) 中我們所拆分的組件，可以看到的是組件中是可以包含其他組件的，在這一小節中透過巢狀組件的方式來將子組件放置在特定的組件之中，比如將 `Header`、`Action`…等組件放置在 `IndecisionApp` 組件中：

```jsx
class IndecisionApp extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
```

- React 組件也可以放置在 `ReactDom.render()` 方法中做為要進行渲染的模板。

## 028, Component Props

在 React 中提供了兩個屬性 `props` 和 `state` 來使資料可以在不同的組件之間進行傳遞與儲存，兩者最主要的差別在於 `props` 是不可變的，多數的靜態資料我們將透過 `props` 來傳遞。

以下是一個簡單的範例，我們可以在 `Header` 的父組件 `IndecisionApp` 中宣告變數，並透過 `props` 傳遞到 `Header` 中：

```jsx
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
```

接著我們來看一個較為複雜的案例，由於此處透過 `props` 傳遞的 `options` 是一個列表，在此處使用 `map()` 方法：

```jsx
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Options entends React.Component {
  render() {
    return (
      <div>
      {
        this.props.options.map((option) => <Option key={option} optionText={option} />)
      }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}
```

## Events & Methods

在這一小節中，我們將事件觸發和要執行的內容寫進組件中。在下面的範例中，當表單 `form` 被提交時將會觸發 `onSubmit` 事件並呼叫定義在 `AddOption` 組件中的 `handleAddOption` 方法中：

```jsx
class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
```

## Method Binding

當我們在調用 `this.props.options` 我們會發現返回錯誤訊息，這是因為在 React 中所定義的性質並不會綁定到 `this` 中，此時必須透過 `bind()` 函數來處理，關於更多 `bind()` 的說明可以查看 [MDN | Function.prototype.bind()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)。

在 [Medium | React 與 bind this 的一些心得](https://medium.com/reactmaker/react-%E8%88%87-bind-this-%E7%9A%84%E4%B8%80%E4%BA%9B%E5%BF%83%E5%BE%97-323c8d3d395d) 中提供了五種解法，在此處講師採用的是在建構子函數 `constructor` 中進行綁定：

```jsx
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}
```

## What Is Component State?

在 [028, Component Props](https://hackmd.io/s/B1IJ1EDAX#028-Component-Props) 提到了在 React 中提供了兩個屬性 props 和 state 來使資料可以在不同的組件之間進行傳遞與儲存。有別於 props 可以由父組件傳入而言，state 具有 **私有（private）** 與 **封裝（encapsulated）** 的概念。

透過下面這張圖來理解一下關於 state 的運作方式：

![](https://i.imgur.com/P3gjzZi.png)

1. 對於一個組件，先給定一個預設的 state 物件
2. 組件會先將預設的 state 數值渲染到瀏覽器中
3. 透過事件來改變 state 值
4. 當 state 值變更時，組件會重新渲染

## Adding State to Counter App: Part I

在這一小節我們要先建立下一小節中將使用到的基本架構：

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    console.log('handleAddOne');
  }
  handleMinusOne() {
    console.log('handleMinusOne');
  }
  handleReset() {
    console.log('handleReset');
  }
  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
```

## Adding State to Counter App: Part II

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // 初始化 state
    this.state = {
      count: 0
    }
  }
  handleAddOne() {
    // 透過觸發事件改變 state 值
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    // 透過觸發事件改變 state 值
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    // 透過觸發事件改變 state 值
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        // 將 state 渲染至瀏覽器
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
```

- 在建構子函數中添加 `this.state` 物件來初始化 state。
- 綁定事件觸發，透過 `this.setState` 來更新 state 值，此處傳入的參數為前一個 state 的狀態 `prevState`。

## Alternative setState Syntax

在上一小節中的內容中，我們不難發現對於要更新 state 值時，都是透過匿名函數進行 `return` 來將要更新的值回傳。如果不透過回傳值來進行更新的話，將會有一些小陷阱：

```jsx
handleReset() {
  this.setState({
    count: 0
  });
  tihs.setState({
    count: this.state.count + 1
  });
}
```

## Build It: Adding State to VisibilityToggle

```jsx
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>hey, </p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
```

## Indecision State: Part I

```jsx
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing four']
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
```

## Indecision State: Part II

```jsx
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
```

## Summary: Props vs. State

![](https://i.imgur.com/6BM2eXr.png)