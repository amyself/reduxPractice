function countReducer (preState=0, action) {
  const { type, data } = action
  switch (type) {
    //1.加工状态
    case "increment":
      return preState + data
    case "decrement":
      return preState - data
    default:
      //2. 初始化状态
      return preState
  }
}
export default countReducer