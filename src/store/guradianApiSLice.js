import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const guardianApiSlice = createApi({
    reducerPath: "guardianApi",
    baseQuery: fetchBaseQuery({ mode:'cors',
    baseUrl: "https://content.guardianapis.com" ,
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
        getGuardianNews : builder.query({
            query: (payload) =>{ 
                // if(payload?.category){
                //     return `/top-headlines/sources?category=${payload.category}&from=2023-11-03&to=2023-11-03`
                // }
                // else{
                //     return "/top-headlines/sources"
                // }
                return "/search?q=current&format=json&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&order-by=newest&api-key=fad006a4-6eae-4d1c-819c-2f096b0a8741"
                }
            ,
            transformResponse: (response) => {
                return {
                    page:{
                        total:response.response.total,
                        currentPage:response.response.currentPage,
                        orderBy:response.response.orderBy,
                    },
                    articles:response.response.results.map(article =>{
                        return {
                            id:article.id,
                            title:article.fields.headline,
                            shortUrl:article.fields.shortUrl,
                            url:article.webUrl,
                            urlToImage:article.fields.thumbnail,
                            author: article.tags.find(tag => tag.type === "contributor")?.webTitle,
                            authorImage:article.tags.find(tag => tag.type === "contributor")?.bylineImageUrl,
                        }
                    })
                }
                //end response
            },

            providesTags: ["TopHeadLinesSource"],
          
        }),
    })

});
export const {
    useGetGuardianNewsQuery,
  } = guardianApiSlice;