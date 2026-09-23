import { cartService } from '@/features/cart/services/cartService';
import { CartItem } from '@/features/cart/types/cartTypes';
import { apiClient } from '@/shared/services/apiClient';

describe('cartService', () => {
  it('should sync cart with server', async () => {
    const cartItems: CartItem[] = [
      { id: '1', name: 'Product 1', price: 100, quantity: 1 },
      { id: '2', name: 'Product 2', price: 200, quantity: 1 },
    ];
    jest.spyOn(apiClient, 'post').mockResolvedValue({ data: cartItems });
    await cartService.syncCartWithServer();
    expect(apiClient.post).toHaveBeenCalledWith('/cart', cartItems);
  });

  it('should handle server errors during sync', async () => {
    jest.spyOn(apiClient, 'post').mockRejectedValueOnce(new Error('Server error'));
    try {
      await cartService.syncCartWithServer();
    } catch (error) {
      expect(error).toBe('Server error');
    }
  });
});