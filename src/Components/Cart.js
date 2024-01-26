import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
     const dispatch = useDispatch()
    const cartItems = useSelector((store)=>store.cart.items)
    const handleClearCart =()=>{
        dispatch(clearCart())
    }
    return (
        
        <div className="  text-center m-4 p-4">
            <div className="">
            <h1 className="font-bold text-2xl">Cart</h1>
            <button 
            onClick={handleClearCart}
            className="font-bold px-4 py-2 rounded-lg shadow-md mt-4 bg-slate-400">clear cart</button>
         </div>
         <div className="w-6/12 m-auto pt-3">
            {cartItems.length == 0 && <h1> cart is empty .please add itmes to cart</h1>}
            <ItemList items={cartItems}/>
         </div>
        </div>
        
        
    )
}
export default Cart;

