import { query } from "../database/index.js";

const cartItemModel = async () => {
    try {
        await query("CREATE TABLE if not exists cart_items (id INT PRIMARY KEY,product_id INT,quantity INT);")

        console.log("cartItem table created")
    } catch (error) {
        console.log("cartItem table creation failed")
        
    }
}
export default cartItemModel;