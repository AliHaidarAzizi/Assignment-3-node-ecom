import {query} from "../database/index.js"

const getNewProductPage = async (req, res) => {
    try {
        res.render("pages/addProduct");
      } catch (error) {
        console.log(error);
      }
}

export default getNewProductPage;