import React from 'react'

class NotFund extends React.Component {
  state = {}

  render() {
    //const {} = this.props, {} = this.state;

    return (
      <div style={{marginTop:100}}>
        <h1 style={{textAlign: 'center'}}>404！您找的页面失联了！</h1>
      </div>
    )
  }
}

export default NotFund