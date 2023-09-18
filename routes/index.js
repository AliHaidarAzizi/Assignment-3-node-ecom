import { Router } from "express";
import  getAllProducts  from "../controller/getAllProducts.js";
import getAllCartItems from "../controller/getAllCartItems.js";
import addNewProduct from "../controller/addNewProduct.js";
import getNewProductPage from "../controller/getNewProductPage.js";


const appRoutes = Router();

appRoutes.get("/", getAllProducts)
appRoutes.get("/cart", getAllCartItems)
appRoutes.get("/add-product", getNewProductPage)
appRoutes.post("/submit-product", addNewProduct)

appRoutes.get("/*", (req, res) => {
    res.render("pages/page-404");
  });

export default appRoutes;