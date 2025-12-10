import { Component } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { CartItemRender, CartMeta } from '../../services/carts.type';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})

export class CartComponent {
  constructor(public cartsService: CartsService) {}

  cartItemsRender: CartItemRender[] = [];
  cartMeta: CartMeta = {
    totalItems: 0,
    totalPrice: 0,
    shippingCost: 0,
    grandTotal: 0,
    message: []
  }

  ngOnInit(): void {
    this.cartsService.getCart().subscribe({
      next: (data) => {
        const { cart, cartId, cartRender, meta } = data;
        this.cartItemsRender = cartRender;
        this.cartMeta = meta;
        this.cartsService.updateCartId(cartId);
        this.cartsService.updateCartQuantity(cart);
        console.log('Cart Render fetched:', this.cartItemsRender);
        console.log('Cart Meta fetched:', this.cartMeta);
      },
      error: (err) => console.error('Cart fetch error', err),
    });
  }

}
