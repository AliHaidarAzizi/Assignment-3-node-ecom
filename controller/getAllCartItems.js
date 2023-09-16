import { query } from "../database/index.js";

const getAllCartItems = async (req, res) => {
    try {
      const data = await query("SELECT * FROM cart_items");
      const lists = data.rows;
      res.render("pages/cart", { lists });
  
    } catch (error) {
      console.log(error)
    }
  };
  
  export default getAllCartItems;
  