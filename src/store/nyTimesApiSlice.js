import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const nyTimesAPiSlice = createApi({
    reducerPath: "nyTimesAPiSlice",
    baseQuery: fetchBaseQuery({ mode:'cors',
    baseUrl: "https://api.nytimes.com/svc/topstories/v2/" ,
    prepareHeaders: (headers, { getState }) => {
        const token = import.meta.env.VITE_GUARDIAN_API_KEY;
    
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
        //   headers.set('api-key', `Bearer ${token}`)
        }
        return headers
      },
}
    ),
    endpoints: (builder) => ({
        getHomeNews : builder.query({
            query: (payload) =>{ 
                // if(payload?.category){
                //     return `/top-headlines/sources?category=${payload.category}&from=2023-11-03&to=2023-11-03`
                // }
                // else{
                //     return "/top-headlines/sources"
                // }
                return `/${payload.categoryType}.json?api-key=MqddkAw5UiYpNzd8fDr5Rkho5K6fTvl0`
                }
            ,
            transformResponse: (response) => {
                return {
                    articles:response.results.map(article =>(
                        {
                            section:article.section,
                            description:article.abstract,
                            url:article.url,
                            title:article.title,
                            author:article.byline.replace("By ", "").replace(' and ',','),
                            urlToImage:article.multimedia?.[0].url}
                    ))
                }
                //end response
            },

            providesTags: ["TopHeadLinesSource"],
          
        }),
    })

});
export const {
    useGetHomeNewsQuery,
  } = nyTimesAPiSlice;