import {query} from "../database/index.js"

const addNewProduct = async (req, res) => { 
    try {
        

        const product_name = req.body.product_name;
        const product_description = req.body.product_description;
        const price = req.body.price;
        const currency = req.body.currency;
        const product_img_url = req.body.product_img_url;
        const stock = req.body.stock;


        await query("INSERT INTO products_table (product_name varchar(255) not null, product_description text, price decimal(10, 2), currency char(3), product_img_url varchar(255), stock int) VALUES ($1, $2, $3, $4, $5, $6);", [
            product_name,
            product_description,
            price,
            currency,
            product_img_url,
            stock
        ])
        res.redirect("/")  

        
    } catch (error) {
        
    }
    
}

export default addNewProduct;
