import {INCREMENT,DECREMENT} from '../redux/constant'
function countReducer (preState=0, action) {
  const { type, data } = action
  switch (type) {
    //1.加工状态
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      //2. 初始化状态
      return preState
  }
}
export default countReducer