import { useGetCategoriesQuery } from '@/store/api-slice';
import { Link } from 'react-router-dom';
import Loader from '@/components/Loader';

const CategoryList = () => {
  const { data: categories, isLoading, isError } = useGetCategoriesQuery();

  const getImage = (index: number) => {
    const imageIndex = (index % 10) + 1;
    return `/images/${imageIndex}.png`;
  };

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-114px)] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-[calc(100vh-114px)] items-center justify-center">
        <p className="text-center text-red-500">Oops! Something went wrong.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 px-4 py-6">
      {categories?.map((item) => (
        <Link
          to={`/categories/${item.slug}`}
          key={item.id}
          className="rounded-xl p-4 shadow transition-shadow duration-300 hover:shadow-xl"
        >
          <img src={getImage(item.id)} alt={item.name} />
          <h3 className="mt-4 text-center font-semibold">{item.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
