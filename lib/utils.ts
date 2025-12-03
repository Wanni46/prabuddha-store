export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}`;
}

export function getCartTotal(cart: { id: string; quantity: number }[]): number {
  const products = require('./products').default;
  return cart.reduce((total, item) => {
    const product = products.find((p: any) => p.id === parseInt(item.id));
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

export function getCartItemCount(cart: { id: string; quantity: number }[]): number {
  return cart.reduce((count, item) => count + item.quantity, 0);
}