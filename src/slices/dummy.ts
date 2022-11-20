import { createSlice } from '@reduxjs/toolkit'

export type DummyState = Record<string, never>

const { reducer } = createSlice({
  name: 'dummy',
  initialState: {} as DummyState,
  reducers: {},
})

export default reducer
