import { INCREMENT, DECREMENT } from './constant'
//创建加的action
export const createIncrementAction = (number) => { return { type: INCREMENT, data: number } }
//创建减的action
export const createDecrementAction=number=>({type:DECREMENT,data:number})