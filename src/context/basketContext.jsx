import { useLocalStorage } from '@uidotdev/usehooks';
import axios from 'axios';
import { createContext, useState } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [basket, setBasket] = useLocalStorage('basket', []);

  const addToBasket = (newProduct) => {
    // Bu üründen sepette var mı ?
    const found = basket.find((product) => product.id === newProduct.id);

    if (!found) {
      // Ürün sepette yoksa > ürünü sepete ekle (miktar 1)
      setBasket([...basket, { ...newProduct, amount: 1 }]);
    } else {
      // Ürün sepette varsa miktarını artır
      // Bulunan ürün nesnesinin miktarını 1 artır
      const updated = { ...found, amount: found.amount + 1 };
      console.log('arttı');

      // sepet dizisindeki eski ürün yerine güncel halini koy
      const newBasket = basket.map((product) =>
        product.id === updated.id ? updated : product
      );
      // state i  güncelle
      setBasket(newBasket);
    }
  };

  

  const removeFromBasket = () => {};

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
