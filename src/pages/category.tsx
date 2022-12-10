import { useParams } from 'react-router-dom';

import Layout from '@/components/Layout';
import SingleCategory from '@/components/SingleCategory';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <Layout title="Category" showHeader={false}>
      <SingleCategory slug={slug as string} />
    </Layout>
  );
};

export default CategoryPage;
