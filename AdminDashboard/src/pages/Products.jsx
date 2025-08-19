export default function Products() {
  const products = [
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Headphones", price: "$200" },
    { id: 3, name: "Phone", price: "$800" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-gray-800 p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-400">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
