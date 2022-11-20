import { combineReducers, configureStore } from '@reduxjs/toolkit'
import dummy from './slices/dummy'

const reducer = combineReducers({
  dummy,
})

export const store = configureStore({
  reducer,
})

export type StoreDispatch = typeof store.dispatch
export type StoreGetState = typeof store.getState
export type StoreState = ReturnType<typeof reducer>
