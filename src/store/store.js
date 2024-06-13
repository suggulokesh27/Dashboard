import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import ChangeStateSlice from './ChangeStateSlice'
import StudentDetailsSlice from './StudentDetailsSlice'

const store = configureStore({
  reducer : {
     ChangeStateSlice,
     StudentDetailsSlice
  }
})
export default store




// const initialState = {
//   sidebarShow: true,
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)