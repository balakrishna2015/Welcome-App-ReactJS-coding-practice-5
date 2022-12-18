// Write your code here

import {Component} from 'react'

import './index.css'

class APP extends Component {
  state = {isSubscribed: false}

  onClickSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        <button
          className="button"
          type="button"
          onClick={this.onClickSubscribe}
        >
          {this.getButtonText()}
        </button>
      </div>
    )
  }
}

export default APP
