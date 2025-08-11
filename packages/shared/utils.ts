// Shared utility functions

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getRingSizeLabel = (size: number): string => {
  const sizeMap: Record<number, string> = {
    4: 'XS',
    5: 'S',
    6: 'M',
    7: 'L',
    8: 'XL',
    9: 'XXL',
  };
  return sizeMap[size] || size.toString();
};

export const getMaterialDisplayName = (material: string): string => {
  const materialMap: Record<string, string> = {
    'gold': '18K Gold',
    'silver': 'Sterling Silver',
    'platinum': 'Platinum',
    'titanium': 'Titanium',
    'rose_gold': '18K Rose Gold',
  };
  return materialMap[material] || material;
};
