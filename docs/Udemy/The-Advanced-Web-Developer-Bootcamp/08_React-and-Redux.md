---
pageClass: udemy
---

# React and Redux

## [Note] Front-End Framework

## [Note] What is React?

## [Note] JSX

## [Note] Webpack and Create-React-App

## [Note] Props

- **Props** is immutable data passed to components. It is accessible in component as an object called `this.props`

## [Note] Default Props and Props Types

### Default Props

```jsx
class App extends Component {
  static defaultProps = {
    recipes: [{
      title: "Spaghetti",
      ingredients: ["flour", "water"],
      instructions: "Mix ingredients",
      img: "spaghetti.jpg"
    }]
  }
  render() {
    return (
      <div>
        {this.props.recipes.map((r, index) => (
           <Recipe key={index} title={r.title}
                   ingredients={r.ingredients}
                   img={r.img} instructions={r.instructions}
           />
         ))}
      </div>
    );
  }
}
```

### PropTypes

React 提供了一個第三方的套件庫 `prop-types`，讓開發者可以在組件的配置參數加上類型驗證：

```bash
$ npm install --save prop-types
```

```jsx
import PropTypes from 'prop-types';

class IngredientList extends Component {
  static propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    return (
      <ul>
        {this.props.ingredients.map((ing, index) => (
           <li key={index}>{ing}</li>
         ))}
      </ul>
    );
  }
}
```

更多的類型與用法可以參考 React 官方文檔 [Typechecking With PropTypes](https://reactjs.org/docs/type)

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