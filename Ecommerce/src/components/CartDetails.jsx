import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MyContext } from "../context/productContext";

const CartDetails = () => {
  const { product } = useContext(MyContext);
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState();

  useEffect(() => {
    if (product?.length > 0) {
      const found = product.find((item) => item.id == id);
      setSingleProduct(found);
    } else {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setSingleProduct(data));
    }
  }, [product, id]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg     overflow-hidden">
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="object-contain h-72 w-full rounded-lg"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-3xl mb-4 text-gray-800">
              {singleProduct?.title}
            </h1>
            <p className="text-gray-600 mb-6">{singleProduct?.description}</p>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-semibold text-green-600 mr-2">
                ${singleProduct?.price}
              </span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                In Stock
              </span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition mb-4">
              Add to Cart
            </button>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Free shipping over $50</li>
              <li>• 30-day returns</li>
              <li>• 2-year warranty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
