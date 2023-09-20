import { query } from "../database/index.js";

const cartItemModel = async () => {
    try {
        await query("CREATE TABLE if not exists cart_items (id serial primary key, product_id INT,quantity INT, CONSTRAINT fk_product_id FOREIGN KEY (product_id) REFERENCES products_table (id));")

        console.log("cartItem table created")
    } catch (error) {

        console.log("cartItem table creation failed")
        console.log(error)
        
    }
}
export default cartItemModel;