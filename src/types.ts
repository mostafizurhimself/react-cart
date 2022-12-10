export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Media = {
  uuid: string;
  name: string;
  file_name: string;
  url: string;
  order: number;
  type: string;
  extension: string;
  mime_type: string;
};

export type Price = {
  currency: string;
  amount: number;
  formatted: string;
};

export type Variant = {
  id: number;
  type: string;
  title: string;
  price: Price;
};

export type MetaField = {
  key: string;
  value: string | number | boolean;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  media: Media[];
  variants: Variant[];
  meta_fields: MetaField[];
};

export type LineItem = {
  product: Product;
  quantity: number;
};
