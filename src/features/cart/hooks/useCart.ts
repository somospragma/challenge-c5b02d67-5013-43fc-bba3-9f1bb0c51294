import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useQueryClient } from '@tanstack/react-query';
import { cartService } from '@/features/cart/services/cartService';
import { CartItem as CartItemType } from '@/features/cart/types/cartTypes';

interface CartState {
  cartItems: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addItem: (item) =>
        set((state) => ({
          cartItems: [...state.cartItems, item],
        })),
      removeItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id!== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id? {...item, quantity } : item
          ),
        })),
    }),
    {
      name: 'cart-storage',
      getStorage: () => localStorage,
    }
  )
);

export const useCart = () => {
  const queryClient = useQueryClient();
  const { cartItems, addItem, removeItem, updateQuantity } = useCartStore((state) => state);

  return {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
  };
};