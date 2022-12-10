import CaloryGraph from '@/components/CaloryGraph';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { decrementCartItem, getCartItemQuantity, incrementCartItem } from '@/store/cart-slice';
import { Product } from '@/types';

type Props = {
  product: Product;
};

const ProductListItem = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => {
    return getCartItemQuantity(state, product.id);
  });

  const handleIncrement = () => {
    dispatch(
      incrementCartItem({
        product,
        quantity: 1,
      })
    );
  };

  const handleDecrement = () => {
    dispatch(
      decrementCartItem({
        productId: product.id,
        quantity: 1,
      })
    );
  };

  return (
    <li className="flex gap-4 py-6 ">
      <div className="flex-grow">
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <div className="products-center flex gap-4">
          {renderMeta(product, 'protein')}
          {renderMeta(product, 'carbs')}
          {renderMeta(product, 'fibre')}
          {renderCaloryGraph(product)}
        </div>
        <div className="products-center mt-1 flex gap-6">
          <div className="inline-flex items-center overflow-hidden rounded-lg bg-gray-200">
            <button type="button" className="h-full px-3 font-bold" onClick={handleDecrement}>
              -
            </button>
            <span className="px-2 py-1 text-sm">{quantity}</span>
            <button type="button" className="h-full px-3 font-bold" onClick={handleIncrement}>
              +
            </button>
          </div>
          <p className="text-sm font-medium">{product.variants[0]?.price.formatted}</p>
        </div>
      </div>
      <img src={product.media[0]?.url} alt={product.name} className="h-[100px] w-[100px] rounded-lg object-fill" />
    </li>
  );
};

const renderMeta = (product: Product, key: string) => {
  const meta = product.meta_fields?.find((meta) => meta.key === key);

  const titleCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
  };

  if (meta) {
    return (
      <div>
        <h6 className="text-xs font-medium">{titleCase(meta.key)}</h6>
        <p className="text-xs">{meta.value} gm</p>
      </div>
    );
  }

  return null;
};

const renderCaloryGraph = (product: Product) => {
  const meta = product.meta_fields?.find((meta) => meta.key === 'calories');

  if (meta) {
    return <CaloryGraph value={meta.value as number} />;
  }
  return null;
};

export default ProductListItem;
