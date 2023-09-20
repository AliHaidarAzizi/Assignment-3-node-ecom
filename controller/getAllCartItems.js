import { query } from "../database/index.js";

const getAllCartItems = async (req, res) => {
    try {
      const data = await query("SELECT cart_items.id, cart_items.quantity, products_table.product_name, products_table.product_description, products_table.price, products_table.currency, products_table.product_img_url  FROM cart_items JOIN products_table ON cart_items.product_id = products_table.id");
      const lists = data.rows;
      res.render("pages/cart", { lists });
  
    } catch (error) {
      console.log(error)
    }
  };
  
  export default getAllCartItems;
  