import React from 'react';
import { useCart } from '@/features/cart/hooks/useCart';
import { CartItem } from '@/features/cart/components/CartItem';

const Cart: React.FC = () => {
  const { cartItems, addItem, removeItem, updateQuantity } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              status={item.status}
              onRemove={() => removeItem(item.id)}
              onQuantityChange={(quantity) => updateQuantity(item.id, quantity)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;