# Section 10 - Redux

## [Note] Why do we need Redux?

關於為什麼要使用 Redux，可以參考 [Daily JS | When do I know I’m ready for Redux?](https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f) 這篇文章的內容，總體上來說的話就是：

- React 組件間的資料與狀態傳遞使用 [單向數據流（Unidirectional Data Flow）](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)
- 當架構並不複雜時會採用 [狀態提升（Lifting State Up）](https://reactjs.org/docs/lifting-state-up.html) 的方式將狀態向上傳遞到共同祖先
- 使用 Redux 透過整個應用的狀態統一存放在 `store` 進行管理：
  - 組件可以將行為（action）派發（dispatch）給 `store` 而不用通知其他組件
  - 其他組件透過訂閱 `store` 中的狀態來更新自己的視圖

## [Note] JavaScript ES6: Object Destructuring and Array Destructuring

- [[筆記] JavaScript ES6 中的物件解構賦值（object destructuring）](https://pjchender.blogspot.com/2017/01/es6-object-destructuring.html)
- [[筆記] JavaScript ES6 中的陣列解構賦值（array destructuring）](https://pjchender.blogspot.com/2017/01/es6-array-destructuring.html)

## [Note] Redux 101: Setup Store and State

在接下來的內容將會簡單地用簡單地計數器來說明 Redux 的概念，首先要創建 `store`：

```javascript
import {createStore} from 'redux';

const store = createStore((stare = { count: 0 }) => {
  return state;
})

console.log(store.getState());
```

## [Note] Redux 101: Action and Dispatch

有了 `store` 存儲用來狀態之後，還需要定義不同的 **行為（action）**。行為（action）是用於描述已發生事件的物件，使用純函數來執行修改，我們藉由 `store.dispatch()` 來把 `action` 傳遞到 `store` 中：

```javascript
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default: 
      return state;
  }
});

console.log(store.getState());          // Object { count: 0 }

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'RESET' });
store.dispatch({ type: 'DECREMENT' });

console.log(store.getState());          // Object { count: -1 }
```

## [Note] Redux 101: Subscribing and Dynamic Actions

我們透過 `subscribe(listener)` 來訂閱，當 `action` 被 `dispatch` 時呼叫：

```javascript
import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return { count: state.count + incrementBy };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return { count: state.count - decrementBy };
    case 'SET':
      return { count: action.count };
    case 'RESET':
      return { count: 0 };
    default: 
      return state;
  }
});

const unsubcribe = store.subscribe(() => {
  console.log(store.getState());
});

// Object { count: 5 }
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

// Object { count: 6 }
store.dispatch({ type: 'INCREMENT' });

// Object { count: 0 }
store.dispatch({ type: 'RESET' });

// Object { count: -1 }
store.dispatch({ type: 'DECREMENT' });

// Object { count: -11 }
store.dispatch({ 
  type: 'DECREMENT',
  decrementBy: 10
});

// Object { count: 101 }
store.dispatch({ 
  type: 'SET',
  count: 101
});
```