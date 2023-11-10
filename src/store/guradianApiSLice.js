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

                return `/search?q=${payload}&format=json&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&order-by=newest&api-key=${import.meta.env.VITE_GUARDIAN_API_KEY}`
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