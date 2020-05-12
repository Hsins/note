---
pageClass: udemy
---

# Redux

## Why do we need Redux?

關於為什麼要使用 Redux，可以參考 [Daily JS | When do I know I’m ready for Redux?](https://medium.com/dailyjs/when-do-i-know-im-ready-for-redux-f34da253c85f) 這篇文章的內容，總體上來說的話就是：

- React 組件間的資料與狀態傳遞使用 [單向數據流（Unidirectional Data Flow）](https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down)，在組件架構並不複雜時會採用 [狀態提升（Lifting State Up）](https://reactjs.org/docs/lifting-state-up.html) 的方式將狀態向上傳遞到共同祖先；但當組件架構複雜時，這樣的做法成本很高。
- 使用 Redux 透過整個應用的狀態統一存放在 `store` 進行管理：
  - 組件可以將行為（action）派發（dispatch）給 `store` 而不用通知其他組件
  - 其他組件透過訂閱 `store` 中的狀態來更新自己的視圖

## JavaScript ES6: Object Destructuring

- [[筆記] JavaScript ES6 中的物件解構賦值（object destructuring）](https://pjchender.blogspot.com/2017/01/es6-object-destructuring.html)

## JavaScript ES6: Array Destructuring

- [[筆記] JavaScript ES6 中的陣列解構賦值（array destructuring）](https://pjchender.blogspot.com/2017/01/es6-array-destructuring.html)

## JavaScript ES6: Spread Operator

- [[筆記] JavaScript ES6 中的展開運算子（spread operator）和其餘運算子（rest operator）](https://pjchender.blogspot.com/2017/01/es6-spread-operatorrest-operator.html)

## Redux 101: Setup Store and State

在接下來的內容將會透過建構一個簡單的計數器來說明 Redux 的概念，首先要創建 `store` 來存放狀態：

```javascript
import {createStore} from 'redux';

const store = createStore((stare = { count: 0 }) => {
  return state;
})

console.log(store.getState());
```

## Redux 101: Action and Dispatch

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

## Redux 101: Subscribing and Dynamic Actions

我們透過 `subscribe(listener)` 來訂閱狀態變更，當 `action` 被 `dispatch` 時呼叫：

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

## Redux 101: Refactoring with Action Generator

再更進一步，使用行為生成器（action generator）來重構前面的代碼。行為生成器（action generator）是一個回傳行為物件的函數：

```javascript
import { createStore } from 'redux';

// Action Generator: function that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({ type: 'INCREMENT', incrementBy });
const decrementCount = ({ decrementBy = 1 } = {}) => ({ type: 'DECREMENT', decrementBy });
const setCount = ({ count }) => ({ type: 'SET', count });
const resetCount = () => ({ type: 'RESET' });

// Store
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + incrementBy };
    case 'DECREMENT':
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
store.dispatch(incrementCount({ incrementBy: 5 }));

// Object { count: 6 }
store.dispatch(incrementCount());

// Object { count: 0 }
store.dispatch(resetCount());

// Object { count: -1 }
store.dispatch(decrementCount());

// Object { count: -11 }
store.dispatch(decrementCount({ decrementBy: 10 }));

// Object { count: -100 }
store.dispatch(setCount({ count: -100 }));
```

## Redux 101: Reducer

上面已經提到了 `action` 是一個用來描述發生事件的物件，我們透過 `dispatch` 來把 `action` 傳遞到 `store` 中。而在 `store` 中則根據傳入的 `action` 的來更新狀態，而描述如何改變狀態樹的就是 `reducer`，他有兩個特性：

1. 必須為純函數（pure function）
2. 不能變更 `state` 或 `action`

```javascript
import { createStore } from 'redux';

// Action Generator: function that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({ type: 'INCREMENT', incrementBy });
const decrementCount = ({ decrementBy = 1 } = {}) => ({ type: 'DECREMENT', decrementBy });
const setCount = ({ count }) => ({ type: 'SET', count });
const resetCount = () => ({ type: 'RESET' });

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + incrementBy };
    case 'DECREMENT':
      return { count: state.count - decrementBy };
    case 'SET':
      return { count: action.count };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

// Store
const store = createStore(countReducer);

const unsubcribe = store.subscribe(() => {
  console.log(store.getState());
});

// Object { count: 5 }
store.dispatch(incrementCount({ incrementBy: 5 }));

// Object { count: 6 }
store.dispatch(incrementCount());

// Object { count: 0 }
store.dispatch(resetCount());

// Object { count: -1 }
store.dispatch(decrementCount());

// Object { count: -11 }
store.dispatch(decrementCount({ decrementBy: 10 }));

// Object { count: -100 }
store.dispatch(setCount({ count: -100 }));
```

## [Note] Expensify App Redux Implement

```javascript
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// [Action Generators]
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// [Reducers]
// Expenses Reducers
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

// Filters Reducers
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// [Helper Functions]
// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// [Store]
// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

store.dispatch(sortByAmount());
```