import React from 'react'
import Admin from "./pages/admin";
import Routes from "./public/routes";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/*当url为admin开头的时候将自动进入BaseLayout组件*/}
        <Route path={'/admin'} render={routeProps => <Admin {...routeProps}/>}/>
        {/*不是由admin开头的进入下面*/}
        {
          Routes.other.map(item => {
            return <Route key={item.path} {...item} exact/>
          })
        }
        {/*当为/时，跳转到home首页*/}
        <Redirect from={'/'} to={'/admin/home'}/>
        {/*无法找到上述的页面时，跳转的位置*/}
        <Redirect to={'/404'}/>
      </Switch>
    </Router>
  )
}

export default App