import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Card = ({ shoe }) => {
  const cart = useSelector((state) => state.cart);
  const img = shoe.original_picture_url;
  const price = shoe.retail_price_cents;
  const desc = shoe.story_html;
  const id = shoe.id;

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addToCart(shoe));
    toast.success("Added to cart");
  };

  const remove = () => {
    dispatch(removeFromCart(id));
    toast.error("Removed item from cart");
  };

  return (
    <div>
      <div className="w-full sm:w-[300px] h-auto shadow-sm rounded-2xl p-4 bg-slate-50 dark:bg-[#1f1b24] dark:hover:bg-[#121015] dark:text-white dark:outline-none dark:border-none border border-slate-100 outline outline-slate-100 hover:shadow-2xl relative">
        <div className="flex flex-col gap-4">
          {/* Image Section with Preview Link */}
          <div className="relative">
            <Link to={`/preview/${id}`}>
              <img
                src={img}
                alt="shoe"
                className="w-full h-[200px] object-cover rounded-md cursor-pointer"
              />
            </Link>
            <Link to={`/preview/${id}`}>
              <button className="absolute bg-slate-600 dark:bg-slate-800 text-white text-xs p-1 top-2 right-2 rounded-md animate-pulse">
                Preview
              </button>
            </Link>
          </div>

          {/* Description Section */}
          <p className="text-base font-medium max-h-[96px] overflow-hidden">
            {desc.split(" ").slice(0, 20).join(" ") + "..."}
          </p>

          {/* Actions Section */}
          <div className="flex items-center justify-between">
            {cart.some((item) => item.id === shoe.id) ? (
              <button
                onClick={remove}
                className="bg-red-400 text-white p-2 rounded-md text-sm"
              >
                Remove Item
              </button>
            ) : (
              <button
                onClick={add}
                className="bg-black dark:bg-slate-800 dark:hover:bg-black text-white p-2 rounded-md text-sm"
              >
                Add to Cart
              </button>
            )}
            <span className="text-xl font-semibold">₹ {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
