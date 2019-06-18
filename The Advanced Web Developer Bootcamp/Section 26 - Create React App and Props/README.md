# Section 26 - Create React App and Props

- [Section 26 - Create React App and Props](#Section-26---Create-React-App-and-Props)
  - [[Note] Webpack and Create-React-App](#Note-Webpack-and-Create-React-App)
  - [[Note] Props](#Note-Props)
  - [[Note] Default Props and Props Types](#Note-Default-Props-and-Props-Types)
    - [Default Props](#Default-Props)
    - [PropTypes](#PropTypes)

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

更多的類型與用法可以參考 React 官方文檔 [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)。