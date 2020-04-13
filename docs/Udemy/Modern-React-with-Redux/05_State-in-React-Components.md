# Section 05 - State in React Components

## [Lecture] The Rules of State

**狀態系統（State System）** 是 React 中一個十分重要的概念，他有許多好處但也並不那麼容易上手，常常會與屬性系統混淆，關於狀態系統有一些原則必須先知道：

- Only usable with class components (Technically can be used with functional component using the `hooks` system)
- You will confuse props with state
- `State` is a JavaScript Object that contains data relevant to a component
- Updating `state` on a component causes the component to (almost) instantly rerender
- State must be initialized when a component is created
- State can **only** be updated using the function `setState`

## [Lecture] Initializing State Through Constructors

React 要求類別組件中一定要具備 `render()` 函數，如果要使用狀態系統，我們則會透過 JavaScript 類別的建構子函數 `constructor()` 來完成：

```jsx
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }

  // React says we have to define render!!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

- `constructor()` 函數為 JavaScript 類別的原生函數，當類別被聲明時執行。
- 此處傳遞的參數 `props` 就是前面所提到屬性系統的 `props`。
- 在使用狀態系統時 `super(props)` 是一定要寫的，因為我們的組件類別是繼承 `React.Component` 類別而來，需要透過 `super()` 來參照父類別的建構子函數。
- 狀態初始化並儲存在 `this.sate` 物件中。

## [Lecture] Updating State Properties

因為我們希望在創建組件類別實例（instance）時能夠獲取使用者位置，將這部分的業務邏輯代碼放置到建構子函數中，並透過 `this.setState()` 方法來更新狀態：

```jsx
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do directly assignment
    // to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

這邊特別要注意的是更新狀態一律使用 `setState()` 方法，避免直接對物件內容進行賦值：

```jsx
// Prevent to do!!!
this.state.lat = position.coords.latitude;
```

## [Lecture] App Lifecycle Walkthrough

在這一單元中介紹了上述代碼實際上在執行的順序與邏輯：

1. JavaScript file loaded by browser
2. Instance of App component is created
3. App components `constructor` function gets called
4. State object is created and assigned to the `this.state` property
5. We call geolocation service
6. React calls the components render method
7. App returns JSX, gets rendered to page as HTML
8. ...
9. We get result of geolocation!
10. We update our state object with a call to `this.setState`
11. React sees that we updated the state of a component
12. React calls our `render` method a second time
13. Render method returns some (updated) JSX
14. React takes that JSX and updates content on the screen

## [Lecture] Handling Errors Gracefully

如同前面所提到的，使用者有可能拒絕瀏覽器存取位置，此時必須回報錯誤資訊。如果要進行頁面的重新渲染，就必須更新狀態：

```jsx
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do directly assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render!!
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
```

## [Lecture] Conditionally Rendering Content

加上邏輯判斷來條件式地渲染內容：

```jsx
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do directly assignment
    // to this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
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