import { query } from "../database/index.js";

const productModel = async () => {
    try {
        await query("create table if not exists products_table (id serial primary key, product_name varchar(255) not null, product_description text, price decimal(10, 2), currency char(3), product_img_url varchar(255), stock int );")

        console.log("products table created")
    } catch (error) {
        console.log("products table creation failed")
        
    }
}

export default productModel;