// Shared constants for the application

export const RING_MATERIALS = [
  { value: 'gold', label: '18K Gold', price: 299 },
  { value: 'silver', label: 'Sterling Silver', price: 99 },
  { value: 'platinum', label: 'Platinum', price: 599 },
  { value: 'titanium', label: 'Titanium', price: 149 },
  { value: 'rose_gold', label: '18K Rose Gold', price: 329 },
] as const;

export const RING_STYLES = [
  { value: 'classic', label: 'Classic' },
  { value: 'modern', label: 'Modern' },
  { value: 'vintage', label: 'Vintage' },
  { value: 'minimalist', label: 'Minimalist' },
  { value: 'ornate', label: 'Ornate' },
  { value: 'geometric', label: 'Geometric' },
] as const;

export const RING_SIZES = [
  { value: 4, label: 'Size 4 (XS)' },
  { value: 5, label: 'Size 5 (S)' },
  { value: 6, label: 'Size 6 (M)' },
  { value: 7, label: 'Size 7 (L)' },
  { value: 8, label: 'Size 8 (XL)' },
  { value: 9, label: 'Size 9 (XXL)' },
] as const;

export const ORDER_STATUSES = [
  'pending',
  'processing', 
  'manufacturing',
  'shipped',
  'delivered'
] as const;

export const API_ENDPOINTS = {
  RINGS: '/api/rings',
  DESIGN: '/api/rings/design',
  ORDERS: '/api/orders',
  USERS: '/api/users',
  AUTH: '/api/auth',
} as const;
