import { Component } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  imports: [CommonModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class PaymentComponent {
  paymentStatus: string = 'Pending';
  sessionId: string | null = null;

  constructor(
    private paymentService: PaymentService,
    private router: Router
  ) {}


  async onSimulatePaymentClick(succes: boolean) {

    const sessionId = this.paymentService.getPaymentSessionId();
    if (!sessionId) {
      console.error('No payment session ID found');
      return;
    }

    this.paymentService.processPayment(sessionId, succes).subscribe({
      next: (response) => {
        console.log('Payment processed:', response);
        this.router.navigate([succes ? '/success' : '/fail']);
      },
      error: (err) => {
        console.error('Payment processing error:', err);
        this.router.navigate(['/fail']);
      }
    });

  }

}

