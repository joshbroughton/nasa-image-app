import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const nasaApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_SERVER_URL}),
  reducerPath: "nasaApi",
  endpoints: build => ({
    getApod: build.query({
      query: () => 'apod',
    }),
    getSearch: build.query({
      query: ({search, page}) => `search/?search=${search}&page=${page}`
    }),
    getImage: build.query({
      query: ({nasaID}) => `image/${nasaID}`
    })
  })
})

export const { useGetApodQuery, useLazyGetSearchQuery, useGetImageQuery } = nasaApi;
