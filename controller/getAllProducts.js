const getAllProducts = async (req, res) => {
    try {
        const data = await query("SELECT * FROM products_table");
        console.log(data.rows) 
        res.render("pages/index", { title : lists });
      } catch (error) {
        console.log(error);
      }
}

export default getAllProducts
