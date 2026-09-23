import { renderHook, act } from '@testing-library/react-hooks';
import { useCart } from '@/features/cart/hooks/useCart';
import { cartService } from '@/features/cart/services/cartService';
import { CartItem } from '@/features/cart/types/cartTypes';

describe('useCart hook', () => {
  it('should handle adding a product to the cart', async () => {
    const { result } = renderHook(() => useCart());
    const product: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product);
    });
    expect(result.current.cart).toContainEqual(product);
  });

  it('should handle removing a product from the cart', async () => {
    const { result } = renderHook(() => useCart());
    const product: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product);
      result.current.removeFromCart(product.id);
    });
    expect(result.current.cart).not.toContainEqual(product);
  });

  it('should handle updating the quantity of a product in the cart', async () => {
    const { result } = renderHook(() => useCart());
    const product: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product);
      result.current.updateCartItem(product.id, 2);
    });
    expect(result.current.cart).toContainEqual({...product, quantity: 2 });
  });

  it('should handle concurrent updates to the cart', async () => {
    const { result } = renderHook(() => useCart());
    const product1: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    const product2: CartItem = { id: '2', name: 'Product 2', price: 200, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product1);
      result.current.addToCart(product2);
    });
    expect(result.current.cart).toContainEqual(product1);
    expect(result.current.cart).toContainEqual(product2);
  });

  it('should handle temporary server failures', async () => {
    jest.spyOn(cartService, 'syncCartWithServer').mockRejectedValueOnce(new Error('Server error'));
    const { result } = renderHook(() => useCart());
    const product: CartItem = { id: '1', name: 'Product 1', price: 100, quantity: 1 };
    await act(async () => {
      result.current.addToCart(product);
    });
    expect(result.current.cart).toContainEqual(product);
    expect(result.current.error).toBe('Server error');
  });
});