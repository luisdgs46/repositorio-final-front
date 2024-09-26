import {useContext, useEffect} from 'react'
import ProductContext from '../../contexts/product/ProductContext';
import Products from './ProductList';

export const Home = () => {

  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        <h1>VEHICULOS</h1>
        <Products 
          products={products} 
        />
      </div>
    </div>
  );
}

export default Home;