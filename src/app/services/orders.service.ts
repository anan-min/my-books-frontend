import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {createOrderRequest, createOrderResponse } from './orders.interface';


@Injectable({
  providedIn: 'root',
})


export class OrdersService {
  constructor(private http: HttpClient) {
    console.log('OrdersService initialized');
  }

    public createOrder(cartId: string, shippingAddress: string): Observable<createOrderResponse> {  
        const createOrderAPI = 'http://localhost:3000/orders/create';
        const payload: createOrderRequest = { cartId, shippingAddress };
        console.log('Creating order:', payload);
        return this.http.post<createOrderResponse>(createOrderAPI, payload);
    }


}
