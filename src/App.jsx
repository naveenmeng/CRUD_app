import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Website</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user=>
      <tr>
        <td>{user.id}</td>
        <td><input type="text" value={user.name} className="input w-full max-w-xs"/></td>
        <td><input type="text" value={user.email} className="input w-full max-w-xs"/></td>
        <td><input type="text" value={user.website} className="input w-full max-w-xs"/></td>
        <td>
        <button className="btn btn-active btn-primary">Update</button>
        <button className="btn btn-active btn-secondary">Delete</button>
        </td>
      </tr>  
      )}
    </tbody>
  </table>
</div>
    </>
  )
}

export default App
