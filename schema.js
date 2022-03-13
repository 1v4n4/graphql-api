import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: [String!]!
    products(filter: productsFilter): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: addCategoryInput): Category!
    addProduct(input: addProductInput): Product!
    addReview(input: addReviewInput): Review!
    deleteCategory(id: ID!): Boolean!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: productsFilter): [Product!]!
  }

  type Review {
    id: ID!
    title: String!
    comment: String!
    rating: Int!
    date: String!
  }

  input productsFilter {
    onSale: Boolean
    avgRating: Int
  }

  input addCategoryInput {
    name: String!
  }

  input addProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: ID!
  }

  input addReviewInput {
    productId: ID!
    title: String!
    comment: String!
    rating: Int!
  }

  `;

  export default typeDefs;