export interface createOrderRequest {
    cartId: string; 
    shippingAddress: string;
}

export interface OrderItem {
    _id: string;
    title: string;
    price: number;
    qty: number;
}

export interface createOrderResponse {
    orderId: string;
    items: OrderItem[];
    totalPrice: number;
    shippingAddress: string;
    status: string;
    paymentSessionId: string;
}

// {
//   "orderId": "69422fe075863cb386dd65de",
//   "items": [
//     {
//       "_id": "693691f884f2437364f43f5c",
//       "title": "Night draw claim",
//       "price": 47.83,
//       "qty": 1
//     }
//   ],
//   "totalPrice": 147.82999999999998,
//   "shippingAddress": "123 Main St, City, Country",
//   "status": "PENDING",
//   "paymentSessionId": "cs_test_95b0e41b-21e1-4186-94fa-cb876d6302d1"
// }