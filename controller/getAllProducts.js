import {query} from "../database/index.js"

const getAllProducts = async (req, res) => {
    try {
        const data = await query("SELECT * FROM products_table");
        const cartData = await query("SELECT COUNT (*) FROM cart_items")
        const lists = data.rows;
        const totalCartItem = cartData.rows[0].count
        res.render("pages/index", { lists, totalCartItem });
      } catch (error) {
        console.log(error);
      }
}

export default getAllProducts;
