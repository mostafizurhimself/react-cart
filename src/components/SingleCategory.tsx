import Loader from '@/components/Loader';
import { useGetCategoryQuery } from '@/store/api-slice';
import ProductList from './ProductList';

type Props = {
  slug: string;
};

const SingleCategory = ({ slug }: Props) => {
  const { data: category, isLoading, isError } = useGetCategoryQuery(slug);

  const getImage = (index: number) => {
    const imageIndex = (index % 5) + 1;
    return `/images/banner-${imageIndex}.jpg`;
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-center text-red-500">Oops! Something went wrong.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="relative flex w-full items-center justify-center">
        <img src={getImage(category?.id as number)} alt={category?.name} className="aspect-[6/4] object-cover" />
        <div className="absolute top-0 left-0 h-full w-full bg-gray-900 opacity-40"></div>
        <h2 className="absolute left-8 text-2xl font-bold tracking-wider text-white">{category?.name}</h2>
      </div>
      <div>
        <ProductList categorySlug={slug} />
      </div>
    </div>
  );
};

export default SingleCategory;
