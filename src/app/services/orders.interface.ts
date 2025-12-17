export interface createOrderRequest {
    cartId: string; 
    shippingAddress: string;
}

export interface createOrderResponse {
    sessionId: string;
    status: string;
    orderId: string;
    url: string;
}