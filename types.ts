export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem {
  service: Service;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  password?: string;
}