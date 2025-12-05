export interface Customer {
  id: string;
  customerName: string;
  company: string;
  phoneNumber: string;
  email: string;
  country: string;
  status: 'Active' | 'Inactive';
}