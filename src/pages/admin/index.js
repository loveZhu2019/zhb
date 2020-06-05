import React from 'react'
import BaseLayout from "../../layout";
import Routes from "../../public/routes";
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

class Admin extends React.Component {
  state = {}

  render() {
    //const {} = this.props, {} = this.state;

    return (
      <BaseLayout>
        <Router>
          <Switch>
            {
              Routes.admin.map(item => {
                if (item && item.children && item.children.length > 0) {
                  item.children.map(child => {
                    if (child.show) {
                      return <Route key={child.path} path={child.path} component={child.component} exact/>
                    }
                  })
                }
                return <Route key={item.path} {...item} exact/>
              })
            }
            {/*<Redirect to={'/404'}/>*/}
          </Switch>
        </Router>
      </BaseLayout>
    )
  }
}

export default Admin