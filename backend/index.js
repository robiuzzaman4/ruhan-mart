import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./model/Product.js";

// connect express and define port
const app = express();
const port = process.env.PORT || 5000;

// middlewere
app.use(cors());
app.use(express.json());
dotenv.config();

// mongodb uri
const uri = process.env.URI;

// connect mongoose
const run = async () => {
    try {

        // connect with uri
        mongoose.connect(uri);

        // all api endpoints

        // get all products
        app.get("/api/products", async (req, res) => {
            try {
                // get products
                const products = await Product.find();

                if (!products) {
                    res.status(404).send({
                        error: true,
                        message: 'Products not found!',
                    })
                }

                // return result
                res.send(products);

            } catch (error) {
                res.status(500).send({
                    error: true,
                    message: 'Error retrieving products!',
                });
            }
        })

        // create product
        app.post("/api/products", async (req, res) => {
            try {
                // get product from req body
                const newProduct = await req.body;

                const result = await Product.create(newProduct);

                // return result
                res.send(result);
            } catch (error) {
                res.status(500).send({
                    error: true,
                    message: 'Error fail to create this product!',
                });
            }
        })

        // delete product
        app.delete("/api/products/:id", async (req, res) => {
            try {
                // get id from req params
                const id = req.params.id;
                // query
                const filter = { _id: new Object(id) }
                const result = await Product.deleteOne(filter);

                // return result
                return res.send(result);
            } catch (error) {
                res.status(500).send({
                    error: true,
                    message: 'Error fail to delete this product!',
                });
            }
        })

        // update product
        app.put("/api/products/:id", async (req, res) => {
            try {
                // get id from req params
                const id = req.params.id;
                const updatedProduct = req.body;

                console.log("id: ", id);
                console.log("updatedProduct: ", updatedProduct);

                const result = await Product.findByIdAndUpdate(id, updatedProduct);

                if (!result) {
                    res.status(404).send({
                        error: true,
                        message: 'Product not found!',
                    })
                }

                // return result
                return res.send(result);
            } catch (error) {
                res.status(500).send({
                    error: true,
                    message: 'Error fail to update this product!',
                });
            }
        })

        // check connection
        console.log("mongoose connected!");

    } catch (error) {
        console.log(error.message);
    }
}

// invoke run function
run();

// root directory
app.get("/", (req, res) => {
    res.send(`Ruhan Mart Server Is Running`);
})

// listen server
app.listen(port, () => {
    console.log(`Ruhan Mart Server Is Running On Port: ${port}`);
})