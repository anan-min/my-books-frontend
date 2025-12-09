
export interface CartItem {
  _id: string;
  qty: number;
}

export interface Cart { 
    items: CartItem[];
}

export interface CartResponse {
    cartId: string;
    cart: Cart;
}

