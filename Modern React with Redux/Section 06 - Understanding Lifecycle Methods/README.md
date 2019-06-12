# Section 06 - Understanding Lifecycle Methods

## Table of Contents

- [Section 06 - Understanding Lifecycle Methods](#section-06---understanding-lifecycle-methods)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Introducing Lifecycle Methods](#lecture-introducing-lifecycle-methods)
  - [[Lecture] Why Lifecycle Methods?](#lecture-why-lifecycle-methods)
  - [[Lecture] Refactoring Data Loading to Lifecycle Methods](#lecture-refactoring-data-loading-to-lifecycle-methods)
  - [[Lecture] Alternate State Intialization](#lecture-alternate-state-intialization)
  - [[Lecture] Passing State as Props](#lecture-passing-state-as-props)
  - [[Lecture] Determining Season](#lecture-determining-season)
  - [[Lecture] Ternary Expressions in JSX](#lecture-ternary-expressions-in-jsx)
  - [[Lecture] Showing Icons](#lecture-showing-icons)
  - [[Lecture] Extracting Options to Config Objects](#lecture-extracting-options-to-config-objects)
  - [[Lecture] Adding Some Styling](#lecture-adding-some-styling)
  - [[Lecture] Showing a Loading Spinner](#lecture-showing-a-loading-spinner)
  - [[Lecture] Specifying Default Props](#lecture-specifying-default-props)
  - [[Lecture] Avoiding Conditionals in Render](#lecture-avoiding-conditionals-in-render)
  - [[Lecture] Breather and Review](#lecture-breather-and-review)
  - [[Exercise] Class-Based Components](#exercise-class-based-components)
  - [[Lecture] Exercise Solution - Class-Based Components](#lecture-exercise-solution---class-based-components)
  - [[Exercise] Updating Components with State](#exercise-updating-components-with-state)
  - [[Lecture] Updating Components with State](#lecture-updating-components-with-state)

## [Lecture] Introducing Lifecycle Methods

透過 React 組件的生命週期方法，可以讓組件在生命週期中的某一個特定時刻自動地被呼叫，以下是最基礎常見的生命週期方法：

<div align="center">
  <img src="https://i.imgur.com/Re1EWhc.png">
</div>

## [Lecture] Why Lifecycle Methods?

在這裡講師稍微敘述了一下為什麼要使用生命週期方法，以及各個生命週期方法中應該要放哪一類的業務邏輯。這別提到有一個慣例是將資料載入的業務邏輯（比如當前專案的獲取使用者位置）放到 `componentDidMount()` 生命週期方法中，雖然不論放在建構子 `constructor()` 中還是 `componentDidMount()` 生命週期方法中都符合技術上的邏輯，但這樣的慣例能夠上開發者在協作時能夠一目了然一個組件的行為。

## [Lecture] Refactoring Data Loading to Lifecycle Methods

我們將代碼進行重構，把原先放在建構子 `constructor()` 中的業務邏輯放到 `componentDidMount()` 生命週期方法中：

```jsx
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // THIS IS THE ONLY TIME we do directly assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" };
  }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

## [Lecture] Alternate State Intialization

同樣地，狀態的初始化也可以在建構子 `constructor()` 外：

```jsx
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

## [Lecture] Passing State as Props

接著我們引入並渲染 `SeasonDisplay` 組件：

```jsx
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat="{this.state.lat}" />;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

## [Lecture] Determining Season

這一小節撰寫依據當前月份和緯度（南北半球）來判斷季節的業務邏輯代碼：

```jsx
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  return <div>Season Display</div>;
};

export default SeasonDisplay;
```

- `Date().getMonth()` 物件可以回傳當前月份
- `lat > 0 ? "summer" : "winter"` 會先判斷 `lat` 是否大於零，成立則返回 `summer`，否則返回 `winter`

## [Lecture] Ternary Expressions in JSX

```jsx
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winder";
  } else {
    return lat > 0 ? "winder" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Burr, it is chilly" : "Let's hit the beach";

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
```

## [Lecture] Showing Icons

實作依據不同季節顯示圖標的業務邏輯代碼：

```jsx
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winder";
  } else {
    return lat > 0 ? "winder" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === "winter" ? "Burr, it is chilly" : "Let's hit the beach";
  const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
```

## [Lecture] Extracting Options to Config Objects

這邊創建一個 `seasonConfig` 來存放對應季節所要回傳的文字與圖標，藉以重構代碼：

```jsx
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winder";
  } else {
    return lat > 0 ? "winder" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
```

## [Lecture] Adding Some Styling

樣式表必須在組件代碼中透過 `import` 引入（注意要加上副檔名）：

```jsx
import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winder";
  } else {
    return lat > 0 ? "winder" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
```

## [Lecture] Showing a Loading Spinner

創建載入頁面組件 `Spinner.js`：

```jsx
import React from "react";

const Spinner = () => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">Loading...</div>
    </div>
  );
};

export default Spinner;
```

## [Lecture] Specifying Default Props

屬性系統讓父組件可以傳遞屬性給子組件，倘若沒有資料傳遞給子組件時可以設定預設的屬性值，比如：

```jsx
Spinner.defaultProps = {
  message: "Loading..."
};
```

## [Lecture] Avoiding Conditionals in Render

一般來說並不建議在 `render()` 函數中使用邏輯判斷，我們可以將要進行判斷的業務邏輯寫成一個組件方法 `renderContent()`，在渲染函數中使用：

```jsx
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat="{this.state.lat}" />;
    }

    return <Spinner message="Pleace accept location request" />;
  }

  // React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

## [Lecture] Breather and Review

略。

## [Exercise] Class-Based Components

See the code below, which creates a component called `UserForm`. Right now the `UserForm` is a functional component.

**Your Goal**

- Refactor the `UserForm` to be a class-based component. It should return the exact same JSX.

Remember that class-based components must:

1. Be a JavaScript class
2. Extend `React.Component`
3. Implement a render method that returns some JSX

```jsx
<script type="text/babel" data-presets="env,react">
  const UserForm = () => {
    return (
      <form>
        <label>Enter a username:</label>
        <input />
      </form>
    );
  }

  // Renders the App component into a div with id 'root'
  ReactDOM.render(<UserForm />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/redux@4.0.1/dist/redux.js"></script>
<script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```

## [Lecture] Exercise Solution - Class-Based Components

```jsx
<script type="text/babel" data-presets="env,react">
  class UserForm extends React.Component {
    render() {
      return (
        <form>
            <label>Enter a username:</label>
            <input />
        </form>
      );
    }
  }

  // Renders the App component into a div with id 'root'
  ReactDOM.render(<UserForm />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>

<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/redux@4.0.1/dist/redux.js"></script>
<script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
```

## [Exercise] Updating Components with State

The `Clock` class below is trying to implement a clock display that updates every second. Right now, a beginner engineer tried putting the component together, but they're finding that they can't get the time to update!

**Your Goal**

- Update the `Clock` class so that it properly updates once per second

**Hint**

- You definitely need to use `state`. Make sure you initialize the `state` object.
- Remember that you can get your component to update by calling `setState`.

```jsx
<script type="text/babel" data-presets="env,react">
  class Clock extends React.Component {
    componentDidMount() {
      setInterval(() => {
        this.time = new Date().toLocaleTimeString();
      }, 1000);
    }
  
    render() {
      return <div className="time">The time is: {this.time}</div>;
    }
  }
  
  // Renders the App component into a div with id 'root'
  ReactDOM.render(<Clock />, document.querySelector('#root'));
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

## [Lecture] Updating Components with State

```jsx
<script type="text/babel" data-presets="env,react">
  class Clock extends React.Component {
    state = { time: new Date().toLocaleTimeString() }

    componentDidMount() {
      setInterval(() => {
        this.setState({ time: new Date().toLocaleTimeString() })
      }, 1000);
    }
  
    render() {
      return <div className="time">The time is: {this.state.time}</div>;
    }
  }
  
  // Renders the App component into a div with id 'root'
  ReactDOM.render(<Clock />, document.querySelector('#root'));
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