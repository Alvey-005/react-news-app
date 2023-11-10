import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const newApiSlice = createApi({
    reducerPath: "newApi",
    baseQuery: fetchBaseQuery({ mode:'cors',
    baseUrl: "https://newsapi.org/v2" ,
    prepareHeaders: (headers, { getState }) => {
        const token = import.meta.env.VITE_NEWS_API_KEY
    
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
        return headers
      },
}
    ),
    endpoints: (builder) => ({
        getTopHeadLinesSource : builder.query({
            query: (payload) =>{ 
                if(payload?.category){
                    return `/top-headlines/sources?category=${payload.category}&from=2023-11-03&to=2023-11-03&pageSize=5`
                }
                else{
                    return "/top-headlines/sources&pageSize=5"
                }
                }
            ,
            providesTags: ["TopHeadLinesSource"],
          
        }),
        getEverything: builder.query({
            query: (payload) => {
                if(payload?.query){
                    return `/everything?q=${payload.query}`
                }
                else{
                    return "/everything"
                }
            },
            providesTags: ["Everything"],
          }),
        getTopHeadLines: builder.query({
            query: (payload) => 
            "/top-headlines/?country=us&pageSize=5",
            providesTags: ["TopHeadLines"],
          }),
        
    })

});
export const {
    useGetEverythingQuery,
    useGetTopHeadLinesSourceQuery,
    useGetTopHeadLinesQuery,
  } = newApiSlice;