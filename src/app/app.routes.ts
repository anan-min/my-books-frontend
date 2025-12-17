import { Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books';
import { CartComponent } from './pages/cart/cart';
import { CheckoutComponent } from './pages/checkout/checkout';
import { PaymentComponent } from './pages/payment/payment';
import { SuccessComponent } from './pages/success/success';
import { FailComponent } from './pages/fail/fail';

export const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
    },
    {
        path: 'payment',
        component: PaymentComponent,
    },
    {
        path: 'success',
        component: SuccessComponent,
    },
    {
        path: 'fail',
        component: FailComponent,
    },

];
