import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'
import { siteSlice } from './site'
import { modalSlice } from './modal'

const rootReducer = combineReducers({
  site: siteSlice.reducer,
  modal: modalSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const store = configureStore({
  reducer: rootReducer,
})

export const { dispatch } = store
