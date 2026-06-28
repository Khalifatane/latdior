import { groq } from "next-sanity";

export const productsQuery = groq`*[_type == "product"] | order(_createdAt desc) {
  _id,
  title,
  price,
  originalPrice,
  slug,
  description,
  category,
  tags,
  "images": images[]{
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  "image": image {
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  inStock,
  quantity,
  rating,
  reviews,
  features,
  specifications,
  _createdAt
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  _id,
  title,
  price,
  originalPrice,
  slug,
  description,
  category,
  tags,
  "images": images[]{
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  "image": image {
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  inStock,
  quantity,
  rating,
  reviews,
  features,
  specifications,
  _createdAt
}`;

export const categoriesQuery = groq`*[_type == "product"] { category } | order(category asc)`;

export const relatedProductsQuery = groq`*[_type == "product" && category == $category && slug.current != $slug][0...4] {
  _id,
  title,
  price,
  originalPrice,
  slug,
  description,
  category,
  "images": images[]{
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  "image": image {
    asset-> {
      _id,
      url,
      metadata {
        dimensions {
          width,
          height
        }
      }
    }
  },
  inStock,
  rating,
  reviews
}`;
