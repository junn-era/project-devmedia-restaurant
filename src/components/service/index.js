import { products } from '../../data/data-products.js';

export const searchProduct = (typedText) => {
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(typedText.toLowerCase()) ||
      product.description.toLowerCase().includes(typedText.toLowerCase())
  );
};

export const productsFilter = (category) => {
  return products.filter((product) => product.category === category);
};

export const productsEntries = productsFilter('Entries');