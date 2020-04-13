# Section 12 - On We Go...To Redux!

## [Note] What is Redux?

[Redux](https://redux.js.org/) 是一個開源的 JavaScript 函數庫，提供可預測的應用程式狀態管理：

- Redux 是狀態管理庫（State Management Library）
- 應用程式的狀態，統一存放在 `store` 中。
- 應用程式的狀態，只能夠透過發出 `action` 來進行更動。
- 應用程式的狀態，更動前後交由純函數（pure function） `reducer` 處理。它會取得當前的 `state` 和一個 `action`，並回傳下一個 `state`。

## [Note] Action, Dispatch, Reducers and State

在 Redux 中常見以下術語：

- Store: 保存資料的地方，可以是做一個容器。整個應用程式只能有一個 `store`。
- State: 描述整個應用程式中的全部狀態，所有需要控制的狀態都應設計到 `state` 物件中。
- Action: 用來描述行為，並存入相應的訊息，是應用程式和 `store` 進行通訊的整合對象。
- Reducers: 由於已經使用了 `action` 來定義發生了什麼，需要透過 `reducer` 來處理 `action`。定義 `reducers` 時必須接收兩個參數：當前 `state` 和 `action` 並返回更新後的狀態。
- Dispatch: 用來觸發動作（action），是唯一可以用來修改 `store` 中 `state` 的方法。

## [Note] A Example of Redux

```javascript
console.clear();

// People dropping off a form (Actoin Creators)
const createPolicy = (name, amount) => {
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    paylove: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

// Reducers (Departmetns!)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // We care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }

  // We dont't care about this action (FORM!)
  return oldListOfClaims;
}

const account = (BagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return BagOfMoney - action.payload.amountOfMoneyToCollect;
  } else (action.type === 'CREATE_POLICY') {
    return BagOfMoney + action.payload.amount;
  }

  return BagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY"') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }

  return listOfPolicies;
}

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  polices: polices
})

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('John', 30));
store.dispatch(createPolicy('Bob', 40));
store.dispatch(createClaim('John', 50));
store.dispatch(deletePolicy('Bob'));

console.log(store.getState());
```