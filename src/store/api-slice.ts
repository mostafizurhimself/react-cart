import { Category, Product } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/api/taxonomies/food-type',
    }),
    getCategory: builder.query<Category, string>({
      query: (_) => '/api/taxonomies/food-type',
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
      query: (slug) => `/api/products?filter[taxons]=${slug}`,
      transformResponse: (response: { data: Product[] }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery, useGetProductsQuery } = api;
