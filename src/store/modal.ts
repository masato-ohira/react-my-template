import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

export type ModalState = {
  active: boolean
}

const initialState: ModalState = {
  active: false,
}

export const getters = {
  isActive: (state: RootState) => state.modal.active,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setActive(state, action) {
      state.active = action.payload
    },
  },
})

export const { setActive } = modalSlice.actions
