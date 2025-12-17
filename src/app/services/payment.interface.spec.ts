export interface ProcessPaymentResponse {
    sessionId: string;
    success: boolean;
    message: string;
    url: string;
}


export interface CreateSessionResponse {
    sessionId: string;
}


export interface CreateSessionRequest {
    amount: number;
    currency: string;
    orderId: string;
}


export interface ProcessPaymentRequest {
    sessionId: string;
    success: boolean;
}