import { Router } from "express";
import  getAllProducts  from "../controller/getAllProducts.js";
import getAllCartItems from "../controller/getAllCartItems.js";


const appRoutes = Router();

appRoutes.get("/", getAllProducts)
appRoutes.get("/cart", getAllCartItems)

export default appRoutes;