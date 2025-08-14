import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../context/productContext";
import { useNavigate } from "react-router";

const Products = () => {
  const navigate = useNavigate();
  const { product, setProduct } = useContext(MyContext);

  const getAllproduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllproduct();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {product?.map((item) => (
        <div
          onClick={() => navigate(`/CartDetails/${item.id}`)}
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-48 w-full object-contain p-4 bg-gray-100"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h2 className="text-lg font-semibold mb-2 line-clamp-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-green-600">
                ${item.price}
              </span>
              <button className="bg-[#FFD814] text-black cursor-pointer px-4 py-2 rounded hover:bg-[#f1cb10] transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
