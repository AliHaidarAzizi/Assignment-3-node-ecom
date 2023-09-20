import { query } from "../database/index.js"

const deleteCartItem = async (req,res) => {
    try {

        const id = (req.params.id)
        await query("DELETE FROM cart_items WHERE id = $1", [id])
        res.redirect('/cart')
        
    } catch (error) {
        console.log(error)
    }
}

export default deleteCartItem;