import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <Link to="/">
          <strong>🐳 MOBY SHOP</strong>
        </Link>

        <nav>
          <Link to="/">SHOP</Link>
          <Link to="/wishlist">WISHLIST</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
