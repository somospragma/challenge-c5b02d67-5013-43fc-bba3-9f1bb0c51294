import { Cart, CartItem } from '@/features/cart/types/cartTypes';

export const cartUtils = {
  calculateTotal(cart: Cart): number {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  applyDiscount(cart: Cart, discount: number): Cart {
    const total = this.calculateTotal(cart);
    const discountedTotal = total - (total * discount / 100);
    return {...cart, total: discountedTotal };
  },

  validateInventory(cart: Cart, inventory: { [id: string]: number }): boolean {
    for (const item of cart.items) {
      if (inventory[item.id] < item.quantity) {
        return false;
      }
    }
    return true;
  },

  handleTransientState(cart: Cart, transientState: string): Cart {
    return {...cart, transientState };
  },

  isCartValid(cart: Cart): boolean {
    return cart.items.every(item => item.quantity > 0 && item.price > 0);
  },

  mergeCarts(cart1: Cart, cart2: Cart): Cart {
    const mergedItems = [...cart1.items,...cart2.items];
    const mergedCart: Cart = {
      id: cart1.id,
      items: mergedItems,
      status: cart1.status,
    };
    return mergedCart;
  },
};