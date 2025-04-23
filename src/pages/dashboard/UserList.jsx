
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sortBy = searchParams.get('sort') || 'name';

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const sorted = [...data].sort((a, b) => a[sortBy]?.localeCompare(b[sortBy]));
        setUsers(sorted);
      });
  }, [sortBy]);

  return (
    <div className="p-4 bg-white shadow-sm rounded">
      <h5 className="mb-3">User List (Sorted by: {sortBy})</h5>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="outline-primary" size="sm" onClick={() => navigate(`/dashboard/users/${user.id}`)}>
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
