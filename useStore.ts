import { create } from 'zustand';
import { CartItem, Service, User } from '../types';
import { persist } from 'zustand/middleware';

interface Store {
  cart: CartItem[];
  user: User | null;
  users: User[];
  addToCart: (service: Service) => void;
  removeFromCart: (serviceId: string) => void;
  updateQuantity: (serviceId: string, quantity: number) => void;
  clearCart: () => void;
  setUser: (user: User | null) => void;
  registerUser: (user: User) => void;
  logout: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      user: null,
      users: [],
      addToCart: (service) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.service.id === service.id
          );
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.service.id === service.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { service, quantity: 1 }] };
        }),
      removeFromCart: (serviceId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.service.id !== serviceId),
        })),
      updateQuantity: (serviceId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.service.id === serviceId ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ cart: [] }),
      setUser: (user) => set({ user }),
      registerUser: (user) =>
        set((state) => ({
          users: [...state.users, user],
          user,
        })),
      logout: () => set({ user: null }),
    }),
    {
      name: 'service-store',
    }
  )
);