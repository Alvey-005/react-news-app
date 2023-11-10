import { configureStore } from '@reduxjs/toolkit'
import { newApiSlice } from './newsApiSlice'
import { guardianApiSlice } from './guradianApiSLice'
import { nyTimesAPiSlice } from './nyTimesApiSlice'
export const store = configureStore({
    reducer: {
        [newApiSlice.reducerPath]: newApiSlice.reducer,
        [guardianApiSlice.reducerPath]: guardianApiSlice.reducer,
        [nyTimesAPiSlice.reducerPath]: nyTimesAPiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newApiSlice.middleware,guardianApiSlice.middleware,nyTimesAPiSlice.middleware),
  })