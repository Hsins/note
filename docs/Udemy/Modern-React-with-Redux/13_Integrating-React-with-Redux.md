# Section 13 - Integrating React with Redux

## Table of Contents

- [Section 13 - Integrating React with Redux](#section-13---integrating-react-with-redux)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] React Cooperating with Redux](#lecture-react-cooperating-with-redux)
  - [[Lecture] React, Redux, and...React-Redux!?](#lecture-react-redux-andreact-redux)
  - [[Lecture] Design of the Redux App](#lecture-design-of-the-redux-app)
  - [[Lecture] How React-Redux Works](#lecture-how-react-redux-works)
  - [[Lecture] Redux Project Structure](#lecture-redux-project-structure)
  - [[Lecture] Named vs Default Exports](#lecture-named-vs-default-exports)
  - [[Lecture] Building Reducers](#lecture-building-reducers)
  - [[Lecture] Wiring Up the Provider](#lecture-wiring-up-the-provider)
  - [[Lecture] The Connect Function](#lecture-the-connect-function)
  - [[Lecture] Configuring Connect with MapStateToProps](#lecture-configuring-connect-with-mapstatetoprops)
  - [[Lecture] Building a List with Redux Data](#lecture-building-a-list-with-redux-data)
  - [[Lecture] Calling Action Creators from Components](#lecture-calling-action-creators-from-components)
  - [[Lecture] Redux is Not Magic!](#lecture-redux-is-not-magic)
  - [[Lecture] Functional Components with Connect](#lecture-functional-components-with-connect)
  - [[Lecture] Conditional Rendering](#lecture-conditional-rendering)
  - [[Lecture] Exercise Solution - Connecting Components to Redux](#lecture-exercise-solution---connecting-components-to-redux)

## [Lecture] React Cooperating with Redux

首先透過腳手架工具 `create-react-app` 創建我們的專案：

```bash
# Initiate a project
$ create-react-app songs
```

## [Lecture] React, Redux, and...React-Redux!?

在我們的專案中，會有兩個主要的組件：

- `SongList`: 顯示歌曲清單與按鈕
- `SongDetail`: 根據點擊的按鈕顯示的歌曲詳細資料

除此之外，我們還要安裝 `react-redux` 和 `redux` 套件來在我們的 React 專案中使用 Redux：

```bash
# Install package react-redux
$ npm install --save redux react-redux
```

## [Lecture] Design of the Redux App

在沒有使用 Redux 之前，我們的網頁應用程式組件架構與邏輯如下：

- `App` 組件：有 `List of Songs` 方法來呼叫 `SongList` 組件渲染在頁面上；有 `Selected song` 屬性可以傳遞給 `SongDetail` 組件
  - `SongList` 組件：必須監聽 `onSongSelect` 並將使用者選定的歌曲傳遞給 `App` 組件再傳遞給 `SongDetail` 組件
  - `SongDetail` 組件：根據 `App` 組件傳遞來的資訊渲染指定歌曲詳細資料

在使用 Redux 後，將由 Redux 管理所有狀態，其中：

- `Reducers`
  - Song list reducers
  - Selected song reducers
- `Action Creators`
  - Select Song

## [Lecture] How React-Redux Works

## [Lecture] Redux Project Structure

一個較為清楚的 React Redux 專案目錄建議設置如下：

```
.
├── src/
│   ├── actions/            // Contains files related to action creators
│   ├── components/         // Files related to components
│   ├── reducers/           // Files related to reducers
│   └── index.js            // Sets up both the react and redux sides of the app
├── ...
└── ...
```

接著在 `/src/actions` 文件夾下創建相關的文件，比如 `index.js`。這邊有個小技巧是當名稱取名相同時，在最外層的 `index.js` 檔案中要進行導入時，可以寫得較簡便：

```javascript
// import actions from '../actions/index';
import actions from '../actions';
```

## [Lecture] Named vs Default Exports

創建 `/src/actions/index.js`：

```javascript
// Action creator
export const selectSong = song => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
```

## [Lecture] Building Reducers

創建 `/src/reducers/index.js`：

```javascript
const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "Jump", duration: "1:15" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if ((action.type = "SONG_SELECTED")) {
    return action.payload;
  }

  return selectSong;
};
```

## [Lecture] Wiring Up the Provider

修改 `/src/index.js`：

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
```

## [Lecture] The Connect Function

```javascript
import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

export default connect()(SongList);
```

## [Lecture] Configuring Connect with MapStateToProps

```javascript
import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // this.props === { songs:state.songs }
    return (
      <div className="ui divided list">
        {this.UNSAFE_componentWillMount.renderList}
      </div>
    );
  }
}

const mapStateProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateProps)(SongList);
```

## [Lecture] Building a List with Redux Data

## [Lecture] Calling Action Creators from Components

## [Lecture] Redux is Not Magic!

## [Lecture] Functional Components with Connect

## [Lecture] Conditional Rendering

## [Lecture] Exercise Solution - Connecting Components to Redux
