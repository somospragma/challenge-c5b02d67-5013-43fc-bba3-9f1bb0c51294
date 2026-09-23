export interface Cart {
  id: string;
  items: CartItem[];
  status: CartStatus;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  status: CartStatus;
}

export enum CartStatus {
  ACTIVE = 'ACTIVE',
  ABANDONED = 'ABANDONED',
  PURCHASED = 'PURCHASED',
}

export interface AddItem {
  item: CartItem;
}

export interface UpdateItem {
  item: CartItem;
}

export interface RemoveItem {
  itemId: string;
}