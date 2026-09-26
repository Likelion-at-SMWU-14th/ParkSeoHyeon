import { Link, Outlet } from "react-router-dom";
import useWishlist from "../hooks/useWishlist";

function Layout() {
  const { wishlist } = useWishlist();

  return (
    <div>
      <header>
        <Link to="/">
          <strong>🐳 MOBY SHOP</strong>
        </Link>

        <nav>
          <Link to="/">SHOP</Link>

          <Link to="/wishlist">
            WISHLIST
            <span className="wishlist-count">{wishlist.length}</span>
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
