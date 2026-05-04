import { useContext, useEffect, useState } from "react";
import ThemeContext, { dark, light } from "../Hooks/ThemeContext"; // ✅ FIX

async function fetchProducts(setProducts, setStatus) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) throw new Error("Failed to fetch"); // it is important to check for non-200 status codes like 404 or 500, as fetch only throws for network errors. This ensures we catch API errors properly.
    const data = await res.json();
    setProducts(data);
    setStatus("success");
  } catch (error) {
    console.log(error);
    setStatus("error");
  }
}

function Home() {
  const [theme] = useContext(ThemeContext);
  const [products, setProducts] = useState([]); //we dont use null because we want to avoid null checks in the UI. An empty array is easier to handle when mapping over products. and use [] instead of {} because products is an array of product objects, not a single product object. This way we can directly map over products without worrying about it being null or an object.
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetchProducts(setProducts, setStatus);
  }, []);

  // 🔄 LOADING UI
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg text-gray-500 animate-pulse">
          Loading products...
        </p>
      </div>
    );
  }

  // ❌ ERROR UI
  if (status === "error") {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load products.
      </div>
    );
  }

  return (
    <section
      className="home min-h-screen py-8 px-20 transition-colors duration-300"
      // max-h-screen is used to prevent the home section from growing indefinitely when there are many products. It allows the section to scroll if the content exceeds the viewport height, while still maintaining a consistent layout and preventing overflow issues. This way, we can ensure that the UI remains clean and user-friendly even with a large number of products.
      style={theme ? dark.home : light.home}
    >
      <div className="max-w-8xl mx-auto px-4">
        {/* 🔥 TITLE */}
        <h2
          className={`text-2xl font-bold mb-6 ${theme ? "text-white" : "text-gray-800"}`}
        >
          Featured Products
        </h2>

        {/* 🛒 GRID */}
        <div
          id="productWrapper"
          className="
            grid gap-6
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="
                rounded-xl shadow-sm
                hover:shadow-lg
                transition duration-300
                p-4 flex flex-col
              "
              style={theme ? dark.card : light.card} // ✅ FIXED CARD THEME
            >
              {/* IMAGE */}
              <div className="h-40 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              </div>
              {/* TITLE */}
              <p
                className={`text-lg mt-3 line-clamp-2 ${theme ? "text-gray-200" : "text-gray-700"}`}
              >
                {product.title}
              </p>
              {/* PRICE */}
              <h5 className="text-lg font-semibold text-blue-500 mt-2 mb-4 position-right-0">
                ₹ {product.price}
              </h5>
              {/* <h5 className="text-lg font-semibold text-blue-500 mt-2 mb-4 self-end">
                ₹ {product.price}
              </h5> */}
              {/* BUTTON */}
              <button
                className="
                  mt-auto
                  bg-blue-600 text-white
                  py-2 rounded-lg
                  hover:bg-blue-700
                  transition
                  active:scale-95
                  cursor-pointer
                "
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
