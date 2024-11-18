import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CatalogProvider } from './components/Catalog/CatalogContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Catalog from './components/Catalog/Catalog';
import ProductDetail from './components/Catalog/ProductDetail';
import HowToOrder from './components/HowToOrder';
import Delivery from './components/Delivery';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <CatalogProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/how-to-order" element={<HowToOrder />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </div>
      </CatalogProvider>

    </Router>
  );
}

export default App;