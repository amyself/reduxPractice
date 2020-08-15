import React, { Component } from 'react'

export default class count extends Component {
  state = {
    count: 0
  }
  increment = () => {
    //获取用户输入的值
    const { value } = this.refs.selectNum
    //获取原状态
    const { count } = this.state
    this.setState({
      count: count + value * 1
    })
  }
  decrement = () => {
    //获取用户输入的值
    const { value } = this.refs.selectNum
    //获取原状态
    const { count } = this.state
    this.setState({
      count: count - value * 1
    })
  }
  incrementIfOdd = () => {
    if (this.state.count % 2 !== 0) {
      //获取用户输入的值
      const { value } = this.refs.selectNum
      //获取原状态
      const { count } = this.state
      this.setState({
        count: count + value * 1
      })
    }
  }
  incrementWait = () => {
    setTimeout(() => {
      const { value } = this.refs.selectNum
      //获取原状态
      const { count } = this.state
      this.setState({
        count: count + value * 1
      })
    }, 2000)
  }
  render () {
    return (
      <div>
        <h1>当前和为：{this.state.count}</h1>
        <select ref="selectNum">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>和为奇数加</button>
        <button onClick={this.incrementWait}>等一等加</button>
      </div>
    )
  }
}
