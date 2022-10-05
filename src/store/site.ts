import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '@/store'

export type SiteState = {
  name?: string
}

const initialState: SiteState = {
  name: 'app-name',
}

export const getters = {
  all: (state: any) => {
    return state.site
  },
}

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {},
})
