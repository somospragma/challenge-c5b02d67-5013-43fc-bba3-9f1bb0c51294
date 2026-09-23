import React from 'react';

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
  status: string;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  quantity,
  status,
  onRemove,
  onQuantityChange,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <p>Estado: {status}</p>
      <button onClick={onRemove}>Eliminar</button>
      <input
        type='number'
        value={quantity}
        onChange={(e) => onQuantityChange(Number(e.target.value))}
      />
    </div>
  );
};

export default CartItem;