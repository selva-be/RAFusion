import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const PreviewCard = ({ shoe }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const add = () => {
    const shoeInCart = cart.some((item) => item.id === shoe.id);
    if (shoeInCart) {
      toast.error("You've Already Added This Item");
    } else {
      dispatch(addToCart(shoe));
      toast.success("Added to cart");
    }
  };

  const imgs = shoe.original_picture_url;
  const price = shoe.retail_price_cents;
  const desc = shoe.story_html;
  const name = shoe.name;
  const brand = shoe.brand_name;
  const gender = shoe.gender[0];

  return (
    <div>
      <main className="grid place-items-center min-h-screen bg-gray-50 dark:bg-[#121212]">
        <section className="flex flex-col md:flex-row gap-8 py-10 px-5 bg-white dark:bg-[#1f1b24] dark:hover:bg-[#121015] rounded-xl shadow-xl hover:shadow-2xl w-11/12 md:w-3/4">
          {/* Image Section */}
          <div className="text-gray-500 dark:text-white flex flex-col justify-between w-full md:w-1/2">
            <img
              src={`/${imgs}`}
              alt={`${name}`}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-md"
            />
          </div>

          {/* Details Section */}
          <main className="text-gray-500 dark:text-white w-full md:w-1/2">
            <small className="uppercase">
              {gender}'s {brand}
            </small>
            <h3 className="uppercase text-black dark:text-white text-2xl font-semibold">
              {name}
            </h3>
            <h3 className="text-2xl font-semibold mb-7 dark:text-white">
              ₹ {price}
            </h3>
            <small className="text-black dark:text-white text-sm">{desc}</small>
            <div className="flex gap-4 mt-4">
              <button
                id="addToCartButton"
                className="bg-[#2a2a2a] hover:bg-black focus:outline-none transition text-white uppercase px-8 py-3"
                onClick={add}
              >
                add to cart
              </button>
              <button
                id="likeButton"
                className="bg-[#2a2a2a] hover:bg-black focus:outline-none transition text-white uppercase p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-suit-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                </svg>
              </button>
            </div>
          </main>
        </section>
      </main>
    </div>
  );
};

export default PreviewCard;
