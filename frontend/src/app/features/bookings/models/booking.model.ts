export interface Booking {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  roomType: string;
  checkIn: Date;
  checkOut: Date;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  totalPrice: number;
  paymentStatus: 'Paid' | 'Unpaid' | 'Partial';
  notes?: string;
  facebookConversationId?: string;
  createdAt: Date;
  updatedAt: Date;
}
