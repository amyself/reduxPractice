import React, { Component } from 'react'
import store from '../redux/store'
// import {INCREMENT,DECREMENT} from "../redux/constant"
import {createDecrementAction,createIncrementAction} from '../redux/count_action'

export default class count extends Component {
  state = {
    name:'尚硅谷'
  }
  increment = () => {
    //获取用户输入的值
    const { value } = this.refs.selectNum
    // store.dispatch({type:INCREMENT,data:value*1})
    store.dispatch(createIncrementAction(value*1))
  }
  decrement = () => {
    //获取用户输入的值
    const { value } = this.refs.selectNum
    // store.dispatch({type:INCREMENT,data:value*1})
    store.dispatch(createDecrementAction(value*1))


  }
  incrementIfOdd = () => {
    if (store.getState() % 2 !== 0) {
      //获取用户输入的值
      const { value } = this.refs.selectNum
      // store.dispatch({type:INCREMENT,data:value*1})
      store.dispatch(createIncrementAction(value*1))

    }
  }
  incrementWait = () => {
    setTimeout(() => {
      const { value } = this.refs.selectNum
      // store.dispatch({type:DECREMENT,data:value*1})
      store.dispatch(createIncrementAction(value*1))

    }, 2000)
  }
  render () {
    return (
      <div>
        <h1>{this.state.name}当前和为：{store.getState()}</h1>
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
