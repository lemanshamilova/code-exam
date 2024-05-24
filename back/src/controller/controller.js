const Products = require("../models/model")

const getAllData = async (req, res) => {
    const products = await Products.find()
    res.send(products)
}
const getById = async (req, res) => {
    const getElems = await Products.find({ _id: req.params.id })
    res.send(getElems)
}
const deleteById = async (req, res) => {
    const {id} = req.params
    console.log(id);
    await Products.findOneAndDelete(id)
    res.send("deleted")
}
const patchById = async (req, res) => {
    const newProducts = await Products.findOneAndUpdate({ _id: req.params.id })
    res.send(newProducts)
}
const putById = async (req, res) => {
    const newProducts = await Products.findOneAndReplace({ _id: req.params.id })
    res.send(newProducts)
}

const postData = async (req, res) => {
    const obj = req.body
    const newProducts = await new Products(obj)
    newProducts.save()
    res.send(newProducts)
    console.log(req.body)
}

module.exports={getAllData,getById,postData,patchById,putById,deleteById}