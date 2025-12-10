
export interface CartItem {
  _id: string;
  qty: number;
}

export interface Cart { 
    items: CartItem[];
}

export interface AddToCartResponse {
    cartId: string;
    cart: Cart;
}


export interface GetCartReponse {
  cartId: string;
  cart: Cart;
  cartRender: CartItemRender[];
  meta: CartMeta;
}



export interface CartItemRender {
  bookId: string; 
  bookTitle: string;
  bookPrice: number;
  bookQty: number;
}

export interface CartMeta {
  totalItems: number;
  totalPrice: number;
  shippingCost: number;
  grandTotal: number;
  message: string[];
}