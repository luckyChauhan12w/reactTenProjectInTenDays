export default function Users() {
  const users = [
    { id: 1, name: "John Doe", email: "john@mail.com" },
    { id: 2, name: "Jane Smith", email: "jane@mail.com" },
    { id: 3, name: "Sam Wilson", email: "sam@mail.com" },
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <table className="w-full bg-gray-800 rounded-xl overflow-hidden">
        <thead className="bg-gray-700 text-gray-300">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b border-gray-700">
              <td className="p-3">{u.id}</td>
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
