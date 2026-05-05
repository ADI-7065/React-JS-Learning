import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../Features/CartSlice";
import ThemeContext, { dark, light } from "../Hooks/ThemeContext";

const Orders = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [theme] = useContext(ThemeContext);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = items.reduce((sum, item) => sum + (item.price * 1.25) * item.quantity, 0) - subtotal * 83;
  const subtotalINR = subtotal * 83;
  const deliveryFee = subtotalINR > 2000 ? 0 : 99;
  const total = subtotalINR + deliveryFee;

  const muted = theme ? "text-slate-400" : "text-slate-500";
  const divider = theme ? "border-white/5" : "border-gray-100";

  // ── Empty state ──────────────────────────────────────────────────────────
  if (items.length === 0) {
    return (
      <section
        className="min-h-screen flex items-center justify-center px-6 transition-colors duration-300"
        style={theme ? dark.home : light.home}
      >
        <div className="text-center space-y-4">
          <div
            className={`w-24 h-24 rounded-3xl flex items-center justify-center mx-auto ${
              theme ? "bg-white/5" : "bg-gray-100"
            }`}
          >
            <i className={`fa-solid fa-cart-shopping text-4xl ${theme ? "text-slate-500" : "text-gray-300"}`}></i>
          </div>
          <h3 className={`logo-font text-xl font-bold mt-2 ${theme ? "text-white" : "text-gray-900"}`}>
            Your cart is empty
          </h3>
          <p className={`text-sm ${muted}`}>
            Looks like you haven't added anything yet.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <i className="fa-solid fa-arrow-left text-xs"></i>
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  // ── Cart ─────────────────────────────────────────────────────────────────
  return (
    <section
      className="min-h-screen py-10 px-6 transition-colors duration-300"
      style={theme ? dark.home : light.home}
    >
      <div className="max-w-6xl mx-auto">

        {/* Page header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className={`logo-font text-2xl font-bold ${theme ? "text-white" : "text-gray-900"}`}>
              Your Cart
            </h2>
            <p className={`text-sm mt-0.5 ${muted}`}>
              {items.length} item{items.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className={`text-xs font-medium px-3.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              theme
                ? "border-red-500/20 text-red-400 hover:bg-red-500/10"
                : "border-red-200 text-red-500 hover:bg-red-50"
            }`}
          >
            <i className="fa-solid fa-trash-can mr-1.5 text-[10px]"></i>
            Clear Cart
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* ── Left: item list ─────────────────────────────────────────── */}
          <div className="flex-1 space-y-4 w-full">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-4 flex gap-4 transition-all duration-200"
                style={theme ? dark.card : light.card}
              >
                {/* Thumbnail */}
                <div
                  className={`shrink-0 w-20 h-20 rounded-xl flex items-center justify-center p-2 ${
                    theme ? "bg-white/5" : "bg-gray-50"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/80"; }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-between gap-2">
                  <div>
                    <p className={`text-sm font-medium line-clamp-2 leading-snug ${theme ? "text-slate-200" : "text-slate-700"}`}>
                      {item.title}
                    </p>
                    <p className={`text-xs mt-0.5 capitalize ${muted}`}>
                      {item.category}
                    </p>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    {/* Qty controls */}
                    <div
                      className={`flex items-center rounded-xl overflow-hidden border ${
                        theme ? "border-white/10" : "border-gray-200"
                      }`}
                    >
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className={`w-8 h-8 flex items-center justify-center text-sm transition-colors cursor-pointer ${
                          theme
                            ? "hover:bg-white/10 text-slate-300"
                            : "hover:bg-gray-100 text-gray-600"
                        }`}
                      >
                        <i className="fa-solid fa-minus text-[10px]"></i>
                      </button>
                      <span
                        className={`w-8 text-center text-sm font-semibold ${
                          theme ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className={`w-8 h-8 flex items-center justify-center text-sm transition-colors cursor-pointer ${
                          theme
                            ? "hover:bg-white/10 text-slate-300"
                            : "hover:bg-gray-100 text-gray-600"
                        }`}
                      >
                        <i className="fa-solid fa-plus text-[10px]"></i>
                      </button>
                    </div>

                    {/* Price + Remove */}
                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-blue-500">
                        ₹{(item.price * item.quantity * 83).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${
                          theme
                            ? "hover:bg-red-500/15 text-slate-500 hover:text-red-400"
                            : "hover:bg-red-50 text-slate-400 hover:text-red-500"
                        }`}
                        title="Remove item"
                      >
                        <i className="fa-solid fa-xmark text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Continue shopping */}
            <Link
              to="/"
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors mt-2 ${
                theme ? "text-slate-400 hover:text-slate-200" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
              Continue Shopping
            </Link>
          </div>

          {/* ── Right: order summary ────────────────────────────────────── */}
          <div
            className="w-full lg:w-80 rounded-2xl p-5 shrink-0 sticky top-24"
            style={theme ? dark.card : light.card}
          >
            <h3 className={`logo-font text-base font-bold mb-4 ${theme ? "text-white" : "text-gray-900"}`}>
              Order Summary
            </h3>

            <div className="space-y-3">
              <div className={`flex justify-between text-sm ${muted}`}>
                <span>Subtotal ({items.length} items)</span>
                <span className={theme ? "text-slate-200" : "text-slate-700"}>
                  ₹{subtotalINR.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>

              <div className={`flex justify-between text-sm ${muted}`}>
                <span>Delivery</span>
                <span className={deliveryFee === 0 ? "text-green-500 font-medium" : theme ? "text-slate-200" : "text-slate-700"}>
                  {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                </span>
              </div>

              {deliveryFee > 0 && (
                <p className="text-[11px] text-blue-400 bg-blue-500/10 rounded-lg px-3 py-2">
                  <i className="fa-solid fa-truck-fast mr-1.5"></i>
                  Add ₹{(2000 - subtotalINR).toFixed(0)} more for free delivery
                </p>
              )}

              <div className={`border-t pt-3 mt-1 ${divider}`}>
                <div className="flex justify-between items-center">
                  <span className={`font-semibold ${theme ? "text-white" : "text-gray-900"}`}>Total</span>
                  <span className="text-lg font-bold text-blue-500">
                    ₹{total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>
                <p className={`text-[11px] mt-0.5 ${muted}`}>Inclusive of all taxes</p>
              </div>
            </div>

            <button className="w-full mt-5 py-3 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold rounded-xl transition-all duration-150 cursor-pointer flex items-center justify-center gap-2">
              <i className="fa-solid fa-lock text-xs"></i>
              Proceed to Checkout
            </button>

            {/* Trust badges */}
            <div className={`flex items-center justify-center gap-4 mt-4 pt-4 border-t ${divider}`}>
              {[
                { icon: "fa-shield-halved", label: "Secure" },
                { icon: "fa-rotate-left", label: "Easy Returns" },
                { icon: "fa-headset", label: "24/7 Support" },
              ].map(({ icon, label }) => (
                <div key={label} className={`flex flex-col items-center gap-1 text-center ${muted}`}>
                  <i className={`fa-solid ${icon} text-sm`}></i>
                  <span className="text-[10px]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;