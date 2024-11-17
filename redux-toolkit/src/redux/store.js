import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import {Provider} from 'react-redux';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})

//steps:
// 1. create store
// 2. wrap app componenet under Provider
// 3. create slice
// 4. register reducer in store