import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    product_name: { type: String, required: true },
    product_price: { type: Number, required: true },
    product_weight: { type: String, required: true },
    product_image: { type: String, required: true },
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;