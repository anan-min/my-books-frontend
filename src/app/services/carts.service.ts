import { Injectable } from '@angular/core';
import { Cart, CartItem, CartResponse } from './carts.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})



export class CartsService {
  constructor(private http: HttpClient) {}
  
  private cartId: string | null = null;
  private cart: Cart | null = null;
  public totalQuantity: number = 0;
  
  
  public async addToCart(bookId: string, quantity: number) {
    const addToCartAPI = 'http://localhost:3000/carts/add';

    const payload = { bookId, quantity };

    this.http.post<CartResponse>(addToCartAPI, payload).subscribe({
      next: (result) => {
        this.cartId = result.cartId;
        this.cart = result.cart;
        this.updateTotalQuantity();
        console.log('Item added to cart:', result);
      },
      error: (err) => console.error('Add to cart error', err),
    });
  }

  public updateTotalQuantity() {
    if (this.cart) {
      this.totalQuantity = this.cart.items.reduce((total, item) => total + item.qty, 0);
    } else {
      this.totalQuantity = 0;
    }
  }
  
}
