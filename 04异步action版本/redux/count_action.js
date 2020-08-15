import { INCREMENT, DECREMENT } from './constant'
//创建加的action
export const createIncrementAction = (number) => { return { type: INCREMENT, data: number } }
//创建减的action
export const createDecrementAction = number => ({ type: DECREMENT, data: number })
//创建等一等加的action（异步）
export const createIncrementWait = (number) => {
  return (dispatch) => {
    setTimeout(() => {
      //调用同步action
      dispatch(createIncrementAction(number))
    }, 500)
  }

}