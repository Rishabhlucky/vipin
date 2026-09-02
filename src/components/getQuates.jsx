
"use client";

import { useState } from "react";

export default function GetQuote() {
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [products, setProducts] = useState([
    {
      productName: "",
      quantity: "",
    },
  ]);

  const [phoneNo, setPhoneNo] = useState("");

  // =========================
  // Add Product
  // =========================
  const addProduct = () => {
    setProducts((prev) => [
      ...prev,
      {
        productName: "",
        quantity: "",
      },
    ]);
  };

  // =========================
  // Remove Product
  // =========================
  const removeProduct = (index) => {
    setProducts((prev) => {
      // Don't allow removing the last product
      if (prev.length === 1) {
        return prev;
      }

      return prev.filter((_, i) => i !== index);
    });
  };

  // =========================
  // Update Product
  // =========================
  const handleProductChange = (index, field, value) => {
    setProducts((prev) =>
      prev.map((product, i) =>
        i === index
          ? {
            ...product,
            [field]: value,
          }
          : product
      )
    );
  };


  // Handle Submit 

 const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");

  const data = {
    phone: phoneNo,
    products: products,
  };

  try {
    const res = await fetch("/api/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      setSuccess("Thanks! Your quote request has been sent.");

      setProducts([
        {
          productName: "",
          quantity: "",
        },
      ]);

      setPhoneNo("");

      setIsOpen(false);
    } else {
      setSuccess(result.error || "Something went wrong.");
    }
  } catch (error) {
    console.error(error);
    setSuccess("Unable to send your enquiry. Please try again.");
  } finally {
    setLoading(false);
  }
};



  // =========================
  // Whatsapp handle Form
  // =========================
  const handleWhatsapp = (e) => {
    e.preventDefault();

    // Your WhatsApp number
    // Example: +91 98765 43210
    // Write it as: 919876543210
    const whatsappNumber = "916306389347";

    // Create product list
    const productList = products
      .map(
        (product, index) =>
          `${index + 1}. ${product.productName} - Quantity: ${product.quantity}`
      )
      .join("\n");

    // WhatsApp message
    const message = `Hello, I would like to request a quote.

Products:
${productList}

Contact Number: ${phoneNo}`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setProducts([
      {
        productName: "",
        quantity: "",
      },
    ]);

    setPhoneNo("");

    // Close modal
    setIsOpen(false);
  };

  return (
    <div>
      {/* =========================
          GET QUOTE BUTTON
      ========================= */}
      

      {/* =========================
          MODAL
      ========================= */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setIsOpen(false)}
        >
          {/* =========================
              MODAL CONTENT
          ========================= */}
          <div
            className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* =========================
                HEADER
            ========================= */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Get a Quote
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-3xl leading-none text-gray-400 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            {/* =========================
                FORM
            ========================= */}
            <form onSubmit={handleSubmit}>
              {/* Product Header */}
              <div className="mb-2 grid grid-cols-12 gap-3">
                <div className="col-span-7">
                  <label className="text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                </div>

                <div className="col-span-3">
                  <label className="text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                </div>

                <div className="col-span-2"></div>
              </div>

              {/* =========================
                  PRODUCT ROWS
              ========================= */}
              <div className="space-y-3">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 items-center gap-3"
                  >
                    {/* Product Name */}
                    <div className="col-span-7">
                      <input
                        type="text"
                        value={product.productName}
                        onChange={(e) =>
                          handleProductChange(
                            index,
                            "productName",
                            e.target.value
                          )
                        }
                        placeholder="Enter product name"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>

                    {/* Quantity */}
                    <div className="col-span-3">
                      <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) =>
                          handleProductChange(
                            index,
                            "quantity",
                            e.target.value
                          )
                        }
                        placeholder="Qty"
                        required
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      />
                    </div>

                    {/* Remove */}
                    <div className="col-span-2">
                      <button
                        type="button"
                        onClick={() => removeProduct(index)}
                        disabled={products.length === 1}
                        className="w-full rounded-lg px-2 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* =========================
                  ADD PRODUCT BUTTON
              ========================= */}
              <button
                type="button"
                onClick={addProduct}
                className="mt-4 rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                + Add Product
              </button>

              {/* =========================
                  PHONE NUMBER
              ========================= */}
              <div className="mt-6 border-t border-gray-200 pt-5">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Contact No.
                </label>

                <input
                  type="tel"
                  inputMode="numeric"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>

              {/* =========================
                  BUTTONS
              ========================= */}
              <div className="mt-6 flex gap-3">
                {/* Cancel */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-1/2 rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 cursor-pointer rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
                >
                  Submit Quote
                </button>

                {/* Submit */}
                <button
                  type="button"
                  onClick={handleWhatsapp}
                  className="w-1/2 rounded-lg cursor-pointer bg-green-500 px-4 py-3 font-semibold text-white transition hover:bg-green-600"
                >
                  Send on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
