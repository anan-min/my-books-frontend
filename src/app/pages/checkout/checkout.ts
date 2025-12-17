import { Component } from '@angular/core';
import { CheckoutSummary } from '../../services/carts.interface';
import { CartsService } from '../../services/carts.service';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../../services/orders.service';
import { PaymentService } from '../../services/payment.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class CheckoutComponent {
  
  checkoutSummary: CheckoutSummary = {
    totalItems: 0,
    totalPrice: 0,
    shippingCost: 0,
    grandTotal: 0
  }
  constructor( 
    private cartService: CartsService,
    private ordersService: OrdersService,
    private paymentService: PaymentService,
    private router: Router
  ) {}


  ngOnInit(): void { 
    this.cartService.getCheckoutSummary().subscribe({
      next: (data) => {
        const {totalItems, totalPrice, shippingCost, grandTotal} = data 
        const summary: CheckoutSummary = {
          totalItems,
          totalPrice,
          shippingCost,
          grandTotal
        }
        this.checkoutSummary = summary;
        console.log("Checkout Summary fetched:", this.checkoutSummary);
      }, 
      error: (err) => console.log("Server Error")
    })
  }


async onContinueToPaymentClick() {
  const cartId = this.cartService.getCartId();
  const address = '123 Main St, Springfield, USA'; // replace with actual form data

  if (!cartId) {
    console.error('No cart ID');
    return;
  }

  // this.ordersService.createOrder(cartId, address)
  //   .pipe(
  //     switchMap((orderData) => {
  //       const amount = this.checkoutSummary.grandTotal;
  //       const currency = 'THB';
  //       const orderId = orderData.orderId;
  //       return this.paymentService.createSession(amount, currency, orderId);
  //     })
  //   )
  //   .subscribe({
  //     next: (sessionData) => {
  //       console.log("Payment session created:", sessionData);
  //       this.paymentService.setPaymentSessionId(sessionData.sessionId);
  //       this.router.navigate(['/payment']);
  //     },
  //     error: (err) => {
  //       console.error("Error in order/payment flow:", err);
  //     }
  //   });

  this.ordersService.createOrder(cartId, address)
    .subscribe({
      next: (orderData) => {
        const paymentSessionId = orderData.paymentSessionId;
        console.log("Order created:", orderData);
        this.paymentService.setPaymentSessionId(paymentSessionId);
        this.router.navigate(['/payment']);
      },
      error: (err) => {
        console.error("Error creating order:", err);
      }
    });

      
}






}
