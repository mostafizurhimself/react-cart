import { Category, Product } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337' }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/taxonomies',
    }),
    getCategory: builder.query<Category, string>({
      query: (_) => `/taxonomies`,
      // transform the response to only return the category with the given id in typpescript
      transformResponse: (response: Category[], _, slug) => {
        const category = response.find((category) => category.slug === slug);
        if (category) {
          return category;
        }
        throw new Error('Category not found');
      },
    }),
    getProducts: builder.query<Product[], string>({
      query: (slug) => `/products?filter[taxons]=${slug}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery, useGetProductsQuery } = api;
