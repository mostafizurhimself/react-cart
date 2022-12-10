import { useAppSelector } from '@/hooks/use-app-selector';
import { getCartItemsCount } from '@/store/cart-slice';
import { HiHome } from 'react-icons/hi';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Footer = () => {
  const { pathname } = useLocation();
  const cartItemsCount = useAppSelector(getCartItemsCount);

  return (
    <footer className="flex h-14 items-center justify-center bg-gray-50">
      <Link
        to={'/'}
        className={twMerge(
          'mx-6 text-gray-500 transition-colors duration-150 hover:text-primary-400',
          pathname === '/' && 'text-primary-500'
        )}
      >
        <HiHome size={24} />
      </Link>
      <Link
        to={'/cart'}
        className={twMerge(
          'relative mx-6 text-gray-500 transition-colors duration-150 hover:text-primary-400',
          pathname === '/cart' && 'text-primary-500'
        )}
      >
        <RiShoppingBag3Fill size={24} />
        {cartItemsCount > 0 && (
          <span
            className={twMerge(
              'absolute flex items-center justify-center rounded-md bg-gray-900 text-white',
              cartItemsCount > 9 ? '-right-2 -bottom-2 h-5 w-5 ' : '-right-1 -bottom-1 h-4 w-4 ',
              cartItemsCount > 99 ? 'text-[10px]' : 'text-[12px]'
            )}
          >
            {cartItemsCount > 99 ? '99+' : cartItemsCount}
          </span>
        )}
      </Link>
    </footer>
  );
};

export default Footer;
