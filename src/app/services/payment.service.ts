import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcessPaymentResponse, ProcessPaymentRequest, CreateSessionRequest, CreateSessionResponse } from './payment.interface.spec';


@Injectable({
  providedIn: 'root',
})


export class PaymentService {
  constructor(private http: HttpClient) {
    console.log('PaymentService initialized');
  }

  public createSession(amount: number, currency: string, orderId: string): Observable<CreateSessionResponse> {
    const sessionAPI = 'http://localhost:3000/payments/session';
    const payload: CreateSessionRequest = { amount, currency, orderId };
    console.log('Generating payment session:', payload);
    return this.http.post<CreateSessionResponse>(sessionAPI, payload);
  }

  public processPayment(sessionId: string, success: boolean): Observable<ProcessPaymentResponse> {
    const paymentAPI = 'http://localhost:3000/payments/process';
    const payload: ProcessPaymentRequest = { sessionId, success };
    console.log('Processing payment:', payload);
    return this.http.post<ProcessPaymentResponse>(paymentAPI, payload);
  }


  public setPaymentSessionId(sessionId: string) { 
    localStorage.setItem('paymentSessionId', sessionId);
  }

  public getPaymentSessionId() {
    return localStorage.getItem('paymentSessionId') || null;
  }

}
