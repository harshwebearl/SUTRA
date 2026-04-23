import { useState } from "react";
import { InjectCSS } from "./components/UI";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import PageTransition from "./components/PageTransition";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import AboutPage from "./pages/AboutPage";
import LookbookPage from "./pages/LookbookPage";
import ContactPage from "./pages/ContactPage";
import LikePage from "./pages/LikePage";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail"; 
import { products } from "./data";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [transition, setTransition] = useState("none");

  const [liked, setLiked] = useState({});
  const [cart, setCart] = useState([]); 
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const navigate = (page, product = null) => {
    if (page === currentPage && !product) return;

    setTransition("in");
    setTimeout(() => {
      setCurrentPage(page);
      if (product) setSelectedProduct(product); // ✅ Save product for detail
      window.scrollTo(0, 0);
      setTransition("out");
      setTimeout(() => setTransition("none"), 500);
    }, 500);
  };

  // Add product to cart
const addToCart = (product) => {
  const existingIndex = cart.findIndex(
    (p) =>
      p.name === product.name &&
      p.size === product.size &&
      p.color === product.color
  );

  if (existingIndex !== -1) {
    // Same product + same size + same color → quantity badhaavo
    const updatedCart = [...cart];
    updatedCart[existingIndex] = {
      ...updatedCart[existingIndex],
      quantity: updatedCart[existingIndex].quantity + 1,
    };
    setCart(updatedCart);
  } else {
    // Alag size ya color → new entry
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

  const likedProducts = Object.keys(liked)
    .filter((name) => liked[name])
    .map((name) => products.find((p) => p.name === name));

  return ( 
    <>
      <InjectCSS />
      <Cursor />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <PageTransition state={transition} />
      <Nav currentPage={currentPage} navigate={navigate} cartCount={cart.length} />
      <main>
        {currentPage === "home" && <HomePage navigate={navigate} />}
        {currentPage === "collection" && (
          <CollectionPage
            navigate={navigate}
            liked={liked}
            setLiked={setLiked}
            addToCart={addToCart} // ✅ Pass function
          />
        )}
        {currentPage === "product-detail" && selectedProduct && (
          <ProductDetail
            navigate={navigate}
            liked={liked}
            setLiked={setLiked}
            addToCart={addToCart}
            product={selectedProduct} // ✅ Pass selected product
          />
        )}
        {currentPage === "liked" && 
  <LikePage 
    navigate={navigate} 
    likedProducts={likedProducts}
    liked={liked}          
    setLiked={setLiked}   
    addToCart={addToCart}  
  />
}
        {currentPage === "cart" && <CartPage navigate={navigate} cart={cart} setCart={setCart} />}
        {currentPage === "about" && <AboutPage navigate={navigate} />}
        {currentPage === "lookbook" && <LookbookPage navigate={navigate} />}
        {currentPage === "contact" && <ContactPage navigate={navigate} />}
      </main>
    </>
  );
}