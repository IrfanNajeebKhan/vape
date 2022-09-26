import './assets/scss/main.scss';
import './assets/scss/globle.scss';
import { Header, Footer } from "./container";
import { Routes, Route } from 'react-router-dom';
import { Home, About, Shop, Faq, Contact } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;