# Section 27 - State

- [Section 27 - State](#Section-27---State)
  - [[Note] State](#Note-State)
  - [[Note] Pure Function and Spread Operator](#Note-Pure-Function-and-Spread-Operator)
  - [[Note] React Component Architecture](#Note-React-Component-Architecture)
    - [State and Props](#State-and-Props)
    - [Stateless Functional Component](#Stateless-Functional-Component)
  - [[Note] `setState` can be tricky](#Note-setState-can-be-tricky)
    - [Update Function](#Update-Function)
    - [Use Callback](#Use-Callback)

## [Note] State

- 狀態的改變必須為純函數

## [Note] Pure Function and Spread Operator

- 純函數不會改變輸入值。
- 同樣的輸入，返回值會一樣。

## [Note] React Component Architecture

### State and Props

- State is always passed from a parent down to a child component as a prop
- State should not be passed to a sibling or a parent
- State Should Be Owned by 1 Component

### Stateless Functional Component

## [Note] `setState` can be tricky

### Update Function

當要使用到前一狀態 `prevState` 時，將參數傳入到函數中：

```jsx
this.setState((prevState, props) => {
  return {
    counter: prevState.counter + 1
  };
});
```

### Use Callback

由於 `setState` 是異步（asynchronous）的，我們必須使用 `callback()` 這樣的異步解決方案：

```jsx
this.setState({name: "Tim"});
// Won't be updated yet
console.log(this.state.name);

this.setState({name: "Tim"}, () => {
  console.log(
    "Now state is up to date",
    this.state.name
  );  
});
```