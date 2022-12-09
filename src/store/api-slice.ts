import { Category, Product } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337' }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/taxonomies',
    }),
    getProducts: builder.query<Product[], void>({
      query: () => '/products',
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = api;
