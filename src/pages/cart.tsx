import CartItem from '@/components/CartItem';
import Layout from '@/components/Layout';
import OrderConfirmationDialog from '@/components/OrderConfirmationDialog';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { clearCart, getCartItems, getCartTotal, getDeliveryCost } from '@/store/cart-slice';
import { useMemo, useState } from 'react';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getCartItems);
  const deliveryCost = useAppSelector(getDeliveryCost);
  const total = useAppSelector(getCartTotal);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const resetCart = () => {
    setIsOrderSubmitted(false);
    dispatch(clearCart());
  };

  const formattedDeliveryCost = useMemo(() => {
    return `$${deliveryCost.toFixed(2)}`;
  }, [deliveryCost]);

  const formattedGrandTotal = useMemo(() => {
    return `$${(total + deliveryCost).toFixed(2)}`;
  }, [total, deliveryCost]);

  if (cartItems.length === 0) {
    return (
      <Layout title="Cart" previousPath={'/'}>
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-semibold text-gray-500">Your cart is empty</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Cart" previousPath={'/'}>
      <ul className="max-h-[48vh] divide-y overflow-auto px-4">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} cartItem={item} />
        ))}
      </ul>
      <div className="mt-4 px-4">
        <div className="flex items-center border-t py-4">
          <div className="h-[80px] w-[80px] rounded-lg bg-orange-100 p-4">
            <img src={'/images/delivery.png'} alt={'delivery-icon'} className="object-fill" />
          </div>
          <p className="ml-6 text-sm font-medium">Delivery</p>

          <p className="ml-auto text-sm font-semibold text-gray-900">{formattedDeliveryCost}</p>
        </div>
        <div className="flex items-center border-t border-dashed py-4">
          <h2 className="text-xl font-semibold">Total: </h2>
          <p className="ml-auto text-xl font-semibold text-gray-900">{formattedGrandTotal}</p>
        </div>
      </div>
      <div className="mt-auto p-4">
        <button
          type="button"
          onClick={() => setIsOrderSubmitted(true)}
          className="flex w-full items-center rounded-lg bg-primary-500 px-4 py-4 text-gray-900"
        >
          <span className="text-sm font-semibold uppercase">Checkout</span>
          <span className="ml-auto text-sm font-semibold uppercase">{formattedGrandTotal}</span>
        </button>
      </div>
      <OrderConfirmationDialog isSubmitted={isOrderSubmitted} onClose={resetCart} />
    </Layout>
  );
};

export default CartPage;
