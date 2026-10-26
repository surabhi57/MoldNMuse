import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import products from '../data/products.js';

const CartContext = createContext(null);
const CART_KEY = 'mold-muse-cart';

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY) || '{}');
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {};
    const validIds = new Set(products.map(product => product.id));
    return Object.fromEntries(Object.entries(saved)
      .filter(([id]) => validIds.has(id))
      .map(([id, quantity]) => [id, Math.max(0, Math.floor(Number(quantity) || 0))])
      .filter(([, quantity]) => quantity > 0));
  } catch {
    return {};
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readCart());
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    const syncCart = event => {
      if (event.key === CART_KEY) setItems(readCart());
    };
    window.addEventListener('storage', syncCart);
    return () => window.removeEventListener('storage', syncCart);
  }, []);
  const addItem = id => setItems(current => ({ ...current, [id]: (current[id] || 0) + 1 }));
  const setQuantity = (id, quantity) => setItems(current => {
    const next = { ...current };
    if (quantity > 0) next[id] = quantity;
    else delete next[id];
    return next;
  });
  const removeItem = id => setItems(current => {
    const next = { ...current };
    delete next[id];
    return next;
  });
  const clearCart = useCallback(() => setItems({}), []);
  const count = Object.values(items).reduce((sum, quantity) => sum + quantity, 0);
  const value = useMemo(() => ({ items, count, addItem, setQuantity, removeItem, clearCart }), [items, count]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
