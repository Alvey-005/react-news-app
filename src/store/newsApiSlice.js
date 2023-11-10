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
                    return `/top-headlines/sources?category=${payload.category}`
                }
                else{
                    return "/top-headlines/sources"
                }
                }
            ,
            providesTags: ["TopHeadLinesSource"],
          
        }),
        getEverything: builder.query({
            query: (payload) => {
                if(payload){
                    return `/everything?q=${payload}&pageSize=${payload.pageSize||5}`
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
          getTopHeadLinesByCategory: builder.query({
            query: (payload) => 
            `/top-headlines/?category=${payload.category}&pageSize=${payload.pageSize||5}`,
            providesTags: ["TopHeadLines"],
          }),
        
    })

});
export const {
    useGetEverythingQuery,
    useGetTopHeadLinesSourceQuery,
    useGetTopHeadLinesQuery,
    useGetTopHeadLinesByCategoryQuery
  } = newApiSlice;