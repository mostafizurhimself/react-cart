import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { removeCartItem } from '@/store/cart-slice';
import { LineItem } from '@/types';
import { HiX } from 'react-icons/hi';

type Props = {
  cartItem: LineItem;
};

const CartItem = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();

  const removeItem = () => {
    dispatch(
      removeCartItem({
        productId: cartItem.product.id,
      })
    );
  };

  return (
    <li key={cartItem.product.id} className="flex items-center py-4">
      <img
        src={cartItem.product.media[0]?.url}
        alt={cartItem.product.title}
        className="h-[80px] w-[80px] rounded-lg object-cover"
      />
      <div className="ml-6 flex items-center gap-2">
        <p className="text-sm">{cartItem.quantity}</p>
        <HiX size={12} />
        <h3 className="text-sm font-semibold">{cartItem.product.title}</h3>
      </div>

      <p className="ml-auto text-sm font-semibold text-gray-900">{cartItem.product.variants[0]?.price.formatted}</p>
      <button className="ml-4" type="button" onClick={removeItem}>
        <HiX size={20} className="text-gray-500 transition-colors duration-150 hover:text-gray-700" />
      </button>
    </li>
  );
};

export default CartItem;
