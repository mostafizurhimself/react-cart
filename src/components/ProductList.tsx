import { useGetProductsQuery } from '@/store/api-slice';
import Loader from './Loader';
import ProductListItem from './ProductListItem';

type Props = {
  categorySlug: string;
};

const ProductList = ({ categorySlug }: Props) => {
  const { data: products, isLoading, isError } = useGetProductsQuery(categorySlug);

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-center text-red-500">Oops! Something went wrong.</p>
      </div>
    );
  }

  return (
    <ul className="my-4 h-[1200px] divide-y px-4">
      {products?.map((item) => (
        <ProductListItem key={item.id} product={item} />
      ))}
    </ul>
  );
};

export default ProductList;
