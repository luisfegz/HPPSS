// models/Product.ts

import mongoose, { Document, Model, Schema } from "mongoose";

interface ProductProps {
  title: string;
  description?: string;
  price: number;
  images?: string;
  category?: mongoose.Types.ObjectId;
  properties?: Record<string, any>;
}

export interface ProductDocument extends Document, ProductProps {}

export interface ProductModel extends Model<ProductDocument> {}

const ProductSchema = new Schema<ProductDocument, ProductModel>({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: String,
  category: { type: mongoose.Types.ObjectId, ref: 'Category' },
  properties: Schema.Types.Mixed, // Use Schema.Types.Mixed for arbitrary object properties
});

export const Product = mongoose.models.Product || mongoose.model<ProductDocument, ProductModel>('Product', ProductSchema);
