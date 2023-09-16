import {query} from "../database/index.js"

const getAllProducts = async (req, res) => {
    try {
        const data = await query("SELECT * FROM products_table");
        const lists = data.rows;
        res.render("pages/index", { lists });
      } catch (error) {
        console.log(error);
      }
}

export default getAllProducts;
