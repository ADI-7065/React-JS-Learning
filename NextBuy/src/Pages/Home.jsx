import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/CartSlice";
import ThemeContext, { dark, light } from "../Hooks/ThemeContext";

// ── Helpers ─────────────────────────────────────────────────────────────────

async function fetchProducts(setProducts, setStatus) {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    setProducts(data);
    setStatus("success");
  } catch {
    setStatus("error");
  }
}

function StarRating({ rating, count }) {
  const stars = Math.round(rating);
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <i
            key={i}
            className={`fa-star text-[11px] ${
              i <= stars
                ? "fa-solid text-amber-400"
                : "fa-regular text-gray-300"
            }`}
          ></i>
        ))}
      </div>
      <span className="text-[11px] text-gray-400">({count})</span>
    </div>
  );
}

function SkeletonCard({ dark: isDark }) {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-3 animate-pulse"
      style={{
        backgroundColor: isDark ? "#111827" : "#ffffff",
        border: isDark
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid #e2e8f0",
      }}
    >
      <div
        className={`h-40 rounded-xl ${isDark ? "bg-white/5" : "bg-gray-100"}`}
      />
      <div
        className={`h-3 rounded-full w-3/4 ${isDark ? "bg-white/10" : "bg-gray-200"}`}
      />
      <div
        className={`h-3 rounded-full w-1/2 ${isDark ? "bg-white/10" : "bg-gray-200"}`}
      />
      <div
        className={`h-8 rounded-xl mt-auto ${isDark ? "bg-white/10" : "bg-gray-100"}`}
      />
    </div>
  );
}

function CategoryBadge({ category, isDark }) {
  const colors = {
    electronics: "bg-violet-500/15 text-violet-400",
    jewelery: "bg-amber-500/15 text-amber-400",
    "men's clothing": "bg-blue-500/15 text-blue-400",
    "women's clothing": "bg-pink-500/15 text-pink-400",
  };
  const style = colors[category] || "bg-gray-500/15 text-gray-400";
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${style}`}
    >
      {category}
    </span>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

function Home() {
  const [theme] = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [activeCategory, setActiveCategory] = useState("all");
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    fetchProducts(setProducts, setStatus);
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  }

  // ── Skeleton ──
  if (status === "loading") {
    return (
      <section
        className="min-h-screen py-10 px-6"
        style={theme ? dark.home : light.home}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`h-7 w-48 rounded-full mb-8 animate-pulse ${theme ? "bg-white/10" : "bg-gray-200"}`}
          />
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} dark={theme} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── Error ──
  if (status === "error") {
    return (
      <section
        className="min-h-screen flex items-center justify-center"
        style={theme ? dark.home : light.home}
      >
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto">
            <i className="fa-solid fa-triangle-exclamation text-red-400 text-2xl"></i>
          </div>
          <p className="text-red-400 font-medium">Failed to load products</p>
          <button
            onClick={() => {
              setStatus("loading");
              fetchProducts(setProducts, setStatus);
            }}
            className="text-sm text-blue-500 hover:text-blue-400 underline underline-offset-2 cursor-pointer"
          >
            Try again
          </button>
        </div>
      </section>
    );
  }

  // ── Success ──
  return (
    <section
      className="min-h-screen py-10 transition-colors duration-300"
      style={theme ? dark.home : light.home}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Page header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2
              className={`logo-font text-2xl font-bold ${theme ? "text-white" : "text-gray-900"}`}
            >
              Featured Products
            </h2>
            <p
              className={`text-sm mt-0.5 ${theme ? "text-slate-400" : "text-slate-500"}`}
            >
              {filtered.length} item{filtered.length !== 1 ? "s" : ""} available
            </p>
          </div>

          {/* Sort placeholder */}
          <select
            className={`text-sm px-3 py-2 rounded-xl border outline-none cursor-pointer transition-colors ${
              theme
                ? "bg-white/5 border-white/10 text-slate-300"
                : "bg-white border-gray-200 text-gray-700"
            }`}
          >
            <option>Sort: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Rated</option>
          </select>
        </div>

        {/* ── Category filter ── */}
        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold capitalize px-4 py-1.5 rounded-full border transition-all duration-150 cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                  : theme
                    ? "border-white/10 text-slate-400 hover:border-white/20 hover:text-slate-200"
                    : "border-gray-200 text-slate-500 hover:border-gray-300 hover:text-slate-700 bg-white"
              }`}
            >
              {cat === "all" ? "All" : cat}
            </button>
          ))}
        </div>

        {/* ── Product grid ── */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              style={theme ? dark.card : light.card}
            >
              {/* Image area */}
              <div
                className={`relative h-48 flex items-center justify-center p-6 ${
                  theme ? "bg-white/5" : "bg-gray-50"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
                {/* Wishlist */}
                <button
                  className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer ${
                    theme
                      ? "bg-white/10 hover:bg-white/20 text-gray-300"
                      : "bg-white hover:bg-gray-100 text-gray-500 shadow-sm"
                  }`}
                >
                  <i className="fa-regular fa-heart text-xs"></i>
                </button>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <CategoryBadge category={product.category} isDark={theme} />
                <p
                  className={`text-sm font-medium leading-snug line-clamp-2 ${
                    theme ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {product.title}
                </p>
                <StarRating
                  rating={product.rating?.rate}
                  count={product.rating?.count}
                />

                <div className="flex items-center justify-between mt-auto pt-3">
                  <span className="text-lg font-bold text-blue-500">
                    ₹
                    {(product.price * 83)
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                  <span
                    className={`text-[11px] line-through ${theme ? "text-slate-500" : "text-slate-400"}`}
                  >
                    ₹
                    {(product.price * 103)
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer mt-1 ${
                    addedId === product.id
                      ? "bg-green-600 text-white"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {addedId === product.id ? (
                    <span>
                      <i className="fa-solid fa-check mr-1.5"></i>Added!
                    </span>
                  ) : (
                    <span>
                      <i className="fa-solid fa-cart-plus mr-1.5"></i>Add to
                      Cart
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
