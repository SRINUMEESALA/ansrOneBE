import Product from "../Models/products.js";
import express from "express";

const ProductRouter = new express.Router()


const RetrieveProducts = async (request, response) => {
    console.log("Products Route API accessed")
    try {
        const products = await Product.find({})
        response.status(200)
        response.send({ productsList: products })
    } catch (error) {
        console.log(error)
        response.status(500)
        response.send({ msg: "Something went wrong in the server." })
    }
}

const productItemDet = async (request, response) => {
    console.log("productItemDet Route API accessed")
    const { id } = request.params
    try {
        const productDet = await Product.findOne({ _id: id })
        response.status(200)
        response.send({ product: productDet })
    } catch (error) {
        console.log(error)
        response.status(500)
        response.send({ msg: "Something went wrong in the server." })
    }
}

const updateProduct = async (request, response) => {
    console.log("updateProduct Route API accessed", request.body)
    const { title, category, description, imageUrl, price, quality, quantity, id } = request.body
    try {
        const productDet = await Product.updateOne({ _id: id }, { title, category, description, imageUrl, quality, quantity, price })
        response.status(200)
        response.send({ msg: "Product updated Successfully." })
    } catch (error) {
        console.log(error)
        response.status(500)
        response.send({ msg: "Something went wrong in the server." })
    }
}


// Routes

ProductRouter.get("/products", RetrieveProducts)
ProductRouter.get("/products/:id", productItemDet)
ProductRouter.post("/product/update", updateProduct)



export default ProductRouter


