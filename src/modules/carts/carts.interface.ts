// cart interface

export interface ICart {
    productId: string;
    productName: string;
    price: number;
    buyerName: string;
    buyerEmail: string;
    phone: string;
    address: string;
    productImage: string;
    quantity: number;
    totalPrice: number;
  }