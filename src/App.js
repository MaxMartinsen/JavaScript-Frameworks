import React from "react"
import { Routes, Route, Link ,Outlet, useParams } from "react-router-dom"
import './App.css';

function Home() {
  return <div>Home</div>
}

function Product() {
  let params = useParams()
  console.log(params)
  return <div>Individual product page: {params.id}</div>
}

function Products() {
  return <div>Products Listing Page</div>;
}

function RouteNotFound() {
  return <div>Page not found</div>
}

function Nav() {
  return (
    <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/product/1">Product with ID: 1</Link>
      </li>
    </ul>
    </nav>
  )
}

function Header() {
  return (
    <header>
      <div>
        Header with Logo and nav
      </div>
      <Nav />
    </header>
  )
}

function Footer() {
  return <footer>Website footer</footer>
}

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>  
      </Routes>
  );
}

export default App
