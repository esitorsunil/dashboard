import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { setUsers, deleteUser } from '../../Redux/slices/userSlice';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.list);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sortBy = searchParams.get('sort') || 'name';

  useEffect(() => {
    if (!users.length) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          const sorted = [...data].sort((a, b) => a[sortBy]?.localeCompare(b[sortBy]));
          dispatch(setUsers(sorted));
        });
    }
  }, [dispatch, sortBy, users.length]);

  const sortedUsers = [...users].sort((a, b) => a[sortBy]?.localeCompare(b[sortBy]));

  return (
    <div className="p-4 bg-white shadow-sm rounded">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5>User List (Sorted by: {sortBy})</h5>
      <Button variant="success" onClick={() => navigate('/dashboard/users/add')}>
        Add User
      </Button>
    </div>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button variant="outline-primary" size="sm" onClick={() => navigate(`/dashboard/users/${user.id}`)}>
                View Details
              </Button>
              <Button
    variant="outline-danger"
    size="sm"
    className="ms-2"
    onClick={() => dispatch(deleteUser(user.id))}
  >
    Delete
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
