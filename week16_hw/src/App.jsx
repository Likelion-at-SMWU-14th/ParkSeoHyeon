import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import WishlistPage from "./pages/WishlistPage";
import { WishlistProvider } from "./hooks/useWishlist";

import "./App.css";

function App() {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="product/:productId" element={<ProductDetailPage />} />

            <Route path="wishlist" element={<WishlistPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  );
}

export default App;
