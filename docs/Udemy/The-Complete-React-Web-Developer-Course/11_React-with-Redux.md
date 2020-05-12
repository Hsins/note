---
pageClass: udemy
---

# React with Redux

## Higher-Order Components (HOC)

根據 React [文件](https://reactjs.org/docs/higher-order-components.html)中的敘述，所謂的高階組件（HOC, Higher-Order Components）就是一個函數，傳給他一個組件，他會返回一個新的組件：

```javascript
// Higher Order Component (HOC): A component (HOC) that renders another component
// Goal:
// - Reuse code
// - Render hijacking
// - Prop manipulation
// - Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>Please login to view the info</p>
        )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));
```

如果這部分看不懂，可以看一下 [GitHub | 助你完全理解 React 高阶组件（Higher-Order Components）](https://github.com/brickspert/blog/issues/2) 這篇的內容。