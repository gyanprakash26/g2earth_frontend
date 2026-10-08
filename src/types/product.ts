export type StockStatus = "in_stock" | "out_of_stock" | "low_stock" | "preorder";

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface ProductAttribute {
  name: string;
  value: string;
}

export interface ProductAttributeGroup {
  name: string;
  values: string[];
}

export interface ProductVariant {
  id: string;
  sku: string;
  name: string;
  attributes: ProductAttribute[];
  mrp: number;
  sellingPrice: number;
  stockStatus: StockStatus;
  stockQuantity?: number;
  images?: ProductImage[];
  weight?: number;
  barcode?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription?: string;
  description?: string;
  brand?: Brand;
  category?: Category;
  images: ProductImage[];
  variants: ProductVariant[];
  mrp: number;
  sellingPrice: number;
  discount?: number;
  rating?: number;
  reviewCount?: number;
  stockStatus: StockStatus;
  manufacturer?: string;
  packer?: string;
  importer?: string;
  countryOfOrigin?: string;
  consumerCare?: string;
  hsnCode?: string;
  gstRate?: number;
  weight?: number;
  netQuantity?: string;
  attributes?: ProductAttributeGroup[];
  isFeatured?: boolean;
  isBestSeller?: boolean;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: ProductImage;
  parentId?: string;
  parent?: Category;
  children?: Category[];
  productCount?: number;
  isFeatured?: boolean;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo?: ProductImage;
  description?: string;
}
