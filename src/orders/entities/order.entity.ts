interface OrderType {
  id?: string;
  customer_id: string;
  sender_name: string;
  sender_phone: string;
  sender_address_id: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_address_id: string;
}

export class OrderEntity {
  id: string;
  customer_id: string;
  sender_name: string;
  sender_phone: string;
  sender_address_id: string;
  receiver_name: string;
  receiver_phone: string;
  receiver_address_id: string;
  created_at: Date;
  updated_at: Date;

  constructor(data: OrderType) {
    this.id = data.id || `OD${new Date().getTime()}`;
    this.customer_id = data.customer_id;
    this.sender_name = data.sender_name;
    this.sender_phone = data.sender_phone;
    this.sender_address_id = data.sender_address_id;
    this.receiver_name = data.receiver_name;
    this.receiver_phone = data.receiver_phone;
    this.receiver_address_id = data.receiver_address_id;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}
