import { v4 as uuid } from 'uuid';

const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const newCategory = {
      id: uuid(),
      name: input.name
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, { products }) => {
   const { name, description, quantity, image, price, onSale, categoryId } = input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      image,
      price,
      onSale,
      categoryId
    };
    products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, { reviews }) => {
    const { productId, title, comment, rating, date } = input;
    const newReview = {
      id: uuid(),
      productId,
      title,
      comment,
      rating,
      date
    }
    reviews.push(newReview);
    return newReview;
  },
  deleteCategory: (parent, { id }, { categories, products }) => {
    const categoryIndex = categories.findIndex(category => category.id === id);
    if (categoryIndex === -1) {
      return false;
    }
    categories.splice(categoryIndex, 1);
    products = products.map(product => {
      return product.id === id ? { ...product, categoryId: null } : product;
    });
    return true;
  }
};

export default Mutation;