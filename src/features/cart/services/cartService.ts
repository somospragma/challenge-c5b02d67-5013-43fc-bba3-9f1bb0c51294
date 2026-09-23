import axios from 'axios';
import { Cart, CartItem, CartStatus } from '@/features/cart/types/cartTypes';
import { cartUtils } from '@/features/cart/utils/cartUtils';

const API_BASE_URL = 'https://api.ecommerce.com/cart';

export class CartService {
  private axiosInstance = axios.create({
    baseURL: API_BASE_URL,
  });

  async getCart(userId: string): Promise<Cart> {
    try {
      const response = await this.axiosInstance.get<Cart>(`/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw new Error('Failed to fetch cart');
    }
  }

  async addItemToCart(userId: string, item: CartItem): Promise<Cart> {
    try {
      const response = await this.axiosInstance.post<Cart>(`/${userId}/items`, item);
      return response.data;
    } catch (error) {
      console.error('Error adding item to cart:', error);
      throw new Error('Failed to add item to cart');
    }
  }

  async updateItemInCart(userId: string, item: CartItem): Promise<Cart> {
    try {
      const response = await this.axiosInstance.put<Cart>(`/${userId}/items/${item.id}`, item);
      return response.data;
    } catch (error) {
      console.error('Error updating item in cart:', error);
      throw new Error('Failed to update item in cart');
    }
  }

  async removeItemFromCart(userId: string, itemId: string): Promise<Cart> {
    try {
      const response = await this.axiosInstance.delete<Cart>(`/${userId}/items/${itemId}`);
      return response.data;
    } catch (error) {
      console.error('Error removing item from cart:', error);
      throw new Error('Failed to remove item from cart');
    }
  }
}