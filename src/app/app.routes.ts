import { Routes } from '@angular/router';
import { BooksComponent } from './pages/books/books';
import { CartComponent } from './pages/cart/cart';

export const routes: Routes = [
    {
        path: '',
        component: BooksComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    }
];
