import mongoose, {Schema} from "mongoose";

const PriceOptionSchema = new Schema({
  color: String,
  size: String,
  price: Number,
  discount: Number,
  sold: Number,
  amount: Number,
});

const ProductSchema = new Schema({
  name: String,
  description: String,
  avatar: String,
  origin: String,
  brand: String,
  material: String,
  category: String,
  subcategory: String,
  price: Number,
  discount: Number,
  sold: Number, 
  amount: Number,
  colors: Array,
  sizes: Array,
  priceoption: [PriceOptionSchema],
  images: Array,
}, {
  timestamps: true
})


export default ProductSchema