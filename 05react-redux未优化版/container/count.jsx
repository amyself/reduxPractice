import countUI from '../component/count'
import { connect } from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementWait} from '../redux/count_action'
function mapStateToprops (state) {
  return { count: state }
}
function mapDispatchToProps(dispatch){
  return{
    increase:(number)=>{
      dispatch(createIncrementAction(number))
    },
    decrease:(number)=>{
      dispatch(createDecrementAction(number))
    },
    waitIncrease:(number)=>{
      dispatch(createIncrementWait(number))

    }
    
  }
}
export default connect(mapStateToprops,mapDispatchToProps)(countUI)