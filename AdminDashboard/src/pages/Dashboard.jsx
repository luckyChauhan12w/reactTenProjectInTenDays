export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-2xl shadow">Users: 120</div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow">Products: 58</div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow">Sales: $12,340</div>
      </div>
    </div>
  );
}
