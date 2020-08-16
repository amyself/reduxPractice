import countUI from '../component/count'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementWait } from '../redux/count_action'
// const mapStateToprops = state => ({ count: state })
// const mapDispatchToProps = dispatch => ({
//   increase: number => dispatch(createIncrementAction(number)),
//   decrease: number => dispatch(createDecrementAction(number)),
//   waitIncrease: number => dispatch(createIncrementWait(number))

// })

//最终优化版本，第二个参数可以传入一个对象
export default connect(state => ({ count: state }), {
  increase: createIncrementAction,
  decrease: createDecrementAction,
  waitIncrease: createIncrementWait

})(countUI)