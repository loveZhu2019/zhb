import React from 'react'
import { Input, Button } from 'antd'
import store from '../store'
class Home extends React.Component {
  state = {}
  changeValue = (e) => {
    store.dispatch({
      type: 'changeValue',
      value: e.target.value
    })
  }
  render() {
    //const {} = this.props, {} = this.state;
    const res = store.getState()
    return (
      <div>
        <Input
          placeholder='write something'
          style={{ width: 250, margin: 10 }}
          onChange={this.changeValue}
        />
        <Button type='primary' style={{ margin: 10 }}>新增</Button>
        {
          res.list.map((item, index) => {
            return <div key={index}>{item}</div>
          })
        }
      </div>
    )
  }
}

export default Home