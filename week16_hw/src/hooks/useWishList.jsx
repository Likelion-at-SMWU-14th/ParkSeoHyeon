import { createContext, useContext, useState } from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const isWishlisted = (productId) => {
    return wishlist.some((product) => product.id === productId);
  };

  const toggleWishlist = (product) => {
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

  const clearWishlist = () => {
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

function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlist는 WishlistProvider 안에서 사용해야 합니다.");
  }

  return context;
}

export default useWishlist;
