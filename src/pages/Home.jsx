import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Error from './Error';

const Home = () => {
  const { data, error, isLoading } = useContext(ProductContext);
  console.log(data);
  return (
    <div className="page">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        data && <Card products={data} />
      )}
    </div>
  );
};

export default Home;
