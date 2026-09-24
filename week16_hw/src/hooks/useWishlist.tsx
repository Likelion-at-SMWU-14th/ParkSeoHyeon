import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "../types/product";

interface WishlistContextValue {
  wishlist: Product[];
  isWishlisted: (productId: number) => boolean;
  toggleWishlist: (product: Product) => void;
  clearWishlist: () => void;
}

interface WishlistProviderProps {
  children: ReactNode;
}
const WishlistContext = createContext<WishlistContextValue | null>(null);

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const isWishlisted = (productId: number): boolean => {
    return wishlist.some((product) => product.id === productId);
  };

  const toggleWishlist = (product: Product): void => {
    setWishlist((previousWishlist) => {
      const alreadyWishlisted = previousWishlist.some(
        (item) => item.id === product.id,
      );

      if (alreadyWishlisted) {
        return previousWishlist.filter((item) => item.id !== product.id);
      }

      return [...previousWishlist, product];
    });
  };

  const clearWishlist = (): void => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isWishlisted,
        toggleWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

function useWishlist(): WishlistContextValue {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist는 WishlistProvider 안에서 사용해야 합니다.");
  }

  return context;
}

export default useWishlist;
