import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';
// may need another import here like in footer and header, but not sure

function App() {
  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App