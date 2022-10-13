import React from 'react';
import styles from './App.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages';



function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        {/* Switch 每次只匹配一条路由，相同路由则匹配代码最前面的一条，作用是防止页面堆叠 */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" render={() => <h1>登录页面</h1>} />
          <Route render={() => <h1>404 not found 页面去火星了 ！</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
