// Shared TypeScript types for the entire application

export interface RingDesignRequest {
  style: string;
  material: string;
  size: number;
  description?: string;
}

export interface RingDesign {
  id: string;
  style: string;
  material: string;
  size: number;
  description?: string;
  imageUrl?: string;
  model3dUrl?: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  ringId: string;
  status: 'pending' | 'processing' | 'manufacturing' | 'shipped' | 'delivered';
  totalAmount: number;
  shippingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface AIGenerationRequest {
  prompt: string;
  style?: string;
  material?: string;
  size?: number;
}

export interface AIGenerationResponse {
  imageUrl: string;
  description: string;
  suggestedPrice: number;
  confidence: number;
}
